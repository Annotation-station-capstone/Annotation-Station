package com.codeup.annotationstation.Models;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="notes")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 255)
    private String note;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "video_id")
    private Video video;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "section_id")
    private Section sections;

    @Column(nullable = true, length = 255)
    private String time_stamp;

    //many to many table includes join table for tags. notes claims ownership of tags and notes_tags
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "notes_tags",
            joinColumns = { @JoinColumn(name = "note_id") },
            inverseJoinColumns = { @JoinColumn(name = "tag_id") }
    )
    private List<Tag> tags;


    //constructors
    public Note() {
    }

    public Note(String note, Video video, String time_stamp) {
        this.note = note;
        this.video = video;
        this.time_stamp = time_stamp;
    }

    public Note(long id, String note, Video video, Section sections, String time_stamp, List<Tag> tags) {
        this.id = id;
        this.note = note;
        this.video = video;
        this.sections = sections;
        this.time_stamp = time_stamp;
        this.tags = tags;
    }

    public Note(Video video, String time_stamp) {
        this.video=video;
        this.time_stamp=time_stamp;
    }
    //getters and setters

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Video getVideo() {
        return video;
    }

    public void setVideo(Video video) {
        this.video = video;
    }

    public String getTime_stamp() {
        return time_stamp;
    }

    public void setTime_stamp(String time_stamp) {
        this.time_stamp = time_stamp;
    }

    public Section getSections() { return sections; }

    public void setSections(Section sections) { this.sections = sections; }
}