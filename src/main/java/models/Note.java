package com.codeup.annotationstation.Models;

import javax.persistence.*;

@Entity
@Table(name="notes")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 255)
    private String note;

    @OneToMany
    private Video video_id;

    @Column(nullable = false, length = 255)
    private String time_stamp;

    //constructors
    public Note() {
    }

    public Note(String note, Video video_id, String time_stamp) {
        this.note = note;
        this.video_id = video_id;
        this.time_stamp = time_stamp;
    }

    public Note(long id, String note, Video video_id, String time_stamp) {
        this.id = id;
        this.note = note;
        this.video_id = video_id;
        this.time_stamp = time_stamp;
    }
    //getters and setters

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

    public Video getVideo_id() {
        return video_id;
    }

    public void setVideo_id(Video video_id) {
        this.video_id = video_id;
    }

    public String getTime_stamp() {
        return time_stamp;
    }

    public void setTime_stamp(String time_stamp) {
        this.time_stamp = time_stamp;
    }
}