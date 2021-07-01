package com.codeup.annotationstation.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.engine.internal.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="videos")
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 255)
    private String video_url;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    @JoinColumn(name= "section_id")
    private Section section;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "video")
    private List<Note> notes;

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

    public List<Note> getNotes() {
        return notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }

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
