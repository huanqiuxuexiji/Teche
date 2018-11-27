package com.project.dto;

public class CityDTO {

	private Long id;
	
	private ProvinceDTO provinceDTO;
	
	private String value;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ProvinceDTO getProvinceDTO() {
		return provinceDTO;
	}

	public void setProvinceDTO(ProvinceDTO provinceDTO) {
		this.provinceDTO = provinceDTO;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	
}
