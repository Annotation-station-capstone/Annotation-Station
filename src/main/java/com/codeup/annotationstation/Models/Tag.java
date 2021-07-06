package com.codeup.annotationstation.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="tags")
public class Tag {
    //tags table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 255)
    private String tag;

    @OneToMany(mappedBy = "tag")
    @JsonManagedReference(value="tag-notes")
    private List<Note> notes;

//constructors

    public Tag() {
    }

    public Tag(String tag, List<Note> notes) {
        this.tag = tag;
        this.notes = notes;
    }

    public Tag(long id, String tag, List<Note> notes) {
        this.id = id;
        this.tag = tag;
        this.notes = notes;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public List<Note> getNotes() {
        return notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }
}
