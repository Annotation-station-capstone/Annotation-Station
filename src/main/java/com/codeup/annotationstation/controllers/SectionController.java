package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.Section;
import com.codeup.annotationstation.Models.User;
import com.codeup.annotationstation.daos.CollectionsRepository;
import com.codeup.annotationstation.daos.SectionRepository;
import com.codeup.annotationstation.daos.UsersRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class SectionController {
    //adding fields for injected repository
    private CollectionsRepository collectionsDao;
    private UsersRepository usersDao;
    private SectionRepository sectionDao;

    public SectionController(CollectionsRepository collectionsDao, UsersRepository usersDao,SectionRepository sectionDao ){
        this.collectionsDao=collectionsDao;
        this.sectionDao=sectionDao;
        this.usersDao= usersDao;
    }

//read

    @GetMapping("/collections/section")
    public String showCollectionsWithSectionsPage(Model model){
        model.addAttribute("section", sectionDao.findAll());
        return "redirect:/collections/index";
    }

    @PostMapping("/collection/section/{id}")
    public String showOneSection(@PathVariable long id, Model model){
        model.addAttribute("singleSection", sectionDao.getById(id));
        return "redirect:/collection/section/{id}";
    }
    //get section to edit
    @GetMapping("/collection/section/edit/{id}")
    public String editSecion(@PathVariable long id, Model model){
        //find section to edit
        Section sectionToEdit = sectionDao.getById(id);
        model.addAttribute("editSection", sectionToEdit);
        return "redirect:/collection/section/edit/{id}";
    }
    //save changes to section
    @PostMapping("/collection/{collection_id}/section/edit/{id}")
    public String saveEditedSection(@PathVariable long id, @PathVariable long collection_id, @ModelAttribute Section section, @ModelAttribute Collection collection){
        //find user to save section to users collection
        collection.setUser(usersDao.getById(id));
        //save section to a collection
        section.getCollection(collectionsDao.getById(collection_id));
        //save section
        sectionDao.save(section);
        return "redirect:/collection/{collection_id}/section/{id}";
    }

    //get info about section for to add to collection
    @GetMapping("/collection/section/add")
    public String addSection(@RequestParam(name = "addSection") String title,@RequestParam Collection collection){
      //create a new instance of a section to add to a collection
        Section section = new Section(title, collection);
        sectionDao.save(section);
        return "redirect:/collection/section";

    }
//get instructors to make sure i did this in the best way
    @PostMapping("/collection/{collection_id}/section{id}/delete")
    public String deleteSection(@PathVariable long collection_id, @PathVariable long id){
        //find collection to delete section from
        collectionsDao.getById(collection_id);
        //find section to delete
        sectionDao.deleteById(id);
        return "redirect:/collection/section";
    }

}
