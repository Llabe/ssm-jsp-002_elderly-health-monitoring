const menu = {
    list() {
        return [
					{
						"backMenu":[
							{
								"child":[
									{
										"buttons":[
											"新增",
											"查看",
											"修改",
											"删除"
										],
										"menu":"用户",
										"menuJump":"列表",
										"tableName":"yonghu"
									}
								],
								"menu":"用户管理"
							},
							{
								"child":[
									{
										"buttons":[
											"新增",
											"查看",
											"修改",
											"删除"
										],
										"menu":"老人信息",
										"menuJump":"列表",
										"tableName":"laoren"
									}
								],
								"menu":"老人管理"
							},
							{
								"child":[
									{
										"buttons":[
											"新增",
											"查看",
											"修改",
											"删除"
										],
										"menu":"食药记录",
										"menuJump":"列表",
										"tableName":"shiyaojilu"
									}
								],
								"menu":"食药记录管理"
							},
							{
								"child":[
									{
										"buttons":[
											"新增",
											"查看",
											"修改",
											"删除"
										],
										"menu":"身体指标",
										"menuJump":"列表",
										"tableName":"shentizhibiao"
									}
								],
								"menu":"身体指标管理"
							},
							{
								"child":[
									{
										"buttons":[
											"新增",
											"查看",
											"修改",
											"删除"
										],
										"menu":"体检病例",
										"menuJump":"列表",
										"tableName":"tijianbingli"
									}
								],
								"menu":"体检病例管理"
							},
							{
								"child":[
									{
										"buttons":[
											"新增",
											"查看",
											"删除",
                                            "修改"
										],
										"menu":"突发情况",
										"menuJump":"列表",
										"tableName":"tufaqingkuang"
									}
								],
								"menu":"突发情况管理"
							},
							{
								"child":[
									{
										"buttons":[
											"查看",
											"删除",
							                "修改"
										],
										"menu":"留言信息",
										"menuJump":"列表",
										"tableName":"liuyanxinxi"
									}
								],
								"menu":"留言管理"
							}

						],
						"frontMenu":[],
						"hasBackLogin":"是",
						"hasBackRegister":"否",
						"hasFrontLogin":"否",
						"hasFrontRegister":"否",
						"roleName":"管理员",
						"tableName":"users"
					},
					{
						"backMenu":[
							{
								"child":[
									{
										"buttons":[
											"查看"
										],
										"menu":"老人信息",
										"menuJump":"列表",
										"tableName":"laoren"
									}
								],
								"menu":"老人管理"
							},
							{
								"child":[
									{
										"buttons":[
											"查看"
										],
										"menu":"食药记录",
										"menuJump":"列表",
										"tableName":"shiyaojilu"
									}
								],
								"menu":"食药记录管理"
							},
							{
								"child":[
									{
										"buttons":[
											"查看"
										],
										"menu":"身体指标",
										"menuJump":"列表",
										"tableName":"shentizhibiao"
									}
								],
								"menu":"身体指标管理"
							},
							{
								"child":[
									{
										"buttons":[
											"查看"
										],
										"menu":"体检病例",
										"menuJump":"列表",
										"tableName":"tijianbingli"
									}
								],
								"menu":"体检病例管理"
							},
							{
								"child":[
									{
										"buttons":[
											"查看"
										],
										"menu":"突发情况",
										"menuJump":"列表",
										"tableName":"tufaqingkuang"
									}
								],
								"menu":"突发情况管理"
							},
							{
								"child":[
									{
										"buttons":[
											"新增",
											"查看"
										],
										"menu":"留言信息",
										"menuJump":"列表",
										"tableName":"liuyanxinxi"
									}
								],
								"menu":"留言管理"
							}
					
						],
						"frontMenu":[],
						"hasBackLogin":"是",
						"hasBackRegister":"否",
						"hasFrontLogin":"否",
						"hasFrontRegister":"否",
						"roleName":"用户",
						"tableName":"yonghu"
					}
				]
		}
}
export default menu;
