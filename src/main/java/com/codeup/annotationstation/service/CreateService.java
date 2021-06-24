package com.codeup.annotationstation.service;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.daos.CollectionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreateService {

    @Autowired
    CollectionsRepository collectionsRepository;

    public void addCollection(Collection collection) {

        collectionsRepository.save(collection);

    }
}
