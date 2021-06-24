package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.daos.CollectionsRepository;
import com.codeup.annotationstation.daos.SectionRepository;
import com.codeup.annotationstation.daos.UsersRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

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

    @GetMapping("/section/{id}")
    public String insertSection(@PathVariable long id, String description, Collection collection_id){
        return "";
    }


}
