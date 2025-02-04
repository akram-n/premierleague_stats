package com.pl.premier_zone.team;

import com.pl.premier_zone.player.Player;
import com.pl.premier_zone.player.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TeamService {
    @Autowired
    private PlayerRepository playerRepository;

    public List<Team> getAllTeams() {
        List<Player> players = playerRepository.findAll();
        Map<String, Team> teamMap = new HashMap<>();

        for (Player player : players) {
            String teamName = player.getTeam();
            if (teamName == null || teamName.isEmpty()) continue; 

            teamMap.putIfAbsent(teamName, new Team(
                    teamName, 0, 0, 0, 0, new ArrayList<>()
            ));

            Team team = teamMap.get(teamName);
            team.setTotalGoals(team.getTotalGoals() + player.getGls().intValue());
            team.setTotalAssists(team.getTotalAssists() + player.getAst().intValue());
            team.setTotalYellowCards(team.getTotalYellowCards() + player.getCrdy().intValue());
            team.setTotalRedCards(team.getTotalRedCards() + player.getCrdr().intValue());
            team.getPlayers().add(player);
        }

        return new ArrayList<>(teamMap.values());
    }

    public Team getTeamByName(String name) {
        List<Player> players = playerRepository.findAll().stream()
                .filter(player -> name.equals(player.getTeam()))
                .collect(Collectors.toList());

        if (players.isEmpty()) {
            throw new IllegalArgumentException("Team not found: " + name);
        }

        Team team = new Team(
                name,
                players.stream().mapToInt(player -> player.getGls().intValue()).sum(),
                players.stream().mapToInt(player -> player.getAst().intValue()).sum(),
                players.stream().mapToInt(player -> player.getCrdy().intValue()).sum(),
                players.stream().mapToInt(player -> player.getCrdr().intValue()).sum(),
                players
        );

        return team;
    }
}
