package com.codeup.annotationstation.service;

import com.codeup.annotationstation.Models.*;
import com.codeup.annotationstation.daos.CollectionsRepository;
import com.codeup.annotationstation.daos.NoteRepository;
import com.codeup.annotationstation.daos.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class CreateService {

    private CollectionsRepository collectionsDao;

    @Autowired
    CollectionsRepository collectionsRepository;

    @Autowired
    SectionRepository sectionRepository;

    @Autowired
    NoteRepository noteRepository;

    public void addCollection(Collection collection, Section section, Note note) {

        Collection collection1 = collectionsRepository.save(collection);
        section.setCollection(collection1);
        Section section1 = sectionRepository.save(section);
//        video.setSections(section1);
        note.setSections(section1);
        note.getVideo().setSection(section1);
        Note note1 = noteRepository.save(note);

    }

    public void addSectionAndNote(IncomingCollection incomingCollection) {
        List<Collection> existingCollections = collectionsRepository.findAllByTitleAndByUser(incomingCollection.getCollection().getTitle(), incomingCollection.getUser().getId());
        List<Section> existingSections = sectionRepository.findAllByTitleAndByCollection(incomingCollection.getSection().getTitle(), incomingCollection.getCollection().getId());
        if (CollectionUtils.isEmpty(existingCollections)) {
            addCollection(incomingCollection.getCollection(), incomingCollection.getSection(), incomingCollection.getNote());
        } else {
            System.out.println("Collection already existed");
            Collection existingCollection = collectionsRepository.findByTitle(incomingCollection.getCollection().getTitle());
            List<Section> sections = existingCollection.getSections();
            Section newSection= new Section(incomingCollection.getSection().getTitle(), existingCollection);
            boolean addSection = true;
            for (var section : sections ) {
                if (section.getTitle().equals(incomingCollection.getSection().getTitle())) {
                    newSection = section;
                    addSection = false;
                    break;
                }
            }

            if (addSection) {
                sections.add(newSection);
            }
            Note note = incomingCollection.getNote();
            note.setSections(newSection);

            for (var section : sections ) {
                if (existingCollection.equals(section.getCollection())) {
                    if (!CollectionUtils.isEmpty(section.getNotes())) {
                        if (section.getId() == newSection.getId()) {
//                            Video video = incomingCollection.getVideo();
//                            video.setSection(section);
//                            note.setVideo(video);
                            note.setSections(section);
                            section.getNotes().add(note);
//                            section.getVideos().add(video);
                        }
                    } else {
                        List<Note> newNotes = new ArrayList();
                        newNotes.add(note);
                        section.setNotes(newNotes);
                    }
                }
                if (!CollectionUtils.isEmpty(section.getVideos())) {
                    if (!section.getVideos().contains(incomingCollection.getVideo())) {
                        incomingCollection.getVideo().setSection(section);
                        section.getVideos().add(incomingCollection.getVideo());
                    }
                }
            };
            existingCollection.setSections(sections);
            collectionsRepository.save(existingCollection);
        }

//        public void addSectionAndNote(IncomingCollection incomingCollection)  {
//            List<Collection> existingCollections = collectionsRepository.findAllByTitleAndByUser(incomingCollection.getCollection().getTitle(), incomingCollection.getUser().getId());
//            List<Section> existingSections = sectionRepository.findAllByTitleAndByCollection(incomingCollection.getSection().getTitle(), incomingCollection.getCollection().getId());
//            if (CollectionUtils.isEmpty(existingCollections)) {
//                addCollection(incomingCollection.getCollection(), incomingCollection.getSection(), incomingCollection.getNote());
//            } else if (CollectionUtils.isEmpty(existingSections)) {
//                System.out.println("Collection already existed");
//                Collection existingCollection = collectionsRepository.getById(incomingCollection.getCollection().getId());
//                List<Section> sections = existingCollection.getSections();
//                Section newSection = sectionRepository.getById(incomingCollection.getSection().getId());
//                sections.add(newSection);
//                Note note = incomingCollection.getNote();
//                note.setSections(newSection);
//                sections.forEach(section -> {
//                    if (existingCollection.equals(section.getCollection())) {
//                        if(!CollectionUtils.isEmpty(section.getNotes())) {
//                            if(section.getId() == newSection.getId()) {
//                                note.setSections(section);
//                                section.getNotes().add(note);
//                            }
//                        }else {
//                            List<Note> newNotes = new ArrayList();
//                            newNotes.add(note);
//                            section.setNotes(newNotes);
//                        }
//                    }
//                    if(!CollectionUtils.isEmpty(section.getVideos())) {
//                        if (!section.getVideos().contains(incomingCollection.getVideo())) {
//                            incomingCollection.getVideo().setSection(section);
//                            section.getVideos().add(incomingCollection.getVideo());
//                        }
//                    }
//                });
//                existingCollection.setSections(sections);
//                collectionsRepository.save(existingCollection);
//            }

    }

    public void addJustNote(Note note) {

        Note note1 = noteRepository.save(note);

    }

    public void getCollection(Collection collection) {
    }


//    public void getCollection(Collection collection) {
//    }

//    public List<Collection> getCollection(Collection collection) {
//        return collectionsRepository.findAll();
//    }
}
