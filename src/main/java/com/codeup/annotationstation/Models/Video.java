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

    @ManyToOne
    @JoinColumn(name= "section_id")
    private Section section;

    //constructors
    public Video() {
    }

    public Video(String video_url, Section section) {
        this.video_url = video_url;
        this.section = section;
    }

    public Video(long id, String video_url, Section section) {
        this.id = id;
        this.video_url = video_url;
        this.section = section;
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

    public Section getSection() {
        return section;
    }

    public void setSection(Section section) {
        this.section = section;
    }
}
