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

    @OneToMany
    private Collection collection_id;

    public Section() {
    }

    public Section(String title, Collection collection_id) {
        this.title = title;
        this.collection_id = collection_id;
    }

    public Section(long id, String title, Collection collection_id) {
        this.id = id;
        this.title = title;
        this.collection_id = collection_id;
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

    public Collection getCollection_id() {
        return collection_id;
    }

    public void setCollection_id(Collection collection_id) {
        this.collection_id = collection_id;
    }
}
