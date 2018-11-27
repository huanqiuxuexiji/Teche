package com.project.dto;

public class VipDTO {

	private Long id;
	
	private String number;
	
	private int integration;
	
	private VipStageDTO vipStageDTO;
	
	private String state;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public int getIntegration() {
		return integration;
	}

	public void setIntegration(int integration) {
		this.integration = integration;
	}

	public VipStageDTO getVipStageDTO() {
		return vipStageDTO;
	}

	public void setVipStageDTO(VipStageDTO vipStageDTO) {
		this.vipStageDTO = vipStageDTO;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	
	
}
