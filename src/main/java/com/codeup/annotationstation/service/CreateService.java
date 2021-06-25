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

    @Autowired
    SectionRepository sectionRepository;

    @Autowired
    NoteRepository noteRepository;

    public void addCollection(Collection collection,Section section,Note note) {

        Collection collection1 = collectionsRepository.save(collection);
        section.setCollection(collection1);
        Section section1 = sectionRepository.save(section);
        note.setSections(section1);
        note.getVideo().setSection(section1);
        Note note1 = noteRepository.save(note);

    }

}
