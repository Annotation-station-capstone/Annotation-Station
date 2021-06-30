package com.codeup.annotationstation.service;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.User;
import com.codeup.annotationstation.daos.CollectionsRepository;
import com.codeup.annotationstation.daos.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollectionsService {

    @Autowired
    CollectionsRepository collectionsRepository;

    @Autowired
    UsersRepository usersRepository;

    public List<Collection> getCollection(long userId, long collectionId)
    {
        User user = usersRepository.findById(userId).get();
        return collectionsRepository.findByUserAndId(user,collectionId);
    }

    public List<Collection> getCollection(long userId)
    {
        User user = usersRepository.findById(userId).get();
        return collectionsRepository.findByUser(user);
    }

}
