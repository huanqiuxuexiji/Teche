package com.project.dto;

import java.sql.Date;

public class UserDTO {

    private Long id;
    private String name;
    private String nickName;
    private Date creatDate;
    private Date updateDate;
    private Date closeDate;   
    private String password;
    private String account;
    private RoleDTO roleDTO;
    private EmailDTO emailDTO;
    private AddressDTO addressDTO;
    private TelephoneDTO telephoneDTO;
    private PersonImageDTO personImageDTO;
    private CardDTO cardDTO;
    private VipDTO vipDTO;
    private FadadaDTO fadadaDTO;
    private String state;
    
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
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public Date getCreatDate() {
		return creatDate;
	}
	public void setCreatDate(Date creatDate) {
		this.creatDate = creatDate;
	}
	public Date getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}
	public Date getCloseDate() {
		return closeDate;
	}
	public void setCloseDate(Date closeDate) {
		this.closeDate = closeDate;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public RoleDTO getRoleDTO() {
		return roleDTO;
	}
	public void setRoleDTO(RoleDTO roleDTO) {
		this.roleDTO = roleDTO;
	}
	public EmailDTO getEmailDTO() {
		return emailDTO;
	}
	public void setEmailDTO(EmailDTO emailDTO) {
		this.emailDTO = emailDTO;
	}
	public AddressDTO getAddressDTO() {
		return addressDTO;
	}
	public void setAddressDTO(AddressDTO addressDTO) {
		this.addressDTO = addressDTO;
	}
	public TelephoneDTO getTelephoneDTO() {
		return telephoneDTO;
	}
	public void setTelephoneDTO(TelephoneDTO telephoneDTO) {
		this.telephoneDTO = telephoneDTO;
	}
	public PersonImageDTO getPersonImageDTO() {
		return personImageDTO;
	}
	public void setPersonImageDTO(PersonImageDTO personImageDTO) {
		this.personImageDTO = personImageDTO;
	}
	public CardDTO getCardDTO() {
		return cardDTO;
	}
	public void setCardDTO(CardDTO cardDTO) {
		this.cardDTO = cardDTO;
	}
	public VipDTO getVipDTO() {
		return vipDTO;
	}
	public void setVipDTO(VipDTO vipDTO) {
		this.vipDTO = vipDTO;
	}
	public FadadaDTO getFadadaDTO() {
		return fadadaDTO;
	}
	public void setFadadaDTO(FadadaDTO fadadaDTO) {
		this.fadadaDTO = fadadaDTO;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}

    
}
