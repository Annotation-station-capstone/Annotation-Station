package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.daos.UsersRepository;
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


    public UserController(UsersRepository userDao){
        this.userDao= userDao;
    }
    //allow user to get to sign up form
    @GetMapping("/")
    public String signUpForm(Model model) {
        model.addAttribute("user", new User());
        return "collection/index";
    }


    //        save user
    @PostMapping("/sign-up")
    public String saveUser( @ModelAttribute User user, BindingResult bindingResult) {
        // still need hash strings got passwords.
        //user.setPassword(hash) for security.
        if(bindingResult.hasErrors()){
            return "/";
        }else{
            userDao.save(user);
            return "redirect:/";
        }


    }


}





