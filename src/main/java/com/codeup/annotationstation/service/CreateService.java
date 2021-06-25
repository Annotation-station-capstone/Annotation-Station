package com.codeup.annotationstation.service;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.Note;
import com.codeup.annotationstation.Models.Section;
import com.codeup.annotationstation.daos.CollectionsRepository;
import com.codeup.annotationstation.daos.NoteRepository;
import com.codeup.annotationstation.daos.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreateService {

    @Autowired
    CollectionsRepository collectionsRepository;

    public void addCollection(Collection collection) {

        collectionsRepository.save(collection);

    }

    @Autowired
    SectionRepository sectionRepository;

    public void addSection(Section section) {

        sectionRepository.save(section);

    }

    @Autowired
    NoteRepository noteRepository;

    public void addNote(Note note) {

        noteRepository.save(note);

    }
}
