package com.pl.premier_zone.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlayerService {
    @Autowired
    private PlayerRepository playerRepository;

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public Player addPlayer(Player player) {
        calculateAdvancedMetrics(player);
        return playerRepository.save(player);
    }

    public Player updatePlayer(Player updatedPlayer) {
        calculateAdvancedMetrics(updatedPlayer);
        return playerRepository.save(updatedPlayer);
    }
    // New filtering logic
    public List<Player> filterPlayers(String team, String nation, String pos) {
        if (team != null && nation != null && pos != null) {
            return playerRepository.findByTeamAndNationAndPos(team, nation, pos);
        } else if (team != null && nation != null) {
            return playerRepository.findByTeamAndNation(team, nation);
        } else if (team != null && pos != null) {
            return playerRepository.findByTeamAndPos(team, pos);
        } else if (nation != null && pos != null) {
            return playerRepository.findByNationAndPos(nation, pos);
        } else if (team != null) {
            return playerRepository.findByTeam(team);
        } else if (nation != null) {
            return playerRepository.findByNation(nation);
        } else if (pos != null) {
            return playerRepository.findByPos(pos);
        } else {
            return playerRepository.findAll(); // No filters applied
        }
    }

    public List<Player> getTopPerformersByGoalsPer90() {
        return playerRepository.findAll().stream()
                .sorted((p1, p2) -> Double.compare(p2.getGls90(), p1.getGls90()))
                .collect(Collectors.toList());
    }

    private void calculateAdvancedMetrics(Player player) {
        if (player.getMin() != null && player.getMin() > 0) {
            player.setGls90(player.getGls() / (player.getMin() / 90));
            player.setAst90(player.getAst() / (player.getMin() / 90));
        } else {
            player.setGls90(0.0);
            player.setAst90(0.0);
        }
    }
}

