package com.project.service;

import app.dto.UserDTO;
import app.entities.UserDO;

import java.util.Set;

/**
 *    
 * @author ad 
 * 
 */
public interface LoginService {

    boolean inputCompareToDatabase(String account, String password);

    UserDTO getUserDTOByAccount(String account);


}
