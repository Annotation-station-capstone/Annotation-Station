package com.codeup.annotationstation.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;


@Entity
@Table(name="notes")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 255)
    private String note;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonBackReference(value="note-videos")
    @JoinColumn(name = "video_id")
    private Video video;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonBackReference(value="notes-section")
    @JoinColumn(name = "section_id")
    private Section sections;

    @Column(nullable = true, length = 255)
    private String time_stamp;

    //many to many table includes join table for tags. notes claims ownership of tags and notes_tags
    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonBackReference(value="tag-notes")
    @JoinTable(
            name = "notes_tags",
            joinColumns = { @JoinColumn(name = "note_id") },
            inverseJoinColumns = { @JoinColumn(name = "tag_id") }
    )
    private Tag tag;


    //constructors
    public Note() {
    }

    public Note(String note, Video video, String time_stamp) {
        this.note = note;
        this.video = video;
        this.time_stamp = time_stamp;
    }


    public Note(long id, String note, Video video, Section sections, String time_stamp, Tag tag) {
        this.id = id;
        this.note = note;
        this.video = video;
        this.sections = sections;
        this.time_stamp = time_stamp;
        this.tag = tag;
    }

    public Note(Video video, String time_stamp) {
        this.video=video;
        this.time_stamp=time_stamp;
    }
    //getters and setters

    public Tag getTag() { return tag; }

    public void setTag(Tag tags) { this.tag = tags; }

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