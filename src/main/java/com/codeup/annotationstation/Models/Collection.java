package com.codeup.annotationstation.Models;
import com.codeup.annotationstation.Models.User;
import javax.persistence.*;

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

    //constructors
    public Collection() {
    }
    //insert
    public Collection(User user, String title, Boolean is_private, String description, String image) {
        this.user = user;
        this.title = title;
        this.is_private = is_private;
        this.description = description;
        this.image = image;
    }
    //update
    public Collection(long id, User user, String title, Boolean is_private, String description, String image) {
        this.id = id;
        this.user = user;
        this.title = title;
        this.is_private = is_private;
        this.description = description;
        this.image = image;
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
}
