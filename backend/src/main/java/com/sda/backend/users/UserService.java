package com.sda.backend.users;

import com.sda.backend.products.ProductModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {


    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public User findById(Integer id) {
        return this.userRepository.findById(id).get();
    }

    @Override
    public User create(User newUser) {

        var user = this.userRepository.findByName(newUser.name);

        if (user == null) {
            return this.userRepository.save(newUser);
        }
        return null;
    }

    @Override
    public User findByName(String userName) {
        return userRepository.findByName(userName);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User update(User newUser) {
        try {
            return userRepository.save(newUser);
        }
        catch (Exception e) {
            return null;
        }

    }
}
