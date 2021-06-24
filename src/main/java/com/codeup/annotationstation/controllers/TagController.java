package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Tag;
import com.codeup.annotationstation.daos.TagRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@Controller
public class TagController {
    //inject Tag Repository
    private TagRepository tagDao;

    public TagController(TagRepository tagDao){
        this.tagDao= tagDao;
    }

//update
@PostMapping("/tag/{id}")
    public String updateTag(@PathVariable long id, Model model){
   Tag tagToUpdate = tagDao.getById(id);
   model.addAttribute("updateTag", tagToUpdate);
   return "redirect:/collection";
}
//delete
@GetMapping("/tag/{id}/delete")
    public String deleteTag(@PathVariable long id){
        tagDao.deleteById(id);
        return "redirect:/collection";
}

}
