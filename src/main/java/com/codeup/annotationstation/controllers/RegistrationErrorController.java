package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.User;
import com.codeup.annotationstation.daos.UsersRepository;
import com.codeup.annotationstation.service.UserDetailsLoader;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class RegistrationErrorController {


    private UsersRepository userDao;
    private PasswordEncoder passwordEncoder;

    public RegistrationErrorController(UsersRepository userDao, PasswordEncoder passwordEncoder){

        this.userDao= userDao;
        this.passwordEncoder= passwordEncoder;

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

//    @PostMapping("/register")
//    public String saveUser(@ModelAttribute User user, Model model) {
//        String hash = passwordEncoder.encode(user.getPassword());
//        user.setPassword(hash);
//        List<User> userList = userDao.findAll();
//        for (User existingUser : userList) {
//            if(existingUser.getUsername().equalsIgnoreCase(user.getUsername())){
//                System.out.println("existingUsername = " + existingUser);
//                return "error/errorRegister";
//            }else if(existingUser.getEmail().equalsIgnoreCase(user.getEmail())){
//                System.out.println("existingUserEmail = " + existingUser);
//                return "error/errorRegister";
//            }
//            System.out.println("existingUser11 = " + existingUser);
//        }
//        userDao.save(user);
//        return "redirect:/";
//    }
}
