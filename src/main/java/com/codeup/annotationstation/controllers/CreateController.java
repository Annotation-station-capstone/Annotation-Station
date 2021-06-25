package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.Note;
import com.codeup.annotationstation.Models.Section;
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
    public void add(@RequestBody Collection collection) {

        createService.addCollection(collection);

    }

    @ResponseBody
    public void add(@RequestBody Section section) {

        createService.addSection(section);

    }

    @ResponseBody
    public void add(@RequestBody Note note) {

        createService.addNote(note);

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