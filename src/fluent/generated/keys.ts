import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '31244c4549794fe19d26021966b322fa'
                    }
                    br_auto_number: {
                        table: 'sys_script'
                        id: 'df16629a8ed44236b00a792d1bdb97b6'
                    }
                    br_log_approval: {
                        table: 'sys_script'
                        id: 'f287ce83fb134132954be79dac0ad9c9'
                    }
                    br_mandate_justification: {
                        table: 'sys_script'
                        id: 'fc6f6b0c1eb5415f8f6585000854fcf6'
                    }
                    br_route_approval: {
                        table: 'sys_script'
                        id: 'ee8c2c6023ba417d84338deee4e6ab91'
                    }
                    br_set_closed_at: {
                        table: 'sys_script'
                        id: 'ced9d4bbfa5f4077ab5fba248571e46d'
                    }
                    br_set_opened_at: {
                        table: 'sys_script'
                        id: 'e42272552f094133a41a536461cde867'
                    }
                    br_validate_quantity: {
                        table: 'sys_script'
                        id: 'b5ec2d3765b44a42805b4da0d46902a8'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '68f2b39c47ec4e6790a03695f8bb91a6'
                        deleted: true
                    }
                    cs_bulk_warning: {
                        table: 'sys_script_client'
                        id: 'bbd0597f9aa2490bb06babe37c588450'
                    }
                    cs_cancel_confirm: {
                        table: 'sys_script_client'
                        id: '82e98e70766f4d25bc67a5a427fdeccd'
                    }
                    cs_cell_edit_guard: {
                        table: 'sys_script_client'
                        id: '8247ee63b74d4e36af18bf99756417e0'
                    }
                    cs_init_quantity: {
                        table: 'sys_script_client'
                        id: '64de075585834fc6a65c7fca3c644475'
                    }
                    cs_role_visibility: {
                        table: 'sys_script_client'
                        id: 'b2909cf690274d388fa6f2a6446dcb0b'
                    }
                    cs_toggle_quantity: {
                        table: 'sys_script_client'
                        id: 'b3883f6d06d341d299f0e2ebfa9a49c1'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'dab141a4f7924ce2b26c9ee73de0d7fe'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '25b815725d0c46eb803582bd27fda920'
                    }
                    si_inventory_util: {
                        table: 'sys_script_include'
                        id: '331fbb5b10c740bc9c423c0b2c0a078d'
                    }
                    'src_server_cleanup-duplicates_js': {
                        table: 'sys_module'
                        id: '1b64ae530ef442dd99c688f56869cdeb'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '8066bb0c2db6479e9a159d88418b6573'
                    }
                    'src_server_seed-data_js': {
                        table: 'sys_module'
                        id: 'fbc6dedfaf95486eb894e888af578e2d'
                    }
                }
                composite: [
                    {
                        table: 'ua_table_licensing_config'
                        id: '02ed73a3d97249bbbcb81e74aad13e07'
                        key: {
                            name: 'x_2015976_techva_0_item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '038174233b5c475aa13da7e0ae61462d'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'item_type'
                            value: 'hardware'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '03c48bc8477e4591acc1ec5b694bf292'
                        deleted: true
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'state'
                            value: 'pending_it_review'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '065c884e502041b78dfbe8b474be991a'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'timestamp'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0bc1989cdd154b7aa8bb6d9099447d69'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'closed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d126549887f427690576907882e915c'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0eacb47543084165a5ba323035a2d997'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'closed_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0ee0fbde59ee473598f5799ff839e676'
                        deleted: true
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'state'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1373d69c9658454390772b21e8fcf98b'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'availability_check'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14d6f0ee987541ecbfd639292c114973'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '16b10934b918423f9d4f6c1080bf1c17'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'manager_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ecbb99bbdf04cc78a8cef4a10e4692a'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '202a028ad573498dbc56e377ca1ebbc7'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2171d842ac6548278623b5cf7dad291c'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'manager_comments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2186c90d0a2f4b3f9e42c24cbd466cd2'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'manager_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21e29e3eb3a441f39d49143f4d5eec35'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'comments'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '24e146b79f7d44db98ab90d077a7008c'
                        deleted: true
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '269f810313744d56829eb85fe9c88bda'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2794a50a018846fa86ade2fd94171259'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'fulfillment_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '281b6fca941e433eb32c18bd3ef7548a'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2903cef974a541b2b6037e7d8b2ea7c1'
                        deleted: true
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2cccb86d7d4f4ed0b07b1cff592c07d2'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'manager_comments'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f47e587de6e4cdd8cfcc52fd50808ef'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'decision'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3349f1dd50d94d49868eb2e5ccf61904'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'item_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '33cf93cb37524281990b3211e61c7198'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a0ecf78232244419810055950f1efd0'
                        deleted: true
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'state'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3d92959e7d2e4e2696e240983285e5fe'
                        deleted: true
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'state'
                            value: 'pending_approval'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3dd3282f5edc45bc9b62f9e254fcc498'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '404ac742469a4a6c93a36f67143706d7'
                        key: {
                            name: 'x_2015976_techva_0_category'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4083cf3d0d44405ab7e0a423743bf802'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'actor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43d7bdb6c4404ae4984aed4796d043e9'
                        key: {
                            name: 'x_2015976_techva_0_category'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4523d79d1f6149dfb898ccc7884af0f1'
                        deleted: true
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'state'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '486bb8321e684d5bb268d96af973e037'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'availability_check'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c4e7e298a9c45a9a3d9a0715addfb9d'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4d724b47ff8b4b18a7557452395becb3'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'item_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e11aa97e95a4ace985e78db4cec886c'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'fulfillment_sla'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '50627ecb03d44e4a90141e0d2eb7af1e'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50eea623744541adb7f5a54ea07e15e0'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '54088ed36af6453b89787eb2dea37c8a'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57c80361d93945e7bd3717b64c6407c7'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'fulfillment_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d3988a8a6504ae599a27ab27e87d236'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'item_type'
                            value: 'software'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e09a01659a946fa9fe81a3861460674'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'item_type'
                            value: 'service'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '60c9e93dc55b43e9b2670fdd91225fee'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'approval_required'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6181b33a5eb24f39bf39eda16e65bfc4'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '65e35e16fff84ab0a7b1cedf7837f8a7'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a15cec022a349c5813b0925d9f488b0'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ee8976d32634cf4b78ba0d10edad992'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6f083969a0c24d70afb86fc318bed04c'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'decision'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7682cc9a8e774ca280660bf2035c72d7'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77bbc228ad6f45d48a02aca39b15e36a'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'item_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7815ea12dcd343ec8df1b22b3d8e0056'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'decision'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b54134099234cbb9ec907919d6ccb30'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'fulfillment_sla'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b7a0a58ae3a4fc18331798217ddfc70'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e8873fc340e4cc6803ddbddd4c25541'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7eb3b415646b48c581ed8d43aa4b5ef6'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'manager_approval'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '83f71a652596447ea604885e21078cff'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'comments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8471b78ca642468e925c57d04b9e2bb6'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8bed85846265478b9593141933059b0a'
                        key: {
                            name: 'x_2015976_techva_0_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8cc9d6364bd4431da256043244918429'
                        key: {
                            name: 'x_2015976_techva_0_category'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8fffce0eaad64efba72aba577961fbbf'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'decision'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9011b35193ba4d00a1c19c3fc23c80a1'
                        key: {
                            name: 'x_2015976_techva_0_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9253ea9714b940b7a7b337bf1585d254'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'availability_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '932f152b539440e4a0c8faa5a51c98e0'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '979539651f3349f4bba8a2e3132b6034'
                        key: {
                            name: 'x_2015976_techva_0_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97e02e457723491cba0381f8c326bdf6'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9e2dce4596d8419fa322e8cabcc90ce0'
                        key: {
                            name: 'x_2015976_techva_0_category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9e57c6acd2f948ffaf95983c8271175e'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f963ffaac00430fa94cf6686409ff52'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'manager_approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a893c4d492084b1697ef3baf4ec4e051'
                        key: {
                            name: 'x_2015976_techva_0_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9305b4b3377404dbd9060aa3c481ac0'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab96d18c17e445a5bde6e2d96082a1f4'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'acb14c91a3bd4e288fd6495946d2b206'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad2e4d20870f4c62ac64d55d86658807'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'availability_checked'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b50bbf33357c499ab80bce3e85504f4f'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b6560be73dce49a8a0ced9c0c06ad832'
                        deleted: true
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'state'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b7a66a22e2354b64a315cccbacb7df02'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'business_justification'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bb5b47adf03b4f45a57341a419818a46'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bfbc9af6cc4942dea85c5f280718f893'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'manager_approval'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0314a84b5aa4523ba8e8215cba9fd4d'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb2a428521604ce1b75b0f7ca2949e14'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cbf27cd9da564d6a9938e31b67b544fd'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'timestamp'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cc59ccb1349b47369a77d8dd0e07e7a5'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'manager_approval'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'd0fc9bb54b354de1ae46484f42a9f04c'
                        key: {
                            category: 'x_2015976_techva_0_request'
                            prefix: 'TVR'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd816e1054e5843f2bc8b99f9344ab181'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'business_justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da44ea6a2f6c474aa7ee2fb707bad21d'
                        deleted: true
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dea6baadaa0844dbab7844237e8d2186'
                        key: {
                            name: 'x_2015976_techva_0_approval_log'
                            element: 'actor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e4b9eb90ae4a4425bbc83b16810716a9'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f10e5df3654d443196e963e17b79b736'
                        key: {
                            name: 'x_2015976_techva_0_item'
                            element: 'approval_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f38301e4e7414037aeb363075a14f2a0'
                        key: {
                            name: 'x_2015976_techva_0_category'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5c39b4dc4a1441ca6f9b8cb625a4be9'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'availability_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f89b05f090ca46828ad233ad199c7adc'
                        key: {
                            name: 'x_2015976_techva_0_category'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'feda02734ea340859d053eca8792e463'
                        key: {
                            name: 'x_2015976_techva_0_category'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ff6f219c8240402a92089c4419a4b377'
                        deleted: true
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'state'
                            value: 'fulfilled'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ff8b6a96761a4b97a07c302ae08967ff'
                        key: {
                            name: 'x_2015976_techva_0_request'
                            element: 'availability_status'
                        }
                    },
                ]
            }
        }
    }
}
