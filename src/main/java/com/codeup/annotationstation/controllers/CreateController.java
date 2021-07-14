package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.*;
import com.codeup.annotationstation.daos.CollectionsRepository;
import com.codeup.annotationstation.daos.SectionRepository;
import com.codeup.annotationstation.daos.VideoRepository;
import com.codeup.annotationstation.service.CollectionsService;
import com.codeup.annotationstation.service.CreateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;



@Controller
public class CreateController {

    @Autowired
    private SectionRepository sectionsDao;

    @Autowired
    private CollectionsRepository collectionsDao;

    @Autowired
    CreateService createService;

    @Autowired
    private CollectionsService collectionsService;

    @Autowired
    private VideoRepository videoDao;

//    Mapping for the create page
    @GetMapping("/create")
    public String getCreatePage(){
        return "create";
    }

//    Posting for each level of creation (i.e. Collection > Notes)
    @RequestMapping(value = "/collections/create", method = POST)
    @ResponseBody
    public void add(@RequestBody IncomingCollection incomingCollection) {
        int collectionbyNameSize = collectionsDao.findAllByTitle(incomingCollection.getCollection().getTitle()).size();
        int sectionbyNameSize = sectionsDao.findAllByTitle(incomingCollection.getSection().getTitle()).size();

        if (collectionbyNameSize == 0) {
            createService.addCollection(incomingCollection.getCollection(), incomingCollection.getSection(), incomingCollection.getNote());
        }if(sectionbyNameSize == 0){
            System.out.println("Collection already existed");
            Collection existingCollection = collectionsDao.findByTitle(incomingCollection.getCollection().getTitle());
            incomingCollection.getSection().setCollection(existingCollection);
            createService.addSectionAndNote(incomingCollection.getSection(), incomingCollection.getNote());
        }else{
            System.out.println("Section already existed");
            Section existingSection = sectionsDao.findByTitle(incomingCollection.getSection().getTitle());
            incomingCollection.getNote().setSections(existingSection);
            createService.addJustNote(incomingCollection.getNote());
        }
    }


    public void get(@RequestBody IncomingCollection incomingCollection) {
        createService.getCollection(incomingCollection.getCollection());
    }


//fetch data from collections table and sends to create page or profile page as needed
@RequestMapping(value = "/collections/userid/{userId}", method = GET)
@ResponseBody
public List<Collection> getCollectionsForUser(@PathVariable("userId") long userId){
    return collectionsService.getCollection(userId);
}

@RequestMapping(value = "/collections/Id/{collectionId}", method = GET)
@ResponseBody
public Collection getCollections(@PathVariable("collectionId") long collectionId){
    return collectionsService.getCollectionById(collectionId);
}

@RequestMapping(value = "/collections/id/{collectionId}", method = GET)
@ResponseBody
public Section getSection(@PathVariable("collectionId") long collectionId){
        Section section = collectionsService.getSectionById(collectionId);
    return collectionsService.getSectionById(collectionId);
}

@GetMapping(value = "/collections/public")
@ResponseBody
public List<Collection> findAllByis_private(boolean is_private){
    return collectionsDao.findAllByPublic();
}


}