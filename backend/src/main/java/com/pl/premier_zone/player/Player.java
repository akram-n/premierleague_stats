package com.pl.premier_zone.player;

import jakarta.persistence.*;

@Entity
@Table(name = "players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "player", unique = true)
    private String name;

    private String nation;

    private String pos;

    private Double age;

    private Integer mp;

    private Integer starts;

    private Double min;

    private Double gls;

    private Double ast;

    private Double pk;

    private Double crdy;

    private Double crdr;

    private Double xg;

    private Double xag;

    private String team;

    private Double gls90;

    private Double ast90;

    public Player() {}

    public Player(
            String name, String nation, String pos, Double age, Integer mp, Integer starts, Double min,
            Double gls, Double ast, Double pk, Double crdy, Double crdr, Double xg, Double xag,
            String team, Double gls90, Double ast90
    ) {
        this.name = name;
        this.nation = nation;
        this.pos = pos;
        this.age = age;
        this.mp = mp;
        this.starts = starts;
        this.min = min;
        this.gls = gls;
        this.ast = ast;
        this.pk = pk;
        this.crdy = crdy;
        this.crdr = crdr;
        this.xg = xg;
        this.xag = xag;
        this.team = team;
        this.gls90 = gls90;
        this.ast90 = ast90;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getPos() {
        return pos == null ? "NA" : pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public Double getAge() {
        return age == null ? 0.0 : age;
    }

    public void setAge(Double age) {
        this.age = age;
    }

    public Integer getMp() {
        return mp == null ? 0 : mp;
    }

    public void setMp(Integer mp) {
        this.mp = mp;
    }

    public Integer getStarts() {
        return starts == null ? 0 : starts;
    }

    public void setStarts(Integer starts) {
        this.starts = starts;
    }

    public Double getMin() {
        return min == null ? 0.0 : min;
    }

    public void setMin(Double min) {
        this.min = min;
    }

    public Double getGls() {
        return gls == null ? 0.0 : gls;
    }

    public void setGls(Double gls) {
        this.gls = gls;
    }

    public Double getAst() {
        return ast == null ? 0.0 : ast;
    }

    public void setAst(Double ast) {
        this.ast = ast;
    }

    public Double getPk() {
        return pk == null ? 0.0 : pk;
    }

    public void setPk(Double pk) {
        this.pk = pk;
    }

    public Double getCrdy() {
        return crdy == null ? 0.0 : crdy;
    }

    public void setCrdy(Double crdy) {
        this.crdy = crdy;
    }

    public Double getCrdr() {
        return crdr == null ? 0.0 : crdr;
    }

    public void setCrdr(Double crdr) {
        this.crdr = crdr;
    }

    public Double getXg() {
        return xg == null ? 0.0 : Math.round(xg * 100.0) / 100.0;
    }

    public void setXg(Double xg) {
        this.xg = xg;
    }

    public Double getXag() {
        return xag == null ? 0.0 : Math.round(xag * 100.0) / 100.0;
    }

    public void setXag(Double xag) {
        this.xag = xag;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public Double getGls90() {
        return gls90 == null ? 0.0 : Math.round(gls90 * 100.0) / 100.0;
    }

    public void setGls90(Double gls90) {
        this.gls90 = gls90;
    }

    public Double getAst90() {
        return ast90 == null ? 0.0 : Math.round(ast90 * 100.0) / 100.0;
    }

    public void setAst90(Double ast90) {
        this.ast90 = ast90;
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", nation='" + nation + '\'' +
                ", pos='" + pos + '\'' +
                ", age=" + age +
                ", mp=" + mp +
                ", starts=" + starts +
                ", min=" + min +
                ", gls=" + gls +
                ", ast=" + ast +
                ", pk=" + pk +
                ", crdy=" + crdy +
                ", crdr=" + crdr +
                ", xg=" + xg +
                ", xag=" + xag +
                ", team='" + team + '\'' +
                ", gls90=" + gls90 +
                ", ast90=" + ast90 +
                '}';
    }
}
