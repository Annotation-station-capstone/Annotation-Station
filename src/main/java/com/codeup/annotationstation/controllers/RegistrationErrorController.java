package com.codeup.annotationstation.controllers;
import com.codeup.annotationstation.Models.User;
import com.codeup.annotationstation.daos.UsersRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class RegistrationErrorController {
    private UsersRepository userDao;
    public RegistrationErrorController(UsersRepository userDao){
        this.userDao= userDao;
    }
    @GetMapping(value = "/errorUsername")
    public String errorUsername( @ModelAttribute User user,Model model) {
        model.addAttribute("user",new User());
        return "error/errorUsername";
    }
    @GetMapping(value = "/errorEmail")
    public String errorEmail( @ModelAttribute User user,Model model) {
        model.addAttribute("user",new User());
        return "error/errorEmail";
    }
}
