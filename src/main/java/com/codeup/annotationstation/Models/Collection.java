package com.codeup.annotationstation.Models;
import com.codeup.annotationstation.Models.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="collections")
public class Collection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false)
    private Boolean is_private;

    @Column(nullable = false, length = 255)
    private String description;

    @Column(nullable = false, length = 255)
    private String image;

    @OneToOne
    private User user;

    @OneToMany(mappedBy = "collection")
    @JsonManagedReference(value="collection-comments")
    private List<Comment> comments;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "collection")
    @JsonManagedReference(value="collection-sections")
    private List<Section> sections;



    //constructors
    public Collection() {
    }
    //insert
    public Collection( String title, Boolean is_private, String description, String image) {
        this.title = title;
        this.is_private = is_private;
        this.description = description;
        this.image = image;
    }
    //update
    public Collection(long id, String title, Boolean is_private, String description, String image, List<Section> sections) {
        this.id = id;
        this.title = title;
        this.is_private = is_private;
        this.description = description;
        this.image = image;
        this.sections = sections;
    }
    //add collection constructor
    public Collection(String title, String description, boolean isPrivate, String image) {
        this.title= title;
        this.description=description;
        this.is_private=isPrivate;
        this.image=image;
    }

    //getters and setters

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Boolean getIs_private() {
        return is_private;
    }

    public void setIs_private(Boolean is_private) {
        this.is_private = is_private;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Section> getSections() {
        return sections;
    }

    public void setSections(List<Section> sections) {
        this.sections = sections;
    }
}
