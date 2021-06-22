package com.codeup.annotationstation.Models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="users")
public class User {
    //user table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private Boolean is_admin;

    @Column(nullable = false, length = 255)
    private String first_name;

    @Column(nullable = false, length = 255)
    private String last_name;

    @Column(nullable = false, length = 255)
    private String username;

    @Column(nullable = false, length = 255)
    private String user_image;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(nullable = false, length = 255)
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Comment> comments;


    //constructor
    public User() {
    }

    public User(Boolean is_admin, String first_name, String last_name, String username, String user_image, String email, String password) {
        this.is_admin = is_admin;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.user_image = user_image;
        this.email = email;
        this.password = password;
    }

    public User(long id, Boolean is_admin, String first_name, String last_name, String username, String user_image, String email, String password) {
        this.id = id;
        this.is_admin = is_admin;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.user_image = user_image;
        this.email = email;
        this.password = password;
    }

    //getters and setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Boolean getIs_admin() {
        return is_admin;
    }

    public void setIs_admin(Boolean is_admin) {
        this.is_admin = is_admin;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUser_image() {
        return user_image;
    }

    public void setUser_image(String user_image) {
        this.user_image = user_image;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
