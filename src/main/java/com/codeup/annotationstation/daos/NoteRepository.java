package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
    Note findAllBySectionsId (long id);
    List<Note> findNoteBySectionsId (long id);
}
