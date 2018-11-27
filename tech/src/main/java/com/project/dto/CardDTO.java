package com.project.dto;

public class CardDTO {

	private Long id;
	
	private String name;
	
	private String number;
	
	private Boolean validState;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Boolean getValidState() {
		return validState;
	}

	public void setValidState(Boolean validState) {
		this.validState = validState;
	}
	
	
}
