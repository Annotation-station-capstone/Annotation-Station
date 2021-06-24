package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.service.CreateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Controller
public class CreateController {

    @Autowired
    CreateService createService;

    @RequestMapping(value = "/collections/create", method = POST)
    @ResponseBody
    public void add(@RequestBody Collection collection) { //In note instance you will get the json data

        createService.addCollection(collection);
        //your code
    }




//    set to void

/**
 * userId
 * title
 * private
 * description
 * imageUrl
 */

}