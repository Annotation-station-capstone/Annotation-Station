package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.*;
import com.codeup.annotationstation.daos.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class SectionController {
    //adding fields for injected repository
    private CollectionsRepository collectionsDao;
    private UsersRepository usersDao;
    private SectionRepository sectionDao;
    private VideoRepository videoDao;
    private NotesRepository notesDao;

    public SectionController(CollectionsRepository collectionsDao, UsersRepository usersDao,SectionRepository sectionDao, VideoRepository videoDao, NotesRepository notesDao ){
        this.collectionsDao=collectionsDao;
        this.sectionDao=sectionDao;
        this.usersDao= usersDao;
        this.videoDao= videoDao;
        this.notesDao=notesDao;
    }

//read
    @GetMapping("/collections/section")
    public String showCollectionsWithSectionsPage(Model model){
        model.addAttribute("section", sectionDao.findAll());
        return "redirect:/collections/index";
    }

    @PostMapping("/section/{id}")
    public String showOneSection(@PathVariable long id, Model model){
        model.addAttribute("singleSection", sectionDao.getById(id));
        return "redirect:/collection/section/{id}";
    }
    //get section to edit
    @GetMapping("/section/edit/{id}")
    public String editSecion(@PathVariable long id, Model model){
        //find section to edit
        Section sectionToEdit = sectionDao.getById(id);
        model.addAttribute("editSection", sectionToEdit);
        return "redirect:/collection/section/edit/{id}";
    }
    //save changes to section
    @PostMapping("/collection/{collection_id}/section/edit/{id}")
    public String saveEditedSection(@PathVariable long id, @ModelAttribute Section section){
        //find user to save section to users
        sectionDao.getById(id);
        //save section
        sectionDao.save(section);
        return "redirect:/collection/{collection_id}/section/{id}";
    }

    //get info about section for to add to collection
    @GetMapping("/section/add")
    public String addSection(@RequestParam(name = "addSection") String title,@RequestParam Collection collection){
      //create a new instance of a section to add to a collection
        Section section = new Section(title, collection);
        sectionDao.save(section);
        return "redirect:/collection/section";

    }
//get instructors to make sure i did this in the best way
    @GetMapping("/section/{id}/delete")
    public String deleteSection( @PathVariable long id){
        //To use PostMapping use form where action is /collection/section/{id}/delete and make method a post
        //find section to delete
        sectionDao.deleteById(id);
        return "redirect:/collection";
    }

}
