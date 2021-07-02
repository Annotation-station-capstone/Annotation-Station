package com.codeup.annotationstation.Models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;
import org.hibernate.annotations.ColumnDefault;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.engine.jdbc.Size;



import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="users")
public class User {
    //user table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = true)
    @ColumnDefault("0")
    private Boolean is_admin;

    @Column(nullable = false, length = 255)
//    @NotEmpty(message="Please provide a First Name")
    private String firstName;

    @Column(nullable = false, length = 255)
    private String lastName;

    @Column(nullable = false, length = 255)
    private String username;

    @Column(nullable = true, length = 255)
    @ColumnDefault("''")
    private String user_image;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(nullable = false, length = 255)
    private String password;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Comment> comments;


    //constructor
    public User() {
    }

    public User(Boolean is_admin, String firstName, String lastName, String username, String user_image, String email, String password) {
        this.is_admin = is_admin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.user_image = user_image;
        this.email = email;
        this.password = password;
    }

public User(String firstName, String lastName, String email, String password){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
}

    public User(long id, Boolean is_admin, String firstName, String lastName, String username, String user_image, String email, String password) {
        this.id = id;
        this.is_admin = is_admin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.user_image = user_image;
        this.email = email;
        this.password = password;
    }




    public User(User copy) {
        id = copy.id;
        email = copy.email;
        username = copy.username;
        password = copy.password;
        firstName= copy.firstName;
        lastName=copy.lastName;
        is_admin=copy.is_admin;
        user_image=copy.user_image;
        comments=copy.comments;

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
    public String getFirstName() {
        return firstName;
    }

    public void setFirsName(String firstName) {
        this.firstName = firstName;
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
    public List<Comment> getComments() {
        return comments;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

}
