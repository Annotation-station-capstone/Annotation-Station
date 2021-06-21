package controllers;

import daos.UsersRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.codeup.annotationstation.Models.User;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

    @Controller
    public class UserController {
        private UsersRepository users;

        //allow user to get to sign up form
        @GetMapping("/sign-up")
        public String signUpForm(Model model){
            model.addAttribute("user", new com.codeup.annotationstation.Models.User());
            return "users/sign-up";
        }

        //save user
        @PostMapping("sign-up")
        public String saveUser(@ModelAttribute com.codeup.annotationstation.Models.User user){
            // still need hash strings got passwords.
            //user.setPassword(hash) for security.
            users.save(user);
            return "redirect:/";
        }



    }





