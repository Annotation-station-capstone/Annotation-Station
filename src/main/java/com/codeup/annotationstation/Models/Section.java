package com.codeup.annotationstation.Models;

import javax.persistence.*;

@Entity
@Table(name="sections")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 255)
    private String title;

    @ManyToOne
    @JoinColumn(name = "collection_id")
    private Collection collection;

    public Section() {
    }

    public Section(String title, Collection collection) {
        this.title = title;
        this.collection = collection;
    }

    public Section(long id, String title, Collection collection) {
        this.id = id;
        this.title = title;
        this.collection = collection;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
//talk to instructor about this change, is it necessary?
    public Collection getCollection(Collection byId) {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
    }
}
