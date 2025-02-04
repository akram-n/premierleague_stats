package com.pl.premier_zone.team;

import com.pl.premier_zone.player.Player;
import java.util.List;

public class Team {
    private String name;
    private Integer totalGoals;
    private Integer totalAssists;
    private Integer totalYellowCards;
    private Integer totalRedCards;
    private List<Player> players;

    public Team(String name, Integer totalGoals, Integer totalAssists, Integer totalYellowCards, Integer totalRedCards, List<Player> players) {
        this.name = name;
        this.totalGoals = totalGoals;
        this.totalAssists = totalAssists;
        this.totalYellowCards = totalYellowCards;
        this.totalRedCards = totalRedCards;
        this.players = players;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getTotalGoals() {
        return totalGoals;
    }

    public void setTotalGoals(Integer totalGoals) {
        this.totalGoals = totalGoals;
    }

    public Integer getTotalAssists() {
        return totalAssists;
    }

    public void setTotalAssists(Integer totalAssists) {
        this.totalAssists = totalAssists;
    }

    public Integer getTotalYellowCards() {
        return totalYellowCards;
    }

    public void setTotalYellowCards(Integer totalYellowCards) {
        this.totalYellowCards = totalYellowCards;
    }

    public Integer getTotalRedCards() {
        return totalRedCards;
    }

    public void setTotalRedCards(Integer totalRedCards) {
        this.totalRedCards = totalRedCards;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }
}
