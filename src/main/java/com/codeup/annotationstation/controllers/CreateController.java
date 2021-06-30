package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.IncomingRequest;
import com.codeup.annotationstation.service.CollectionsService;
import com.codeup.annotationstation.service.CreateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.POST;



@Controller
public class CreateController {

    @Autowired
    CreateService createService;

    @Autowired
    private CollectionsService collectionsService;

    @RequestMapping(value = "/collections/create", method = POST)
    @ResponseBody
    public void add(@RequestBody IncomingRequest incomingRequest) {
        createService.addCollection(incomingRequest.getCollection(),incomingRequest.getSection(), incomingRequest.getNote());
    }


@GetMapping("/create")
    public String getCreatePage(){
        return "/create";
}

    public void get(@RequestBody IncomingRequest incomingRequest) {

        createService.getCollection(incomingRequest.getCollection());

    }

    //fetch data from collections table and sends to create page
    @GetMapping("/collections/userid/{userId}")
    public List<Collection> getCollectionsForUser(@PathVariable("userId") long userId){
        return collectionsService.getCollection(userId);
    }



}