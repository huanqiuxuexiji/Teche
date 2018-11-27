package com.project.controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.UserDTO;
import com.project.service.LoginService;

import io.swagger.annotations.Api;



@RestController
@RequestMapping(path = "/api")
@Api(value = "登陆")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping(path = "/login")
    public UserDTO login(@RequestHeader("Authorization") String authValue){
        String creditial = authValue.split(" ")[1];
        String userNamePassword = new String(Base64.decodeBase64(creditial));
        String[] userNamePasswordArray = userNamePassword.split(":");
        String account = userNamePasswordArray[0];
        String password = userNamePasswordArray[1];
        Subject subject = SecurityUtils.getSubject();
        Session session = subject.getSession();
        session.setAttribute("user", loginService.getUserDOByAccount(account));
        try {
           UsernamePasswordToken token = new UsernamePasswordToken(account, password);
           subject.login(token);
           return loginService.getUserDTOByAccount(account);
        } catch (UnknownAccountException e) {
            e.printStackTrace();
            throw new UnknownAccountException("账号尚未注册！");
        } catch (IncorrectCredentialsException ice) {
            ice.printStackTrace();
            throw new IncorrectCredentialsException("密码输入错误!");
        } catch (LockedAccountException lae) {
            lae.printStackTrace();
            throw new LockedAccountException("您的账号已被禁用!");
        }

    }

    @GetMapping(path = "/logout")
    public void logout() {
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
    }
}
