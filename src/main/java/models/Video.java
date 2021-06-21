package com.codeup.annotationstation.Models;

import javax.persistence.*;

@Entity
@Table(name="videos")
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 255)
    private String video_url;

    @OneToMany
    private Section section_id;

    //constructors
    public Video() {
    }

    public Video(String video_url, Section section_id) {
        this.video_url = video_url;
        this.section_id = section_id;
    }

    public Video(long id, String video_url, Section section_id) {
        this.id = id;
        this.video_url = video_url;
        this.section_id = section_id;
    }

    //getters and setters

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getVideo_url() {
        return video_url;
    }

    public void setVideo_url(String video_url) {
        this.video_url = video_url;
    }

    public Section getSection_id() {
        return section_id;
    }

    public void setSection_id(Section section_id) {
        this.section_id = section_id;
    }
}
