package com.codeup.annotationstation.Models;

import javax.persistence.*;

@Entity
@Table(name="tags")
public class Tag {
//tags table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false,length = 255)
    private String tag;
//constructors
    public Tag() {
    }

    public Tag(String tag) {
        this.tag = tag;
    }

    public Tag(long id, String tag) {
        this.id = id;
        this.tag = tag;
    }

    //getters and setters
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
}
