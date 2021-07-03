package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.daos.UsersRepository;
import com.codeup.annotationstation.service.UserDetailsLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import com.codeup.annotationstation.Models.User;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
    @GetMapping("/")
    public String signUpForm(Model model) {
        model.addAttribute("user", new User());
        return "collection/index";
    }


    //        save user
    @PostMapping("/sign-up")
    public String saveUser( @ModelAttribute User user) {
String hash = passwordEncoder.encode(user.getPassword());
        user.setPassword(hash);
        userDao.save(user);
return "redirect:/";
        }


    }








