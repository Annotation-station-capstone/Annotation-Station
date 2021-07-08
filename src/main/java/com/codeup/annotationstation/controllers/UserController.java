package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.daos.UsersRepository;
import com.codeup.annotationstation.service.UserDetailsLoader;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import com.codeup.annotationstation.Models.User;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class UserController {
    private UsersRepository userDao;
    private PasswordEncoder passwordEncoder;
    private UserDetailsLoader userService;


    public UserController(UsersRepository userDao, PasswordEncoder passwordEncoder, UserDetailsLoader userService){

        this.userDao= userDao;
        this.passwordEncoder= passwordEncoder;
        this.userService=userService;
    }
    //allow user to get to sign up form
//    @GetMapping("/")
//    public String signUpForm(Model model) {
//        model.addAttribute("user", new User());
//        return "collection/index";
//    }

//    @PostMapping("/")
//    public String showLoggedIn(){
//
////    }

    //        save user

//    @GetMapping("/sign-up")
//    public String grabErrorInfo( @ModelAttribute User user, Model model) {
//
//    }

    @PostMapping("/sign-up")
    public String saveUser( @ModelAttribute User user) {
String hash = passwordEncoder.encode(user.getPassword());
        user.setPassword(hash);
        List<User> userList = userDao.findAll();
        String errorMessage;
        for (User existingUser : userList) {
           if(existingUser.getUsername().equalsIgnoreCase(user.getUsername())){
               return "error/errorUsername";
           }else if(existingUser.getEmail().equalsIgnoreCase(user.getEmail())){
                System.out.println("existingUserEmail = " + existingUser);
                return "error/errorEmail";
            }
             System.out.println("existingUser = " + existingUser);
        }
        userDao.save(user);
        return "redirect:/";
        }


    }








