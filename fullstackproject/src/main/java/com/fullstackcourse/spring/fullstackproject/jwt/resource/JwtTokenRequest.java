package com.fullstackcourse.spring.fullstackproject.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

    /*{
    	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYXZvbmlsIiwiZXhwIjoxNTkyMDQyNjY1LCJpYXQiOjE1OTE0Mzc4NjV9.Q1w-iIDGPXhrwGRk5tQ76yx0ATjzqr86PLThTmmB8x3JgfMCzYp8F_-AT_cYrBJ3ThvcfEMJd36uaAeHvenbCw"
    }*/
    
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

