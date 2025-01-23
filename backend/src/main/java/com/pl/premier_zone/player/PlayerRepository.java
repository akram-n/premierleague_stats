package com.pl.premier_zone.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, String> {
    void deleteByName(String playerName);
    Optional<Player> findByName(String name);

    // Filtering methods
    List<Player> findByTeam(String team);
    List<Player> findByNation(String nation);
    List<Player> findByPos(String pos);

    // Combined filtering methods
    List<Player> findByTeamAndNation(String team, String nation);
    List<Player> findByTeamAndPos(String team, String pos);
    List<Player> findByNationAndPos(String nation, String pos);
    List<Player> findByTeamAndNationAndPos(String team, String nation, String pos);
}
