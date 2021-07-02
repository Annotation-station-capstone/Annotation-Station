package com.codeup.annotationstation.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name= "comments")
@IdClass(Comment_Id.class)
public class Comment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = true)
    private String comment;

    @Id
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="collection_id", referencedColumnName = "id")
    private Collection collection;


    @Id
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;


    public Comment() {
    }

    public Comment(String comment, Collection collection, User user) {
        this.comment = comment;
        this.collection = collection;
        this.user = user;
    }

    public Comment(long id, String comment, Collection collection, User user) {
        this.id = id;
        this.comment = comment;
        this.collection = collection;
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Collection getCollection() {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
