package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Note;
import com.codeup.annotationstation.Models.Video;
import com.codeup.annotationstation.daos.NotesRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class NotesController {
    private NotesRepository notesDao;

    public NotesController(NotesRepository notesDao) {
        this.notesDao = notesDao;
    }
//read all notes
    @GetMapping("/notes")
    public String showNotes(Model model){
        model.addAttribute("note", notesDao.findAll());
    return "redirect:/notes";
    }
    //read/show one note
    @PostMapping("notes/{id}")
    public String showOneNote(@PathVariable long id, Model model){

        model.addAttribute("oneNote",notesDao.getById(id));
        return "redirect:/notes/id";
    }
    //get note to edit
    @GetMapping("/note/edit/{id}")
    public String editNote(@PathVariable long id, Model model){
        model.addAttribute("editNote", notesDao.getById(id));
        return "redirect:/note/edit/{id}";
    }
    //save edited note
    @PostMapping("note/edit/{id}")
    public String saveEditedNote(@PathVariable long id, @ModelAttribute Note note){
        //find edited note
        notesDao.getById(id);
        notesDao.save(note);
        return "redirect:/note/{id}";
    }

    //add a note
    @GetMapping("/note/add")
    public String addNote(@RequestParam(name = "addNote") Video video, @RequestParam String time_stamp){
        Note note= new Note(video,time_stamp);
        notesDao.save(note);
        return "redirect:/note";
    }

    @GetMapping("note/{id}/delete")
    public String deleteNote(@PathVariable long id){
        notesDao.deleteById(id);
        return "redirect:/note";
    }
}
