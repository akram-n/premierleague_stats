package com.pl.premier_zone.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/players")
public class PlayerController {
    @Autowired
    private PlayerService playerService;

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @PostMapping
    public Player addPlayer(@RequestBody Player player) {
        return playerService.addPlayer(player);
    }

    @PutMapping("/{name}")
    public Player updatePlayer(@PathVariable String name, @RequestBody Player updatedPlayer) {
        return playerService.updatePlayer(updatedPlayer);
    }

    @GetMapping("/top-goals-per-90")
    public List<Player> getTopPerformersByGoalsPer90() {
        return playerService.getTopPerformersByGoalsPer90();
    }

    @GetMapping("/filter")
    public List<Player> filterPlayers(
            @RequestParam(required = false) String team,
            @RequestParam(required = false) String nation,
            @RequestParam(required = false) String pos) {
        return playerService.filterPlayers(team, nation, pos);
    }

}

