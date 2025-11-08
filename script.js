var quizdata = {
    "DRUG": [{
        "problem": "1. A 65-year-old male with a history of myocardial infarction is prescribed low-dose aspirin for secondary prevention. What is the primary mechanism of action of this drug?",
        "img": "",
        "choices": "Reversibly inhibits cyclooxygenase-2///Irreversibly inhibits cyclooxygenase-1///Reversibly blocks the P2Y12 receptor///Irreversibly blocks the GPIIb/IIIa receptor///Potentiates the activity of antithrombin III",
        "answer": "Irreversibly inhibits cyclooxygenase-1",
        "select": "",
        "explain": "Aspirin ในขนาดต่ำออกฤทธิ์โดยการเข้ายับยั้งเอนไซม์ Cyclooxygenase-1 (COX-1) อย่างถาวรแบบ irreversible ผ่านกระบวนการ acetylation ทำให้เกล็ดเลือด (platelet) ไม่สามารถสังเคราะห์ Thromboxane A2 (TXA2) ได้ ซึ่ง TXA2 เป็นสารสำคัญที่กระตุ้นการเกาะกลุ่มของเกล็ดเลือด ฤทธิ์นี้จะคงอยู่ตลอดอายุขัยของเกล็ดเลือดนั้นๆ",
        "state": false
    },
    {
        "problem": "2. A patient who recently had a coronary stent placed is prescribed dual antiplatelet therapy with aspirin and clopidogrel. If this patient also takes omeprazole for GERD, which drug's efficacy may be significantly reduced?",
        "img": "",
        "choices": "Aspirin///Ticagrelor///Abciximab///Clopidogrel///Prasugrel",
        "answer": "Clopidogrel",
        "select": "",
        "explain": "Clopidogrel เป็นยาในกลุ่ม prodrug ซึ่งต้องถูกเปลี่ยนให้อยู่ในรูป active form โดยเอนไซม์ CYP2C19 ที่ตับจึงจะออกฤทธิ์ยับยั้ง P2Y12 receptor ได้ ยา Omeprazole เป็น potent inhibitor ของเอนไซม์ CYP2C19 การใช้ร่วมกันจึงลดการสร้าง active metabolite ของ Clopidogrel ทำให้ประสิทธิภาพของยาลดลง",
        "state": false
    },
    {
        "problem": "3. A patient with acute coronary syndrome requires a rapid-acting, reversible P2Y12 inhibitor that is not a prodrug. Which of the following agents best fits this description?",
        "img": "",
        "choices": "Clopidogrel///Prasugrel///Ticagrelor///Ticlopidine///Aspirin",
        "answer": "Ticagrelor",
        "select": "",
        "explain": "Ticagrelor เป็นยาในกลุ่ม direct-acting P2Y12 inhibitors ซึ่งแตกต่างจาก Clopidogrel และ Prasugrel ที่เป็น prodrugs โดย Ticagrelor สามารถออกฤทธิ์ได้โดยตรงและจับกับ P2Y12 receptor แบบผันกลับได้ (reversible) ทำให้มี onset of action ที่รวดเร็วและระยะเวลาหมดฤทธิ์ที่สั้นกว่า",
        "state": false
    },
    {
        "problem": "4. During a high-risk percutaneous coronary intervention (PCI), a potent intravenous antiplatelet agent is administered. It is a monoclonal antibody fragment that blocks the final common pathway of platelet aggregation. Which drug is this?",
        "img": "",
        "choices": "Eptifibatide///Tirofiban///Cilostazol///Dipyridamole///Abciximab",
        "answer": "Abciximab",
        "select": "",
        "explain": "Abciximab เป็นยาในกลุ่ม Glycoprotein (GP) IIb/IIIa inhibitors ซึ่งเป็นตัวรับบนผิวเกล็ดเลือดที่ทำหน้าที่เป็น final common pathway สำหรับ platelet aggregation โดยการจับกับ fibrinogen ยา Abciximab เป็น Fab fragment ของ monoclonal antibody ที่เข้าจับและยับยั้ง receptor นี้อย่างมีประสิทธิภาพสูง มักใช้ในหัตถการ PCI ที่มีความเสี่ยงสูง",
        "state": false
    },
    {
        "problem": "5. A patient on heparin therapy for deep vein thrombosis (DVT) develops a sudden, significant drop in platelet count and a new arterial thrombus in their leg. This paradoxical condition is most likely:",
        "img": "",
        "choices": "Protamine toxicity///Disseminated Intravascular Coagulation///Warfarin-induced skin necrosis///Heparin-Induced Thrombocytopenia///Thrombotic Thrombocytopenic Purpura",
        "answer": "Heparin-Induced Thrombocytopenia",
        "select": "",
        "explain": "ภาวะนี้คือ Heparin-Induced Thrombocytopenia (HIT) ซึ่งเป็นภาวะแทรกซ้อนที่รุนแรงจากการใช้ heparin ร่างกายสร้าง IgG antibody ต่อ Heparin-PF4 complex ซึ่ง antibody นี้จะไปกระตุ้นเกล็ดเลือด ทำให้เกิดภาวะลิ่มเลือดอุดตัน (thrombosis) ในขณะเดียวกันก็ทำให้เกล็ดเลือดถูกทำลายจนมีจำนวนลดลง (thrombocytopenia)",
        "state": false
    },
    {
        "problem": "6. A patient stabilized on warfarin with a target INR of 2.5 is prescribed rifampin for tuberculosis. What is the expected effect on the patient's warfarin therapy?",
        "img": "",
        "choices": "INR will increase due to protein binding displacement///INR will decrease due to induction of CYP2C9 metabolism///INR will not change as they use different pathways///INR will increase due to inhibition of VKORC1///INR will decrease due to increased Vitamin K absorption",
        "answer": "INR will decrease due to induction of CYP2C9 metabolism",
        "select": "",
        "explain": "Rifampin เป็น potent inducer ของเอนไซม์ในกลุ่ม Cytochrome P450 โดยเฉพาะ CYP2C9 ซึ่งเป็นเอนไซม์หลักที่ใช้ในการเมตาบอลิซึม S-warfarin (active form) การให้ Rifampin จะเร่งการกำจัด warfarin ออกจากร่างกาย ทำให้ระดับยาลดลงและฤทธิ์ต้านการแข็งตัวของเลือดลดลง ส่งผลให้ค่า INR ลดต่ำลงและเพิ่มความเสี่ยงต่อการเกิดลิ่มเลือด",
        "state": false
    },
    {
        "problem": "7. A 70-year-old female with non-valvular atrial fibrillation is prescribed an oral anticoagulant that is a direct thrombin inhibitor. Which drug was she prescribed?",
        "img": "",
        "choices": "Rivaroxaban///Apixaban///Warfarin///Dabigatran///Enoxaparin",
        "answer": "Dabigatran",
        "select": "",
        "explain": "Dabigatran เป็นยาในกลุ่ม Novel Oral Anticoagulants (NOACs) ที่ออกฤทธิ์โดยการยับยั้ง Thrombin (Factor IIa) โดยตรง (direct thrombin inhibitor) ส่วน Rivaroxaban และ Apixaban เป็น direct Factor Xa inhibitors และ Warfarin เป็น Vitamin K antagonist",
        "state": false
    },
    {
        "problem": "8. A patient on Dabigatran presents to the emergency room with life-threatening bleeding after a major trauma. Which of the following is the specific reversal agent for this drug?",
        "img": "",
        "choices": "Protamine sulfate///Vitamin K (Phytonadione)///Fresh Frozen Plasma///Tranexamic acid///Idarucizumab",
        "answer": "Idarucizumab",
        "select": "",
        "explain": "Idarucizumab เป็น monoclonal antibody fragment ที่ถูกพัฒนาขึ้นมาเพื่อเป็น antidote หรือยาแก้พิษที่จำเพาะเจาะจงสำหรับ Dabigatran เท่านั้น โดยมันจะเข้าจับกับ Dabigatran ด้วย affinity ที่สูงมาก ทำให้ยาไม่สามารถไปยับยั้ง thrombin ได้ และฤทธิ์ต้านการแข็งตัวของเลือดจะหมดไปอย่างรวดเร็ว",
        "state": false
    },
    {
        "problem": "9. A patient with acute myocardial infarction is treated with a fibrinolytic drug that is a recombinant form of a human enzyme and is considered 'clot-selective'. Which drug was likely used?",
        "img": "",
        "choices": "Streptokinase///Tranexamic acid///Warfarin///Alteplase///Heparin",
        "answer": "Alteplase",
        "select": "",
        "explain": "Alteplase เป็นยาละลายลิ่มเลือด (fibrinolytic) ที่เป็น recombinant tissue plasminogen activator (t-PA) มีคุณสมบัติเด่นคือมีความจำเพาะต่อ fibrin (clot-selective) โดยจะออกฤทธิ์เปลี่ยน plasminogen เป็น plasmin ได้ดีกว่าเมื่อจับอยู่กับ fibrin ในลิ่มเลือด ทำให้ยาออกฤทธิ์ได้ค่อนข้างจำเพาะที่ตำแหน่งของลิ่มเลือด",
        "state": false
    },
    {
        "problem": "10. A patient undergoing major surgery experiences significant bleeding. The surgeon requests a drug to inhibit fibrinolysis and stabilize clots. Which medication serves this purpose?",
        "img": "",
        "choices": "Alteplase///Streptokinase///Dipyridamole///Tranexamic acid///Reteplase",
        "answer": "Tranexamic acid",
        "select": "",
        "explain": "Tranexamic acid เป็นยาในกลุ่ม antifibrinolytic agents ออกฤทธิ์โดยการจับกับ lysine binding sites บน plasminogen ทำให้ plasminogen ไม่สามารถจับกับ fibrin ได้ จึงยับยั้งการเปลี่ยน plasminogen ไปเป็น plasmin ส่งผลให้กระบวนการสลายลิ่มเลือด (fibrinolysis) ถูกยับยั้งและลิ่มเลือดมีความคงตัวมากขึ้น ช่วยลดการเสียเลือด",
        "state": false
    },
    {
        "problem": "11. A 68-year-old patient with end-stage renal disease on hemodialysis has anemia with an Hb of 8.2 g/dL. What is the most appropriate pharmacological treatment to stimulate red blood cell production?",
        "img": "",
        "choices": "Ferrous sulfate///Epoetin alfa///Filgrastim///Oprelvekin///Vitamin B12 injection",
        "answer": "Epoetin alfa",
        "select": "",
        "explain": "ภาวะโลหิตจางในผู้ป่วยโรคไตวายเรื้อรัง (Anemia of chronic renal failure) มีสาเหตุหลักมาจากการที่ไตไม่สามารถสร้างฮอร์โmon Erythropoietin (EPO) ได้เพียงพอ การรักษาที่ตรงจุดคือการให้ยาในกลุ่ม Erythropoiesis-Stimulating Agents (ESA) เช่น Epoetin alfa ซึ่งเป็น recombinant human EPO เพื่อกระตุ้นไขกระดูกให้สร้างเม็ดเลือดแดง",
        "state": false
    },
    {
        "problem": "12. A patient with thalassemia major receiving chronic blood transfusions is found to have a serum ferritin level of 3,500 ng/mL. Which oral medication is used to treat this complication?",
        "img": "",
        "choices": "Deferasirox///Ferrous fumarate///Epoetin alfa///Luspatercept///Deferoxamine",
        "answer": "Deferasirox",
        "select": "",
        "explain": "ภาวะธาตุเหล็กเกิน (iron overload) หรือ secondary hemochromatosis เป็นภาวะแทรกซ้อนที่สำคัญจากการรับเลือดเป็นประจำ การรักษาคือการให้ยาขับธาตุเหล็ก (iron chelators) Deferasirox เป็นยาขับธาตุเหล็กชนิดรับประทานที่นิยมใช้ในปัจจุบันเพื่อจัดการกับภาวะนี้ Deferoxamine ก็ใช้ได้แต่เป็นยาฉีด",
        "state": false
    },
    {
        "problem": "13. A patient who underwent gastrectomy two years ago develops macrocytic anemia and peripheral neuropathy. A deficiency of which vitamin is the most likely cause?",
        "img": "",
        "choices": "Vitamin K///Folic acid (Vitamin B9)///Vitamin B12 (Cobalamin)///Vitamin C (Ascorbic acid)///Iron",
        "answer": "Vitamin B12 (Cobalamin)",
        "select": "",
        "explain": "การผ่าตัดกระเพาะอาหาร (gastrectomy) ทำให้ร่างกายขาด Intrinsic Factor (IF) ซึ่งสร้างจาก parietal cells และจำเป็นต่อการดูดซึม Vitamin B12 ที่ลำไส้เล็กส่วนปลาย การขาด B12 จะนำไปสู่ภาวะ megaloblastic anemia (macrocytic) และอาการทางระบบประสาท (peripheral neuropathy) เนื่องจาก B12 จำเป็นต่อการสร้าง myelin sheath",
        "state": false
    },
    {
        "problem": "14. A cancer patient develops severe neutropenia (ANC < 500/μL) following a cycle of chemotherapy. Which hematopoietic growth factor specifically stimulates the production and differentiation of neutrophils?",
        "img": "",
        "choices": "Sargramostim (GM-CSF)///Epoetin alfa (EPO)///Oprelvekin (IL-11)///Romiplostim (TPO-RA)///Filgrastim (G-CSF)",
        "answer": "Filgrastim (G-CSF)",
        "select": "",
        "explain": "Filgrastim เป็น recombinant Granulocyte Colony-Stimulating Factor (G-CSF) ซึ่งเป็น growth factor ที่ออกฤทธิ์จำเพาะในการกระตุ้นการเจริญเติบโต การแบ่งตัว และการพัฒนาของเซลล์ต้นกำเนิดในสาย neutrophil ในไขกระดูก ใช้เพื่อรักษาและป้องกันภาวะ neutropenia ที่เกิดจากเคมีบำบัด",
        "state": false
    },
    {
        "problem": "15. A patient with chronic immune thrombocytopenia (ITP) has a persistently low platelet count despite corticosteroid treatment. Which drug acts as a thrombopoietin receptor agonist to increase platelet production?",
        "img": "",
        "choices": "Filgrastim///Oprelvekin///Sargramostim///Eltrombopag///Luspatercept",
        "answer": "Eltrombopag",
        "select": "",
        "explain": "Eltrombopag เป็นยาในกลุ่ม Thrombopoietin Receptor Agonists (TRAs) ชนิด small molecule ที่ไม่ใช่โปรตีน ออกฤทธิ์โดยการจับและกระตุ้น Thrombopoietin receptor (TPO-R) บน megakaryocytes ทำให้ไขกระดูกสร้างเกล็ดเลือดเพิ่มขึ้น ใช้เป็น second-line therapy ในผู้ป่วย chronic ITP",
        "state": false
    },
    {
        "problem": "16. A patient with β-thalassemia has transfusion-dependent anemia. A new drug, Luspatercept, is prescribed to reduce transfusion frequency. What is its mechanism of action?",
        "img": "",
        "choices": "Stimulates the EPO receptor///Acts as a TPO receptor agonist///Inhibits the TGF-β signaling pathway///Increases iron absorption from the gut///Chelates excess iron from tissues",
        "answer": "Inhibits the TGF-β signaling pathway",
        "select": "",
        "explain": "Luspatercept เป็นยาใหม่ที่ออกฤทธิ์โดยการเป็น ligand trap สำหรับโปรตีนในกลุ่ม Transforming Growth Factor-β (TGF-β) superfamily ซึ่งโปรตีนเหล่านี้จะไปยับยั้งการเจริญเติบโตของเม็ดเลือดแดงในระยะท้าย (late-stage erythropoiesis) การดักจับโปรตีนเหล่านี้จะช่วยลดการยับยั้งดังกล่าว ทำให้ ineffective erythropoiesis ลดลงและเม็ดเลือดแดงสามารถเจริญเติบโตได้ดีขึ้น",
        "state": false
    },
    {
        "problem": "17. A patient with asthma develops bronchospasm after taking a drug for headache. This drug is known to cause this reaction by shunting arachidonic acid metabolism towards leukotriene production. Which drug is it?",
        "img": "",
        "choices": "Acetaminophen///Ibuprofen///Aspirin///Clopidogrel///Morphine",
        "answer": "Aspirin",
        "select": "",
        "explain": "Aspirin และ NSAIDs อื่นๆ ยับยั้งเอนไซม์ COX-1 ในผู้ป่วยบางรายโดยเฉพาะผู้ที่เป็นโรคหอบหืด การยับยั้งนี้จะทำให้ arachidonic acid ถูกเปลี่ยนไปทาง 5-lipoxygenase (5-LOX) pathway มากขึ้น ส่งผลให้มีการสร้าง leukotrienes ซึ่งเป็นสารก่อการหดตัวของหลอดลม (bronchoconstrictor) อย่างรุนแรง ทำให้เกิดอาการหอบหืดกำเริบ",
        "state": false
    },
    {
        "problem": "18. Which antimalarial drug acts by accumulating in the parasite's food vacuole and inhibiting heme polymerase, leading to toxic heme buildup?",
        "img": "",
        "choices": "Artesunate///Primaquine///Atovaquone///Doxycycline///Chloroquine",
        "answer": "Chloroquine",
        "select": "",
        "explain": "Chloroquine เป็น weak base ที่สามารถสะสมตัวใน food vacuole ของเชื้อมาลาเรียซึ่งมีสภาวะเป็นกรดได้ในปริมาณสูง ที่นั่นมันจะเข้าไปขัดขวางกระบวนการ detoxification ของ heme โดยยับยั้งเอนไซม์ heme polymerase ทำให้ heme ที่เป็นพิษต่อเชื้อเกิดการสะสมและฆ่าเชื้อในที่สุด",
        "state": false
    },
    {
        "problem": "19. A traveler requires radical cure for a P. vivax infection to eliminate dormant liver stages (hypnozoites). Which drug is essential for this purpose but requires G6PD screening before use?",
        "img": "",
        "choices": "Chloroquine///Mefloquine///Artemether///Primaquine///Doxycycline",
        "answer": "Primaquine",
        "select": "",
        "explain": "Primaquine เป็นยาเพียงชนิดเดียวที่สามารถกำจัดเชื้อมาลาเรียระยะ hypnozoite ที่ซ่อนตัวอยู่ในเซลล์ตับได้ จึงจำเป็นสำหรับการป้องกันการกลับเป็นซ้ำ (relapse) ของ P. vivax และ P. ovale อย่างไรก็ตาม Primaquine เป็น potent oxidizing agent ที่สามารถกระตุ้นให้เกิดภาวะเม็ดเลือดแดงแตกอย่างรุนแรงในผู้ป่วยที่พร่องเอนไซม์ G6PD จึงต้องมีการตรวจคัดกรองก่อนให้ยา",
        "state": false
    },
    {
        "problem": "20. The first-line treatment for uncomplicated P. falciparum malaria in many parts of the world involves a drug combination that includes a potent, rapid-acting agent activated by heme iron. Which class of drug is this?",
        "img": "",
        "choices": "Quinolines (e.g., Chloroquine)///Antifolates (e.g., Pyrimethamine)///Artemisinin derivatives (e.g., Artesunate)///Tetracyclines (e.g., Doxycycline)///Electron transport inhibitors (e.g., Atovaquone)",
        "answer": "Artemisinin derivatives (e.g., Artesunate)",
        "select": "",
        "explain": "Artemisinin derivatives เป็นยาหลักใน Artemisinin-based Combination Therapies (ACTs) ซึ่งเป็น first-line treatment สำหรับ P. falciparum ยาในกลุ่มนี้มีโครงสร้าง endoperoxide bridge ที่จะถูก activate โดย heme iron ภายในตัวเชื้อ ทำให้เกิด free radicals ที่เป็นพิษและฆ่าเชื้ออย่างรวดเร็ว",
        "state": false
    },
    {
        "problem": "21. A patient with HIV is prescribed a regimen including Tenofovir disoproxil fumarate (TDF). Which organ function must be closely monitored due to a known major adverse effect of this specific drug?",
        "img": "",
        "choices": "Liver function///Pancreatic enzymes///Cardiac function///Renal function///Bone marrow density",
        "answer": "Renal function",
        "select": "",
        "explain": "Tenofovir disoproxil fumarate (TDF) เป็นยาในกลุ่ม NtRTI ที่มีผลข้างเคียงที่สำคัญคือความเป็นพิษต่อไต (nephrotoxicity) โดยอาจทำให้เกิด proximal renal tubulopathy หรือที่เรียกว่า Fanconi syndrome และอาจนำไปสู่ภาวะไตวายเฉียบพลันหรือเรื้อรังได้ จึงจำเป็นต้องมีการติดตามการทำงานของไต (renal function) อย่างสม่ำเสมอในผู้ป่วยที่ได้รับยานี้",
        "state": false
    },
    {
        "problem": "22. A patient with a specific genetic marker, HLA-B*57:01, has a very high risk of a severe, potentially fatal hypersensitivity reaction to which antiretroviral drug?",
        "img": "",
        "choices": "Zidovudine (AZT)///Efavirenz (EFV)///Tenofovir (TDF)///Dolutegravir (DTG)///Abacavir (ABC)",
        "answer": "Abacavir (ABC)",
        "select": "",
        "explain": "การมี allele HLA-B*57:01 เป็นข้อห้ามใช้ที่สำคัญสำหรับยา Abacavir (ABC) เนื่องจากมีความสัมพันธ์อย่างยิ่งกับการเกิดปฏิกิริยาภูมิไวเกินที่รุนแรง (hypersensitivity reaction) ซึ่งอาจเป็นอันตรายถึงชีวิตได้ ดังนั้นจึงต้องมีการตรวจคัดกรอง genetic marker นี้ก่อนเริ่มให้ยา Abacavir ทุกครั้ง",
        "state": false
    },
    {
        "problem": "23. Why is low-dose Ritonavir often included in antiretroviral regimens that contain other protease inhibitors (PIs) like Lopinavir or Atazanavir?",
        "img": "",
        "choices": "It directly inhibits viral integrase///It acts as a pharmacokinetic enhancer by inhibiting CYP3A4///It blocks the CCR5 co-receptor to prevent viral entry///It is a potent NNRTI that provides synergistic activity///It prevents the development of lipodystrophy",
        "answer": "It acts as a pharmacokinetic enhancer by inhibiting CYP3A4",
        "select": "",
        "explain": "Ritonavir ในขนาดต่ำทำหน้าที่เป็น 'booster' หรือ pharmacokinetic (PK) enhancer มันเป็น potent inhibitor ของเอนไซม์ CYP3A4 ซึ่งเป็นเอนไซม์หลักที่ใช้เมตาบอลิซึมยาในกลุ่ม protease inhibitors (PIs) ตัวอื่น การยับยั้ง CYP3A4 จะทำให้ระดับยา PI ตัวหลักในเลือดสูงขึ้นและอยู่นานขึ้น เพิ่มประสิทธิภาพในการกดไวรัส",
        "state": false
    },
    {
        "problem": "24. A patient with HIV experiences vivid dreams, dizziness, and difficulty concentrating shortly after starting a new antiretroviral regimen. Which drug is most notoriously associated with these CNS side effects?",
        "img": "",
        "choices": "Lamivudine (3TC)///Tenofovir (TDF)///Efavirenz (EFV)///Lopinavir/ritonavir///Dolutegravir (DTG)",
        "answer": "Efavirenz (EFV)",
        "select": "",
        "explain": "Efavirenz (EFV) เป็นยาในกลุ่ม Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTI) ที่มีชื่อเสียงในเรื่องผลข้างเคียงต่อระบบประสาทส่วนกลาง (CNS side effects) โดยเฉพาะในช่วงแรกของการรักษา อาการที่พบบ่อยได้แก่ เวียนศีรษะ ฝันร้ายหรือฝันชัดเจนผิดปกติ นอนไม่หลับ และอาการทางจิตประสาทอื่นๆ",
        "state": false
    },
    {
        "problem": "25. Which class of antiretroviral drugs works by preventing the viral DNA from being incorporated into the host cell's genome?",
        "img": "",
        "choices": "Protease Inhibitors (PIs)///Nucleoside Reverse Transcriptase Inhibitors (NRTIs)///Fusion Inhibitors///Integrase Strand Transfer Inhibitors (INSTIs)///Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs)",
        "answer": "Integrase Strand Transfer Inhibitors (INSTIs)",
        "select": "",
        "explain": "ยากลุ่ม Integrase Strand Transfer Inhibitors (INSTIs) เช่น Dolutegravir (DTG) ออกฤทธิ์โดยการยับยั้งเอนไซม์ integrase ของเชื้อ HIV ซึ่งเป็นเอนไซม์ที่จำเป็นในขั้นตอนการนำสารพันธุกรรมของไวรัส (viral DNA) เข้าไปแทรกตัวรวมกับสารพันธุกรรมของเซลล์เจ้าบ้าน (host cell genome) การยับยั้งขั้นตอนนี้เป็นการตัดวงจรการเพิ่มจำนวนของไวรัสอย่างถาวรในเซลล์นั้น",
        "state": false
    },
    {
        "problem": "1. A patient with a VKORC1 gene variant (1639 G>A) is started on warfarin. What is the clinical implication of this genetic polymorphism?",
        "img": "",
        "choices": "Increased risk of heparin-induced thrombocytopenia///Requires higher doses of warfarin for therapeutic effect///Increased sensitivity to warfarin, requiring lower doses///Resistance to the effects of direct thrombin inhibitors///Rapid metabolism of warfarin leading to ineffectiveness",
        "answer": "Increased sensitivity to warfarin, requiring lower doses",
        "select": "",
        "explain": "VKORC1 (Vitamin K epoxide reductase complex 1) เป็นเอนไซม์เป้าหมายของยา warfarin การมี polymorphism ชนิด -1639 G>A ทำให้การสร้างเอนไซม์นี้ลดลง ส่งผลให้ผู้ป่วยมีความไวต่อยา (increased sensitivity) มากขึ้นและต้องการขนาดยา warfarin ที่ต่ำกว่าคนทั่วไปเพื่อควบคุมระดับ INR ให้อยู่ในเป้าหมายการรักษา",
        "state": false
    },
    {
        "problem": "2. A patient with STEMI undergoing PCI is given Prasugrel instead of Clopidogrel. What is a key pharmacokinetic advantage of Prasugrel?",
        "img": "",
        "choices": "It does not require any metabolic activation///It has a reversible binding to the P2Y12 receptor///It undergoes a more rapid and consistent one-step activation///It is not affected by CYP2C19 genetic polymorphisms///It can be administered intravenously for faster effect",
        "answer": "It undergoes a more rapid and consistent one-step activation",
        "select": "",
        "explain": "Prasugrel และ Clopidogrel เป็นยาในกลุ่ม prodrugs ที่ต้องถูกเมตาบอไลซ์ให้เป็น active form ก่อนจึงจะออกฤทธิ์ได้ แต่ Prasugrel มีข้อดีคือผ่านกระบวนการ activation เพียงขั้นตอนเดียว (one-step metabolism) ทำให้การออกฤทธิ์ยับยั้งเกล็ดเลือดรวดเร็วและแน่นอนกว่า (more rapid and consistent) Clopidogrel ซึ่งต้องผ่าน 2-step metabolism",
        "state": false
    },
    {
        "problem": "3. A patient with DVT is treated with enoxaparin (LMWH). How does its primary mechanism differ from unfractionated heparin (UFH)?",
        "img": "",
        "choices": "It exclusively inhibits thrombin (Factor IIa)///It has a greater inhibitory effect on Factor Xa than on Factor IIa///It directly binds and inhibits the vitamin K epoxide reductase enzyme///It does not require antithrombin III for its anticoagulant activity///It has an equal inhibitory effect on both Factor Xa and Factor IIa",
        "answer": "It has a greater inhibitory effect on Factor Xa than on Factor IIa",
        "select": "",
        "explain": "ทั้ง LMWH และ UFH ออกฤทธิ์โดยการจับกับ Antithrombin III (ATIII) แต่มีความแตกต่างกันที่สัดส่วนการยับยั้ง clotting factor โดย LMWH (Enoxaparin) จะมีผลยับยั้ง Factor Xa ได้ดีกว่า Factor IIa (Thrombin) ในอัตราส่วนประมาณ 3:1 ถึง 4:1 ในขณะที่ UFH จะยับยั้ง Factor Xa และ Factor IIa ได้ในสัดส่วนที่เท่าๆกัน (1:1)",
        "state": false
    },
    {
        "problem": "4. A patient with non-valvular atrial fibrillation is switched from warfarin to rivaroxaban. What is the direct molecular target of rivaroxaban?",
        "img": "",
        "choices": "Thrombin (Factor IIa)///Factor Xa///Vitamin K epoxide reductase///Glycoprotein IIb/IIIa receptor///The P2Y12 ADP receptor",
        "answer": "Factor Xa",
        "select": "",
        "explain": "Rivaroxaban เป็นยาในกลุ่ม Novel Oral Anticoagulants (NOACs) หรือ Direct Oral Anticoagulants (DOACs) ที่ออกฤทธิ์โดยการเป็น direct inhibitor ของ Factor Xa ซึ่งเป็นจุดร่วมของ intrinsic และ extrinsic pathway ทำให้ยับยั้งการเปลี่ยน prothrombin ไปเป็น thrombin ได้",
        "state": false
    },
    {
        "problem": "5. A 2-year-old child presents with vomiting, abdominal pain, and bloody diarrhea after ingesting a bottle of his mother's prenatal vitamins. This acute overdose is known to cause:",
        "img": "",
        "choices": "Severe metabolic alkalosis///Aplastic anemia///Necrotizing gastroenteritis///Fanconi syndrome///Megaloblastic crisis",
        "answer": "Necrotizing gastroenteritis",
        "select": "",
        "explain": "วิตามินสำหรับหญิงตั้งครรภ์มีธาตุเหล็กในปริมาณสูง การที่เด็กรับประทานเข้าไปในปริมาณมากจะทำให้เกิดภาวะพิษจากธาตุเหล็กเฉียบพลัน (acute iron toxicity) ซึ่งธาตุเหล็กมีความเป็นพิษโดยตรงต่อเยื่อบุทางเดินอาหาร ทำให้เกิดภาวะ Necrotizing gastroenteritis ซึ่งมีอาการปวดท้องรุนแรง อาเจียนเป็นเลือด และถ่ายเป็นเลือดได้",
        "state": false
    },
    {
        "problem": "6. A pregnant woman is diagnosed with megaloblastic anemia. Supplementation with which vitamin is crucial to prevent neural tube defects in the fetus?",
        "img": "",
        "choices": "Vitamin B12 (Cobalamin)///Vitamin K (Phytonadione)///Vitamin C (Ascorbic Acid)///Vitamin B9 (Folic Acid)///Vitamin B6 (Pyridoxine)",
        "answer": "Vitamin B9 (Folic Acid)",
        "select": "",
        "explain": "Folic acid (Vitamin B9) มีความสำคัญอย่างยิ่งต่อการสังเคราะห์ DNA และการแบ่งเซลล์ ซึ่งจำเป็นต่อการเจริญเติบโตของทารกในครรภ์ โดยเฉพาะการพัฒนาระบบประสาทส่วนกลาง การขาดโฟเลตในช่วงแรกของการตั้งครรภ์เป็นสาเหตุสำคัญของความผิดปกติของท่อระบบประสาท (Neural Tube Defects) เช่น spina bifida",
        "state": false
    },
    {
        "problem": "7. A patient with breast cancer receiving chemotherapy develops febrile neutropenia. In addition to antibiotics, the physician prescribes Sargramostim. What is the advantage of Sargramostim over Filgrastim?",
        "img": "",
        "choices": "It can be administered orally///It has a much longer half-life///It stimulates a broader range of myeloid cells including monocytes///It specifically inhibits tumor cell growth///It does not cause bone pain as a side effect",
        "answer": "It stimulates a broader range of myeloid cells including monocytes",
        "select": "",
        "explain": "Sargramostim คือ Granulocyte-Macrophage Colony-Stimulating Factor (GM-CSF) ซึ่งออกฤทธิ์กว้างกว่า Filgrastim (G-CSF) โดย GM-CSF สามารถกระตุ้นได้ทั้งเซลล์ต้นกำเนิดของ granulocytes (เช่น neutrophils) และ monocytes/macrophages ในขณะที่ G-CSF จะจำเพาะต่อสาย neutrophils มากกว่า",
        "state": false
    },
    {
        "problem": "8. A patient is treated with heparin for a pulmonary embolism. He starts to bleed excessively, and his aPTT is >150 seconds. Which substance is the specific antidote for heparin overdose?",
        "img": "",
        "choices": "Idarucizumab///Andexanet alfa///Protamine sulfate///Vitamin K///Tranexamic acid",
        "answer": "Protamine sulfate",
        "select": "",
        "explain": "Protamine sulfate เป็นยาแก้พิษ (antidote) ที่จำเพาะสำหรับ heparin โดย Protamine ซึ่งมีประจุบวกจะเข้าไปจับกับ Heparin ซึ่งมีประจุลบอย่างรวดเร็ว เกิดเป็น stable complex ที่ไม่มีฤทธิ์ต้านการแข็งตัวของเลือด ทำให้สามารถหยุดยั้งฤทธิ์ของ heparin ได้",
        "state": false
    },
    {
        "problem": "9. Which antiretroviral drug is a nucleoside analog that competitively inhibits reverse transcriptase but is well-known for causing dose-dependent bone marrow suppression, leading to anemia?",
        "img": "",
        "choices": "Lamivudine (3TC)///Tenofovir (TDF)///Zidovudine (AZT)///Efavirenz (EFV)///Dolutegravir (DTG)",
        "answer": "Zidovudine (AZT)",
        "select": "",
        "explain": "Zidovudine (AZT) หรือ Azidothymidine เป็นยาต้านไวรัส HIV ในกลุ่ม NRTI ตัวแรกๆ ผลข้างเคียงที่สำคัญและเป็น dose-limiting toxicity ของ AZT คือการกดไขกระดูก (bone marrow suppression) ซึ่งทำให้เกิดภาวะโลหิตจางชนิดเม็ดเลือดแดงตัวโต (macrocytic anemia) และภาวะเม็ดเลือดขาวต่ำ (neutropenia)",
        "state": false
    },
    {
        "problem": "10. A patient with a history of intermittent claudication is prescribed Cilostazol. What is the mechanism of action of this drug?",
        "img": "",
        "choices": "Irreversibly inhibits COX-1///Blocks the P2Y12 ADP receptor///Inhibits phosphodiesterase type 3 (PDE3)///Blocks the GPIIb/IIIa receptor///Directly inhibits Factor Xa",
        "answer": "Inhibits phosphodiesterase type 3 (PDE3)",
        "select": "",
        "explain": "Cilostazol เป็นยาที่ใช้รักษาอาการปวดขาจากโรคหลอดเลือดแดงส่วนปลายตีบ (intermittent claudication) ออกฤทธิ์โดยการยับยั้งเอนไซม์ Phosphodiesterase type 3 (PDE3) ทำให้มีระดับ cAMP เพิ่มขึ้นในเกล็ดเลือดและกล้ามเนื้อเรียบของหลอดเลือด ส่งผลให้เกิดฤทธิ์ต้านเกล็ดเลือด (antiplatelet) และขยายหลอดเลือด (vasodilation)",
        "state": false
    },
    {
        "problem": "11. A patient with chronic ITP is prescribed Oprelvekin to increase platelet counts. What is a characteristic and potentially serious side effect of this drug?",
        "img": "",
        "choices": "Severe bone marrow suppression///Fluid retention and edema///Acute renal failure///Neuropsychiatric disturbances///Hepatotoxicity",
        "answer": "Fluid retention and edema",
        "select": "",
        "explain": "Oprelvekin คือ recombinant Interleukin-11 (IL-11) ซึ่งใช้กระตุ้นการสร้างเกล็ดเลือด ผลข้างเคียงที่พบบ่อยและมีความสำคัญทางคลินิกคือการทำให้เกิดการคั่งของสารน้ำ (fluid retention) ซึ่งอาจนำไปสู่ภาวะบวมน้ำ (peripheral edema) น้ำในช่องเยื่อหุ้มปอด (pleural effusion) และอาจทำให้ภาวะหัวใจล้มเหลวแย่ลงได้",
        "state": false
    },
    {
        "problem": "12. A patient is being treated with a combination antimalarial drug containing an agent that inhibits dihydropteroate synthase and another that inhibits dihydrofolate reductase. Which drug combination is this?",
        "img": "",
        "choices": "Artesunate + Mefloquine///Atovaquone + Proguanil///Quinine + Doxycycline///Sulfadoxine + Pyrimethamine///Chloroquine + Primaquine",
        "answer": "Sulfadoxine + Pyrimethamine",
        "select": "",
        "explain": "ยานี้คือ Fansidar ซึ่งเป็นการใช้ยา 2 ชนิดร่วมกันเพื่อยับยั้งกระบวนการสังเคราะห์ folic acid ของเชื้อมาลาเรียใน 2 ขั้นตอน (sequential blockade) โดย Sulfadoxine ยับยั้งเอนไซม์ dihydropteroate synthase และ Pyrimethamine ยับยั้งเอนไซม์ dihydrofolate reductase ทำให้เกิดฤทธิ์เสริมกัน (synergistic effect)",
        "state": false
    },
    {
        "problem": "13. A patient with uncomplicated malaria is treated with a drug known to cause neuropsychiatric side effects, such as vivid dreams, anxiety, and psychosis. Which drug is most likely responsible?",
        "img": "",
        "choices": "Artesunate///Primaquine///Mefloquine///Doxycycline///Chloroquine",
        "answer": "Mefloquine",
        "select": "",
        "explain": "Mefloquine เป็นยาต้านมาลาเรียที่มีประสิทธิภาพ แต่มีผลข้างเคียงที่สำคัญและเป็นที่รู้จักกันดีคือผลต่อระบบประสาทส่วนกลาง (neuropsychiatric side effects) ซึ่งอาจมีตั้งแต่อาการเล็กน้อย เช่น ฝันร้าย นอนไม่หลับ ไปจนถึงอาการรุนแรง เช่น วิตกกังวล ซึมเศร้า หรือโรคจิต (psychosis)",
        "state": false
    },
    {
        "problem": "14. Which antiretroviral drug class prevents HIV from entering the host cell by binding to the CCR5 co-receptor on the CD4+ T-cell surface?",
        "img": "",
        "choices": "Fusion inhibitors (e.g., Enfuvirtide)///Protease inhibitors (e.g., Lopinavir)///CCR5 antagonists (e.g., Maraviroc)///Integrase inhibitors (e.g., Dolutegravir)///NRTIs (e.g., Lamivudine)",
        "answer": "CCR5 antagonists (e.g., Maraviroc)",
        "select": "",
        "explain": "Maraviroc เป็นยาในกลุ่ม entry inhibitors ที่ออกฤทธิ์โดยการจับกับ CCR5 co-receptor บนผิวของเซลล์ CD4+ ทำให้โปรตีน gp120 ของเชื้อ HIV ไม่สามารถจับกับ co-receptor นี้ได้ เป็นการขัดขวางขั้นตอนการเข้าสู่เซลล์ของเชื้อไวรัสชนิดที่ใช้ CCR5 (R5-tropic virus)",
        "state": false
    },
    {
        "problem": "15. A healthcare worker sustains a high-risk needlestick injury from a patient with a high HIV viral load. What is the recommended course of action regarding Post-Exposure Prophylaxis (PEP)?",
        "img": "",
        "choices": "Wait for the worker's baseline HIV test results before starting PEP///Start a two-drug PEP regimen immediately///Start a three-drug PEP regimen as soon as possible///No action is needed as the risk is minimal///Administer a single dose of Tenofovir and Emtricitabine",
        "answer": "Start a three-drug PEP regimen as soon as possible",
        "select": "",
        "explain": "กรณีนี้ถือเป็นการสัมผัสเชื้อที่มีความเสี่ยงสูง (high-risk exposure) ตามแนวทางปฏิบัติจะต้องเริ่มให้ยาต้านไวรัสเพื่อป้องกัน (PEP) โดยเร็วที่สุดเท่าที่จะทำได้ (ภายใน 72 ชั่วโมง) และเนื่องจากเป็นความเสี่ยงสูง จึงแนะนำให้ใช้สูตรยา 3 ชนิด (three-drug regimen) ซึ่งมักประกอบด้วย 2 NRTIs + 1 INSTI เป็นเวลา 28 วัน",
        "state": false
    },
    {
        "problem": "16. A patient is treated with a combination of Atovaquone and Proguanil for malaria. What are their respective mechanisms of action?",
        "img": "",
        "choices": "Inhibits heme polymerase and increases ROS///Inhibits electron transport and inhibits dihydrofolate reductase///Increases ROS and inhibits protein synthesis///Inhibits protein synthesis and inhibits heme polymerase///Inhibits dihydrofolate reductase and inhibits electron transport",
        "answer": "Inhibits electron transport and inhibits dihydrofolate reductase",
        "select": "",
        "explain": "Atovaquone-Proguanil (Malarone) เป็นยาสูตรผสมที่ออกฤทธิ์เสริมกัน โดย Atovaquone ยับยั้งกระบวนการ electron transport chain ในไมโทคอนเดรียของเชื้อ ส่วน Proguanil (ซึ่งจะถูกเปลี่ยนเป็น active form คือ cycloguanil) จะยับยั้งเอนไซม์ dihydrofolate reductase (DHFR) ขัดขวางการสังเคราะห์ folic acid ของเชื้อ",
        "state": false
    },
    {
        "problem": "17. A patient with atrial fibrillation has been on long-term warfarin therapy. He develops a severe infection and is treated with trimethoprim-sulfamethoxazole. What effect is this antibiotic likely to have on his INR?",
        "img": "",
        "choices": "It will decrease the INR by inducing warfarin metabolism///It will significantly increase the INR by inhibiting CYP2C9///It will have no effect on the INR///It will decrease the INR by providing excess Vitamin K///It will slightly increase the INR by displacing warfarin from albumin",
        "answer": "It will significantly increase the INR by inhibiting CYP2C9",
        "select": "",
        "explain": "Trimethoprim-sulfamethoxazole (Bactrim) เป็นที่รู้จักกันดีในเรื่องปฏิกิริยาระหว่างยากับ warfarin โดยเฉพาะ Sulfamethoxazole เป็น potent inhibitor ของเอนไซม์ CYP2C9 ซึ่งเป็นเอนไซม์หลักในการกำจัด S-warfarin การยับยั้งนี้จะทำให้ระดับยา warfarin ในเลือดสูงขึ้นอย่างมาก ส่งผลให้ค่า INR เพิ่มสูงขึ้นและเพิ่มความเสี่ยงต่อการเกิดเลือดออกรุนแรง",
        "state": false
    },
    {
        "problem": "18. A patient is receiving an intravenous infusion of a GPIIb/IIIa inhibitor that is a synthetic heptapeptide, specifically blocking the RGD binding site. Which drug is being administered?",
        "img": "",
        "choices": "Aspirin///Abciximab///Clopidogrel///Eptifibatide///Ticagrelor",
        "answer": "Eptifibatide",
        "select": "",
        "explain": "Eptifibatide เป็นยาในกลุ่ม GPIIb/IIIa inhibitors ที่มีโครงสร้างเป็น cyclic heptapeptide ออกฤทธิ์โดยการจำลองลำดับกรดอะมิโน Arg-Gly-Asp (RGD) ซึ่งเป็นตำแหน่งที่ fibrinogen ใช้จับกับ GPIIb/IIIa receptor จึงเข้าแข่งขันและยับยั้งการจับของ fibrinogen ได้อย่างจำเพาะเจาะจง",
        "state": false
    },
    {
        "problem": "19. Which antimalarial drug's mechanism involves inhibiting protein synthesis by binding to the 30S ribosomal subunit in the parasite's apicoplast?",
        "img": "",
        "choices": "Chloroquine///Artesunate///Doxycycline///Primaquine///Mefloquine",
        "answer": "Doxycycline",
        "select": "",
        "explain": "Doxycycline ซึ่งเป็นยาในกลุ่ม tetracycline ออกฤทธิ์ต้านมาลาเรียโดยการเข้าไปยับยั้งกระบวนการสังเคราะห์โปรตีนของเชื้อ โดยจับกับ 30S ribosomal subunit ใน apicoplast ซึ่งเป็นออร์แกเนลล์ที่สำคัญของเชื้อมาลาเรีย ทำให้เชื้อไม่สามารถสร้างโปรตีนที่จำเป็นและตายในที่สุด",
        "state": false
    },
    {
        "problem": "20. A patient on warfarin develops 'purple toe syndrome'. This rare complication is thought to be caused by microemboli and is associated with a transient hypercoagulable state due to the inhibition of which proteins?",
        "img": "",
        "choices": "Factor II and Factor VII///Factor IX and Factor X///Protein C and Protein S///Antithrombin III///Plasminogen and Plasmin",
        "answer": "Protein C and Protein S",
        "select": "",
        "explain": "Warfarin ยับยั้งการสร้าง clotting factor ที่ต้องพึ่ง Vitamin K ทั้งหมด (II, VII, IX, X) และยังยับยั้ง natural anticoagulants คือ Protein C และ S ด้วย เนื่องจาก Protein C มี half-life สั้นที่สุด ในช่วงแรกของการให้ยา warfarin ระดับ Protein C จะลดลงเร็วกว่า clotting factor ตัวอื่น ทำให้เกิดภาวะที่เลือดแข็งตัวง่ายชั่วคราว (transient hypercoagulable state) ซึ่งอาจทำให้เกิดลิ่มเลือดขนาดเล็กไปอุดตันหลอดเลือดที่ผิวหนังได้",
        "state": false
    },
    {
        "problem": "21. A patient with chronic myeloid leukemia (CML) is treated with imatinib. What is the molecular target of this drug?",
        "img": "",
        "choices": "The JAK2 kinase///The FLT3 receptor///The BCR-ABL tyrosine kinase///The TGF-β receptor///The TPO receptor",
        "answer": "The BCR-ABL tyrosine kinase",
        "select": "",
        "explain": "โรค CML มีสาเหตุมาจากการเกิด Philadelphia chromosome หรือ t(9;22) ซึ่งสร้างโปรตีนลูกผสมที่ผิดปกติคือ BCR-ABL tyrosine kinase โปรตีนนี้จะทำงานตลอดเวลาและเป็นตัวการที่ทำให้เซลล์มะเร็งแบ่งตัวไม่หยุด Imatinib เป็นยาในกลุ่ม tyrosine kinase inhibitor (TKI) ที่ออกฤทธิ์โดยการเข้าไปจับและยับยั้ง BCR-ABL kinase โดยตรง",
        "state": false
    },
    {
        "problem": "22. Which adverse effect is specifically associated with high doses of quinine, leading to a syndrome called 'cinchonism'?",
        "img": "",
        "choices": "Severe skin rash and photosensitivity///Tinnitus, vertigo, and blurred vision///Bone marrow suppression and anemia///Acute renal failure and tubulopathy///Neuropsychiatric effects and psychosis",
        "answer": "Tinnitus, vertigo, and blurred vision",
        "select": "",
        "explain": "Cinchonism เป็นกลุ่มอาการที่เกิดจากพิษของยา quinine ซึ่งมีอาการแสดงที่จำเพาะ ได้แก่ อาการทางหู (tinnitus, hearing loss), อาการทางตา (blurred vision, disturbed color vision), และอาการทางระบบประสาท (headache, vertigo, confusion)",
        "state": false
    },
    {
        "problem": "23. A patient with anemia of chronic kidney disease does not respond adequately to epoetin alfa. Iron studies are normal. Which statement best explains this lack of response?",
        "img": "",
        "choices": "The patient has developed antibodies against epoetin alfa///The patient is likely deficient in Vitamin B12 and folate///The patient requires a switch to a G-CSF like filgrastim///The underlying chronic inflammation is inhibiting erythropoiesis///The dose of epoetin alfa is likely too high causing feedback inhibition",
        "answer": "The underlying chronic inflammation is inhibiting erythropoiesis",
        "select": "",
        "explain": "ภาวะดื้อต่อยา ESA (ESA hyporesponsiveness) ในผู้ป่วยโรคไตมีได้หลายสาเหตุ แต่สาเหตุที่พบบ่อยที่สุดคือภาวะอักเสบเรื้อรัง (chronic inflammation) และภาวะขาดธาตุเหล็ก (functional iron deficiency) การอักเสบจะทำให้มีการสร้าง hepcidin สูง ซึ่งจะไปขัดขวางการใช้ธาตุเหล็ก ทำให้ไขกระดูกไม่สามารถสร้างเม็ดเลือดแดงได้อย่างมีประสิทธิภาพแม้จะได้รับ EPO ก็ตาม",
        "state": false
    },
    {
        "problem": "24. A patient taking an antiretroviral regimen containing a protease inhibitor develops symptoms of peripheral gangrene after taking an ergotamine-containing migraine medication. This severe interaction is due to:",
        "img": "",
        "choices": "Induction of CYP3A4 by the protease inhibitor///Inhibition of CYP3A4 by the protease inhibitor///Direct competition at the P-glycoprotein transporter///Synergistic vasoconstrictive effects at the receptor level///Displacement of ergotamine from plasma proteins",
        "answer": "Inhibition of CYP3A4 by the protease inhibitor",
        "select": "",
        "explain": "ยาในกลุ่ม Protease inhibitors (PIs) โดยเฉพาะ Ritonavir เป็น potent inhibitors ของเอนไซม์ CYP3A4 ยา Ergotamine ซึ่งเป็นยาแก้ปวดไมเกรนและมีฤทธิ์ทำให้หลอดเลือดหดตัว ถูกเมตาบอลิซึมโดย CYP3A4 เป็นหลัก การใช้ร่วมกับ PI จะทำให้ระดับยา ergotamine ในเลือดสูงขึ้นอย่างมาก นำไปสู่ภาวะหลอดเลือดหดตัวที่รุนแรงและยาวนาน (prolonged vasospasm) จนอาจทำให้เกิดเนื้อตายส่วนปลาย (gangrene) ได้",
        "state": false
    },
    {
        "problem": "25. Which antiplatelet drug works by blocking the thrombin receptor PAR-1 on platelets, thus preventing thrombin-mediated platelet activation?",
        "img": "",
        "choices": "Aspirin///Clopidogrel///Abciximab///Dipyridamole///Vorapaxar",
        "answer": "Vorapaxar",
        "select": "",
        "explain": "Vorapaxar เป็นยาต้านเกล็ดเลือดในกลุ่มใหม่ที่ออกฤทธิ์โดยการเป็น competitive antagonist ของ Protease-Activated Receptor-1 (PAR-1) ซึ่งเป็น thrombin receptor หลักบนผิวของเกล็ดเลือด ทำให้ thrombin ไม่สามารถมาจับและกระตุ้นเกล็ดเลือดได้ เป็นการยับยั้งการทำงานของเกล็ดเลือดผ่าน pathway ที่สำคัญอีกทางหนึ่ง",
        "state": false
    },
    {
        "problem": "1. A patient with a history of DVT is treated with Fondaparinux. What is the precise mechanism of action for this synthetic anticoagulant?",
        "img": "",
        "choices": "Directly inhibits thrombin///Binds to antithrombin to selectively inhibit Factor Xa///Directly inhibits Factor Xa without a cofactor///Inhibits the synthesis of Vitamin K-dependent factors///Reversibly blocks the P2Y12 receptor on platelets",
        "answer": "Binds to antithrombin to selectively inhibit Factor Xa",
        "select": "",
        "explain": "Fondaparinux เป็น synthetic pentasaccharide ที่เลียนแบบตำแหน่งการจับของ heparin บน Antithrombin III (ATIII) เมื่อจับกับ ATIII แล้วจะเกิด conformational change ที่ทำให้ ATIII สามารถยับยั้ง Factor Xa ได้อย่างจำเพาะเจาะจงและมีประสิทธิภาพสูง แต่ไม่มีผลต่อ Thrombin (Factor IIa) เลย",
        "state": false
    },
    {
        "problem": "2. A patient develops Heparin-Induced Thrombocytopenia (HIT) and requires an alternative intravenous anticoagulant. Which drug is a direct thrombin inhibitor suitable for this situation?",
        "img": "",
        "choices": "Warfarin///Fondaparinux///Protamine Sulfate///Rivaroxaban///Argatroban",
        "answer": "Argatroban",
        "select": "",
        "explain": "ในผู้ป่วย HIT การให้ heparin ทุกชนิดถือเป็นข้อห้าม ยาที่เหมาะสมคือ direct thrombin inhibitor ชนิดฉีด เช่น Argatroban หรือ Bivalirudin ยาเหล่านี้จะเข้าไปยับยั้ง thrombin โดยตรงโดยไม่ต้องอาศัย ATIII จึงปลอดภัยและมีประสิทธิภาพในการรักษาภาวะลิ่มเลือดอุดตันในผู้ป่วย HIT",
        "state": false
    },
    {
        "problem": "3. Which first-generation fibrinolytic drug is highly antigenic and its repeated use is limited due to the development of neutralizing antibodies?",
        "img": "",
        "choices": "Alteplase///Reteplase///Tenecteplase///Streptokinase///Tranexamic acid",
        "answer": "Streptokinase",
        "select": "",
        "explain": "Streptokinase เป็นโปรตีนที่สกัดจากเชื้อแบคทีเรีย β-hemolytic streptococci จึงมีคุณสมบัติเป็นสิ่งแปลกปลอมและกระตุ้นให้ร่างกายสร้าง antibody ได้สูง (highly antigenic) การให้ยาครั้งแรกอาจทำให้เกิดอาการแพ้ และการให้ซ้ำหลังจาก 4 วันไปแล้วอาจไม่ได้ผลเนื่องจากถูก antibody neutralize",
        "state": false
    },
    {
        "problem": "4. A patient with ST-elevation MI is given a fibrinolytic that has a long half-life and can be administered as a single IV bolus. Which of the following drugs fits this description?",
        "img": "",
        "choices": "Alteplase///Streptokinase///Tenecteplase///Warfarin///Heparin",
        "answer": "Tenecteplase",
        "select": "",
        "explain": "Tenecteplase เป็น 3rd generation tissue plasminogen activator (t-PA) ที่ถูกดัดแปลงโครงสร้างให้มีความจำเพาะต่อ fibrin สูงขึ้น และมี half-life ยาวนานกว่า Alteplase มาก ทำให้สามารถบริหารยาโดยการฉีดเข้าหลอดเลือดดำครั้งเดียว (single IV bolus) ได้ ซึ่งสะดวกในการใช้งานในสถานการณ์ฉุกเฉิน",
        "state": false
    },
    {
        "problem": "5. A patient with anemia of CKD is switched from epoetin alfa to darbepoetin alfa. What is the primary advantage of darbepoetin alfa?",
        "img": "",
        "choices": "It can be administered orally///It has a significantly longer half-life///It also stimulates platelet production///It has a lower risk of hypertension///It is less expensive than epoetin alfa",
        "answer": "It has a significantly longer half-life",
        "select": "",
        "explain": "Darbepoetin alfa เป็น 2nd generation Erythropoiesis-Stimulating Agent (ESA) ที่มีการดัดแปลงโครงสร้างโดยการเพิ่ม sialic acid side chains ทำให้มี half-life ยาวนานกว่า Epoetin alfa ประมาณ 3 เท่า ส่งผลให้สามารถลดความถี่ในการฉีดยาลงได้ เช่น จากสัปดาห์ละ 3 ครั้ง เหลือเพียงสัปดาห์ละ 1 ครั้ง หรือทุก 2-4 สัปดาห์",
        "state": false
    },
    {
        "problem": "6. A patient is treated with Pegfilgrastim after a chemotherapy cycle. What is the main benefit of using this 'pegylated' form of G-CSF?",
        "img": "",
        "choices": "It has a broader spectrum of activity///It can be taken as a tablet///It has a reduced incidence of bone pain///It has a greatly extended duration of action///It can be reversed with a specific antidote",
        "answer": "It has a greatly extended duration of action",
        "select": "",
        "explain": "Pegfilgrastim คือ Filgrastim (G-CSF) ที่ถูกนำไปเชื่อมต่อกับ polyethylene glycol (PEG) หรือเรียกว่า pegylation กระบวนการนี้จะเพิ่มขนาดโมเลกุลและลดการกำจัดยาผ่านไต ทำให้ยาอยู่ในร่างกายนานขึ้นมาก (extended duration) จึงสามารถให้ยาเพียงครั้งเดียวต่อ 1 รอบของเคมีบำบัด (once per cycle) แทนที่จะต้องฉีดทุกวันเหมือน Filgrastim",
        "state": false
    },
    {
        "problem": "7. A patient with chronic ITP is started on Romiplostim. What is the nature and route of administration for this TPO receptor agonist?",
        "img": "",
        "choices": "Oral small molecule///Subcutaneous recombinant glycoprotein///Intravenous monoclonal antibody///Oral non-peptide agonist///Intramuscular synthetic peptide",
        "answer": "Subcutaneous recombinant glycoprotein",
        "select": "",
        "explain": "Romiplostim เป็นยาในกลุ่ม TPO receptor agonist ที่มีโครงสร้างเป็น recombinant fusion protein (peptibody) ซึ่งไม่สามารถให้โดยการรับประทานได้ ต้องบริหารยาโดยการฉีดเข้าใต้ผิวหนัง (subcutaneous) สัปดาห์ละ 1 ครั้ง เพื่อกระตุ้นการสร้างเกล็ดเลือด",
        "state": false
    },
    {
        "problem": "8. The use of which first-generation P2Y12 inhibitor is now highly restricted due to a significant risk of severe neutropenia and thrombotic thrombocytopenic purpura (TTP)?",
        "img": "",
        "choices": "Prasugrel///Clopidogrel///Ticlopidine///Ticagrelor///Cangrelor",
        "answer": "Ticlopidine",
        "select": "",
        "explain": "Ticlopidine เป็นยาต้านเกล็ดเลือดในกลุ่ม thienopyridine รุ่นแรก แต่ปัจจุบันมีการใช้งานที่จำกัดมากเนื่องจากมีผลข้างเคียงที่รุนแรงและอาจถึงแก่ชีวิตได้ คือ ภาวะเม็ดเลือดขาวต่ำ (severe neutropenia) และเพิ่มความเสี่ยงต่อการเกิด Thrombotic Thrombocytopenic Purpura (TTP)",
        "state": false
    },
    {
        "problem": "9. A patient is being treated for malaria with a drug combination that includes an agent with a very long half-life (~28 days) known to be associated with QT prolongation. Which agent is this?",
        "img": "",
        "choices": "Artesunate///Primaquine///Lumefantrine///Piperaquine///Proguanil",
        "answer": "Piperaquine",
        "select": "",
        "explain": "Piperaquine เป็นยาต้านมาลาเรียที่ใช้เป็น partner drug คู่กับ Dihydroartemisinin (DHA-PIP) มีคุณสมบัติเด่นคือมี half-life ที่ยาวนานมาก (ประมาณ 28 วัน) ซึ่งช่วยกำจัดเชื้อที่ยังหลงเหลืออยู่ได้ แต่ก็มีข้อควรระวังสำคัญคือความเสี่ยงในการทำให้ QT interval บน EKG ยาวออกไป (QT prolongation)",
        "state": false
    },
    {
        "problem": "10. Which antimalarial drug, often paired with artemether, requires administration with a high-fat meal to ensure adequate absorption?",
        "img": "",
        "choices": "Mefloquine///Lumefantrine///Piperaquine///Pyronaridine///Amodiaquine",
        "answer": "Lumefantrine",
        "select": "",
        "explain": "Lumefantrine เป็นยาต้านมาลาเรียที่มีคุณสมบัติละลายในไขมันได้ดี (highly lipophilic) การดูดซึมของยาจากทางเดินอาหารจึงต่ำมากหากรับประทานตอนท้องว่าง ดังนั้นจึงจำเป็นต้องรับประทานยาพร้อมหรือหลังอาหารที่มีไขมันสูง (high-fat meal) เพื่อเพิ่มการดูดซึมและประสิทธิภาพของยา",
        "state": false
    },
    {
        "problem": "11. A new single-dose drug has been approved for the radical cure of P. vivax malaria, offering an alternative to a 14-day course of primaquine. What is this long-acting drug?",
        "img": "",
        "choices": "Artesunate///Tafenoquine///Atovaquone///Pyronaridine///Mefloquine",
        "answer": "Tafenoquine",
        "select": "",
        "explain": "Tafenoquine เป็นยาในกลุ่ม 8-aminoquinoline เช่นเดียวกับ primaquine แต่ออกฤทธิ์ได้ยาวนานกว่ามาก (long half-life) ทำให้สามารถใช้เป็น single-dose regimen สำหรับการกำจัดเชื้อระยะ hypnozoite ในตับ (radical cure) ของ P. vivax ได้ ซึ่งสะดวกกว่าการใช้ primaquine ที่ต้องรับประทานนาน 14 วัน แต่ยังคงมีข้อห้ามใช้ในผู้ป่วย G6PD deficiency เช่นกัน",
        "state": false
    },
    {
        "problem": "12. A patient is treated for leprosy and also receives prophylaxis for Pneumocystis pneumonia (PCP) with a drug that acts as a folate antagonist and carries a risk of hemolysis in G6PD deficient individuals. Which drug is this?",
        "img": "",
        "choices": "Isoniazid///Rifampin///Pyrimethamine///Dapsone///Clindamycin",
        "answer": "Dapsone",
        "select": "",
        "explain": "Dapsone เป็นยาในกลุ่ม sulfone ที่มีฤทธิ์ยับยั้งการสังเคราะห์ folic acid (dihydropteroate synthase inhibitor) ใช้ในการรักษาโรคเรื้อน (leprosy) และยังใช้ป้องกัน PCP ได้ด้วย อย่างไรก็ตาม Dapsone เป็น potent oxidizing agent ซึ่งเป็นข้อห้ามใช้ในผู้ป่วย G6PD deficiency เพราะจะกระตุ้นให้เกิดภาวะเม็ดเลือดแดงแตกอย่างรุนแรง (hemolysis)",
        "state": false
    },
    {
        "problem": "13. A patient with toxoplasmosis who is allergic to sulfonamides is treated with a combination of pyrimethamine and an alternative drug that works by inhibiting protein synthesis. Which drug is this alternative?",
        "img": "",
        "choices": "Doxycycline///Azithromycin///Atovaquone///Clindamycin///Primaquine",
        "answer": "Clindamycin",
        "select": "",
        "explain": "การรักษามาตรฐานสำหรับ toxoplasmosis คือ Pyrimethamine + Sulfadiazine ในกรณีที่ผู้ป่วยแพ้ยาในกลุ่ม sulfa ยาทางเลือกที่นิยมใช้คู่กับ Pyrimethamine คือ Clindamycin ซึ่งเป็นยาปฏิชีวนะที่ออกฤทธิ์โดยการยับยั้งการสังเคราะห์โปรตีนของเชื้อปรสิต",
        "state": false
    },
    {
        "problem": "14. A patient's HIV regimen includes a fixed-dose combination of Tenofovir/Emtricitabine. What is a characteristic, though generally benign, side effect associated with Emtricitabine (FTC)?",
        "img": "",
        "choices": "Severe skin hypersensitivity///Renal tubular acidosis///Pancreatitis///Hyperpigmentation of palms and soles///Neuropsychiatric disturbances",
        "answer": "Hyperpigmentation of palms and soles",
        "select": "",
        "explain": "Emtricitabine (FTC) เป็นยาในกลุ่ม NRTI ที่มีโครงสร้างและกลไกคล้ายกับ Lamivudine (3TC) มาก ผลข้างเคียงที่จำเพาะกับ FTC แม้จะพบไม่บ่อยและไม่รุนแรง คือการเกิด Hyperpigmentation หรือผิวหนังมีสีคล้ำขึ้น โดยเฉพาะบริเวณฝ่ามือและฝ่าเท้า",
        "state": false
    },
    {
        "problem": "15. Which first-generation NNRTI is known for a high incidence of severe rash (including SJS/TEN) and hepatotoxicity, particularly if initiated in women with high CD4 counts?",
        "img": "",
        "choices": "Efavirenz///Rilpivirine///Doravirine///Etravirine///Nevirapine",
        "answer": "Nevirapine",
        "select": "",
        "explain": "Nevirapine เป็นยาต้านไวรัสในกลุ่ม NNRTI รุ่นแรกที่มีข้อจำกัดในการใช้เนื่องจากความเสี่ยงสูงต่อการเกิดผลข้างเคียงที่รุนแรง ได้แก่ ผื่นแพ้ยารุนแรง (SJS/TEN) และภาวะตับอักเสบรุนแรง (hepatotoxicity) โดยเฉพาะในผู้หญิงที่มีระดับ CD4 count >250 cells/mm³",
        "state": false
    },
    {
        "problem": "16. A patient on an HIV regimen containing Rilpivirine is prescribed a proton pump inhibitor (PPI) for heartburn. Why is this combination contraindicated?",
        "img": "",
        "choices": "Rilpivirine inhibits the metabolism of the PPI, leading to toxicity///The PPI induces the metabolism of Rilpivirine, reducing its efficacy///Rilpivirine requires an acidic gastric environment for adequate absorption///Both drugs compete for the same renal transporter, causing kidney injury///The PPI can cause a severe hypersensitivity reaction when taken with Rilpivirine",
        "answer": "Rilpivirine requires an acidic gastric environment for adequate absorption",
        "select": "",
        "explain": "Rilpivirine (RPV) ซึ่งเป็น NNRTI รุ่นที่สอง มีคุณสมบัติในการละลายน้ำที่ขึ้นกับ pH การดูดซึมของยาจะดีในสภาวะที่เป็นกรด การใช้ร่วมกับยาที่ลดกรดในกระเพาะอาหารอย่างรุนแรง เช่น Proton Pump Inhibitors (PPIs) จะทำให้ระดับยา RPV ในเลือดลดลงอย่างมากจนอาจไม่เพียงพอต่อการควบคุมไวรัส",
        "state": false
    },
    {
        "problem": "17. A patient on Atazanavir develops scleral icterus, but his liver function tests are normal. This benign side effect is caused by the inhibition of which enzyme?",
        "img": "",
        "choices": "CYP3A4///Glucuronyl transferase (UGT1A1)///CYP2C19///Alcohol dehydrogenase///Alanine aminotransferase (ALT)",
        "answer": "Glucuronyl transferase (UGT1A1)",
        "select": "",
        "explain": "Atazanavir ซึ่งเป็นยาในกลุ่ม Protease Inhibitor มีผลข้างเคียงที่จำเพาะคือการทำให้เกิดภาวะ indirect hyperbilirubinemia ซึ่งเกิดจากการที่ยาเข้าไปยับยั้งเอนไซม์ UDP-glucuronosyltransferase (UGT1A1) ในตับ ซึ่งเป็นเอนไซม์ที่ใช้ในการ conjugate bilirubin ทำให้ผู้ป่วยมีอาการตัวเหลืองตาเหลือง (jaundice) ได้โดยที่ตับไม่ได้อักเสบ",
        "state": false
    },
    {
        "problem": "18. Which novel antiretroviral agent is a long-acting injectable integrase inhibitor, suitable for both treatment in combination and for pre-exposure prophylaxis (PrEP)?",
        "img": "",
        "choices": "Dolutegravir///Elvitegravir///Bictegravir///Cabotegravir///Raltegravir",
        "answer": "Cabotegravir",
        "select": "",
        "explain": "Cabotegravir (CAB) เป็นยาในกลุ่ม INSTI ที่ถูกพัฒนาขึ้นมาในรูปแบบยาฉีดออกฤทธิ์นาน (long-acting injectable) สามารถใช้ร่วมกับ Rilpivirine ชนิดฉีดเพื่อการรักษา (ฉีดทุก 1-2 เดือน) หรือใช้ฉีดเดี่ยวๆ เพื่อป้องกันการติดเชื้อ (PrEP) ได้",
        "state": false
    },
    {
        "problem": "19. An HIV-positive patient with multidrug resistance is started on Enfuvirtide. What is the mechanism of this fusion inhibitor?",
        "img": "",
        "choices": "It binds to the CCR5 co-receptor on the CD4 cell///It binds to the CD4 receptor on the T-cell///It binds to gp120 on the virus, preventing attachment///It binds to gp41 on the virus, preventing membrane fusion///It inhibits the reverse transcriptase enzyme",
        "answer": "It binds to gp41 on the virus, preventing membrane fusion",
        "select": "",
        "explain": "Enfuvirtide (T-20) เป็นยาในกลุ่ม fusion inhibitor ที่มีโครงสร้างเป็น peptide ออกฤทธิ์โดยการจับกับโปรตีน gp41 บนผิวของเชื้อ HIV ซึ่งเป็นโปรตีนที่ทำหน้าที่ในการหลอมรวมเยื่อหุ้มเซลล์ของไวรัสเข้ากับเยื่อหุ้มเซลล์ของ CD4 cell การจับนี้จะขัดขวางการเปลี่ยนแปลงโครงสร้างของ gp41 ทำให้กระบวนการ fusion ไม่สามารถเกิดขึ้นได้",
        "state": false
    },
    {
        "problem": "20. A patient with HIV who has developed resistance to multiple drug classes is a candidate for a new drug, Lenacapavir. What is its unique mechanism of action?",
        "img": "",
        "choices": "It inhibits the HIV capsid protein at multiple stages of the viral lifecycle///It acts as a broadly neutralizing antibody against the HIV envelope///It prevents the maturation of the virus by inhibiting the protease enzyme///It blocks the integration of viral DNA by binding to integrase///It is a potent inhibitor of the reverse transcriptase enzyme",
        "answer": "It inhibits the HIV capsid protein at multiple stages of the viral lifecycle",
        "select": "",
        "explain": "Lenacapavir เป็นยาในกลุ่มใหม่ล่าสุดคือ capsid inhibitor ออกฤทธิ์โดยการจับกับ capsid protein (p24) ของเชื้อ HIV ซึ่งเป็นโปรตีนสำคัญที่ประกอบกันเป็นแกนรูปกรวยของไวรัส การจับนี้จะไปรบกวนการทำงานของ capsid ในหลายขั้นตอนของวงจรชีวิตไวรัส ทั้งขั้นตอนการปลดเปลือก (uncoating) การขนส่งเข้าสู่นิวเคลียส และการประกอบร่างของไวรัสตัวใหม่ (assembly)",
        "state": false
    },
    {
        "problem": "21. A patient with intermittent claudication experiences significant relief with Dipyridamole. Besides PDE inhibition, what other mechanism contributes to its antiplatelet and vasodilatory effects?",
        "img": "",
        "choices": "Blocks thrombin receptors///Inhibits adenosine uptake///Irreversibly acetylates COX-1///Blocks ADP P2Y12 receptors///Inhibits Factor Xa directly",
        "answer": "Inhibits adenosine uptake",
        "select": "",
        "explain": "Dipyridamole มีกลไกการออกฤทธิ์ 2 ทางหลัก คือ 1) เป็น phosphodiesterase (PDE) inhibitor ทำให้ cAMP เพิ่มขึ้น และ 2) ยับยั้งการนำ Adenosine กลับเข้าเซลล์ (inhibits adenosine uptake) ทำให้มี Adenosine นอกเซลล์เพิ่มขึ้น ซึ่ง Adenosine จะไปกระตุ้น A2 receptors ทำให้เกิด vasodilation และยับยั้งการทำงานของเกล็ดเลือด",
        "state": false
    },
    {
        "problem": "22. An IV formulation of a P2Y12 inhibitor with a very rapid onset and offset of action is used during a complex PCI procedure. Which drug is this?",
        "img": "",
        "choices": "Ticlopidine///Prasugrel///Ticagrelor///Cangrelor///Clopidogrel",
        "answer": "Cangrelor",
        "select": "",
        "explain": "Cangrelor เป็น direct-acting, reversible P2Y12 inhibitor เพียงตัวเดียวที่อยู่ในรูปแบบยาฉีดเข้าหลอดเลือดดำ (intravenous) มีคุณสมบัติเด่นคือออกฤทธิ์และหมดฤทธิ์เร็วมาก (rapid onset and offset) ทำให้สามารถควบคุมระดับการยับยั้งเกล็ดเลือดได้อย่างแม่นยำระหว่างทำหัตถการ PCI",
        "state": false
    },
    {
        "problem": "23. A patient with severe iron overload from thalassemia requires continuous chelation. Which iron chelator is administered via a subcutaneous infusion pump over 8-12 hours daily?",
        "img": "",
        "choices": "Deferasirox///Deferiprone///Vitamin C///Ferrous sulfate///Deferoxamine",
        "answer": "Deferoxamine",
        "select": "",
        "explain": "Deferoxamine เป็นยาขับธาตุเหล็กตัวแรกที่ถูกนำมาใช้ มี half-life สั้นมาก จึงต้องให้ยาอย่างต่อเนื่องเพื่อให้ได้ประสิทธิภาพสูงสุด วิธีมาตรฐานคือการให้ยาผ่านปั๊มฉีดยาแบบพกพาเข้าใต้ผิวหนัง (subcutaneous infusion) อย่างช้าๆ เป็นเวลา 8-12 ชั่วโมงต่อวัน ซึ่งเป็นวิธีที่ยุ่งยากสำหรับผู้ป่วย",
        "state": false
    },
    {
        "problem": "24. A patient with a history of stroke is prescribed a combination of aspirin and extended-release dipyridamole. This combination is intended to provide what therapeutic effect?",
        "img": "",
        "choices": "Synergistic inhibition of platelet aggregation via different pathways///Reversal of fibrin clots that have already formed in cerebral arteries///Potent anticoagulation by inhibiting the synthesis of clotting factors///Stimulation of red blood cell production to improve oxygen delivery///Reduction of blood viscosity and improvement of cerebral blood flow",
        "answer": "Synergistic inhibition of platelet aggregation via different pathways",
        "select": "",
        "explain": "การใช้ยาสองชนิดนี้ร่วมกันมีเป้าหมายเพื่อเสริมฤทธิ์ในการยับยั้งเกล็ดเลือด (synergistic inhibition) โดย Aspirin ยับยั้งการสร้าง TXA2 ผ่าน COX-1 pathway ในขณะที่ Dipyridamole ยับยั้ง PDE และการดูดซึม adenosine ซึ่งเป็น pathway ที่แตกต่างกัน การยับยั้งคนละกลไกทำให้ได้ผลลัพธ์ในการป้องกันการเกิดลิ่มเลือดได้ดีกว่าการใช้ยาตัวเดียว",
        "state": false
    },
    {
        "problem": "25. A patient on warfarin therapy with a supratherapeutic INR of 12.0 and active bleeding is given Fresh Frozen Plasma (FFP). What is the primary reason for administering FFP in this acute setting?",
        "img": "",
        "choices": "To provide a source of Vitamin K///To directly bind and neutralize warfarin///To rapidly replenish all vitamin K-dependent clotting factors///To reverse heparin-induced thrombocytopenia///To inhibit fibrinolysis and stabilize existing clots",
        "answer": "To rapidly replenish all vitamin K-dependent clotting factors",
        "select": "",
        "explain": "ในภาวะที่เลือดออกจาก warfarin เกินขนาดอย่างรุนแรง การให้ Vitamin K จะใช้เวลาหลายชั่วโมงกว่าจะออกฤทธิ์สร้าง clotting factor ใหม่ได้ การให้ Fresh Frozen Plasma (FFP) จึงมีความจำเป็นเร่งด่วน เพราะ FFP เป็นผลิตภัณฑ์ที่มีปัจจัยการแข็งตัวของเลือดที่ยังทำงานได้ดีอยู่ครบทุกตัว (II, VII, IX, X) เป็นการเติมปัจจัยที่ขาดหายไปกลับเข้าร่างกายโดยตรง ทำให้สามารถควบคุมภาวะเลือดออกได้อย่างรวดเร็ว",
        "state": false
    }],
    "Hbtyping": [
        {
            "problem": "1. ผู้ป่วยชายอายุ 30 ปี ตรวจสุขภาพประจำปี ไม่มีอาการผิดปกติ CBC: Hb 14.5 g/dL, MCV 89 fL. ผล Hb typing คือ: Hb A2: 2.7%, Hb F: 0.8%, Hb A: 96.5%. ผลนี้เข้าได้กับภาวะใดมากที่สุด?",
            "img": "",
            "choices": "Normal///β-thalassemia trait///α-thalassemia trait///Hb E trait///Homozygous Hb E",
            "answer": "Normal",
            "select": "",
            "explain": "ค่า CBC และ MCV อยู่ในเกณฑ์ปกติ ผล Hb typing พบ Hb A เป็นสัดส่วนหลัก และมี HbA2 (< 3.5%) และ HbF (< 2%) อยู่ในระดับปกติ ซึ่งเป็นลักษณะของคนปกติ (genotype αα/αα, ββ)",
            "state": false
        },
        {
            "problem": "2. หญิงตั้งครรภ์อายุ 25 ปี ตรวจคัดกรองธาลัสซีเมีย พบ CBC: Hb 10.8 g/dL, MCV 64 fL. ผล Hb typing คือ: Hb A2: 5.8%, Hb F: 1.2%, Hb A: 93.0%. ผลนี้เข้าได้กับภาวะใดมากที่สุด?",
            "img": "",
            "choices": "Normal///β-thalassemia trait///α-thalassemia trait///Hb E trait///Iron deficiency anemia",
            "answer": "β-thalassemia trait",
            "select": "",
            "explain": "ลักษณะสำคัญคือ Microcytic anemia (MCV ต่ำมาก) ร่วมกับผล Hb typing ที่มีระดับ Hb A2 สูงกว่า 3.5% ซึ่งเป็นตัวบ่งชี้ที่ชัดเจนของ β-thalassemia trait (พาหะเบต้าธาลัสซีเมีย)",
            "state": false
        },
        {
            "problem": "3. ชายอายุ 28 ปี ไม่มีอาการ มาตรวจเลือดเพื่อเตรียมมีบุตร CBC: Hb 13.5 g/dL, MCV 75 fL. ผล Hb typing คือ: Hb A2: 2.4%, Hb F: 0.5%, Hb A: 97.1%. ผลนี้เข้าได้กับภาวะใดมากที่สุด?",
            "img": "",
            "choices": "Normal///β-thalassemia trait///α-thalassemia trait///Hb E trait///Cannot be determined",
            "answer": "α-thalassemia trait",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะ Microcytosis (MCV < 80 fL) แต่ผล Hb typing ปกติ (Hb A2 และ Hb F ไม่สูง) ซึ่งเป็นลักษณะคลาสสิกของ α-thalassemia trait (มักเป็น α-thal 1 trait (--/αα) หรือ α-thal 2 trait (-α/αα)) การวินิจฉัยยืนยันต้องทำด้วย DNA analysis",
            "state": false
        },
        {
            "problem": "4. นักศึกษาแพทย์หญิงอายุ 22 ปี จากภาคอีสาน ตรวจเลือดตัวเอง พบ CBC: Hb 12.5 g/dL, MCV 78 fL. ผล Hb typing คือ: Hb A2/E: 29.5%, Hb F: 0.5%, Hb A: 70.0%. แปลผลอย่างไร?",
            "img": "",
            "choices": "β-thalassemia trait///Homozygous Hb E///Hb E trait///β-thal/Hb E disease///α-thalassemia trait",
            "answer": "Hb E trait",
            "select": "",
            "explain": "ลักษณะเด่นคือการพบ Hb E ประมาณ 25-30% (ถูกรายงานใน peak เดียวกับ Hb A2) และมี Hb A เป็นส่วนใหญ่ ผู้ที่เป็นพาหะ Hb E (AE) มักไม่มีอาการ หรือมี microcytosis เล็กน้อย",
            "state": false
        },
        {
            "problem": "5. ทารกแรกเกิด มีอาการซีด ตัวเหลือง ตับม้ามโต CBC: Hb 7.0 g/dL. ผล Hb typing พบ fast-moving hemoglobin ที่ตำแหน่ง Hb Bart's 25% และที่เหลือเป็น Hb F. ผลนี้เข้าได้กับภาวะใด?",
            "img": "",
            "choices": "Hb H disease///Hydrops fetalis (Hb Bart's disease)///β-thalassemia major///β-thalassemia trait///Normal newborn",
            "answer": "Hb H disease",
            "select": "",
            "explain": "Hb H disease (--/-α) ในทารกแรกเกิด นอกจากจะมี Hb F เป็นหลักแล้ว ยังสามารถตรวจพบ Hb Bart's (γ4) ได้ประมาณ 20-40% ซึ่งจะหายไปและถูกแทนที่ด้วย Hb H (β4) เมื่อโตขึ้น ส่วน Hydrops fetalis จะพบ Hb Bart's เกือบ 100% และมักเสียชีวิตในครรภ์",
            "state": false
        },
        {
            "problem": "6. เด็กหญิงอายุ 8 ปี จากขอนแก่น มีอาการซีดเรื้อรัง ม้ามโตเล็กน้อย CBC: Hb 9.8 g/dL, MCV 65 fL. ผล Hb typing คือ: Hb A2/E: 95.5%, Hb F: 4.5%, Hb A: 0%. ผลนี้คือโรคอะไร?",
            "img": "",
            "choices": "β-thalassemia major///β-thalassemia/Hb E disease///Homozygous Hb E///Hb E trait///Hb H disease",
            "answer": "Homozygous Hb E",
            "select": "",
            "explain": "การตรวจไม่พบ Hb A เลย และมี Hb E เป็นสัดส่วนเกือบทั้งหมด (>90%) บ่งชี้ว่าเป็นโรค Homozygous Hb E (EE) ผู้ป่วยมักมีอาการซีดเล็กน้อยถึงปานกลางและมีเม็ดเลือดแดงขนาดเล็กมาก (marked microcytosis)",
            "state": false
        },
        {
            "problem": "7. ผู้ป่วยชายอายุ 15 ปี มีอาการซีดเหลืองรุนแรง ใบหน้ามีลักษณะเฉพาะ (thalassemic facie) ตับม้ามโตมาก ต้องรับเลือดเป็นประจำ ผล Hb typing คือ: Hb A2/E: 48.0%, Hb F: 52.0%, Hb A: 0%. ผลนี้คือโรคอะไร?",
            "img": "",
            "choices": "Homozygous Hb E///Hb E trait///β-thalassemia/Hb E disease///β-thalassemia major///Hb H disease",
            "answer": "β-thalassemia/Hb E disease",
            "select": "",
            "explain": "เป็นโรคธาลัสซีเมียที่รุนแรงและพบบ่อยที่สุดในไทย ลักษณะจำเพาะคือ ไม่พบ Hb A เลย แต่พบ Hb F และ Hb E ในสัดส่วนที่ใกล้เคียงกัน (โดยทั่วไปสัดส่วนอาจเป็น F>E หรือ E>F) ผู้ป่วยมักมีอาการรุนแรงคล้าย β-thalassemia major",
            "state": false
        },
        {
            "problem": "9. เด็กชายอายุ 2 ปี มีประวัติซีดรุนแรงตั้งแต่ 6 เดือนแรก ตับม้ามโตมาก ต้องรับเลือดทุกเดือน ผล Hb typing (ก่อนรับเลือด) คือ: Hb F: 98%, Hb A2: 2.0%, Hb A: 0%. ผลนี้คือโรคอะไร?",
            "img": "",
            "choices": "β-thalassemia major///β-thalassemia/Hb E disease///Homozygous Hb E///Hb H disease///Hereditary persistence of fetal hemoglobin (HPFH)",
            "answer": "β-thalassemia major",
            "select": "",
            "explain": "ลักษณะคลาสสิกของ β-thalassemia maj   or (β0/β0) คือ สร้างสายเบต้าไม่ได้เลย ทำให้ไม่พบ Hb A เลย และร่างกายจะพยายามสร้าง Hb F มาชดเชย ทำให้ตรวจพบ Hb F ในระดับที่สูงมาก (>95%) ผู้ป่วยมีอาการซีดรุนแรงและต้องพึ่งพาการรับเลือด (transfusion-dependent)",
            "state": false
        },
        {
            "problem": "11. ผู้ป่วยชายอายุ 20 ปี มีภาวะซีดเรื้อรังและม้ามโต ผล CBC: Hb 9.2 g/dL, MCV 63 fL. การย้อมพิเศษ (supravital stain) พบเม็ดเลือดแดงติดสีเป็นจุดเล็กๆ กระจายทั่วเซลล์คล้ายลูกกอล์ฟ (golf ball appearance). ผล Hb typing ระบุว่ามี Hb H 12%. วินิจฉัยคืออะไร?",
            "img": "",
            "choices": "β-thalassemia major///Hb H disease///β-thalassemia/Hb E disease///Homozygous Hb E///α-thalassemia trait",
            "answer": "Hb H disease",
            "select": "",
            "explain": "การพบภาวะ microcytic anemia ร่วมกับม้ามโต และลักษณะเฉพาะของเม็ดเลือดแดงที่ย้อมติดสีพิเศษเห็นเป็น golf ball inclusions (ซึ่งก็คือ Heinz bodies ที่เกิดจากตะกอนของ β4 tetramers) เป็นลักษณะจำเพาะของโรค Hb H. ผล Hb typing ที่ยืนยันการมีอยู่ของ Hb H (ปกติ 5-30%) ช่วยยืนยันการวินิจฉัย",
            "state": false
        },
        {
            "problem": "17. ผู้ป่วยเด็ก มีอาการซีดรุนแรง ต้องรับเลือดสม่ำเสมอ ผล Hb typing พบ Hb A2/E 5.5% และที่เหลือเกือบทั้งหมดเป็น Hb F. ไม่พบ Hb A เลย. พ่อเป็นพาหะ Hb E, แม่เป็นพาหะธาลัสซีเมียชนิดใด?",
            "img": "",
            "choices": "α-thalassemia 1 trait///β0-thalassemia trait///δβ-thalassemia trait///Hb Constant Spring trait///Normal",
            "answer": "β0-thalassemia trait",
            "select": "",
            "explain": "ผู้ป่วยเป็นโรค β-thalassemia/Hb E disease ซึ่งเป็นชนิดที่รุนแรง การไม่พบ Hb A เลย แสดงว่าแม่มียีน β0-thalassemia ซึ่งไม่สร้างสายเบต้าเลย เมื่อเข้าคู่กับยีน Hb E จากพ่อ ทำให้เกิดโรคที่มีอาการรุนแรง[15] ผล typing จะพบ Hb F และ Hb E เป็นหลัก",
            "state": false
        },
        {
            "problem": "21. ผู้ป่วยมีอาการซีดเล็กน้อย ตรวจพบ Microcytosis (MCV 70 fL). ผล Hb typing คือ Hb A2/E: 28%, Hb A: 70%, และพบ Hb Bart's 2%. ผลนี้ชี้ถึงภาวะใด?",
            "img": "",
            "choices": "Hb E trait///β-thalassemia trait///α-thalassemia trait///Compound Hb E trait and α-thalassemia 1 trait///Homozygous Hb E",
            "answer": "Compound Hb E trait and α-thalassemia 1 trait",
            "select": "",
            "explain": "ผู้ป่วยมีลักษณะของ Hb E trait (Hb E ~25-30%) แต่การพบ Hb Bart's ในผู้ใหญ่ (แม้ปริมาณน้อย) เป็นตัวบ่งชี้ว่ามีภาวะ α-thalassemia ร่วมด้วยเสมอ (โดยเฉพาะ α-thalassemia 1 trait) การมีสองภาวะร่วมกันมักทำให้ค่า MCV ต่ำลงกว่าการมี Hb E trait เพียงอย่างเดียว",
            "state": false
        },
        {
            "problem": "22. ผู้ป่วยหญิงอายุ 18 ปี ตรวจเลือดก่อนเข้ามหาวิทยาลัย CBC: Hb 12.1 g/dL, MCV 82 fL. ผล Hb typing: Hb F 100%, ไม่พบ Hb A และ Hb A2. ผู้ป่วยไม่มีอาการซีดเลย. ภาวะใดอธิบายผลเลือดนี้ได้ดีที่สุด?",
            "img": "",
            "choices": "β-thalassemia major///Homozygous δβ-thalassemia///Homozygous HPFH///β-thalassemia/Hb E disease///Lab error",
            "answer": "Homozygous HPFH",
            "select": "",
            "explain": "การพบ Hb F 100% ในผู้ใหญ่ที่ไม่แสดงอาการ เป็นลักษณะเฉพาะของ Homozygous Hereditary Persistence of Fetal Hemoglobin (HPFH)[6] ร่างกายยังคงสร้าง Hb F ต่อไปในวัยผู้ใหญ่ ซึ่งสามารถทดแทนการขาด Hb A ได้อย่างสมบูรณ์ ทำให้ไม่มีอาการซีด[1][6] ต่างจาก Homozygous δβ-thalassemia ที่มักมีซีดเล็กน้อย[3]",
            "state": false
        },
        {
            "problem": "23. ทารกแรกเกิด มีอาการซีดเล็กน้อย ผล Hb typing พบ Hb F 80%, Hb A 10%, และ Hb Bart's 10%. ผลนี้น่าจะเข้าได้กับภาวะใด?",
            "img": "",
            "choices": "Normal newborn///α-thalassemia 1 trait (--/αα)///α-thalassemia 2 trait (-α/αα)///Hb H disease (--/-α)///Hydrops fetalis (--/--)",
            "answer": "α-thalassemia 1 trait (--/αα)",
            "select": "",
            "explain": "ในทารกแรกเกิดที่เป็น α-thalassemia 1 trait (ขาด 2 α-globin genes) จะสามารถตรวจพบ Hb Bart's ได้ในระดับ 5-15% ส่วนทารกปกติอาจพบได้ในปริมาณเล็กน้อย (<2%) หรือไม่พบเลย และทารกที่เป็น α-thalassemia 2 trait (ขาด 1 α-globin gene) จะพบ Hb Bart's ประมาณ 1-5%",
            "state": false
        }
    ],
    "HL52FMT": [
        {
            "problem": "1. A 64-year-old woman is admitted with fever, confusion, and hypotension. Her vital signs are: BP: 82/48 mmHg, HR: 115 bpm RR: 26/min, Body Temp: 39.2°C, Serum lactate: 4.0 mmol/L She is diagnosed with septic shock and receives a 30 mL/kg IV crystalloid bolus over 1 hour. After resuscitation, her MAP remains 58 mmHg. Which of the following is the most appropriate next step in her management?",
            "img": "",
            "choices": "Perform ultrasound to assess IVC variability///Begin corticosteroids immediately///Give vasopressin as first-line vasopressor///Start norepinephrine immediately///Administer a second 30 mL/kg fluid bolus",
            "answer": "Start norepinephrine immediately",
            "select": "",
            "explain": "ผู้ป่วยได้รับการวินิจฉัยว่าเป็น Septic shock และได้รับ initial fluid resuscitation (crystalloid bolus) แล้ว แต่ความดันยังคงต่ำ (MAP < 65 mmHg) ซึ่งเรียกว่า refractory shock ตามแนวทางการรักษาของ Surviving Sepsis Campaign ขั้นตอนต่อไปคือการเริ่มให้ยา vasopressor เพื่อเพิ่มความดันเลือด โดยยาตัวแรกที่แนะนำ (first-line) คือ norepinephrine",
            "state": false
        },
        {
            "problem": "2. The diagram shows two distinct lymphatic drainage regions of the body. What is the clinical difference between these two areas?",
            "img": "https://drive.google.com/open?id=1mSPlR6K-aO8mpS3MmhWkK3N67H70tYc5&usp=drive_copy",
            "choices": "The cisterna chyli is present in the unshaded area///The unshaded area has no lymph nodes///Each area has different kinds of lymph nodes///Different areas contain different types of lymph///The areas drain into different lymphatic ducts before entering the circulation",
            "answer": "The areas drain into different lymphatic ducts before entering the circulation",
            "select": "",
            "explain": "แผนภาพแสดงให้เห็นถึงบริเวณการระบายน้ำเหลือง 2 ส่วนหลักของร่างกาย ส่วนที่แรเงา (Right drainage area) คือบริเวณศีรษะและคอด้านขวา แขนขวา และทรวงอกขวา จะระบายน้ำเหลืองเข้าสู่ Right lymphatic duct ส่วนที่ไม่ได้แรเงา (Left drainage area) ซึ่งเป็นส่วนที่ใหญ่กว่าของร่างกาย จะระบายน้ำเหลืองเข้าสู่ Thoracic duct ดังนั้นความแตกต่างที่สำคัญคือทั้งสองบริเวณระบายน้ำเหลืองเข้าสู่ท่อน้ำเหลืองหลักคนละท่อก่อนจะไหลเข้าสู่ระบบไหลเวียนเลือด",
            "state": false
        },
        {
            "problem": "3. A 28-year-old man presents with acute febrile illness, headache, rash, and severe joint pain. His platelet count is 150,000/mm, and hematocrit is normal. Which clinical feature helps differentiate chikungunya from dengue?",
            "img": "",
            "choices": "Positive tourniquet test///Prominent polyarthritis and joint swelling///Severe thrombocytopenia///Presence of hemorrhagic manifestations///Elevated hematocrit",
            "answer": "Prominent polyarthritis and joint swelling",
            "select": "",
            "explain": "แม้ว่าไข้เลือดออก (Dengue) และชิคุนกุนยา (Chikungunya) จะมีอาการเริ่มต้นคล้ายกัน เช่น ไข้ ปวดศีรษะ และผื่น แต่ลักษณะเด่นที่ช่วยแยกโรคชิคุนกุนยาคืออาการปวดข้ออย่างรุนแรง (severe polyarthritis) และข้อบวม (joint swelling) ซึ่งมักเป็นอาการเด่นและรุนแรงกว่าในไข้เลือดออก ในขณะที่ไข้เลือดออกมักจะพบภาวะเกล็ดเลือดต่ำรุนแรง (severe thrombocytopenia) และการรั่วของพลาสมา (elevated hematocrit) ได้บ่อยกว่า",
            "state": false
        },
        {
            "problem": "4. A 60-year-old man is taking an oral antiplatelet agent that reversibly blocks P2Y12 receptors and provides rapid platelet inhibition. Which of the following drugs was most likely prescribed?",
            "img": "",
            "choices": "Aspirin///Abciximab///Ticagrelor///Clopidogrel///Tirofiban",
            "answer": "Ticagrelor",
            "select": "",
            "explain": "Ticagrelor เป็นยาในกลุ่ม P2Y12 receptor inhibitors ที่มีคุณสมบัติเด่นคือจับกับตัวรับแบบผันกลับได้ (reversibly) และออกฤทธิ์ได้รวดเร็ว (rapid onset) เนื่องจากไม่ใช่ prodrug ต่างจาก Clopidogrel ซึ่งจับแบบไม่ผันกลับ (irreversibly) และเป็น prodrug ที่ต้องใช้เวลาในการเปลี่ยนเป็น active form ก่อนจึงจะออกฤทธิ์ได้ ส่วน Aspirin ยับยั้ง COX-1 และ Abciximab/Tirofiban เป็นยาฉีดในกลุ่ม GP IIb/IIIa inhibitors",
            "state": false
        },
        {
            "problem": "5. What species of Plasmodium can cause relapse fever?",
            "img": "",
            "choices": "Plasmodium falciparum, P. knowlesi///Plasmodium ovale, P. vivax///Plasmodium vivax, P. knowlesi///Plasmodium malariae, P. vivax///Plasmodium knowlesi, P. malariae",
            "answer": "Plasmodium ovale, P. vivax",
            "select": "",
            "explain": "การกลับมาเป็นไข้มาลาเรียซ้ำ (relapse) เกิดจากเชื้อมาลาเรียระยะพักตัวที่เรียกว่า hypnozoites ในเซลล์ตับ ซึ่งสามารถกลับมาเจริญเติบโตใหม่ได้ในภายหลัง เชื้อมาลาเรียที่มีระยะนี้คือ Plasmodium vivax และ Plasmodium ovale เท่านั้น ส่วน P. falciparum, P. malariae, และ P. knowlesi ไม่มีระยะ hypnozoites",
            "state": false
        },
        {
            "problem": "6. Which of the following drugs is appropriate for stimulation of granulocytes, monocytes, and early progenitors in a patient undergoing bone marrow transplantation?",
            "img": "",
            "choices": "Oprelvekin///Sargramostim///Romiplostim///Filgrastim///Epoetin alfa",
            "answer": "Sargramostim",
            "select": "",
            "explain": "Sargramostim คือ Granulocyte-Macrophage Colony-Stimulating Factor (GM-CSF) ซึ่งเป็นยาที่กระตุ้นการสร้างและเจริญเติบโตของเซลล์เม็ดเลือดขาวหลายสายพันธุ์ ทั้ง granulocytes (เช่น neutrophils), monocytes, และเซลล์ต้นกำเนิดระยะแรกๆ (early progenitors) จึงเหมาะสำหรับผู้ป่วยที่ปลูกถ่ายไขกระดูก ในขณะที่ Filgrastim (G-CSF) จะจำเพาะต่อการกระตุ้นสาย neutrophils มากกว่า และ Epoetin alfa ใช้กระตุ้นการสร้างเม็ดเลือดแดง",
            "state": false
        },
        {
            "problem": "7. A 23-year-old student develops cellulitis after a leg injury. Which white blood cell is the earliest responder and most abundant in the pus?",
            "img": "",
            "choices": "Basophil///Neutrophil///Monocyte///Eosinophil///Lymphocyte",
            "answer": "Neutrophil",
            "select": "",
            "explain": "ในการติดเชื้อแบคทีเรียเฉียบพลัน (acute bacterial infection) เช่น cellulitis เม็ดเลือดขาวชนิดแรกที่ตอบสนองและเคลื่อนที่ไปยังบริเวณที่ติดเชื้อ (earliest responder) คือ Neutrophil ซึ่งทำหน้าที่กำจัดเชื้อโรคด้วยกระบวนการ phagocytosis หนอง (pus) ที่เกิดขึ้นจึงประกอบด้วยซากของ Neutrophils ที่ตายแล้วเป็นส่วนใหญ่",
            "state": false
        },
        {
            "problem": "8. A technician would like to extract human genomic DNA from a blood sample. Which part of the blood should be used for the DNA extraction?",
            "img": "",
            "choices": "Plasma///Buffy coat///Packed red blood cell///Serum///Platelet concentration",
            "answer": "Buffy coat",
            "select": "",
            "explain": "Genomic DNA อยู่ในนิวเคลียสของเซลล์ เม็ดเลือดแดง (Packed red blood cell) และเกล็ดเลือดไม่มีนิวเคลียส ส่วน Plasma และ Serum เป็นส่วนของเหลวที่ไม่มีเซลล์ เมื่อนำเลือดไปปั่นเหวี่ยง จะเกิดชั้นบางๆ สีขาวขุ่นคั่นระหว่างชั้นพลาสมาและเม็ดเลือดแดง เรียกว่า Buffy coat ซึ่งประกอบด้วยเม็ดเลือดขาว (leukocytes) และเกล็ดเลือด เนื่องจากเม็ดเลือดขาวมีนิวเคลียส Buffy coat จึงเป็นแหล่งที่ดีที่สุดในการสกัด genomic DNA",
            "state": false
        },
        {
            "problem": "9. A 56-year-old man presents with ST-elevation myocardial infarction (STEMI). Before undergoing PCI procedure, he is given abciximab. Which is the mechanism of action of abciximab?",
            "img": "",
            "choices": "Inhibits GP IIb/IIIa on platelet///Promotes fibrinolysis///Blocks ADP receptors on platelets///Inhibits cyclooxygenase///Inhibits phosphodiesterase",
            "answer": "Inhibits GP IIb/IIIa on platelet",
            "select": "",
            "explain": "Abciximab เป็นยาต้านเกล็ดเลือดในกลุ่ม Glycoprotein (GP) IIb/IIIa inhibitors โดยยาจะไปจับกับ GP IIb/IIIa receptor บนผิวของเกล็ดเลือด ซึ่งเป็นตัวรับสุดท้ายในกระบวนการเกาะกลุ่มของเกล็ดเลือด (final common pathway for platelet aggregation) การยับยั้งตัวรับนี้จะขัดขวางไม่ให้ fibrinogen มาจับเพื่อเชื่อมเกล็ดเลือดเข้าด้วยกัน ทำให้ไม่สามารถเกิดการเกาะกลุ่มกันได้",
            "state": false
        },
        {
            "problem": "10. Which one is an anticoagulant factor that interfere the clotting cascade of extrinsic pathway?",
            "img": "",
            "choices": "Thrombin///Thrombomodulin///Tissue factor pathway inhibitor///Protein C///Protein S",
            "answer": "Tissue factor pathway inhibitor",
            "select": "",
            "explain": "Extrinsic pathway ของการแข็งตัวของเลือดเริ่มต้นจาก Tissue factor (TF) ทำงานร่วมกับ Factor VIIa ซึ่ง Tissue factor pathway inhibitor (TFPI) เป็นโปรตีนที่ทำหน้าที่เป็นสารต้านการแข็งตัวของเลือดตามธรรมชาติ (natural anticoagulant) ที่จำเพาะต่อวิถีนี้ โดย TFPI จะยับยั้ง Factor Xa และยับยั้ง TF-VIIa complex โดยตรง",
            "state": false
        },
        {
            "problem": "11. A 62-year-old man with atrial fibrillation is receiving warfarin for stroke prevention. Which of the following factors can alter the anticoagulant effects of warfarin?",
            "img": "",
            "choices": "A diet high in vitamin K-rich foods may promote warfarin action.///CYP2C9*3 polymorphism decrease anticoagulant effect of warfarin.///VKORC1 -1639 AA genotype increases warfarin sensitivity.///Chronic kidney disease may decrease warfarin activity.///Concurrent use with rifampin may increase bleeding risk.",
            "answer": "VKORC1 -1639 AA genotype increases warfarin sensitivity.",
            "select": "",
            "explain": "VKORC1 เป็นเอนไซม์เป้าหมายของยา warfarin การมี polymorphism ชนิด -1639 AA genotype ทำให้การสร้างเอนไซม์ VKORC1 ลดลง ส่งผลให้ผู้ป่วยไวต่อยา warfarin มากขึ้น (increased warfarin sensitivity) และต้องการขนาดยาที่ต่ำกว่าคนทั่วไปในการควบคุมระดับการแข็งตัวของเลือด ส่วน Vitamin K จะต้านฤทธิ์ warfarin และ Rifampin จะเร่งการกำจัดยา warfarin ทำให้ฤทธิ์ลดลง",
            "state": false
        },
        {
            "problem": "12. Referring to the graph below, if N (the solid curve) is the normal oxygen dissociation curve for hemoglobin, which curve represents the oxygen dissociation curve of the predominant form of hemoglobin in respiratory alkalosis patients?",
            "img": "https://drive.google.com/open?id=1ciedHiip-J4rgPaN0PIa8CqbHWcStphI&usp=drive_copy",
            "choices": "C///A///N///D///B",
            "answer": "A",
            "select": "",
            "explain": "ภาวะ Respiratory alkalosis คือภาวะที่เลือดเป็นด่าง (pH สูง) และมีระดับคาร์บอนไดออกไซด์ต่ำ (PCO2 ต่ำ) ซึ่งปัจจัยทั้งสองนี้ทำให้ Oxygen-hemoglobin dissociation curve เคลื่อนไปทางซ้าย (Left shift) หรือที่เรียกว่า Bohr effect ซึ่งหมายความว่าฮีโมโกลบินจะมีความสามารถในการจับกับออกซิเจนได้ดีขึ้น (increased affinity) แต่จะปล่อยออกซิเจนให้แก่เนื้อเยื่อได้ยากขึ้น กราฟ A แสดงถึงภาวะนี้",
            "state": false
        },
        {
            "problem": "13. A patient with glucose-6-phosphate dehydrogenase (G-6-PD) deficiency got acute hemolysis after an antibiotic, norfloxacin, treatment. The patient noticed his dark Coca-Cola colored urine. Which of the following molecule best explains the dark urine?",
            "img": "",
            "choices": "Urinary tract infection caused urinary bladder inflammation///Bilirubin in urine///Oxidized urea///Hemoglobin in urine///Substances from norfloxacin excreted to the urine",
            "answer": "Hemoglobin in urine",
            "select": "",
            "explain": "ในผู้ป่วย G6PD deficiency เมื่อได้รับยาที่เป็นตัวกระตุ้น (oxidative stress) เช่น norfloxacin จะทำให้เม็ดเลือดแดงแตกอย่างเฉียบพลัน (acute intravascular hemolysis) ส่งผลให้มีฮีโมโกลบิน (hemoglobin) ถูกปล่อยออกมาในกระแสเลือดจำนวนมาก เมื่อปริมาณฮีโมโกลบินอิสระเกินกว่าที่โปรตีน haptoglobin จะจับได้หมด ฮีโมโกลบินส่วนเกินจะถูกกรองผ่านไตและขับออกมาในปัสสาวะ (hemoglobinuria) ทำให้ปัสสาวะมีสีเข้มคล้ายน้ำโคล่า",
            "state": false
        },
        {
            "problem": "14. A 17-year-old girl presents with a history of heavy menstrual bleeding since menarche. She also reports frequent nosebleeds and easy bruising. Family history reveals that her mother has a bleeding disorder. Laboratory studies show normal platelet count, normal PT, but prolonged aPTT. Bleeding time is markedly increase. Which of the following is the most likely diagnosis?",
            "img": "",
            "choices": "Disseminated intravascular coagulation (DIC)///Von Willebrand disease///Factor VII deficiency///Immune thrombocytopenic purpura (ITP)///Hemophilia",
            "answer": "Von Willebrand disease",
            "select": "",
            "explain": "ผู้ป่วยมีลักษณะที่ชี้ถึงความผิดปกติของการห้ามเลือดทั้ง 2 ระบบ คือ 1. Primary hemostasis ผิดปกติ (สังเกตจาก Bleeding time ที่ยาวนานขึ้นมาก และอาการเลือดออกตามเยื่อบุ) และ 2. Secondary hemostasis ผิดปกติ (สังเกตจาก aPTT ที่ยาวนาน) โดยที่จำนวนเกล็ดเลือดปกติ โรคที่อธิบายความผิดปกติทั้งหมดนี้ได้ดีที่สุดคือ Von Willebrand disease เนื่องจาก von Willebrand factor (vWF) มีหน้าที่ทั้งในการช่วยให้เกล็ดเลือดยึดเกาะกัน (platelet adhesion) และเป็นโปรตีนพาหะของ Factor VIII (ซึ่งอยู่ใน intrinsic pathway)",
            "state": false
        },
        {
            "problem": "15. A 54-year-old man presented with right lower quadrant abdominal pain. Physical and laboratory investigations revealed appendicitis. After appendectomy, histopathological examination showed granulomatous inflammation predominantly composed of eosinophils and Schistosoma ova. Which one is the patient at risk for this parasitic infection?",
            "img": "",
            "choices": "Swimming in a natural water///Drinking unclean water///Eating raw snail///Eating raw vegetable///Waking barefoot",
            "answer": "Swimming in a natural water",
            "select": "",
            "explain": "พยาธิใบไม้ในเลือด (Schistosoma) มีวงจรชีวิตที่ซับซ้อน โดยระยะติดต่อสู่คนคือ cercariae ซึ่งอาศัยอยู่ในหอยน้ำจืดและจะถูกปล่อยออกมาในแหล่งน้ำธรรมชาติ คนจะติดเชื้อเมื่อพยาธิระยะนี้ไชเข้าทางผิวหนังที่สัมผัสกับน้ำที่มีเชื้อปนเปื้อน เช่น การว่ายน้ำ เล่นน้ำ หรือเดินลุยน้ำในแหล่งน้ำธรรมชาติ",
            "state": false
        },
        {
            "problem": "16. All donated blood should be tested with HIV-Antigen and HIV antibody combo screening test first. If blood donated is negative for this test, what would be the further investigation for safety blood transfusion?",
            "img": "",
            "choices": "HIV proviral DNA///Require secondary sample///p24-Ag///HIV RNA///Nucleic acid testing for HIV",
            "answer": "Nucleic acid testing for HIV",
            "select": "",
            "explain": "การตรวจคัดกรองเลือดบริจาคด้วยวิธี antigen/antibody combo test อาจยังให้ผลลบได้หากผู้บริจาคเพิ่งติดเชื้อและยังอยู่ในช่วง window period เพื่อเพิ่มความปลอดภัยสูงสุดและลดความเสี่ยงนี้ การตรวจคัดกรองเลือดบริจาคจึงจำเป็นต้องมีการตรวจด้วยวิธี Nucleic acid testing (NAT) เพิ่มเติม ซึ่งเป็นการตรวจหาสารพันธุกรรมของเชื้อไวรัส (HIV RNA) โดยตรง ทำให้สามารถตรวจพบการติดเชื้อได้เร็วกว่าวิธีอื่น",
            "state": false
        },
        {
            "problem": "17. In which lymphoid organ is the structure shown in the picture found?",
            "img": "https://drive.google.com/open?id=18hFjQLLaKL8BCyds2capRpeJwL-jQwi2&usp=drive_copy",
            "choices": "Spleen, composed of red and white pulp///Bone marrow, the site of hematopoiesis///Tonsil, with large, partially encapsulated lymphoid masses///Thymus, which lacks germinal centers///Lymph node, with follicles around medullary cords and sinuses",
            "answer": "Thymus, which lacks germinal centers",
            "select": "",
            "explain": "ภาพที่เห็นคือโครงสร้างที่เรียกว่า Hassall's corpuscle ซึ่งมีลักษณะเฉพาะคือเป็นกลุ่มของ thymic epithelial cells ที่เรียงตัวกันเป็นชั้นๆ คล้ายหัวหอม โครงสร้างนี้พบได้เฉพาะในส่วน medulla ของต่อมไทมัส (Thymus) เท่านั้น ซึ่งเป็นอวัยวะที่สำคัญในการพัฒนาของ T-lymphocytes",
            "state": false
        },
        {
            "problem": "18. Which of the following adverse effects is characteristic of antimalarial drug chloroquine?",
            "img": "",
            "choices": "Hepatopathy///Cardiopathy///Neuropathy///Retinopathy///Nephropathy",
            "answer": "Retinopathy",
            "select": "",
            "explain": "ผลข้างเคียงที่จำเพาะและมีความสำคัญทางคลินิกของยา Chloroquine โดยเฉพาะเมื่อใช้เป็นเวลานานหรือในขนาดสูง คือความเป็นพิษต่อจอประสาทตา (Retinopathy) ซึ่งอาจทำให้เกิดความเสียหายต่อการมองเห็นอย่างถาวรได้ จึงจำเป็นต้องมีการเฝ้าระวังและตรวจตาเป็นระยะในผู้ที่ใช้ยานี้",
            "state": false
        },
        {
            "problem": "19. A 34-year-old woman presents with fatigue and dyspnea on exertion. She reports heavy menstrual bleeding for the past year. On examination, her conjunctivae are pale without jaundice. Her nails show koilonychia. Atrophic glossitis is found. Liver and spleen are impalpable. Cardiovascular and respiratory exams are unremarkable. Laboratory findings show: Hb9.2 g/dl, MCV 70 fL (normal: 80–100 fL). Which of the following is the most likely diagnosis?",
            "img": "",
            "choices": "Iron deficiency anemia///Sideroblastic anemia///Anemia of chronic disease///Vitamin B12 deficiency///Thalassemia minor",
            "answer": "Iron deficiency anemia",
            "select": "",
            "explain": "ผู้ป่วยมีอาการของภาวะโลหิตจาง (fatigue, dyspnea, pale conjunctivae) ร่วมกับประวัติการเสียเลือดเรื้อรังที่ชัดเจน (heavy menstrual bleeding) การตรวจร่างกายพบอาการแสดงที่จำเพาะต่อการขาดธาตุเหล็กคือ koilonychia (เล็บรูปช้อน) และ atrophic glossitis (ลิ้นเลี่ยน) ร่วมกับผลเลือดที่แสดงภาวะ microcytic anemia (Hb ต่ำ และ MCV < 80 fL) ทำให้การวินิจฉัยภาวะโลหิตจางจากการขาดธาตุเหล็ก (Iron deficiency anemia) มีความเป็นไปได้สูงสุด",
            "state": false
        },
        {
            "problem": "20. A 28-year-old woman presents with fever, rash, and myalgia for 6 days. A well-black crust skin lesion is noted in her groin area. Her lab results show thrombocytopenia, elevated transaminases, and mild leukocytosis. Which of the following tests is most specific for confirming the diagnosis of scrub typhus in this patient?",
            "img": "",
            "choices": "Peripheral smear for malarial parasite///IFA for Orientia tsutsugamushi///ELISA for Dengue IgM///Weil-Felix test///Widal test",
            "answer": "IFA for Orientia tsutsugamushi",
            "select": "",
            "explain": "อาการทางคลินิกของผู้ป่วย โดยเฉพาะการพบแผลลักษณะคล้ายรอยไหม้จากบุหรี่จี้ (eschar) ร่วมกับไข้และผื่น เป็นลักษณะที่จำเพาะอย่างยิ่งของโรคสครับไทฟัส (Scrub typhus) ซึ่งเกิดจากเชื้อ Orientia tsutsugamushi การตรวจทางห้องปฏิบัติการเพื่อยืนยันการวินิจฉัยที่เป็นมาตรฐานและมีความจำเพาะสูงสุดคือการตรวจหาแอนติบอดีต่อเชื้อด้วยวิธี Indirect Immunofluorescence Assay (IFA)",
            "state": false
        },
        {
            "problem": "21. A 62-year-old man on intravenous heparin for DVT develops a marked drop in platelets and a new leg thrombus after 5 days of therapy. Which of the following best explain this adverse effect?",
            "img": "",
            "choices": "Kidney stones///Cardiac arrhythmias///Liver damage///Hemorrhagic stroke///Thrombocytopenia",
            "answer": "Thrombocytopenia",
            "select": "",
            "explain": "อาการของผู้ป่วยเป็นลักษณะคลาสสิกของ Heparin-Induced Thrombocytopenia (HIT) ซึ่งเป็นภาวะแทรกซ้อนที่รุนแรงจากการใช้ยา heparin โดยร่างกายจะสร้างแอนติบอดีต่อ heparin-platelet factor 4 complex ซึ่งแอนติบอดีนี้จะไปกระตุ้นเกล็ดเลือด ทำให้เกิดภาวะลิ่มเลือดอุดตันใหม่ (new thrombosis) และในขณะเดียวกันก็ทำให้เกล็ดเลือดถูกทำลายจนมีจำนวนลดลงอย่างรวดเร็ว (thrombocytopenia) ซึ่งเป็นลักษณะที่ขัดแย้งกัน (paradoxical event)",
            "state": false
        },
        {
            "problem": "22. A 65-year-old woman with type 2 diabetes mellitus is admitted with pneumonia. Sputum culture: Streptococcus pneumoniae. CBC: Hb 10 g/dl, Hct 30%, WBC 18,300 cells/µL, Platelet 285,000 /µL. Which of the following is the most likely finding of WBC in this patient?",
            "img": "",
            "choices": "Lymphocytosis///Neutrophilia///Pseudo-Pelger-Huët anomaly///Atypical lymphocyte///Hypersegmented neutrophils",
            "answer": "Neutrophilia",
            "select": "",
            "explain": "การติดเชื้อแบคทีเรียเฉียบพลัน (acute bacterial infection) เช่น ปอดอักเสบจากเชื้อ Streptococcus pneumoniae ร่างกายจะตอบสนองโดยการเพิ่มการสร้างและปล่อยเม็ดเลือดขาวชนิด Neutrophil ออกสู่กระแสเลือดเพื่อต่อสู้กับการติดเชื้อ ทำให้ผลการตรวจ CBC พบภาวะเม็ดเลือดขาวสูง (Leukocytosis) โดยมีสัดส่วนของ Neutrophil สูงเป็นหลัก เรียกว่า Neutrophilia",
            "state": false
        },
        {
            "problem": "23. Most of the iron in human plasma binds to which plasma protein?",
            "img": "",
            "choices": "Hepcidin///Transferrin///Globulin///Ferroportin///Albumin",
            "answer": "Transferrin",
            "select": "",
            "explain": "Transferrin เป็นโปรตีนในพลาสมาที่ทำหน้าที่หลักในการจับกับธาตุเหล็ก (iron) และขนส่งไปยังส่วนต่างๆ ของร่างกาย เช่น ไขกระดูกเพื่อใช้ในการสร้างเม็ดเลือดแดง หรือตับและม้ามเพื่อการเก็บสะสม โดย Transferrin จะช่วยให้ธาตุเหล็กที่ละลายน้ำได้ไม่ดีสามารถเดินทางในกระแสเลือดได้อย่างปลอดภัยและมีประสิทธิภาพ",
            "state": false
        },
        {
            "problem": "24. A 72-year-old man with COPD has chronic hypoxemia (SaO2 86%). Which cell type is the primary oxygen sensor that triggers increased erythropoietin production?",
            "img": "",
            "choices": "Peritubular interstitial fibroblast-like cells in the renal cortex///Proximal tubular epithelial cells///Hepatocytes in zone 3 of the liver acinus///Juxtaglomerular apparatus cells///Macula densa cells",
            "answer": "Peritubular interstitial fibroblast-like cells in the renal cortex",
            "select": "",
            "explain": "ในภาวะพร่องออกซิเจนเรื้อรัง (chronic hypoxemia) ร่างกายจะตอบสนองโดยการสร้างฮอร์โมน Erythropoietin (EPO) เพิ่มขึ้นเพื่อกระตุ้นการสร้างเม็ดเลือดแดง เซลล์หลักที่ทำหน้าที่เป็นตัวตรวจจับระดับออกซิเจน (oxygen sensor) และผลิต EPO ในผู้ใหญ่คือ Peritubular interstitial fibroblast-like cells ซึ่งเป็นเซลล์ที่อยู่ในเนื้อเยื่อของไตบริเวณ renal cortex",
            "state": false
        },
        {
            "problem": "25. A 70-year-old man presents with sudden severe back pain after lifting a light object. X-ray of the spine shows compression fracture of a vertebral body with multiple lytic bone lesions. Laboratory findings: anemia and elevated total serum protein. Which of the following is the most likely diagnosis?",
            "img": "",
            "choices": "Osteosarcoma///Paget disease of bone///Metastatic carcinoma///Multiple myeloma///Osteoporosis",
            "answer": "Multiple myeloma",
            "select": "",
            "explain": "กลุ่มอาการของผู้ป่วยรายนี้เป็นลักษณะคลาสสิกของโรค Multiple Myeloma ซึ่งเป็นมะเร็งของพลาสมาเซลล์ในไขกระดูก ได้แก่ 1. กระดูกพรุนและถูกทำลายเป็นหย่อมๆ (multiple lytic bone lesions) ทำให้เกิดอาการปวดกระดูกและกระดูกหักง่าย (pathologic fracture) 2. ภาวะโลหิตจาง (anemia) จากการที่เซลล์มะเร็งไปแทนที่ไขกระดูกปกติ 3. ระดับโปรตีนในเลือดสูง (elevated total serum protein) จากการที่เซลล์มะเร็งสร้าง M-protein ซึ่งเป็น monoclonal immunoglobulin จำนวนมาก",
            "state": false
        },
        {
            "problem": "26. Which of the following is the condition associated with this finding from methylene blue staining?",
            "img": "https://drive.google.com/open?id=14lkydIehuX2ahKUsl35BxaAcMiVykzG9&usp=drive_copy",
            "choices": "Iron deficiency anemia///G6PD deficiency///Folate deficiency///Hereditary spherocytosis///Hemoglobin H disease",
            "answer": "Hemoglobin H disease",
            "select": "",
            "explain": "ภาพจากการย้อมพิเศษด้วย supravital stain (เช่น brilliant cresyl blue หรือ methylene blue) แสดงให้เห็นเม็ดเลือดแดงที่มีลักษณะเป็นจุดเล็กๆ กระจายทั่วเซลล์คล้ายลูกกอล์ฟ (golf ball appearance) ซึ่งเกิดจากการตกตะกอนของ Hemoglobin H (HbH) ที่ไม่เสถียร (เกิดจาก beta-globin chains 4 สายรวมตัวกัน) ลักษณะนี้เป็นสิ่งที่พบได้จำเพาะในโรค Hemoglobin H disease ซึ่งเป็นกลุ่มย่อยของ Alpha-thalassemia",
            "state": false
        },
        {
            "problem": "27. A 65-year-old man with pneumonia develops confusion and hypotension. His labs show lactate 3.2 mmol/L and WBC 18,000 cells/µL. According to the Sepsis-3 definition, which of the following best defines sepsis?",
            "img": "",
            "choices": "Infection plus SIRS criteria ≥2///Bacteremia with shock///Infection plus evidence of organ dysfunction///Fever, tachycardia, and hypotension///Infection with WBC >12,000 or <4,000",
            "answer": "Infection plus evidence of organ dysfunction",
            "select": "",
            "explain": "ตามนิยามสากล Sepsis-3 (ปี 2016) ภาวะ Sepsis หมายถึงภาวะที่การทำงานของอวัยวะล้มเหลวที่อาจเป็นอันตรายถึงชีวิต ซึ่งเกิดจากการที่ร่างกายตอบสนองต่อการติดเชื้ออย่างผิดปกติ (life-threatening organ dysfunction caused by a dysregulated host response to infection) ในผู้ป่วยรายนี้มีการติดเชื้อ (pneumonia) ร่วมกับหลักฐานของ organ dysfunction หลายระบบ เช่น ระบบประสาท (confusion), ระบบไหลเวียนเลือด (hypotension), และ metabolic (lactate สูง)",
            "state": false
        },
        {
            "problem": "28. A 26-year-old Extern accidentally sustains a needle-stick injury while drawing blood from a known HIV-positive patient with a high viral load. The exposure is from a hollow-bore needle that penetrated the skin. The intern presents to the emergency department 1 hour after the incident. Which of the following is the most appropriate next step?",
            "img": "",
            "choices": "Wait for his HIV ELISA result before starting therapy///No action needed if the source patient is on ART///Start 2-drug PEP regimen after baseline testing///Observe and test for HIV after 3 weeks///Start 3-drug PEP regimen immediately",
            "answer": "Start 3-drug PEP regimen immediately",
            "select": "",
            "explain": "กรณีนี้ถือเป็นการสัมผัสเชื้อ HIV ที่มีความเสี่ยงสูงมาก (เข็มมีรู, ผู้ป่วยต้นทางมีเชื้อปริมาณมาก) ตามแนวทางปฏิบัติสากลจะต้องเริ่มให้ยาต้านไวรัสเพื่อป้องกันการติดเชื้อ (Post-Exposure Prophylaxis หรือ PEP) โดยเร็วที่สุดเท่าที่จะทำได้ (as soon as possible) โดยไม่ต้องรอผลเลือดของบุคลากรที่สัมผัส และเนื่องจากเป็นความเสี่ยงสูงจึงแนะนำให้ใช้สูตรยา 3 ชนิด (3-drug PEP regimen) เป็นเวลา 28 วัน",
            "state": false
        },
        {
            "problem": "29. A 20-year-old woman presents with painless cervical lymphadenopathy. She also reports night sweats and weight loss. Chest X-ray shows a mediastinal mass. Lymph node biopsy reveals Reed-Sternberg-Hodgkin cells in a background of fibrosis. Which of the following is the most likely diagnosis?",
            "img": "",
            "choices": "Classic Hodgkin lymphoma///Diffuse large B-cell lymphoma///Thymoma///T-lymphoblastic lymphoma///Follicular lymphoma",
            "answer": "Classic Hodgkin lymphoma",
            "select": "",
            "explain": "การวินิจฉัยโรคนี้มีความชัดเจนจากหลายองค์ประกอบ ได้แก่ 1. อาการ B symptoms (เหงื่อออกกลางคืน, น้ำหนักลด) 2. ต่อมน้ำเหลืองโตที่คอโดยไม่เจ็บ และมีก้อนในช่องอก (mediastinal mass) ในผู้ป่วยอายุน้อย 3. ผลการตรวจชิ้นเนื้อ (biopsy) ที่พบเซลล์จำเพาะคือ Reed-Sternberg cells ซึ่งเป็น pathognomonic finding (ลักษณะที่บ่งชี้โรคโดยเฉพาะ) ของโรค Hodgkin lymphoma",
            "state": false
        },
        {
            "problem": "30. A 30-year-old man has watery diarrhea after eating raw freshwater fish. Laboratory test shows parasite ova in stool. Which blood cell is most likely elevated?",
            "img": "",
            "choices": "B lymphocyte///Monocyte///Basophil///Eosinophil///T lymphocyte",
            "answer": "Eosinophil",
            "select": "",
            "explain": "การติดเชื้อพยาธิ (parasitic infection) โดยเฉพาะกลุ่มพยาธิตัวกลมและตัวแบน (helminthic infections) ซึ่งมักมาจากการบริโภคอาหารดิบ เช่น ปลา freshwater ดิบ จะกระตุ้นระบบภูมิคุ้มกันของร่างกายให้ตอบสนองโดยการเพิ่มจำนวนเม็ดเลือดขาวชนิด Eosinophil ในกระแสเลือดอย่างเด่นชัด ซึ่งเรียกว่าภาวะ Eosinophilia",
            "state": false
        },
        {
            "problem": "31. Which of the following is the condition associated with prolonged bleeding time?",
            "img": "",
            "choices": "Congenital platelet disorders///Vitamin K deficiency///Factor XII deficiency///Acute liver failure///Hemophilia",
            "answer": "Congenital platelet disorders",
            "select": "",
            "explain": "Bleeding time เป็นการทดสอบการทำงานของ primary hemostasis ซึ่งเกี่ยวข้องกับการทำงานของเกล็ดเลือด (platelet function) และหลอดเลือด การที่ bleeding time ยาวนานผิดปกติจึงบ่งชี้ถึงความผิดปกติในกระบวนการนี้ ซึ่งอาจเกิดจากจำนวนเกล็ดเลือดต่ำ (thrombocytopenia) หรือการทำงานของเกล็ดเลือดผิดปกติ (platelet dysfunction) เช่นในกลุ่มโรค congenital platelet disorders (เช่น Glanzmann thrombasthenia, Bernard-Soulier syndrome)",
            "state": false
        },
        {
            "problem": "32. A 28-year-old pregnant woman, blood group O Rh(D)-negative, has an IAT positive screen. Which best explains the test and its clinical relevance?",
            "img": "",
            "choices": "Used primarily for diagnosing PNH (CD55/CD59 deficiency)///Detects in-vivo coating of patient RBCs with antibody or complement///Measures strength of IgM agglutination at 4 °C///Detects free antibodies in serum capable of reacting with reagent RBCs in-vitro///Cannot detect clinically significant alloantibodies",
            "answer": "Detects free antibodies in serum capable of reacting with reagent RBCs in-vitro",
            "select": "",
            "explain": "Indirect Antiglobulin Test (IAT) หรือ antibody screening test เป็นการตรวจหาแอนติบอดีที่ลอยอยู่อย่างอิสระในซีรัมของผู้ป่วย (free antibodies) ว่าสามารถทำปฏิกิริยากับเม็ดเลือดแดงตัวอย่าง (reagent RBCs) ที่ทราบชนิดของแอนติเจนได้หรือไม่ (in-vitro) ในหญิงตั้งครรภ์ Rh(D)-negative การมี IAT positive บ่งชี้ว่าอาจมีการสร้าง alloantibody (เช่น anti-D) ซึ่งอาจข้ามรกไปทำลายเม็ดเลือดแดงของทารกและทำให้เกิด Hemolytic disease of the fetus and newborn (HDFN) ได้",
            "state": false
        },
        {
            "problem": "33. A 46-year-old man who lives in Khon Kaen Province came to the hospital with a 2-day history of high fever, chills, and generalized malaise. Which of the following information would be most useful for the clinician to consider malaria infection?",
            "img": "",
            "choices": "He collected mushrooms in the forest near his house.///He has experienced episodes of fever and chills.///He has experienced mosquito bites.///He traveled to Tak Province 2 weeks ago.///His house is located near a rice field.",
            "answer": "He traveled to Tak Province 2 weeks ago.",
            "select": "",
            "explain": "แม้ว่าอาการไข้สูงหนาวสั่นจะเข้าได้กับมาลาเรีย แต่การวินิจฉัยต้องอาศัยประวัติทางระบาดวิทยา (epidemiological history) ที่สำคัญ จังหวัดขอนแก่นไม่ใช่พื้นที่ระบาดของมาลาเรีย แต่จังหวัดตากเป็นพื้นที่ที่มีการระบาดสูง (endemic area) การมีประวัติเดินทางไปยังพื้นที่ระบาดภายในช่วงระยะฟักตัวของโรค (ประมาณ 1-4 สัปดาห์) เป็นข้อมูลที่สำคัญที่สุดที่ทำให้แพทย์นึกถึงและตรวจหาเชื้อมาลาเรีย",
            "state": false
        },
        {
            "problem": "34. Which substance, released from the dense granules of activated platelets, causes vasoconstriction at the site of injury, thereby helping to reduce blood flow?",
            "img": "",
            "choices": "Prostaglandin I2 (PGI2)///Thromboxane A2 (TXA2)///Adenosine diphosphate (ADP)///Nitric Oxide (NO)///Serotonin (5-HT)",
            "answer": "Serotonin (5-HT)",
            "select": "",
            "explain": "เมื่อเกล็ดเลือดถูกกระตุ้น (activated) จะมีการหลั่งสารต่างๆ ออกมาจาก granules ภายในเซลล์ โดยสาร Serotonin (5-HT) และ Thromboxane A2 (TXA2) จะถูกหลั่งออกมาและมีฤทธิ์ทำให้หลอดเลือดหดตัว (vasoconstriction) บริเวณที่บาดเจ็บ ซึ่งช่วยลดการไหลเวียนของเลือดมายังบริเวณนั้นและช่วยในการห้ามเลือด อย่างไรก็ตาม Serotonin ถูกเก็บไว้ใน dense granules ในขณะที่ TXA2 ถูกสร้างขึ้นใหม่จาก arachidonic acid เมื่อเกล็ดเลือดถูกกระตุ้น ใน choice นี้ Serotonin คือคำตอบที่ถูก",
            "state": false
        },
        {
            "problem": "35. A 12-year-old boy presents with a rapidly enlarging jaw mass. Biopsy shows sheets of medium-sized lymphoid cells with high mitotic activity and numerous tingible-body macrophages, creating a “starry sky” appearance. Which of the following genetic abnormalities is most characteristic of this disease?",
            "img": "",
            "choices": "t(8;14) → c-MYC overexpression///t(9;22) → BCR-ABL1 fusion///t(15;17) → PML-RARA fusion///t(14;18) → BCL2 overexpression///t(11;14) → Cyclin D1 overexpression",
            "answer": "t(8;14) → c-MYC overexpression",
            "select": "",
            "explain": "ลักษณะทางคลินิก (ก้อนที่ขากรรไกรโตเร็วในเด็ก) และผลทางพยาธิวิทยา (starry sky appearance) เป็นลักษณะคลาสสิกของ Burkitt lymphoma ซึ่งเป็นมะเร็งต่อมน้ำเหลืองชนิด B-cell ที่มีความรุนแรงสูง โรคนี้มีความเกี่ยวข้องทางพันธุกรรมที่จำเพาะคือการย้ายตำแหน่งของโครโมโซม (translocation) ระหว่างโครโมโซมคู่ที่ 8 และ 14 หรือ t(8;14) ซึ่งทำให้เกิดการแสดงออกของ c-MYC oncogene มากเกินไป (overexpression) ส่งผลให้เซลล์มีการแบ่งตัวอย่างรวดเร็วและควบคุมไม่ได้",
            "state": false
        },
        {
            "problem": "36. Ten minutes after starting PRBCs transfusion, a patient develops fever, flank pain, hypotension, and dark urine. Which is the best next step management after stop transfusion?",
            "img": "",
            "choices": "Give acetaminophen and slow the rate///Give furosemide and continue transfusion///Administer IV steroids and restart if stable///Order echocardiogram///Maintain IV with saline; workup for blood incompatibility",
            "answer": "Maintain IV with saline; workup for blood incompatibility",
            "select": "",
            "explain": "อาการที่เกิดขึ้นอย่างเฉียบพลันหลังเริ่มให้เลือด (ไข้, ปวดเอว, ความดันตก, ปัสสาวะสีเข้ม) บ่งชี้ถึงภาวะ Acute Hemolytic Transfusion Reaction (AHTR) ซึ่งเป็นภาวะฉุกเฉินทางการแพทย์ สิ่งที่ต้องทำทันทีคือ 1. หยุดการให้เลือดทันที 2. รักษาประคับประคองผู้ป่วย เช่น ให้สารน้ำทางหลอดเลือดดำ (IV saline) เพื่อรักษาความดันโลหิตและป้องกันภาวะไตวาย 3. ส่งเลือดและปัสสาวะเพื่อตรวจหาสาเหตุของ incompatibility (เช่น ตรวจ clerical check, DAT, repeat crossmatch)",
            "state": false
        },
        {
            "problem": "37. A 62-year-old man with GI blood loss starts to mount an erythropoietic response. Which erythroid-derived signal most directly suppresses hepatic hepcidin, increasing iron export from enterocytes and macrophages?",
            "img": "",
            "choices": "Hepatocyte growth factor (HGF)///Interleukin-6///Transferrin receptor 2 (TfR2) signaling///Erythroferrone (ERFE)///Bone morphogenetic protein 6 (BMP6)",
            "answer": "Erythroferrone (ERFE)",
            "select": "",
            "explain": "เมื่อมีการเสียเลือด ร่างกายจะตอบสนองโดยการเพิ่มการสร้างเม็ดเลือดแดง (erythropoiesis) ซึ่งต้องการธาตุเหล็กจำนวนมาก เซลล์เม็ดเลือดแดงตัวอ่อน (erythroblasts) ในไขกระดูกจะหลั่งฮอร์โมนที่ชื่อว่า Erythroferrone (ERFE) ซึ่งจะเดินทางไปยังตับและทำหน้าที่ยับยั้งการสร้าง hepcidin การที่ hepcidin ลดลงจะทำให้มีการดูดซึมธาตุเหล็กจากลำไส้และปล่อยธาตุเหล็กจากแหล่งเก็บสะสม (macrophages) เพิ่มขึ้น เพื่อนำไปใช้ในการสร้างเม็ดเลือดแดง",
            "state": false
        },
        {
            "problem": "38. A 13-year-old girl with thalassemia has been receiving regular blood transfusions. She is subsequently found to have hemochromatosis. Which of the following drugs is most appropriate to manage her iron overload?",
            "img": "",
            "choices": "Ferumoxytol///Deferasirox///Pegfilgrastim///Idarucizumab///Eltrombopag",
            "answer": "Deferasirox",
            "select": "",
            "explain": "ผู้ป่วยธาลัสซีเมียที่ได้รับเลือดเป็นประจำจะมีความเสี่ยงต่อภาวะธาตุเหล็กเกิน (iron overload หรือ secondary hemochromatosis) ซึ่งเป็นอันตรายต่ออวัยวะต่างๆ การรักษาคือการให้ยาขับธาตุเหล็ก (iron chelating agent) ซึ่ง Deferasirox เป็นยาขับธาตุเหล็กชนิดรับประทานที่นิยมใช้ในปัจจุบันเพื่อจัดการกับภาวะนี้",
            "state": false
        },
        {
            "problem": "39. Which of the following anti-HIV drug is classified as integrase transfer strand inhibitor?",
            "img": "",
            "choices": "Abacavir (ABC)///Dolutegravir (DTG)///Atasanavir///Lamivudine (3TC)///Tenofovir disoproxil fumarate (TDF)",
            "answer": "Dolutegravir (DTG)",
            "select": "",
            "explain": "ยาต้านไวรัส HIV มีหลายกลุ่มตามกลไกการออกฤทธิ์ Dolutegravir (DTG) จัดอยู่ในกลุ่ม Integrase Strand Transfer Inhibitors (INSTIs) ซึ่งทำหน้าที่ยับยั้งเอนไซม์ integrase ของไวรัส ทำให้ไวรัสไม่สามารถแทรกสารพันธุกรรมของตัวเองเข้ากับ DNA ของ host cell ได้ ส่วน Abacavir, Lamivudine, Tenofovir เป็นกลุ่ม NRTIs และ Atasanavir เป็นกลุ่ม Protease Inhibitor",
            "state": false
        },
        {
            "problem": "40. A 58-year-old man with suspected G6PD deficiency presents with acute hemolysis after dapsone. Pulse ox is low; co-oximetry shows methemoglobinemia 18%. Which management is contraindicated (or likely ineffective) in this patient?",
            "img": "",
            "choices": "Stop the offending drug and hydrate///Ascorbic acid (vitamin C) as adjunct///Transfusion if hemodynamically unstable///Methylene blue IV///High-flow oxygen and supportive care",
            "answer": "Methylene blue IV",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะ methemoglobinemia (เกิดจากยา dapsone) ร่วมกับ G6PD deficiency การรักษามาตรฐานของ methemoglobinemia คือการให้ Methylene blue IV อย่างไรก็ตาม Methylene blue ต้องการเอนไซม์ G6PD ในการเปลี่ยนให้อยู่ในรูป reduced form เพื่อที่จะไปลด methemoglobin ได้ ในผู้ป่วยที่ขาด G6PD การให้ Methylene blue จึงไม่มีประสิทธิภาพและอาจทำให้เม็ดเลือดแดงแตกมากขึ้น (hemolysis) ได้ ดังนั้นจึงเป็นข้อห้ามใช้",
            "state": false
        },
        {
            "problem": "41. A 54-year-old man (blood group B, RhD+) requires plasma during massive transfusion; only limited inventory is available. Which plasma group is universally safest for ABO compatibility?",
            "img": "",
            "choices": "Group A plasma///Any group if RhD matched///Group O plasma///Group AB plasma///Group B plasma only",
            "answer": "Group AB plasma",
            "select": "",
            "explain": "หลักการให้พลาสมาจะตรงข้ามกับการให้เม็ดเลือดแดง พลาสมาของหมู่ AB ไม่มีทั้ง anti-A และ anti-B antibodies จึงสามารถให้กับผู้ป่วยได้ทุกหมู่เลือด (A, B, AB, O) โดยไม่ทำให้เม็ดเลือดแดงของผู้ป่วยจับกลุ่มกัน ดังนั้น พลาสมาหมู่ AB จึงถือเป็น universal donor สำหรับพลาสมา",
            "state": false
        },
        {
            "problem": "42. A 47-year-old man originally from the Caribbean presents with several months of skin lesions, generalized lymphadenopathy, and hypercalcemia. Blood smear shows atypical lymphocytes with multilobulated (“flower-shaped”) nuclei. HTLV-1 antibodies are detected in the serum. Which of the following conditions is most strongly associated with this virus?",
            "img": "",
            "choices": "Adult T-cell leukemia/lymphoma///Chronic lymphocytic leukemia///Hairy cell leukemia///Hodgkin lymphoma///Burkitt lymphoma",
            "answer": "Adult T-cell leukemia/lymphoma",
            "select": "",
            "explain": "การติดเชื้อไวรัส Human T-lymphotropic virus type 1 (HTLV-1) ซึ่งพบมากในบางพื้นที่เช่น แคริบเบียน ญี่ปุ่น เป็นสาเหตุหลักของโรค Adult T-cell leukemia/lymphoma (ATLL) ซึ่งมีลักษณะทางคลินิกที่สำคัญคือ skin lesions, lymphadenopathy, hypercalcemia และการพบเซลล์มะเร็ง T-cell ที่มีนิวเคลียสลักษณะเหมือนดอกไม้ (flower cells) ในเลือด",
            "state": false
        },
        {
            "problem": "43. Which of the following is the x-linked inheritance?",
            "img": "",
            "choices": "Congenital platelet disorders///Vitamin K deficiency///von Willebrand disease///Immune thrombocytopenia///Hemophilia",
            "answer": "Hemophilia",
            "select": "",
            "explain": "Hemophilia A (ขาด Factor VIII) และ Hemophilia B (ขาด Factor IX) เป็นโรคเลือดออกผิดปกติทางพันธุกรรมที่ถ่ายทอดแบบ X-linked recessive inheritance ซึ่งหมายความว่ายีนที่ผิดปกติอยู่บนโครโมโซม X ทำให้โรคนี้มักแสดงอาการในเพศชาย ส่วนเพศหญิงมักเป็นพาหะของโรค",
            "state": false
        },
        {
            "problem": "44. Which of the following best describes the primary role of von Willebrand Factor (vWF) in initiating primary hemostasis after a blood vessel injury?",
            "img": "",
            "choices": "Convert fibrinogen to fibrin///Break down fibrin clots///Mediates platelet adhesion to collagen///Cofactor for Factor VII activation///Inhibits platelet aggregation",
            "answer": "Mediates platelet adhesion to collagen",
            "select": "",
            "explain": "ในกระบวนการห้ามเลือดระยะแรก (primary hemostasis) เมื่อหลอดเลือดได้รับบาดเจ็บและเนื้อเยื่อใต้ชั้น endothelium (subendothelial collagen) ถูกเปิดออก von Willebrand Factor (vWF) จะทำหน้าที่เป็นสะพานเชื่อมระหว่าง collagen ที่ถูกเปิดออกกับ GP Ib receptor บนผิวของเกล็ดเลือด ทำให้เกิดการยึดเกาะของเกล็ดเลือด (platelet adhesion) ซึ่งเป็นขั้นตอนแรกที่สำคัญอย่างยิ่ง",
            "state": false
        },
        {
            "problem": "45. A 28-year-old man presents on day 2 of high fever, myalgia, and headache. He is suspected of having dengue. Which of the following is the most appropriate diagnostic test at this stage?",
            "img": "",
            "choices": "Dengue IgM///Heterophile Antibody///Dengue PCR///Dengue IgG///NS1 antigen test",
            "answer": "NS1 antigen test",
            "select": "",
            "explain": "ในช่วง 1-5 วันแรกของการติดเชื้อไข้เลือดออก (febrile phase) ร่างกายจะยังไม่สร้างแอนติบอดี (IgM/IgG) ในปริมาณที่ตรวจพบได้ แต่จะสามารถตรวจพบส่วนประกอบของเชื้อไวรัสที่เรียกว่า Non-structural protein 1 (NS1) antigen ได้ในกระแสเลือด ดังนั้นในช่วง 2 วันแรกของไข้ การตรวจ NS1 antigen test หรือ Dengue PCR (ซึ่งตรวจหาสารพันธุกรรมของไวรัส) จะมีความไวสูงสุดในการวินิจฉัย",
            "state": false
        },
        {
            "problem": "46. A 24-year-old Thai male exsanguinating trauma patient, unknown blood group, needs immediate packed red blood cells (PRBCs). He is hemodynamically unstable after aggressively IV fluid. Which initial RBC is most appropriate?",
            "img": "",
            "choices": "Group O RhD-positive, leukoreduced, uncrossmatched///Group AB RhD-negative, uncrossmatched///Group O RhD-negative, leukoreduced, crossmatched at IAT phase///Group O RhD-positive, irradiated PRBCS///Group A RhD-negative, crossmatch-compatible",
            "answer": "Group O RhD-positive, leukoreduced, uncrossmatched",
            "select": "",
            "explain": "ในภาวะฉุกเฉินที่ผู้ป่วยเสียเลือดมากและไม่ทราบหมู่เลือด จะต้องให้เลือดหมู่ O ซึ่งเป็น universal donor เนื่องจากไม่มี A และ B antigen บนผิวเม็ดเลือดแดง สำหรับผู้ป่วยชายชาวไทยซึ่งประชากรส่วนใหญ่เป็น RhD-positive การให้เลือด O RhD-positive สามารถทำได้และมีความเสี่ยงต่ำมาก การให้เลือดโดยไม่ต้องรอผล crossmatch (uncrossmatched) เป็นสิ่งจำเป็นในสถานการณ์เร่งด่วนนี้",
            "state": false
        },
        {
            "problem": "47. A 17-year-old student presents with sore throat, fever, and fatigue for 1 week. On exam, he has bilateral tonsillar enlargement with white exudates, tender posterior cervical lymphadenopathy, and mild splenomegaly. A rapid strep test is negative, but he was recently prescribed amoxicillin, after which he developed a generalized maculopapular rash. Which of the following is the most likely diagnosis?",
            "img": "",
            "choices": "Cytomegalovirus mononucleosis///Infectious mononucleosis (EBV)///Herpes simplex virus pharyngitis///Acute HIV infection///Group A Streptococcal pharyngitis",
            "answer": "Infectious mononucleosis (EBV)",
            "select": "",
            "explain": "กลุ่มอาการของผู้ป่วย (ไข้, เจ็บคอ, ต่อมน้ำเหลืองที่คอโต, ม้ามโต) เป็นลักษณะคลาสสิกของโรค Infectious Mononucleosis ซึ่งส่วนใหญ่เกิดจากเชื้อ Epstein-Barr Virus (EBV) สิ่งที่ช่วยสนับสนุนการวินิจฉัยอย่างมากคือการเกิดผื่น maculopapular rash หลังจากได้รับยา amoxicillin ซึ่งพบได้บ่อยในผู้ป่วย EBV infection",
            "state": false
        },
        {
            "problem": "48. What is the mechanism of action of antimalarial agent atovaquone?",
            "img": "",
            "choices": "Inhibit heme polymerase///Interrupt protein synthesis///Increase malarial intracellular ROS///Interfere with folic acid metabolism///Block electron transportation in mitochondria",
            "answer": "Block electron transportation in mitochondria",
            "select": "",
            "explain": "Atovaquone เป็นยาต้านมาลาเรียที่ออกฤทธิ์โดยการยับยั้งการทำงานของ cytochrome bc1 complex ในกระบวนการ electron transport chain ของไมโตคอนเดรียในเชื้อมาลาเรีย ซึ่งเป็นการขัดขวางการสร้างพลังงาน (ATP synthesis) และการสังเคราะห์ pyrimidine ของเชื้อ ทำให้เชื้อตายในที่สุด",
            "state": false
        },
        {
            "problem": "49. Which of the following is the cause of eosinophilia?",
            "img": "",
            "choices": "Myelodysplastic syndrome///Cytomegalovirus retinitis///Pulmonary tuberculosis///Pulmonary nocardiasis///Strongyloides infestation",
            "answer": "Strongyloides infestation",
            "select": "",
            "explain": "ภาวะ Eosinophilia หรือการมีจำนวนเม็ดเลือดขาวชนิด Eosinophil สูงในเลือด มีสาเหตุได้หลายอย่าง แต่สาเหตุที่พบบ่อยและสำคัญที่สุดอย่างหนึ่งคือการติดเชื้อพยาธิ โดยเฉพาะพยาธิที่บุกรุกเนื้อเยื่อ (tissue-invasive helminths) เช่น พยาธิเส้นด้าย Strongyloides stercoralis",
            "state": false
        },
        {
            "problem": "50. A 12-year-old boy from Surat Thani Province presented with a high fever (39°C). Physical examination revealed neck stiffness, heart and lungs sounded normal. The clinician suspected for filaria infection. What is the best time to collect blood for detection of microfilariae?",
            "img": "",
            "choices": "10.00 a.m. - 02.00 p.m.///10.00 p.m. – 02.00 a.m.///06.00 a.m. - 10.00 a.m.///01.00 p.m. – 05.00 p.m.///10.00 a.m. - 01.00 a.m.",
            "answer": "10.00 p.m. – 02.00 a.m.",
            "select": "",
            "explain": "เชื้อพยาธิฟิลาเรียหรือพยาธิโรคเท้าช้าง (Wuchereria bancrofti และ Brugia malayi) ที่เป็นสาเหตุส่วนใหญ่ในภูมิภาคเอเชียตะวันออกเฉียงใต้ มีลักษณะพิเศษคือตัวอ่อน (microfilariae) จะออกมาปรากฏในกระแสเลือดส่วนปลาย (peripheral blood) เป็นจำนวนมากที่สุดในช่วงเวลากลางคืน หรือที่เรียกว่า nocturnal periodicity ดังนั้นช่วงเวลาที่ดีที่สุดในการเจาะเลือดเพื่อตรวจหาเชื้อคือช่วงกลางดึก ประมาณ 22.00 น. ถึง 02.00 น.",
            "state": false
        },
        {
            "problem": "51. A 65-year-old receives incompatible PRBCs and develops DIC within an hour. Which is the most common cause of acute hemolytic transfusion reaction (AHTR)?",
            "img": "",
            "choices": "Bacterial contamination of unit///Alloantibody to Kidd (Jk) antigen///Clerical/identification error///Storage lesion of RBCs///IgA deficiency with anti-IgA",
            "answer": "Clerical/identification error",
            "select": "",
            "explain": "สาเหตุที่พบบ่อยที่สุดของ Acute Hemolytic Transfusion Reaction (AHTR) ซึ่งเป็นภาวะแทรกซ้อนที่รุนแรงที่สุดจากการให้เลือด คือความผิดพลาดของมนุษย์ (human error) เช่น การระบุตัวผู้ป่วยผิดพลาด การติดป้ายชื่อที่ถุงเลือดผิด หรือการหยิบเลือดผิดถุงให้ผู้ป่วยผิดคน ซึ่งนำไปสู่การให้เลือดที่เข้ากันไม่ได้ตามระบบ ABO (ABO incompatibility)",
            "state": false
        },
        {
            "problem": "52. A 45-year-old man had high grade of fever, headache myalgia for 5 days. Physical exam. Black crust at perineum. BT 39 C, BP 110/60 mmHg, PR 109/min, RR 20/min CBC: Hct 40%, WBC 6,500 cells/mm PMN 65%, L 23%, mo 2% platelet count 170,000/mm What is the pathogenesis of this disease ?",
            "img": "",
            "choices": "Vascular injury///Autoantibody///Direct invasion///T-cell apoptosis///Antibody enhancement",
            "answer": "Vascular injury",
            "select": "",
            "explain": "อาการของผู้ป่วย โดยเฉพาะไข้สูงและแผล eschar (black crust) บ่งชี้ถึงโรคในกลุ่ม Rickettsial disease เช่น Scrub typhus พยาธิกำเนิดหลักของโรคกลุ่มนี้คือเชื้อจะเข้าไปเจริญในเซลล์บุผนังหลอดเลือด (endothelial cells) ทำให้เกิดการอักเสบของหลอดเลือดขนาดเล็กทั่วร่างกาย (systemic vasculitis) ซึ่งนำไปสู่การรั่วของสารน้ำออกนอกหลอดเลือดและอาการแสดงต่างๆ ของโรค",
            "state": false
        },
        {
            "problem": "53. A 16-year-old boy is brought to the clinic by his mother because of repeated episodes of painful swelling in his knees and elbows over the past year. The mother reports that minor trauma often leads to prolonged bleeding. His maternal uncle had a history of frequent joint bleeds requiring hospitalization. On examination, the patient has swollen, tender knees with decreased range of motion. There is no petechiae or splenomegaly. Laboratory results show normal platelet count and normal bleeding time, but markedly prolonged activated partial thromboplastin time (aPTT). Which of the following is the most likely diagnosis in this patient?",
            "img": "",
            "choices": "Vitamin K deficiency///Immune thrombocytopenic purpura (ITP)///Hemophilia///Acquired factor VIII inhibitor///von Willebrand disease",
            "answer": "Hemophilia",
            "select": "",
            "explain": "ผู้ป่วยมีลักษณะที่บ่งชี้ถึงโรค Hemophilia อย่างชัดเจน ได้แก่ 1. ประวัติเลือดออกในข้อ (hemarthrosis) ซ้ำๆ 2. ประวัติครอบครัวที่สอดคล้องกับการถ่ายทอดทางพันธุกรรมแบบ X-linked (มีประวัติในลุงฝั่งแม่) 3. ผลการตรวจทางห้องปฏิบัติการที่แสดงความผิดปกติของ secondary hemostasis ใน intrinsic pathway (aPTT ยาวนานผิดปกติ) โดยที่ primary hemostasis ปกติ (platelet count และ bleeding time ปกติ)",
            "state": false
        },
        {
            "problem": "54. Which of the following pair of drug and ADR are correct?",
            "img": "",
            "choices": "AZT - Peripheral neuropathy///Abacavir - Bone marrow suppression///Efavirenz - Lipodystrophy///TDF - Nephrotoxicity///Saquinavir - Cardiotoxicity",
            "answer": "TDF - Nephrotoxicity",
            "select": "",
            "explain": "Tenofovir disoproxil fumarate (TDF) เป็นยาต้านไวรัสในกลุ่ม NRTI ที่มีผลข้างเคียงที่สำคัญและเป็นที่รู้จักกันดีคือความเป็นพิษต่อไต (Nephrotoxicity) ซึ่งอาจทำให้เกิดภาวะ Fanconi syndrome หรือไตวายเฉียบพลันได้ จึงต้องมีการติดตามการทำงานของไตในผู้ที่ใช้ยานี้ ส่วน AZT (Zidovudine) ทำให้เกิด bone marrow suppression และ Efavirenz ทำให้เกิดอาการทางระบบประสาท",
            "state": false
        },
        {
            "problem": "55. Which one of the following substances need heparin to accelerate its anticoagulant effect?",
            "img": "",
            "choices": "Thrombomodulin///Tissue factor pathway inhibitor///Prostacyclin///Antithrombin III///Nitric oxide",
            "answer": "Antithrombin III",
            "select": "",
            "explain": "Heparin ออกฤทธิ์ต้านการแข็งตัวของเลือดโดยการไปจับกับ Antithrombin III (AT III) ซึ่งเป็นโปรตีนยับยั้งการแข็งตัวของเลือดตามธรรมชาติ การจับกันนี้จะทำให้โครงสร้างของ AT III เปลี่ยนแปลงไปและสามารถยับยั้ง clotting factors ต่างๆ (โดยเฉพาะ Thrombin (Factor IIa) และ Factor Xa) ได้รวดเร็วและมีประสิทธิภาพมากขึ้นหลายพันเท่า ดังนั้น heparin จึงทำหน้าที่เป็น catalyst หรือตัวเร่งปฏิกิริยาของ Antithrombin III",
            "state": false
        },
        {
            "problem": "56. Which myeloproliferative neoplasm has the highest incidence of JAK2 V617F mutation?",
            "img": "",
            "choices": "Primary myelofibrosis///Polycythemia vera///Chronic myelogenous leukemia///Essential thrombocythemia///Chronic neutrophilic leukemia",
            "answer": "Polycythemia vera",
            "select": "",
            "explain": "JAK2 V617F mutation เป็นการกลายพันธุ์ที่สำคัญในกลุ่มโรค Myeloproliferative Neoplasms (MPNs) โดยพบได้บ่อยที่สุดในโรค Polycythemia vera (PV) ซึ่งพบได้มากกว่า 95% ของผู้ป่วย นอกจากนี้ยังพบได้ประมาณ 50-60% ในผู้ป่วย Essential thrombocythemia (ET) และ Primary myelofibrosis (PMF) ส่วน CML เกี่ยวข้องกับ BCR-ABL1 fusion gene",
            "state": false
        },
        {
            "problem": "57. A 32-year-old woman presents with recurrent miscarriages at 12–14 weeks of gestation. She also reports a past history of deep vein thrombosis. Laboratory studies reveal isolated aPTT prolonged and mixing test uncorrectable. Which of the following is the most likely diagnosis?",
            "img": "",
            "choices": "Dysregulation of female sex hormone///Inherited thrombophilia///Intrauterine tumor///Antiphospholipid syndrome (APS)///Systemic lupus erythematosus (SLE)",
            "answer": "Antiphospholipid syndrome (APS)",
            "select": "",
            "explain": "ผู้ป่วยมีประวัติที่เข้าได้กับเกณฑ์การวินิจฉัย Antiphospholipid syndrome (APS) ทั้งทางคลินิก (ภาวะลิ่มเลือดอุดตัน DVT และภาวะแทรกซ้อนทางสูติกรรม recurrent miscarriages) และทางห้องปฏิบัติการ โดยการพบ aPTT ที่ยาวนานผิดปกติและไม่สามารถแก้ไขได้ด้วยการทำ mixing test (uncorrectable) บ่งชี้ว่ามี inhibitor อยู่ในเลือด ซึ่งในบริบทนี้คือ lupus anticoagulant ซึ่งเป็นหนึ่งใน antiphospholipid antibodies",
            "state": false
        },
        {
            "problem": "58. Which of the following is the condition associated with hypochromic microcytic anemia?",
            "img": "",
            "choices": "Hereditary spherocytosis///Myelodysplastic anemia///G6PD deficiency///Acute leukemia///Homozygous hemoglobin E disease",
            "answer": "Homozygous hemoglobin E disease",
            "select": "",
            "explain": "Hypochromic microcytic anemia คือภาวะโลหิตจางที่เม็ดเลือดแดงมีขนาดเล็ก (microcytic, MCV < 80) และติดสีจาง (hypochromic, MCH/MCHC ต่ำ) ซึ่งเกิดจากความผิดปกติในการสังเคราะห์ฮีโมโกลบิน สาเหตุที่พบบ่อยได้แก่ การขาดธาตุเหล็ก, ธาลัสซีเมีย, และภาวะโลหิตจางจากโรคเรื้อรัง Homozygous hemoglobin E disease เป็น hemoglobinopathy ชนิดหนึ่งซึ่งจัดอยู่ในกลุ่มธาลัสซีเมีย ทำให้มีการสร้างเม็ดเลือดแดงที่มีลักษณะเป็น hypochromic microcytic",
            "state": false
        }
    ],
    "HL51MCQ1": [
        {
            problem: "1. Which of the following sign that suggest intravascular hemolysis than extravascular hemolysis?",
            img: "",
            choices: "Anemia///Hemoglobinuria///Hepatosplenomegaly///Jaundice///Thrombosis",
            answer: "Hemoglobinuria",
            select: "",
            explain: "Intravascular hemolysis คือการที่เม็ดเลือดแดงแตกในหลอดเลือด ทำให้ free hemoglobin (Hb) หลุดออกมาใน plasma ปริมาณมาก เมื่อเกินกว่าที่ haptoglobin จะจับได้หมด Hb อิสระจะถูกขับออกทางไต เกิดเป็น Hemoglobinuria (ปัสสาวะมีฮีโมโกลบิน) ซึ่งเป็นอาการที่จำเพาะกว่า ส่วน Extravascular hemolysis เกิดที่ม้ามหรือตับเป็นหลัก ทำให้เกิดอาการม้ามโต (Hepatosplenomegaly) และตัวเหลือง (Jaundice) จากการที่ bilirubin สูงขึ้น แต่จะไม่พบ Hemoglobinuria ที่ชัดเจน Anemia (ภาวะซีด) สามารถเกิดได้ทั้งสองแบบ",
            state: false
        },
        {
            problem: "2. Which of the following is the major factor enhancing the fibrinolysis system?",
            img: "",
            choices: "Thrombin activatable fibrinolysis inhibitor///Tissue plasminogen activator///Alpha-antiplasmin///Plasminogen activator inhibitor-2///Fibrin degradation products",
            answer: "Tissue plasminogen activator",
            select: "",
            explain: "ระบบ Fibrinolysis คือกระบวนการสลายลิ่มเลือด (fibrin clot) ตัวกระตุ้น (activator) ที่สำคัญที่สุดในระบบนี้คือ Tissue plasminogen activator (t-PA) ซึ่งทำหน้าที่เปลี่ยน plasminogen ให้กลายเป็น plasmin จากนั้น plasmin จะไปย่อยสลาย fibrin ส่วน Thrombin activatable fibrinolysis inhibitor (TAFI), Alpha-antiplasmin, และ Plasminogen activator inhibitor (PAI) ล้วนเป็นตัวยับยั้ง (inhibitor) ของระบบนี้",
            state: false
        },
        {
            problem: "3. Which of the following is pathophysiology of immune thrombocytopenia?",
            img: "",
            choices: "Platelet apoptosis///Platelet destruction///Platelet sequestration///Decreased platelet production///Myelophthisis",
            answer: "Platelet destruction",
            select: "",
            explain: "Immune Thrombocytopenia (ITP) เป็นโรคที่เกิดจากระบบภูมิคุ้มกันของร่างกายสร้าง autoantibody (มักเป็น IgG) ไปจับกับผิวของเกล็ดเลือด (platelet) ทำให้เกล็ดเลือดที่ถูกจับโดยแอนติบอดีเหล่านี้ถูกกำจัดและทำลายโดย macrophage ที่ม้ามและตับเป็นหลัก จัดเป็น peripheral platelet destruction ที่เพิ่มมากขึ้น",
            state: false
        },
        {
            problem: "4. Which of the following is most likely the clinical manifestation of secondary hemostasis defect?",
            img: "",
            choices: "deep hematoma///gum bleeding///epistaxis///petechial hemorrhage///menorrhagia",
            answer: "deep hematoma",
            select: "",
            explain: "ความผิดปกติของ Secondary hemostasis คือความผิดปกติของ coagulation factors ทำให้การสร้าง fibrin clot ที่แข็งแรงทำได้ไม่ดีพอ ลักษณะเลือดออกที่จำเพาะคือเลือดออกในบริเวณที่ลึกๆ เช่น ในข้อ (hemarthrosis) หรือในกล้ามเนื้อ (deep hematoma) ส่วนเลือดออกตามเยื่อบุ (gum bleeding, epistaxis), จุดเลือดออกเล็กๆ (petechiae) และประจำเดือนมามาก (menorrhagia) เป็นลักษณะเด่นของ Primary hemostasis defect ซึ่งเกี่ยวข้องกับเกล็ดเลือดและหลอดเลือด",
            state: false
        },
        {
            problem: "5. A 37 years old woman is being evaluated for splenomegaly. She is diagnosed with chronic myeloid leukemia. Physical exam shows no pallor, no hepatomegaly, splenomegaly 8 cm below the costal margin. What could be found in the peripheral blood smear?",
            img: "",
            choices: "Neutrophilia///Basophilia///Neutrophil with toxic granule///Relative Lymphocytosis///Monocytosis",
            answer: "Basophilia",
            select: "",
            explain: "Chronic Myeloid Leukemia (CML) เป็นโรคในกลุ่ม myeloproliferative neoplasm ที่มีการเพิ่มจำนวนของเซลล์สาย myeloid ทุกชนิดในไขกระดูกและเลือดอย่างควบคุมไม่ได้ สิ่งที่ตรวจพบใน peripheral blood smear ได้แก่ leukocytosis อย่างรุนแรง (มักเกิน 100,000 cells/uL), มีเซลล์เม็ดเลือดขาวตัวอ่อนทุกระยะ (left shift) และที่สำคัญคือมักจะพบ Basophilia (เซลล์ basophil สูง) และ Eosinophilia ร่วมด้วยเสมอ ซึ่ง Basophilia เป็นลักษณะที่ค่อนข้างจำเพาะกับ CML",
            state: false
        },
        {
            problem: "6. Which of the following is 'relative lymphocytosis'?",
            img: "",
            choices: "WBC 2500 (neutrophil 20%, lymphocyte 80%)///WBC 3200 (neutrophil 75%, lymphocyte 25%)///WBC 28,000 (neutrophil 30%, lymphocyte 70%)///WBC 15,000 (neutrophil 70%, lymphocyte 30%)///WBC 9,000 (neutrophil 45%, lymphocyte 55%)",
            answer: "WBC 2500 (neutrophil 20%, lymphocyte 80%)",
            select: "",
            explain: "Relative lymphocytosis คือภาวะที่สัดส่วน (percentage) ของ lymphocyte สูงกว่าปกติ (ปกติประมาณ 20-40%) แต่จำนวน lymphocyte ทั้งหมด (absolute lymphocyte count) อยู่ในเกณฑ์ปกติหรือต่ำกว่าปกติ คำนวณได้จาก WBC x %lymphocyte. ในข้อ A, Absolute lymphocyte count = 2500 x 0.80 = 2000 cells/uL ซึ่งอยู่ในเกณฑ์ปกติ (ค่าปกติประมาณ 1000-4800) แต่มีสัดส่วนสูงถึง 80% ภาวะนี้มักเกิดร่วมกับภาวะ neutropenia ทำให้สัดส่วนของ lymphocyte ดูสูงขึ้น",
            state: false
        },
        {
            problem: "8. A 2 year old girl was admitted to the hospital with prolonged bleeding time. What is the cause of this bleeding disorder?",
            img: "",
            choices: "Platelet Dysfunction///Factor VII Deficiency///Activation of plasminogen///Excess TFPI///Abnormality of intrinsic pathway",
            answer: "Platelet Dysfunction",
            select: "",
            explain: "Bleeding time (BT) เป็นการทดสอบการทำงานของ primary hemostasis ซึ่งเกี่ยวข้องกับการทำงานของเกล็ดเลือด (platelet function) และหลอดเลือดในการสร้าง platelet plug เพื่อหยุดเลือด ดังนั้นเมื่อ BT ยาวนานผิดปกติ (prolonged) แสดงว่ามีความผิดปกติในกระบวนการนี้ สาเหตุที่เป็นไปได้มากที่สุดคือการทำงานของเกล็ดเลือดผิดปกติ (Platelet Dysfunction) เช่น โรค Glanzmann thrombasthenia หรือ Bernard-Soulier syndrome ส่วนความผิดปกติของ coagulation factor จะทำให้ค่า PT หรือ aPTT ผิดปกติ แต่ BT จะปกติ",
            state: false
        },
        {
            "problem": "9. คำแนะนำสำหรับผู้ป่วยธาลัสซีเมีย (Thalassemia) ในข้อใดเหมาะสมที่สุด?",
            "img": "",
            "choices": "ให้เลือดเมื่อ Hb ต่ำกว่า 7 g/dL///ไม่ควรกิน Folic acid เสริมทุกวัน///งดอาหารที่มีธาตุเหล็กสูงทุกชนิด///ตรวจคัดกรองคู่สมรสก่อนมีบุตรเพื่อวางแผนครอบครัว///ควรได้รับยาขับธาตุเหล็กเมื่อ Ferritin สูงกว่า 500 ng/mL",
            "answer": "ตรวจคัดกรองคู่สมรสก่อนมีบุตรเพื่อวางแผนครอบครัว",
            "select": "",
            "explain": "คำแนะนำที่เหมาะสมและครอบคลุมที่สุดสำหรับผู้ป่วยธาลัสซีเมียทุกคน (ทั้งชนิดรุนแรงและชนิดพาหะ) คือการตรวจคัดกรองคู่สมรสก่อนมีบุตร (Carrier screening for partner) เพื่อประเมินความเสี่ยงที่บุตรจะเป็นโรคธาลัสซีเมียชนิดรุนแรง และวางแผนครอบครัวได้อย่างเหมาะสม ส่วนข้ออื่นๆ อาจถูกต้องในบางสถานการณ์ แต่ไม่ครอบคลุมเท่าข้อนี้: การให้เลือดเมื่อ Hb < 7 เป็นแนวทางสำหรับ Thalassemia major; การกิน Folic acid เป็นสิ่งจำเป็น; การ 'งด' อาหารธาตุเหล็กสูงอาจเข้มงวดเกินไป ควรใช้คำว่า 'หลีกเลี่ยง'; และเกณฑ์การให้ยาขับเหล็ก (Iron chelating agent) คือเมื่อ Ferritin > 1,000 ng/mL ดังนั้น การวางแผนครอบครัวจึงเป็นคำแนะนำที่เป็นสากลและสำคัญที่สุด",
            "state": false
        },
        {
            problem: "10. Emergency room, a 42-year-old man has a rash on his face, hand and arm after gardening. The doctor determines that he encountered a poisonous plant. Which specific cell releasing agents that cause rash?",
            img: "",
            choices: "Lymphocyte///Neutrophil///Mast cell///Platelet///Monocyte",
            answer: "Mast cell",
            select: "",
            explain: "ผื่นที่เกิดจากการสัมผัสพืชมีพิษ (poisonous plant) มักเป็นปฏิกิริยาภูมิแพ้แบบ Type I hypersensitivity (immediate type) หรือ Type IV (delayed type) ในกรณีที่เกิดผื่นขึ้นเร็ว เซลล์ที่มีบทบาทสำคัญคือ Mast cell ซึ่งเมื่อถูกกระตุ้นจาก allergen จะมีการปล่อยสารต่างๆ เช่น histamine, leukotrienes ออกจาก granule (degranulation) ทำให้หลอดเลือดขยายตัว มีอาการบวม แดง คัน เกิดเป็นผื่นลมพิษ (urticaria)",
            state: false
        },
        {
            problem: "11. A 3 Yrs old boy previously healthy, come with high grade fever for 2 days. PE: BT 39 BP 90/50 PR 130 RR 24 mild pale, no jaundice, purpuric spots at right leg. CBC: Hb 8.5 Hct 26 WBC 23900 Platelet 80,000. Coagulogram show PT 24 s, aPTT 120 s. What is the most likely diagnosis?",
            img: "",
            choices: "Immune thrombocytopenia///Congenital cytomegalovirus///Influenza///Acute lymphoblastic leukemia///Disseminated intravascular coagulopathy",
            answer: "Disseminated intravascular coagulopathy",
            select: "",
            explain: "ผู้ป่วยมีไข้สูง, จุดเลือดออก (purpuric spots), ซีด (anemia), เกล็ดเลือดต่ำ (thrombocytopenia), และที่สำคัญคือค่าการแข็งตัวของเลือดผิดปกติรุนแรงทั้ง PT และ aPTT (prolonged PT and aPTT) ซึ่งบ่งชี้ว่ามีการใช้ coagulation factors และเกล็ดเลือดไปพร้อมๆ กันทั่วร่างกาย ภาวะนี้เข้าได้กับ Disseminated Intravascular Coagulopathy (DIC) ซึ่งมักถูกกระตุ้นโดยการติดเชื้อรุนแรง (sepsis) ทำให้เกิดการกระตุ้นระบบการแข็งตัวของเลือดอย่างไม่เหมาะสม",
            state: false
        },
        {
            problem: "12. A 54 year old man with large B cell lymphoma developed 2 day high grade fever. His last chemotherapy cycle is 12 days ago. CBC: Hb 7 g/dl WBC 1,900 Platelets 65,000. What can we be found in blood test?",
            img: "",
            choices: "Eosinophilia///Atypical lymphocyte///Neutropenia///Lymphocytosis///Basophilia",
            answer: "Neutropenia",
            select: "",
            explain: "ผู้ป่วยได้รับเคมีบำบัด (chemotherapy) ซึ่งมีผลกดการทำงานของไขกระดูก (myelosuppression) ทำให้การสร้างเซลล์เม็ดเลือดทุกชนิดลดลง โดยเฉพาะเม็ดเลือดขาวชนิด neutrophil ซึ่งมี عمرสั้น ผลข้างเคียงนี้มักจะรุนแรงที่สุดประมาณ 7-14 วันหลังได้รับยา จากผลเลือด WBC รวมต่ำเพียง 1,900 cells/uL และมีไข้ (febrile neutropenia) แสดงว่าผู้ป่วยมีภาวะ Neutropenia (absolute neutrophil count < 1,500 cells/uL) อย่างแน่นอน ซึ่งเสี่ยงต่อการติดเชื้อรุนแรง",
            state: false
        },
        {
            problem: "13. What is a coagulation factor of the intrinsic pathway?",
            img: "",
            choices: "Factor XI///Factor V///Factor XIII///Factor III///Factor VII",
            answer: "Factor XI",
            select: "",
            explain: "ระบบการแข็งตัวของเลือด (coagulation cascade) แบ่งเป็น extrinsic, intrinsic, และ common pathway. Intrinsic pathway เริ่มจาก contact activation และเกี่ยวข้องกับ Factor XII, XI, IX, และ VIII. ส่วน Extrinsic pathway เกี่ยวข้องกับ Factor VII และ Tissue Factor (Factor III). ทั้งสอง pathway จะมาบรรจบกันที่ common pathway ซึ่งประกอบด้วย Factor X, V, II (Prothrombin), และ I (Fibrinogen). Factor XIII ทำหน้าที่ cross-link fibrin clot ให้แข็งแรง",
            state: false
        },
        {
            problem: "14. A 28-year-old man is being evaluated for fever with hepatosplenomegaly. He was diagnosed with infectious mononucleosis. Which of the following can be found in the peripheral blood?",
            img: "",
            choices: "Atypical lymphocyte///Neutrophil with toxic granules///Basophilia///Eosinophilia///Monocytosis",
            answer: "Atypical lymphocyte",
            select: "",
            explain: "Infectious Mononucleosis เกิดจากการติดเชื้อ Epstein-Barr virus (EBV) ซึ่งมักจะ infect B-lymphocytes เป็นหลัก ร่างกายจะตอบสนองโดยการสร้าง cytotoxic T-lymphocytes (CD8+) จำนวนมากเพื่อไปกำจัด B-lymphocytes ที่ติดเชื้อ T-lymphocytes ที่ถูกกระตุ้นเหล่านี้จะมีลักษณะทางสัณฐานวิทยาเปลี่ยนไป คือมีขนาดใหญ่ขึ้น นิวเคลียสรูปร่างหลากหลาย และไซโตพลาสซึมติดสีฟ้ากว้าง เรียกว่า Atypical lymphocyte ซึ่งเป็นลักษณะที่พบได้เด่นชัดใน peripheral blood smear ของผู้ป่วยโรคนี้",
            state: false
        },
        {
            problem: "15. Which of the following is a cause of huge splenomegaly?",
            img: "",
            choices: "Iron deficiency anemia///Rickettsia infection///Acute Myeloid Leukemia (AML)///Cancer metastasis///Primary myelofibrosis",
            answer: "Primary myelofibrosis",
            select: "",
            explain: "Huge splenomegaly หรือ massive splenomegaly (ม้ามโตมาก คลำได้เลยชายโครงซ้ายล่าง) มักเกิดจากโรคในกลุ่ม myeloproliferative neoplasms เช่น Chronic Myeloid Leukemia (CML) และ Primary Myelofibrosis เนื่องจากมีการสร้างเม็ดเลือดนอกไขกระดูก (extramedullary hematopoiesis) ที่ม้ามอย่างมหาศาล หรือโรคที่เม็ดเลือดถูกกักไว้ในม้ามจำนวนมาก เช่น Gaucher disease, Kala-azar. ส่วนสาเหตุอื่นๆ มักทำให้ม้ามโตปานกลาง (moderate splenomegaly)",
            state: false
        },
        {
            problem: "16. A 25-year-old woman has experienced intermittent anemia and mild jaundice since her childhood. She is presented with moderate pale conjunctivae and mild icteric sclera. Her spleen is palpated 3 cm below the left costal margin. What is this most likely diagnosis?",
            img: "",
            choices: "Autoimmune hemolytic anemia (AIHA)///Microangiopathic anemia (MAHA)///Hereditary spherocytosis///Paroxysmal nocturnal hemoglobinuria (PNH)///G6PD deficiency",
            answer: "Hereditary spherocytosis",
            select: "",
            explain: "ประวัติเป็นมาตั้งแต่เด็ก (since her childhood) มีอาการซีดและตัวเหลืองเป็นๆ หายๆ (intermittent anemia and mild jaundice) ร่วมกับตรวจร่างกายพบม้ามโต (splenomegaly) ชวนให้สงสัยโรคในกลุ่ม congenital hemolytic anemia มากที่สุด Hereditary Spherocytosis (HS) เป็นโรคทางพันธุกรรมที่เยื่อหุ้มเซลล์เม็ดเลือดแดงผิดปกติ ทำให้เม็ดเลือดแดงมีรูปทรงกลม (spherocyte) ขาดความยืดหยุ่น และถูกทำลายที่ม้ามได้ง่าย ทำให้เกิดอาการซีด เหลือง และม้ามโตแบบเรื้อรัง",
            state: false
        },
        {
            problem: "17. What is the severest form of thalassemia disease which results in fatality at birth?",
            img: "",
            choices: "Homozygous Hb E///Hb E with Hb CS///Beta-thalassemia with Hb E disease///Homozygous alpha-thalassemia 1///Hb H disease",
            answer: "Homozygous alpha-thalassemia 1",
            select: "",
            explain: "Alpha-thalassemia เกิดจากการขาดการสร้างสายโกลบินอัลฟ่า (alpha-globin chain) ซึ่งเป็นส่วนประกอบของฮีโมโกลบินทุกชนิดในคนปกติ (HbA, HbA2, HbF) ในภาวะที่รุนแรงที่สุดคือ Homozygous alpha-thalassemia 1 (หรือ --/--) จะไม่มีการสร้างสายอัลฟ่าเลย ทำให้ทารกในครรภ์สร้างได้แต่ Hb Bart's (gamma4) ซึ่งไม่สามารถขนส่งออกซิเจนได้เลย ส่งผลให้ทารกเสียชีวิตในครรภ์หรือหลังคลอดไม่นาน (hydrops fetalis)",
            state: false
        },
        {
            problem: "18. Which of the following structures is partially encapsulated with Pseudostratified columnar epithelium?",
            img: "",
            choices: "Peyer's patch///Pharyngeal tonsil///Thymus medulla///Axillary lymph node///White pulp of spleen",
            answer: "Pharyngeal tonsil",
            select: "",
            explain: "Pharyngeal tonsil (หรือ adenoid) เป็นกลุ่มของเนื้อเยื่อน้ำเหลืองที่อยู่บริเวณ nasopharynx ซึ่งเป็นทางเดินหายใจส่วนบน ดังนั้นเยื่อบุผิว (epithelium) ที่ปกคลุมจึงเป็นชนิดเดียวกับของทางเดินหายใจคือ Pseudostratified ciliated columnar epithelium และเป็นลักษณะของ partially encapsulated lymphoid organ ซึ่งต่างจาก lymph node ที่เป็น fully encapsulated",
            state: false
        },
        {
            problem: "19. Which one of the following tests measures the resistance of a thalassemia patient's RBC to hemolysis in hypotonic solution?",
            img: "",
            choices: "Osmotic fragility test///Coomb's test///Bone marrow biopsy///Complete blood count (CBC)///Hemoglobin electrophoresis",
            answer: "Osmotic fragility test",
            select: "",
            explain: "Osmotic Fragility Test (OFT) เป็นการทดสอบความต้านทานของเม็ดเลือดแดงต่อการแตกในสารละลายเกลือที่มีความเข้มข้นต่ำ (hypotonic solution) ในผู้ป่วยธาลัสซีเมีย เม็ดเลือดแดงมักมีลักษณะเป็น target cell ซึ่งมีพื้นที่ผิวต่อปริมาตร (surface area-to-volume ratio) สูงกว่าปกติ ทำให้สามารถทนต่อสารละลาย hypotonic ได้ดีกว่าเซลล์ปกติ ผล OFT จึงแสดงภาวะ decreased osmotic fragility (แตกยาก) ในขณะที่โรค Hereditary Spherocytosis ซึ่งเม็ดเลือดแดงเป็นทรงกลม จะมี increased osmotic fragility (แตกง่าย)",
            state: false
        },
        {
            problem: "20. In primary hemostasis, which of the following substances promotes vasoconstriction?",
            img: "",
            choices: "Fibrinogen///Tissue thromboplastin///Thromboxane A2///Tissue plasminogen activator///Prothrombin",
            answer: "Thromboxane A2",
            select: "",
            explain: "Primary hemostasis เริ่มต้นด้วยการหดตัวของหลอดเลือด (vasoconstriction) ตามด้วยการสร้าง platelet plug. เมื่อเกล็ดเลือดถูกกระตุ้น (activated) จะมีการหลั่งสารต่างๆ ออกมา ซึ่ง Thromboxane A2 (TXA2) เป็นสารสำคัญที่หลั่งจากเกล็ดเลือด มีฤทธิ์ทำให้หลอดเลือดหดตัวอย่างรุนแรง (potent vasoconstrictor) และยังช่วยกระตุ้นเกล็ดเลือดอื่นๆ ให้มาเกาะกลุ่มกัน (platelet aggregation) ด้วย",
            state: false
        },
        {
            problem: "21. A man went back from Africa, and subsequently had a cough and fever. Lab results show roundworm infestation. What characteristic of the cell would be elevated?",
            img: "",
            choices: "Bilobed nucleus with acidophilic granule///No nucleus with biconcave shape///Polymorphonuclear and multilobed nucleus///Round nucleus and scamp cytoplasm///Cell that fragments from large cell",
            answer: "Bilobed nucleus with acidophilic granule",
            select: "",
            explain: "การติดเชื้อพยาธิ (parasitic infestation) เช่น roundworm มักกระตุ้นให้ร่างกายสร้างเม็ดเลือดขาวชนิด Eosinophil เพิ่มขึ้น (Eosinophilia) ลักษณะเด่นของเซลล์ Eosinophil คือมีนิวเคลียสเป็น 2 Lobe (bilobed nucleus) และในไซโตพลาสซึมมี granule ขนาดใหญ่ที่ติดสีชมพูแดง (acidophilic/eosinophilic granule)",
            state: false
        },
        {
            problem: "22. Which disease causes excessive abnormal monoclonal proteins in the blood?",
            img: "",
            choices: "B cell lymphoma///Acute infection///Parasite infestation///Systemic Lupus Erythematosus (SLE)///Multiple Myeloma",
            answer: "Multiple Myeloma",
            select: "",
            explain: "Multiple Myeloma (MM) เป็นมะเร็งของ Plasma cell ซึ่งเป็น B-cell ที่เจริญเต็มที่แล้วทำหน้าที่สร้างแอนติบอดี (immunoglobulin) ใน MM จะมี plasma cell ที่ผิดปกติเพียงโคลนเดียว (monoclonal) แบ่งตัวเพิ่มจำนวนอย่างควบคุมไม่ได้และสร้าง immunoglobulin หรือส่วนประกอบของมัน (เช่น light chain) ที่มีโครงสร้างเหมือนกันทุกประการ เรียกว่า monoclonal protein (M-protein) ในปริมาณมหาศาลในเลือดและปัสสาวะ",
            state: false
        },
        {
            problem: "23. A boy is found to have a VHL mutation. What is correct?",
            img: "",
            choices: "Decreased erythropoietin level///Increased function of hypoxia inducible factor///Ubiquitination of hypoxia inducible factor is impaired///Increased protein degradation by protease///Decreased oxygen saturation of Hb",
            answer: "Ubiquitination of hypoxia inducible factor is impaired",
            select: "",
            explain: "VHL (von Hippel-Lindau) gene ทำหน้าที่สร้างโปรตีน pVHL ซึ่งเป็นส่วนหนึ่งของ E3 ubiquitin ligase complex ปกติ pVHL จะจับกับ Hypoxia-Inducible Factor (HIF) ในภาวะที่มีออกซิเจนเพียงพอ และนำ HIF ไปสู่กระบวนการ ubiquitination เพื่อให้ถูกทำลาย เมื่อเกิด VHL mutation จะทำให้กระบวนการนี้บกพร่อง HIF จึงไม่ถูกทำลายและไปกระตุ้นยีนเป้าหมายต่างๆ ตลอดเวลา หนึ่งในนั้นคือยีน Erythropoietin (EPO) ทำให้มีการสร้าง EPO สูงผิดปกติและเกิดภาวะ polycythemia",
            state: false
        },
        {
            problem: "24. An 18-year old man comes to the hospital with severe bleeding because of vitamin K deficiency. What is the principle of vitamin K in the coagulation cascade?",
            img: "",
            choices: "Activates platelet aggregation///Needed for clotting factor synthesis and modification///Activates immune response///Converts fibrinogen to fibrin///Inhibits the fibrinolytic pathway",
            answer: "Needed for clotting factor synthesis and modification",
            select: "",
            explain: "Vitamin K เป็น cofactor ที่จำเป็นสำหรับเอนไซม์ gamma-glutamyl carboxylase ในตับ ซึ่งทำหน้าที่เติมหมู่ carboxyl (carboxylation) ให้กับ glutamic acid residue บนโปรตีนหลายชนิด โดยเฉพาะอย่างยิ่ง coagulation factor ที่ต้องพึ่ง Vitamin K (Vitamin K-dependent factors) ได้แก่ Factor II, VII, IX, X รวมถึงโปรตีนต้านการแข็งตัวของเลือด Protein C และ S กระบวนการนี้จำเป็นเพื่อให้ factor เหล่านี้สามารถจับกับแคลเซียมและ phospholipid บนผิวเกล็ดเลือดเพื่อทำงานได้อย่างสมบูรณ์",
            state: false
        },
        {
            problem: "25. What is the most likely diagnosis in this patient based on the images?",
            img: "https://drive.google.com/open?id=19L4LWC_jTF1ev6d3URiTiBN3Q0OHQ0ig&usp=drive_copy",
            choices: "Vitamin C deficiency///Folate deficiency///Vitamin B12 deficiency///Iron deficiency anemia///Copper deficiency",
            answer: "Iron deficiency anemia",
            select: "",
            explain: "ภาพที่ 1 แสดงลิ้นเลี่ยนแดง (atrophic glossitis) และภาพที่ 2 แสดงเล็บมีลักษณะเป็นช้อน (koilonychia or spoon nail) ซึ่งทั้งสองอาการเป็นลักษณะที่ค่อนข้างจำเพาะของการขาดธาตุเหล็กอย่างรุนแรงและเรื้อรัง (severe and chronic iron deficiency anemia) แม้ว่า atrophic glossitis จะพบได้ในการขาดวิตามินอื่นเช่นกัน แต่เมื่อพิจารณาร่วมกับ koilonychia แล้วจะชี้ไปที่การขาดธาตุเหล็กมากที่สุด",
            state: false
        },
        {
            problem: "26. A boy is cut by a knife, which of the following plasma proteins are used in blood clot formation?",
            img: "",
            choices: "Apolipoprotein///Transferrin///Globulin///Fibrinogen///Albumin",
            answer: "Fibrinogen",
            select: "",
            explain: "การสร้างลิ่มเลือด (blood clot) ขั้นตอนสุดท้ายของ coagulation cascade คือการที่ thrombin (Factor IIa) ไปเปลี่ยน Fibrinogen (Factor I) ซึ่งเป็นโปรตีนที่ละลายน้ำได้ในพลาสมา ให้กลายเป็น Fibrin monomer ที่ไม่ละลายน้ำ จากนั้น Fibrin monomer จะมาเรียงตัวต่อกันเป็นสาย (polymerize) และถูกทำให้แข็งแรงโดย Factor XIIIa กลายเป็น fibrin clot ที่มั่นคงเพื่ออุดบาดแผล ส่วนโปรตีนอื่นๆ ไม่ได้มีบทบาทโดยตรงในการสร้างโครงข่ายของลิ่มเลือด",
            state: false
        },
        {
            problem: "27. Which one indicates thrombocytopenia rather than platelet dysfunction?",
            img: "",
            choices: "Petechiae///Ecchymosis///Delayed bleeding///Mucosal bleeding///Hemarthrosis",
            answer: "Petechiae",
            select: "",
            explain: "Petechiae คือจุดเลือดออกสีแดงขนาดเล็ก (1-2 มม.) ที่ไม่จางเมื่อกด เกิดจากการแตกของหลอดเลือดฝอยเล็กๆ ซึ่งปกติจะถูกปิดผนึกโดยเกล็ดเลือด ภาวะนี้เป็นลักษณะที่จำเพาะอย่างยิ่งของภาวะเกล็ดเลือดต่ำ (Thrombocytopenia) เนื่องจากมีปริมาณเกล็ดเลือดไม่เพียงพอที่จะดูแลรักษาความแข็งแรงของผนังหลอดเลือดฝอย ส่วนอาการเลือดออกอื่นๆ เช่น ecchymosis หรือ mucosal bleeding สามารถพบได้ทั้งในภาวะเกล็ดเลือดต่ำและการทำงานของเกล็ดเลือดผิดปกติ",
            state: false
        },
        {
            problem: "28. A 2-year-old girl presents with anemia and failure to thrive at 6 months of age. She requires blood transfusion when she has fever. Physical examination reveals moderate pallor, Liver 3 cm below right costal margin, Spleen 4 cm below left costal margin. CBC : Hb 6 Hct 20 WBC 9800 Platelet 260,000 MCV 56 MCH 18 MCHC 25 RDW 24. What is the most likely etiology of this condition?",
            img: "",
            choices: "Enzymatic defect of RBC///Red Cell membrane defect///Globin defect///Impaired bone marrow production///Malignancy process",
            answer: "Globin defect",
            select: "",
            explain: "จากประวัติเริ่มมีอาการซีดตั้งแต่อายุ 6 เดือน ต้องได้รับเลือดเป็นครั้งคราว ตับม้ามโต และผลเลือด CBC แสดงภาวะ Microcytic (MCV 56), Hypochromic (MCH 18) anemia อย่างรุนแรง ลักษณะทั้งหมดนี้เป็นลักษณะคลาสสิกของโรค Beta-thalassemia major ซึ่งเป็นโรคทางพันธุกรรมที่เกิดจากความผิดปกติของการสร้างสายโกลบินเบต้า (Globin defect) ทำให้สร้าง HbA ได้น้อยหรือไม่ได้เลย ผู้ป่วยจะเริ่มแสดงอาการซีดเมื่ออายุประมาณ 6 เดือน ซึ่งเป็นช่วงที่ HbF ของทารกเริ่มลดลงและเปลี่ยนเป็น HbA",
            state: false
        },
        {
            problem: "29. What is the main source of energy for mature RBC?",
            img: "",
            choices: "Glucose///Acetyl coA///Pyruvate///Lactate///Fatty acid",
            answer: "Glucose",
            select: "",
            explain: "เซลล์เม็ดเลือดแดงที่เจริญเต็มที่ (mature RBC) ไม่มีไมโตคอนเดรีย จึงไม่สามารถสร้างพลังงานผ่านกระบวนการ oxidative phosphorylation ได้ แหล่งพลังงานหลักเพียงอย่างเดียวคือ Glucose ซึ่งจะถูกนำเข้าสู่กระบวนการ Glycolysis (Embden-Meyerhof pathway) เพื่อสร้าง ATP นอกจากนี้ยังมี Pentose Phosphate Pathway (PPP) ซึ่งใช้ glucose ในการสร้าง NADPH เพื่อป้องกันเซลล์จาก oxidative stress",
            state: false
        },
        {
            problem: "30. A patient came to the hospital with a urinary tract infection by Escherichia coli, followed by septic shock and bleeding from disseminated intravascular coagulation. What is the major cause of bleeding in this patient?",
            img: "",
            choices: "Excessive tissue factor pathway inhibitor activity///Lack of tissue factor expression///Widespread endothelial injury///Depletion of platelets and coagulation factors///Fibrin deposition in small vessels",
            answer: "Depletion of platelets and coagulation factors",
            select: "",
            explain: "Disseminated Intravascular Coagulation (DIC) ที่เกิดจาก Sepsis มีพยาธิกำเนิดหลักคือการกระตุ้นระบบการแข็งตัวของเลือดอย่างรุนแรงและแพร่กระจายทั่วร่างกาย (systemic activation of coagulation) ทำให้มีการสร้าง thrombin และ fibrin อย่างมหาศาลไปอุดตันหลอดเลือดเล็กๆ กระบวนการนี้มีการใช้ (consumption) เกล็ดเลือดและ coagulation factors ไปเป็นจำนวนมาก จนในที่สุดทำให้เกิดภาวะพร่องปัจจัยเหล่านี้ (depletion) ส่งผลให้เลือดไม่สามารถแข็งตัวได้ตามปกติและมีเลือดออกรุนแรงตามมา",
            state: false
        },
        {
            problem: "31. What is the hormone that stimulates platelets production?",
            img: "",
            choices: "Erythropoietin///Growth hormone///Thrombopoietin///Leptin///Melatonin",
            answer: "Thrombopoietin",
            select: "",
            explain: "Thrombopoietin (TPO) เป็นฮอร์โมนหลักที่ควบคุมการผลิตเกล็ดเลือด (thrombopoiesis) TPO สร้างจากตับเป็นส่วนใหญ่และจะไปกระตุ้น megakaryocyte ในไขกระดูกให้เจริญเติบโต, แบ่งตัว และแตกตัวออกเป็นเกล็ดเลือด ส่วน Erythropoietin (EPO) เป็นฮอร์โมนหลักที่กระตุ้นการสร้างเม็ดเลือดแดง",
            state: false
        },
        {
            problem: "32. With HMBS gene mutation, what condition could be found in this patient?",
            img: "",
            choices: "Decrease aminolevulinate///Increase aminolevulinic acid///Increase porphobilinogen deaminase///Increase porphobilinogen///Decrease porphobilinogen",
            answer: "Increase porphobilinogen",
            select: "",
            explain: "HMBS gene สร้างเอนไซม์ Hydroxymethylbilane synthase (หรือ Porphobilinogen deaminase) ซึ่งเป็นเอนไซม์ในขั้นตอนที่ 3 ของกระบวนการสังเคราะห์ฮีม (Heme synthesis) การกลายพันธุ์ของยีนนี้ทำให้เกิดโรค Acute Intermittent Porphyria (AIP) เมื่อเอนไซม์นี้ทำงานได้ลดลง จะทำให้สารตั้งต้นที่อยู่ก่อนหน้า คือ Porphobilinogen (PBG) และ Aminolevulinic acid (ALA) ไม่สามารถเปลี่ยนไปเป็นสารตัวต่อไปได้ จึงเกิดการสะสมและถูกขับออกมาในปัสสาวะปริมาณมาก ทำให้มีอาการทางระบบประสาท ปวดท้อง และปัสสาวะสีเข้ม",
            state: false
        },
        {
            problem: "33. A 65-year-old man came with fatigue. He appears pale and jaundice. Lab: decreased hemoglobin and hyperbilirubinemia. Blood smear: agglutinated RBC. Blood bank: positive for direct agglutination test. In view of pathophysiology, what is the appropriate principle of treatment?",
            img: "",
            choices: "Activation of complement system///Reduced immunoglobulin production///Immunosuppression to reduce antibody-mediated destruction///Increased erythropoiesis stimulation///Reduction of bilirubin production",
            answer: "Immunosuppression to reduce antibody-mediated destruction",
            select: "",
            explain: "ลักษณะทางคลินิกและผลแล็บทั้งหมดชี้ไปที่โรค Autoimmune Hemolytic Anemia (AIHA) ชนิด Warm type ซึ่งพยาธิกำเนิดเกิดจากการที่ร่างกายสร้าง autoantibody (มักเป็น IgG) ไปจับกับผิวเม็ดเลือดแดง ทำให้เม็ดเลือดแดงเกาะกลุ่มกัน (agglutination) และถูกทำลายโดย macrophage ที่ม้าม การตรวจพบ Direct Agglutination Test (DAT) หรือ Direct Coombs' test ให้ผลบวกเป็นการยืนยันการวินิจฉัย หลักการรักษาที่สำคัญที่สุดคือการให้ยากดภูมิคุ้มกัน (Immunosuppression) เช่น corticosteroids เพื่อลดการสร้าง autoantibody และลดการทำลายเม็ดเลือดแดง",
            state: false
        },
        {
            problem: "34. A previously healthy 3 years old boy presents with high grade fever for 2 days. BT 39 C, BP 90/50, PR 130, RR 30, Hb 8.6%, Hct 26, WBC 23,800, Platelet 80,000. no pallor, no jaundice, purpuric spots. What is the diagnosis?",
            img: "",
            choices: "Influenza infection with sepsis///Acute lymphoblastic leukemia (ALL)///Disseminated intravascular coagulation (DIC)///Immune Thrombocytopenic Purpura (ITP)///Congenital CMV infection",
            answer: "Disseminated intravascular coagulation (DIC)",
            select: "",
            explain: "ผู้ป่วยมีอาการของการติดเชื้อรุนแรง (ไข้สูง, ความดันต่ำ, ชีพจรเร็ว) ร่วมกับผลเลือดผิดปกติหลายระบบ คือ ซีด (anemia), เกล็ดเลือดต่ำ (thrombocytopenia) และมีจุดเลือดออก (purpura) ภาวะนี้เข้าได้กับ Sepsis ที่มีภาวะแทรกซ้อนเป็น Disseminated Intravascular Coagulation (DIC) ซึ่งเป็นการกระตุ้นระบบการแข็งตัวของเลือดทั่วร่างกาย ทำให้มีการใช้เกล็ดเลือดและ clotting factor ไปจนหมด ส่งผลให้มีเลือดออกผิดปกติ แม้ในโจทย์จะไม่ได้ให้ผล coagulogram มา แต่ลักษณะทางคลินิกและ CBC ชี้ไปทางนี้มากที่สุด",
            state: false
        },
        {
            problem: "35. A 30 year old man has hemoglobinuria and fatigue after taking an antibiotic. Peripheral blood smear found Heinz bodies and ghost cells. What is primary cause of these symptoms?",
            img: "",
            choices: "Low erythropoietin///Low oxygen affinity///Reduced glutathione and increased oxidative stress///Abnormal globin synthesis///Inability to produce 2,3 BPG",
            answer: "Reduced glutathione and increased oxidative stress",
            select: "",
            explain: "ประวัติมีอาการหลังได้รับยา (เช่น กลุ่มซัลฟา) ร่วมกับตรวจพบ Heinz bodies (denatured hemoglobin) และ ghost cells (RBC ที่แตกแล้ว) ในเลือด เป็นลักษณะคลาสสิกของภาวะพร่องเอนไซม์ G6PD (Glucose-6-Phosphate Dehydrogenase deficiency) G6PD เป็นเอนไซม์สำคัญใน pentose phosphate pathway ซึ่งสร้าง NADPH. NADPH มีหน้าที่รักษาระดับของ reduced glutathione (GSH) ซึ่งเป็นสารต้านอนุมูลอิสระที่สำคัญของเซลล์เม็ดเลือดแดง เมื่อขาด G6PD จะทำให้ GSH ลดลง เซลล์เม็ดเลือดแดงจึงไม่สามารถทนต่อ oxidative stress จากยาหรือการติดเชื้อได้ ทำให้ hemoglobin ตกตะกอนเป็น Heinz bodies และเซลล์แตกในที่สุด (intravascular hemolysis) เกิดเป็น hemoglobinuria",
            state: false
        },
        {
            problem: "36. Which complication will be found in G6PD deficiency with acute hemolysis?",
            img: "",
            choices: "Splenomegaly///Vascular occlusive reaction///Thrombocytopenia///Acute renal failure///Decreased O2 affinity with HB",
            answer: "Acute renal failure",
            select: "",
            explain: "ในภาวะ G6PD deficiency ที่มีเม็ดเลือดแดงแตกอย่างรุนแรงและเฉียบพลัน (acute massive intravascular hemolysis) จะมี free hemoglobin ปริมาณมหาศาลหลุดออกมาในกระแสเลือดและถูกกรองที่ไต ฮีโมโกลบินเหล่านี้เป็นพิษต่อท่อไตโดยตรง (direct nephrotoxicity) และอาจตกตะกอนอุดตันท่อไต ทำให้เกิดภาวะ Acute Tubular Necrosis (ATN) และนำไปสู่ภาวะไตวายเฉียบพลัน (Acute Renal Failure) ได้ ซึ่งเป็นภาวะแทรกซ้อนที่รุนแรงและอันตราย",
            state: false
        },
        {
            problem: "37. Elevated C reactive protein indicates signs of inflammation. What can be found in a peripheral blood smear during acute inflammation?",
            img: "",
            choices: "Increased hepcidin///Döhle bodies in neutrophils///Folate deficiency///Atypical lymphocytes///Eosinophilia",
            answer: "Döhle bodies in neutrophils",
            select: "",
            explain: "C-reactive protein (CRP) เป็น acute phase reactant ที่สูงขึ้นในการอักเสบเฉียบพลัน (acute inflammation) ซึ่งมักเกิดจากการติดเชื้อแบคทีเรีย ในภาวะเช่นนี้ ไขกระดูกจะเร่งการผลิตและปล่อย neutrophil ออกมาอย่างรวดเร็ว ทำให้เห็นการเปลี่ยนแปลงทางสัณฐานวิทยาของ neutrophil ใน peripheral blood smear ที่เรียกว่า 'toxic changes' ซึ่งประกอบด้วย 1. Toxic granulation (granule ติดสีเข้มขึ้น) 2. Döhle bodies (หย่อมสีฟ้าอ่อนในไซโตพลาสซึม ซึ่งเป็น RER ที่หลงเหลืออยู่) และ 3. Cytoplasmic vacuolation",
            state: false
        },
        {
            problem: "38. A 63-year-old patient with chronic kidney disease stage IV experiences tiredness and fatigue. Laboratory findings revealed normocytic anemia. Which of the following findings is the most likely in this patient?",
            img: "",
            choices: "Low serum erythropoietin///Low MCH///High reticulocyte count///Higher RDW///Normal ferroportin",
            answer: "Low serum erythropoietin",
            select: "",
            explain: "ผู้ป่วยโรคไตวายเรื้อรัง (Chronic Kidney Disease - CKD) มักมีภาวะซีดที่เรียกว่า Anemia of chronic kidney disease ซึ่งมีสาเหตุหลักมาจากการที่ไตซึ่งเป็นอวัยวะหลักในการสร้างฮอร์โมน Erythropoietin (EPO) เสื่อมสภาพลง ทำให้ไม่สามารถสร้าง EPO ได้เพียงพอที่จะไปกระตุ้นไขกระดูกให้สร้างเม็ดเลือดแดง ภาวะซีดที่เกิดขึ้นจึงมีลักษณะเป็น Normocytic normochromic anemia with low reticulocyte count เนื่องจากไขกระดูกขาดตัวกระตุ้น",
            state: false
        },
        {
            problem: "39. A 19-year-old man presents with fever and hepatosplenomegaly. He was diagnosed with infectious mononucleosis. Which of the following can be found in the peripheral blood of this patient?",
            img: "",
            choices: "neutrophil with toxic granule///eosinophilia///neutropenia///basophilia///atypical lymphocyte",
            answer: "atypical lymphocyte",
            select: "",
            explain: "Infectious Mononucleosis เกิดจากการติดเชื้อ Epstein-Barr virus (EBV) ซึ่งจะไป infect B-lymphocytes ร่างกายจะตอบสนองโดยการสร้าง cytotoxic T-lymphocytes (CD8+) จำนวนมากเพื่อไปกำจัด B-lymphocytes ที่ติดเชื้อ T-lymphocytes ที่ถูกกระตุ้นเหล่านี้จะมีลักษณะทางสัณฐานวิทยาเปลี่ยนไป คือมีขนาดใหญ่ขึ้น นิวเคลียสรูปร่างหลากหลาย และไซโตพลาสซึมติดสีฟ้ากว้าง เรียกว่า Atypical lymphocyte ซึ่งเป็นลักษณะที่พบได้เด่นชัดใน peripheral blood smear ของผู้ป่วยโรคนี้",
            state: false
        },
        {
            problem: "40. 30 year old woman เป็น anemia กับ mild jaundice ตั้งแต่จำความได้ ในเลือดตรวจพบ spherocytosis จำนวนมาก. อะไรคือสาเหตุที่เป็นไปได้มากที่สุด",
            img: "",
            choices: "SPTA gene mutation///Increase of leukocytosis///Increase of globin synthesis///G6PD gene mutation///Autoimmune antibody production",
            answer: "SPTA gene mutation",
            select: "",
            explain: "ประวัติเป็นมาตั้งแต่เด็ก (จำความได้) มีอาการซีดและตัวเหลือง ร่วมกับตรวจพบ spherocytes จำนวนมากในเลือด บ่งชี้ถึงโรค Hereditary Spherocytosis (HS) ซึ่งเป็นโรคทางพันธุกรรมที่เกิดจากการกลายพันธุ์ของยีนที่สร้างโปรตีนโครงสร้างของเยื่อหุ้มเซลล์เม็ดเลือดแดง (RBC membrane proteins) เช่น ankyrin, band 3, spectrin (alpha-spectrin เข้ารหัสโดย SPTA1 gene, beta-spectrin เข้ารหัสโดย SPTB gene) หรือ protein 4.2 ทำให้เซลล์เสียความยืดหยุ่นและถูกทำลายที่ม้าม",
            state: false
        },
        {
            problem: "41. A 28-year-old woman presents with intermittent jaundice and fatigue since she was young. PE: mild pale, mild icteric sclera. What is the definitive diagnosis?",
            img: "",
            choices: "Autoimmune hemolytic anemia (AIHA)///Microangiopathic hemolytic anemia (MAHA)///Hereditary Spherocytosis (HS)///Paroxysmal nocturnal hemoglobinuria (PNH)///G6PD deficiency",
            answer: "Hereditary Spherocytosis (HS)",
            select: "",
            explain: "ประวัติเป็นมาตั้งแต่อายุน้อย (since she was young) มีอาการซีด (fatigue, pale) และตัวเหลือง (jaundice) เป็นๆ หายๆ (intermittent) เป็นลักษณะของภาวะเม็ดเลือดแดงแตกเรื้อรัง (chronic hemolysis) ที่เป็นมาแต่กำเนิด ในตัวเลือกที่ให้มา Hereditary Spherocytosis (HS) เป็นสาเหตุของ congenital chronic hemolytic anemia ที่พบบ่อยที่สุดและเข้ากับประวัติได้ดีที่สุด",
            state: false
        },
        {
            problem: "42. 59 year-old-man large B cell lymphoma last chemo 12 day ago. BT 40 C, ไม่มีต่อมน้ำเหลืองโต ไม่มีตับม้ามโต. CBC: Hb 7, WBC 1900, platelet 67000. จะเจออะไรใน blood test ของผู้ป่วย?",
            img: "",
            choices: "Neutropenia///Basophilia///Atypical lymphocyte///Lymphocytosis///Eosinophilia",
            answer: "Neutropenia",
            select: "",
            explain: "ผู้ป่วยได้รับยาเคมีบำบัด (chemotherapy) ซึ่งมีผลกดการทำงานของไขกระดูก (myelosuppression) ทำให้การสร้างเซลล์เม็ดเลือดทุกชนิดลดลง ผลเลือดแสดงภาวะ Pancytopenia คือ ซีด (Hb 7), เม็ดเลือดขาวต่ำ (WBC 1900) และเกล็ดเลือดต่ำ (Platelet 67000) ภาวะเม็ดเลือดขาวต่ำที่เกิดหลังเคมีบำบัดมักเกิดจาก Neutropenia (จำนวน neutrophil ต่ำ) เป็นหลัก เนื่องจากเป็นเซลล์ที่มีอายุสั้นที่สุด และผู้ป่วยมีไข้สูง (BT 40 C) ซึ่งเข้าได้กับภาวะ Febrile Neutropenia ซึ่งเป็นภาวะฉุกเฉินทางการแพทย์",
            state: false
        },
        {
            problem: "43. Which substance binds with hemoglobin to form carbaminohemoglobin?",
            img: "",
            choices: "Carbon monoxide///Carbon dioxide///Oxygen///Nitrogen///Hydrogen",
            answer: "Carbon dioxide",
            select: "",
            explain: "Carbaminohemoglobin คือฮีโมโกลบินที่จับกับ Carbon Dioxide (CO2) CO2 จะจับกับ N-terminal globin chain ของฮีโมโกลบิน เป็นหนึ่งในวิธีการขนส่ง CO2 จากเนื้อเยื่อกลับไปยังปอด ส่วนการจับกับ Oxygen จะเรียกว่า Oxyhemoglobin และการจับกับ Carbon monoxide จะเรียกว่า Carboxyhemoglobin",
            state: false
        },
        {
            problem: "44. Which lab finding is most likely found in beta-thalassemia trait?",
            img: "",
            choices: "Presence of Hb H in hemoglobin electrophoresis///Macrocytic, hyperchromic RBCs///Increased Hb F levels///Increased Hb A2 levels///Normal Hb H in hemoglobin electrophoresis with microcytic and hypochromic RBCs",
            answer: "Increased Hb A2 levels",
            select: "",
            explain: "Beta-thalassemia trait (หรือ beta-thalassemia minor) เกิดจากการขาดการสร้างสายเบต้าโกลบิน (beta-globin chain) ไป 1 ยีน ทำให้การสร้าง HbA (alpha2beta2) ลดลง ร่างกายจะชดเชยโดยการสร้างสายเดลต้า (delta) และแกมมา (gamma) เพิ่มขึ้นเล็กน้อย ทำให้ผล Hemoglobin electrophoresis มีลักษณะจำเพาะคือ ระดับของ HbA2 (alpha2delta2) สูงขึ้นกว่าปกติ (>3.5%) และอาจมี HbF (alpha2gamma2) สูงขึ้นเล็กน้อย ร่วมกับลักษณะเม็ดเลือดแดงเป็นแบบ microcytic, hypochromic",
            state: false
        },
        {
            problem: "45. What should be done to detect DNA for extraction?",
            img: "",
            choices: "Serum///Plasma concentrate///Plasma///Buffy coat///Packed red blood cells",
            answer: "Buffy coat",
            select: "",
            explain: "ในการสกัด DNA จากเลือด (genomic DNA) แหล่งของ DNA ที่ดีที่สุดคือเซลล์ที่มีนิวเคลียส ซึ่งก็คือเม็ดเลือดขาว (leukocytes) และเกล็ดเลือด (platelets) เมื่อนำเลือดไปปั่นเหวี่ยง (centrifuge) จะแยกออกเป็น 3 ชั้น คือ ชั้นบนสุดเป็น plasma, ชั้นล่างสุดเป็นเม็ดเลือดแดง (packed red cells) และชั้นกลางบางๆ สีขาวขุ่น เรียกว่า Buffy coat ซึ่งเป็นชั้นที่อุดมไปด้วยเม็ดเลือดขาวและเกล็ดเลือด จึงเป็นส่วนที่เหมาะสมที่สุดสำหรับการสกัด DNA",
            state: false
        },
        {
            problem: "46. เด็ก 1 ขวบเป็น Beta thalassemia/HbE disease. พ่อเป็น Beta thalassemia trait, แม่เป็น Homozygous HbE. ลูกที่เกิดมามีโอกาสเป็นโรค (disease) กี่ %?",
            img: "",
            choices: "12.5%///25%///50%///75%///100%",
            answer: "50%",
            select: "",
            explain: "พ่อเป็น Beta thalassemia trait (genotype: B0/BA), แม่เป็น Homozygous HbE (genotype: BE/BE) ดังนั้นยีนที่แม่จะส่งให้ลูกได้คือ BE เท่านั้น (100%) ส่วนยีนที่พ่อจะส่งให้ลูกมี 2 แบบคือ B0 (ยีน beta-thalassemia) หรือ BA (ยีนปกติ) อย่างละครึ่ง (50%) ดังนั้นโอกาสของลูกคือ: 1. ได้รับ B0 จากพ่อ และ BE จากแม่ -> genotype B0/BE ซึ่งเป็นโรค Beta-thalassemia/HbE disease (โอกาส 50%) 2. ได้รับ BA จากพ่อ และ BE จากแม่ -> genotype BA/BE ซึ่งเป็นพาหะ HbE trait (โอกาส 50%) ดังนั้นโอกาสที่ลูกจะเป็นโรคคือ 50%",
            state: false
        },
        {
            problem: "47. What organ normally develops less functionality and has increased epithelial reticular cells and adipose tissue with age?",
            img: "",
            choices: "Thymus///Lymph node///Spleen///Tonsil///Peyer's patch",
            answer: "Thymus",
            select: "",
            explain: "ต่อมไทมัส (Thymus) เป็นอวัยวะน้ำเหลืองส่วนกลางที่มีบทบาทสำคัญในการเจริญและคัดเลือก T-lymphocytes ต่อมไทมัสจะเจริญเต็มที่และทำงานมากที่สุดในช่วงวัยเด็ก และจะเริ่มฝ่อ (involution) เมื่อเข้าสู่วัยรุ่น โดยเนื้อเยื่อของต่อม (thymic parenchyma) จะค่อยๆ ถูกแทนที่ด้วยไขมัน (adipose tissue) และเนื้อเยื่อเกี่ยวพัน ทำให้การทำงานลดลงตามอายุ",
            state: false
        },
        {
            problem: "48. Which plasma protein carries the most iron?",
            img: "",
            choices: "Transferrin///Albumin///Hepcidin///Ferroportin///Ceruloplasmin",
            answer: "Transferrin",
            select: "",
            explain: "Transferrin เป็นโปรตีนในพลาสมาที่ทำหน้าที่หลักในการขนส่งธาตุเหล็ก (iron) ในกระแสเลือด โดยจะจับกับเหล็กในรูป Fe3+ และนำส่งไปยังเซลล์ต่างๆ ที่ต้องการใช้ โดยเฉพาะเซลล์ในไขกระดูกเพื่อนำไปสร้างฮีโมโกลบิน ส่วน Ferroportin เป็นโปรตีนที่นำเหล็กออกจากเซลล์สู่กระแสเลือด และ Hepcidin เป็นฮอร์โมนที่ควบคุมระดับเหล็กโดยยับยั้งการทำงานของ ferroportin",
            state: false
        },
        {
            problem: "49. Woman with splenomegaly. CBC : Hb 18.9 g/dL, WBC 30,000 cells/uL, Platelet 720,000 cells/uL. What is the consequence of a JAK2 mutation?",
            img: "",
            choices: "Increase EPO production///Ubiquitination of HIF1///Venous thrombosis///Protease activation///Decreased Erythropoietin",
            answer: "Venous thrombosis",
            select: "",
            explain: "ผลเลือดแสดงภาวะ Panmyelosis คือมีการเพิ่มจำนวนของเซลล์เม็ดเลือดทุกสาย (Hb สูง, WBC สูง, Platelet สูง) ซึ่งเป็นลักษณะของโรคในกลุ่ม Myeloproliferative Neoplasm (MPN) โดยเฉพาะ Polycythemia Vera (PV) ซึ่งส่วนใหญ่เกิดจากการกลายพันธุ์ของยีน JAK2 (V617F mutation) การกลายพันธุ์นี้ทำให้ signaling pathway ถูกกระตุ้นตลอดเวลาโดยไม่ต้องการ cytokine มาจับ ส่งผลให้มีการสร้างเม็ดเลือดมากผิดปกติ ภาวะแทรกซ้อนที่สำคัญและพบบ่อยที่สุดของ PV คือการเกิดลิ่มเลือดอุดตันทั้งในหลอดเลือดดำและแดง (Venous and arterial thrombosis) เนื่องจากความหนืดของเลือดที่สูงขึ้น (hyperviscosity) และการทำงานของเกล็ดเลือดที่ผิดปกติ",
            state: false
        },
        {
            problem: "50. Which of the following primarily regulates platelet production?",
            img: "",
            choices: "Thrombopoietin///Erythropoietin///Growth factor///Adenosine///Interleukin-3",
            answer: "Thrombopoietin",
            select: "",
            explain: "Thrombopoietin (TPO) เป็นฮอร์โมนหลัก (primary regulator) ที่ควบคุมการผลิตเกล็ดเลือด (thrombopoiesis) โดยจะกระตุ้นการเจริญเติบโตและพัฒนาของ megakaryocyte ในไขกระดูก ซึ่งจะแตกตัวออกเป็นเกล็ดเลือด ส่วน Erythropoietin (EPO) ทำหน้าที่ควบคุมการสร้างเม็ดเลือดแดงเป็นหลัก",
            state: false
        },
        {
            problem: "51. Caplacizumab is a recombinant humanized monoclonal antibody against von Willebrand factor. It acts by blocking platelet aggregation. Which condition could benefit from caplacizumab?",
            img: "",
            choices: "Autoimmune hemolytic anemia///Paroxysmal nocturnal hemoglobinuria///Thrombotic thrombocytopenic purpura///Beta thalassemia///Sickle cell anemia",
            answer: "Thrombotic thrombocytopenic purpura",
            select: "",
            explain: "Thrombotic Thrombocytopenic Purpura (TTP) เป็นภาวะที่เกิดจากการขาดเอนไซม์ ADAMTS13 ทำให้ไม่สามารถตัด von Willebrand factor (vWF) ที่มีขนาดใหญ่ผิดปกติ (ultra-large vWF multimers) ได้ ส่งผลให้ vWF เหล่านี้ไปกระตุ้นให้เกิดการเกาะกลุ่มของเกล็ดเลือด (platelet aggregation) อย่างแพร่หลายและเกิดเป็นลิ่มเลือดขนาดเล็กอุดตันหลอดเลือดทั่วร่างกาย Caplacizumab ซึ่งออกฤทธิ์ยับยั้งการจับกันของ vWF กับเกล็ดเลือด จึงสามารถช่วยตัดวงจรการเกิดโรคและเป็นยาที่ใช้ในการรักษา TTP ได้",
            state: false
        },
        {
            problem: "52. A patient recently visited Africa and has contracted a roundworm infection. What cells can be predominantly seen in the peripheral blood?",
            img: "",
            choices: "A cell with polymorphic and multiple lobed nucleus///A cell with a bilobed nucleus and many acidophilic specific granules///A biconcave cell without a nucleus///A cell with a large & rounded nucleus and scant cytoplasm///A very small cell without a nucleus originated by cytoplasmic budding from a giant cell",
            answer: "A cell with a bilobed nucleus and many acidophilic specific granules",
            select: "",
            explain: "การติดเชื้อพยาธิ (parasitic infection) เช่น roundworm จะกระตุ้นให้ร่างกายมีการตอบสนองทางภูมิคุ้มกันโดยการเพิ่มจำนวนของเม็ดเลือดขาวชนิด Eosinophil (Eosinophilia) ลักษณะเด่นของ Eosinophil คือมีนิวเคลียส 2 lobe (bilobed nucleus) และมี granule ขนาดใหญ่ที่ติดสีชมพู-แดง (acidophilic/eosinophilic) อยู่ในไซโตพลาสซึม",
            state: false
        },
        {
            problem: "53. A 40-year-old woman presents with intermittent epistaxis and hypermenorrhea for 2 months. Physical examination demonstrated petechial hemorrhage. What is the most likely pathogenesis?",
            img: "",
            choices: "Collagen-vascular defect///Platelet dysfunction///Clotting factor deficiency///Hyperfibrinolysis///Thrombocytopenia",
            answer: "Thrombocytopenia",
            select: "",
            explain: "อาการแสดงของผู้ป่วยเป็นลักษณะของ primary hemostasis defect ได้แก่ เลือดออกตามเยื่อบุ (epistaxis, hypermenorrhea) และ petechiae การพบ petechiae (จุดเลือดออกขนาดเล็ก) เป็นลักษณะที่ค่อนข้างจำเพาะเจาะจงกับภาวะเกล็ดเลือดต่ำ (Thrombocytopenia) มากที่สุด เนื่องจากมีจำนวนเกล็ดเลือดไม่เพียงพอที่จะซ่อมแซมรอยรั่วเล็กๆ ของหลอดเลือดฝอยที่เกิดขึ้นเป็นปกติในแต่ละวัน",
            state: false
        },
        {
            problem: "54. A 62 years old male with lung cancer, metastasized to brain, lymph node, bone. เกิด dyspnea from pleural effusion and hoarseness. no history of cancer treatment. Doctor will prescribe antitumor surveillance. Which cell is the most involved?",
            img: "",
            choices: "Monocyte///B lymphocyte///Neutrophil///NK cell///Basophil",
            answer: "NK cell",
            select: "",
            explain: "Antitumor surveillance หรือ immune surveillance คือกลไกของระบบภูมิคุ้มกันในการเฝ้าระวังและกำจัดเซลล์ที่อาจกลายเป็นเซลล์มะเร็งหรือเซลล์มะเร็งที่เกิดขึ้นแล้ว เซลล์ในระบบภูมิคุ้มกันที่มีบทบาทสำคัญที่สุดในการกำจัดเซลล์มะเร็งโดยตรง โดยเฉพาะอย่างยิ่งในลักษณะที่ไม่ต้องอาศัย Major Histocompatibility Complex (MHC) คือ Natural Killer (NK) cell ซึ่งจัดเป็น innate lymphoid cell ที่สามารถฆ่าเซลล์เป้าหมายที่ผิดปกติได้ทันที",
            state: false
        },
        {
            problem: "55. A boy got bitten by a dog. He presented with swellings of the axillary lymph nodes. The doctor explains that these are active lymph nodes enlarged in response to the infection. What is the cause of the swellings?",
            img: "",
            choices: "Enlargement and increased activity of blood vessels in lymph nodes.///Increased lymph flow through afferent lymphatics of lymph nodes.///Increased thickness of each paracortex of lymph nodes.///Increased thickness of each medulla of lymph nodes.///Formation of the germinal center for B-cell proliferation in each cortex of lymph node",
            answer: "Formation of the germinal center for B-cell proliferation in each cortex of lymph node",
            select: "",
            explain: "เมื่อมีการติดเชื้อ แอนติเจนจากเชื้อโรคจะถูกนำมายังต่อมน้ำเหลืองที่รับน้ำเหลืองจากบริเวณนั้นๆ (draining lymph node) ในกรณีนี้คือ axillary lymph node แอนติเจนจะกระตุ้นให้เกิดการตอบสนองทางภูมิคุ้มกันแบบจำเพาะ (adaptive immune response) ทำให้ B-lymphocyte ในบริเวณ cortex ของต่อมน้ำเหลืองมีการแบ่งตัวเพิ่มจำนวนอย่างรวดเร็ว (proliferation) และพัฒนาเป็น germinal center ที่มีขนาดใหญ่ขึ้น ทำให้ต่อมน้ำเหลืองมีขนาดโตขึ้น ซึ่งเรียกว่า reactive lymphadenopathy",
            state: false
        },
        {
            problem: "56. A 3-year-old boy, native of Central Africa, presented with mild pallor, icterus and history of on and off abdominal and joints pain. On physical examination, he had mild splenomegaly. There was a history of sibling death at 5 years of age due to fever and jaundice. The peripheral blood smear was demonstrated as below. Which condition could be found in this patient?",
            img: "https://drive.google.com/open?id=1IFx7RMludv_CjaIcuMmuCAVulHiE4YQD&usp=drive_copy",
            choices: "Mutation of beta globin gene///Abnormalities of complement activation///Autoantibody of red cell membrane///Mutation of alpha globin gene///Mutation of PIG-A gene",
            answer: "Mutation of beta globin gene",
            select: "",
            explain: "ภาพ peripheral blood smear แสดงเม็ดเลือดแดงรูปร่างผิดปกติ โดยเฉพาะ sickle cell (รูปเคียว) และ target cell ร่วมกับประวัติเชื้อชาติ (Central Africa), อาการซีด, ตัวเหลือง, ปวดข้อปวดท้องเป็นๆ หายๆ (vaso-occlusive crisis) และม้ามโต ชี้ชัดถึงโรค Sickle Cell Anemia โรคนี้เกิดจากการกลายพันธุ์ของยีนเบต้าโกลบิน (beta globin gene) ทำให้เกิดการสร้างฮีโมโกลบินที่ผิดปกติคือ HbS ซึ่งจะตกตะกอนและทำให้เม็ดเลือดแดงเปลี่ยนเป็นรูปเคียวเมื่ออยู่ในภาวะขาดออกซิเจน",
            state: false
        },
        {
            problem: "57. Which of the following substances inhibit factor V and factor VIII?",
            img: "",
            choices: "Protein C & S///thrombin///antithrombin III///heparin///Tissue Factor Pathway Inhibitor",
            answer: "Protein C & S",
            select: "",
            explain: "Protein C และ Protein S เป็นโปรตีนต้านการแข็งตัวของเลือด (anticoagulant) ที่ต้องพึ่งวิตามินเคในการสังเคราะห์ เมื่อ Thrombin จับกับ Thrombomodulin บนผิวเซลล์ endothelial จะเปลี่ยน Protein C ให้กลายเป็น Activated Protein C (APC) จากนั้น APC จะร่วมกับ cofactor คือ Protein S ในการย่อยสลายและยับยั้งการทำงานของ Factor Va และ Factor VIIIa ซึ่งเป็น cofactor ที่สำคัญในกระบวนการแข็งตัวของเลือด",
            state: false
        },
        {
            problem: "58. เมื่อขึ้นไปบนที่สูง ร่างกายจะสร้าง 2,3-BPG เพิ่มขึ้น กราฟ oxygen-hemoglobin dissociation curve จะเป็นอย่างไร?",
            img: "https://drive.google.com/open?id=1AGgZz2F0Gk4gdLeBCDknmMn9T6PU_70v&usp=drive_copy",
            choices: "A///B///C///D///N",
            answer: "D",
            select: "",
            explain: "การขึ้นที่สูงทำให้ร่างกายอยู่ในภาวะพร่องออกซิเจน (hypoxia) ร่างกายจะปรับตัวโดยการสร้าง 2,3-Bisphosphoglycerate (2,3-BPG) ในเม็ดเลือดแดงเพิ่มขึ้น 2,3-BPG จะไปจับกับ deoxygenated hemoglobin ทำให้ฮีโมโกลบินมีความสามารถในการจับออกซิเจน (affinity) ลดลง และปล่อยออกซิเจนให้กับเนื้อเยื่อได้ง่ายขึ้น ส่งผลให้ Oxygen-hemoglobin dissociation curve เลื่อนไปทางขวา (shift to the right) ซึ่งตรงกับกราฟ D",
            state: false
        },
        {
            problem: "59. 10 year-old boy presented with multiple ecchymosis for 3 days. PE : BT 37.2 BP 100/70 PR 80 RR 20 no pale, no jaundice, multiple superficial ecchymosis at back, abdominal wall, chest, both thighs and leg. CBC : Hb, Hct ปกติ, Platelet ปกติ, PMN 65% Lym 30% Eo 15%. What is the most likely diagnosis?",
            img: "",
            choices: "Acquired platelet dysfunction with eosinophilia///Hemophilia///Thrombocytopenia///von Willebrand Disease///Acute Myeloid Leukemia",
            answer: "Acquired platelet dysfunction with eosinophilia",
            select: "",
            explain: "ผู้ป่วยมีอาการเลือดออกลักษณะของ primary hemostasis defect (ecchymosis) แต่มีจำนวนเกล็ดเลือดปกติ แสดงว่าน่าจะมีความผิดปกติที่การทำงานของเกล็ดเลือด (platelet dysfunction) หรือโรค von Willebrand Disease (vWD) ร่วมกับผล CBC พบว่ามี Eosinophilia (Eo 15%) ซึ่งอาจเป็นสาเหตุของ acquired platelet dysfunction ได้ ภาวะ Eosinophilia สามารถรบกวนการทำงานของเกล็ดเลือดได้โดยตรง ทำให้เกิดอาการเลือดออกผิดปกติได้แม้จำนวนเกล็ดเลือดจะปกติ",
            state: false
        },
        {
            problem: "60. Which of the following components are the main constituents of the network of reticular material that form in reticulocyte upon staining?",
            img: "",
            choices: "Hemoglobin///Nuclear fragment///Golgi apparatus///Nucleolus///Ribosomal RNA",
            answer: "Ribosomal RNA",
            select: "",
            explain: "Reticulocyte คือเม็ดเลือดแดงตัวอ่อนที่เพิ่งออกมาจากไขกระดูก ซึ่งยังไม่มีนิวเคลียสแล้ว แต่ยังคงมีออร์แกเนลล์บางส่วนหลงเหลืออยู่ โดยเฉพาะอย่างยิ่ง Ribosome และ remnant RNA ซึ่งใช้ในการสังเคราะห์ฮีโมโกลบินต่ออีกเล็กน้อย เมื่อนำไปย้อมด้วยสี supravital stain เช่น new methylene blue, RNA ที่หลงเหลืออยู่นี้จะตกตะกอนและติดสีให้เห็นเป็นลักษณะร่างแห (reticulum) สีน้ำเงินเข้ม ซึ่งเป็นที่มาของชื่อ reticulocyte",
            state: false
        },
        {
            problem: "61. ผู้ป่วยมี poikilocyte เยอะ, abnormal erythrocyte จะถูกกำจัดที่ไหนเป็นหลัก?",
            img: "",
            choices: "Splenic cord///Splenic sinusoid///Tonsillar crypt///Medullary sinus///Sheath of white pulp",
            answer: "Splenic cord",
            select: "",
            explain: "ม้าม (Spleen) ทำหน้าที่สำคัญในการคัดกรองและกำจัดเม็ดเลือดแดงที่แก่หรือมีรูปร่างผิดปกติ (poikilocyte) ออกจากระบบไหลเวียนโลหิต เม็ดเลือดแดงจะต้องบีบตัวผ่านช่องว่างเล็กๆ ระหว่างเซลล์ endothelial ของ Splenic sinusoid เพื่อกลับเข้าสู่กระแสเลือด เซลล์ที่ผิดปกติซึ่งขาดความยืดหยุ่นจะไม่สามารถผ่านไปได้และจะถูกกักไว้ที่ Splenic cord (Cords of Billroth) และถูกจับกินโดย macrophage ที่อยู่ในบริเวณนั้น",
            state: false
        },
        {
            problem: "62. Which disease is associated with a deficiency of the GPIb-IX-V complex?",
            img: "",
            choices: "von-Willebrand disease///Bernard-Soulier syndrome///Glanzmann thrombasthenia///Hemophilia///Thrombocytopenia",
            answer: "Bernard-Soulier syndrome",
            select: "",
            explain: "Glycoprotein (GP) Ib-IX-V complex เป็น receptor ที่สำคัญบนผิวของเกล็ดเลือด ทำหน้าที่จับกับ von Willebrand Factor (vWF) ที่เกาะอยู่บน subendothelial collagen เมื่อหลอดเลือดได้รับบาดเจ็บ ซึ่งเป็นขั้นตอนแรกของการยึดเกาะของเกล็ดเลือด (platelet adhesion) โรค Bernard-Soulier syndrome เป็นโรคทางพันธุกรรมที่เกิดจากการขาด GPIb-IX-V complex ทำให้เกล็ดเลือดไม่สามารถยึดเกาะกับหลอดเลือดได้ตามปกติ ส่งผลให้มีเลือดออกผิดปกติและมักพบเกล็ดเลือดขนาดใหญ่ (giant platelets)",
            state: false
        },
        {
            problem: "63. A 43-year-old woman has been deeply penetrated by a thorn. The next day her finger has become infected and there is pus inside. Which of the following cells plays a role in the pus formation?",
            img: "",
            choices: "A biconcave cell without a nucleus///A cell with a polymorphic and multiple lobed nucleus///A cell with a large & rounded nucleus and scant cytoplasm///A cell with a bilobed nucleus and many acidophilic specific granules///A very small cell without a nucleus originated by cytoplasmic budding from a giant cell",
            answer: "A cell with a polymorphic and multiple lobed nucleus",
            select: "",
            explain: "หนอง (Pus) คือของเหลวที่เกิดจากการอักเสบติดเชื้อแบคทีเรียเฉียบพลัน ประกอบด้วยเซลล์เม็ดเลือดขาวที่ตายแล้ว, เศษซากของเซลล์, และเชื้อโรค เซลล์เม็ดเลือดขาวที่มีบทบาทหลักในการต่อสู้กับการติดเชื้อแบคทีเรียและเป็นส่วนประกอบหลักของหนองคือ Neutrophil ซึ่งมีลักษณะเด่นคือมีนิวเคลียสหลายพู (polymorphic and multiple lobed nucleus) Neutrophil จะเคลื่อนที่ไปยังบริเวณที่ติดเชื้อ (chemotaxis) และทำการจับกินเชื้อโรค (phagocytosis)",
            state: false
        },
        {
            problem: "64. Upon arrival at the emergency unit, a 32-year-old man comes up with a rash over his face, hands, and arm while doing farming. The doctor determines that the patient has exposure to a poisonous agent. Which specific cells are responsible for this rash?",
            img: "",
            choices: "Neutrophil///Mast cell///Monocyte///Lymphocyte///Eosinophil",
            answer: "Mast cell",
            select: "",
            explain: "ผื่นที่เกิดจากการสัมผัสสารพิษ (poisonous agent) โดยเฉพาะจากพืชหรือแมลง มักเป็นปฏิกิริยาภูมิแพ้เฉียบพลัน (Type I hypersensitivity) เซลล์ที่มีบทบาทสำคัญที่สุดในปฏิกิริยานี้คือ Mast cell ซึ่งอยู่ตามเนื้อเยื่อต่างๆ เมื่อถูกกระตุ้นโดย allergen, Mast cell จะปล่อยสารสื่ออักเสบ เช่น histamine ออกมาทันที (degranulation) ทำให้เกิดอาการบวม แดง คัน และเป็นผื่นลมพิษ (urticaria หรือ hives)",
            state: false
        },
        {
            problem: "65. A 62-year-old woman presents with fatigue, and numbness in her hands and feets. Px. pale conjuctivae, mild jaundice. Laboratory results show: Hb 9.5 g/dL, MCV 112 fL, Reticulocyte count: low. What deficiency is most likely the cause of these findings?",
            img: "",
            choices: "Folate deficiency///G6PD Deficiency///Iron deficiency///Vitamin B12 deficiency///Copper deficiency",
            answer: "Vitamin B12 deficiency",
            select: "",
            explain: "ผู้ป่วยมีภาวะ Macrocytic anemia (MCV 112 fL) ร่วมกับภาวะซีด (fatigue, pale), ตัวเหลืองเล็กน้อย (mild jaundice, จาก ineffective erythropoiesis) และที่สำคัญคือมีอาการทางระบบประสาท (numbness in her hands and feets) ซึ่งเป็นอาการที่จำเพาะกับการขาดวิตามิน B12 (Cobalamin) เนื่องจากวิตามิน B12 มีความจำเป็นต่อการสร้าง myelin sheath ของเส้นประสาท การขาดวิตามิน B12 อย่างรุนแรงและยาวนานจึงทำให้เกิดความผิดปกติทางระบบประสาทได้ ซึ่งไม่พบในการขาดโฟเลต",
            state: false
        }
    ],
    "HL51MCQ2": [
        {
            problem: "1. A 30 year-old female presents with fever, malaise. Physical examination reveals injected conjunctiva and anicteric sclera. Lab results are as follows: Hct: 40%, WBC: 10000/mm³ (PMN: 63%, Lymp: 30%, Eo: 4%, Mono: 3%). Urinalysis shows WBC 1-2/HPF and RBC 0-3/HPF. What is the most proper management for this patient?",
            img: "",
            choices: "test for dengue NS1 Ag///hemoculture///ciprofloxacin///ceftriazone///doxycycline therapeutic trial",
            answer: "doxycycline therapeutic trial",
            select: "",
            explain: "ผู้ป่วยมีอาการไข้ (fever) อ่อนเพลีย (malaise) และที่สำคัญคือตาแดง (injected conjunctiva) โดยที่ตาขาวไม่เหลือง (anicteric sclera) ผลเลือด WBC สูงเล็กน้อยและมี PMN เด่น เข้าได้กับ Leptospirosis (โรคฉี่หนู) มากที่สุด การให้ยาปฏิชีวนะ Doxycycline เพื่อการรักษา (therapeutic trial) จึงเป็นการจัดการที่เหมาะสมที่สุด Dengue มักจะมี WBC ต่ำและเกล็ดเลือดต่ำ ส่วนการเพาะเชื้อ (hemoculture) เป็นการวินิจฉัยไม่ใช่การรักษา",
            state: false
        },
        {
            problem: "2. A 25 year old man comes to the hospital with fever for 4 days. He also has a headache, coffee ground vomiting, and sub-conjunctival hemorrhage. Vitals: BT 36.5°C, BP 90/70 mmHg, PR 110/min, RR 26/min. Physical examination shows dyspnea and ascites. What is the most appropriate treatment?",
            img: "",
            choices: "Doxycycline///Blood transfusion///Ceftriaxone///Platelet transfusion///5% D/NSS",
            answer: "5% D/NSS",
            select: "",
            explain: "ผู้ป่วยมีอาการไข้และมีภาวะช็อก (BP 90/70, PR 110) ร่วมกับมีหลักฐานของ plasma leakage เช่น อาเจียนเป็นสีกาแฟ (coffee ground) มีเลือดออกใต้เยื่อบุตา (sub-conjunctival hemorrhage) หายใจหอบ (Dyspnea) และท้องมาน (Ascites) ซึ่งเป็นลักษณะของ Dengue Shock Syndrome (DSS) การรักษาที่สำคัญที่สุดและเร่งด่วนคือการให้สารน้ำทางหลอดเลือดดำ (IV fluid resuscitation) เช่น 5% D/NSS เพื่อแก้ไขภาวะ hypovolemia",
            state: false
        },
        {
            problem: "3. A 37 years old female came with high grade fever for 7 days, and developed conjunctivitis, malaise, and an erythematous maculopapular rash. Vitals: BT 38°C, BP 90/60 mmHg, PR 110/min, RR 18/min. CBC: Hct 45%, WBC 4500/mm³ (PMN 70%, LYM 30%), Platelet 140,000/mm³. What is the most likely diagnosis?",
            img: "",
            choices: "Infectious mononucleosis///Influenza///Dengue hemorrhagic fever///Murine typhus///Leptospirosis",
            answer: "Murine typhus",
            select: "",
            explain: "ผู้ป่วยมีไข้สูงนาน 7 วัน มีผื่นแดง (maculopapular rash) และเยื่อบุตาอักเสบ (conjunctivitis) ร่วมกับมีความดันต่ำ (hypotension) และ Hct สูง (hemoconcentration) แต่เกล็ดเลือดยังไม่ต่ำมาก ลักษณะทางคลินิกและผลเลือดเข้าได้กับกลุ่มโรค Rickettsia เช่น Murine typhus มากที่สุด DHF มักจะมีเกล็ดเลือดต่ำกว่านี้ Leptospirosis มักมี PMN เด่น",
            state: false
        },
        {
            problem: "4. What is the mechanism of action of Primaquine?",
            img: "",
            choices: "Inhibit heme metabolism///Increases ROS///Inhibit Electron transport///Block protein synthesis///Inhibit DNA gyrase",
            answer: "Increases ROS",
            select: "",
            explain: "Primaquine เป็นยาต้านมาลาเรียที่ออกฤทธิ์โดยการสร้างสารอนุมูลอิสระ (Reactive Oxygen Species - ROS) ซึ่งเป็นพิษต่อเซลล์ของเชื้อมาลาเรีย โดยเฉพาะระยะที่อยู่ในตับ (hypnozoite) ทำให้เชื้อตาย",
            state: false
        },
        {
            problem: "5. Pernicious anemia is caused by a deficiency of what?",
            img: "",
            choices: "Cobalamin///Iron///Filgrastim///Alfa-epoetin///Folic acid",
            answer: "Cobalamin",
            select: "",
            explain: "Pernicious anemia คือภาวะโลหิตจางชนิด megaloblastic anemia ที่เกิดจากการขาดวิตามิน B12 (Cobalamin) เนื่องจากร่างกายไม่สามารถสร้าง Intrinsic Factor ซึ่งจำเป็นต่อการดูดซึมวิตามิน B12 ที่ลำไส้ได้",
            state: false
        },
        {
            problem: "6. A 37 year old man with malaise and headache was diagnosed with a malarial infection and received prior treatment. Which of the following causes a relapse of the infection?",
            img: "",
            choices: "Persistent parasite in RBC///Persistent parasite in WBC///Dormant stage in liver///Dormant stage in spleen///Dormant stage in kidney",
            answer: "Dormant stage in liver",
            select: "",
            explain: "การกลับเป็นซ้ำ (relapse) ของโรคมาลาเรีย โดยเฉพาะสายพันธุ์ P. vivax และ P. ovale เกิดจากเชื้อระยะพักตัวที่เรียกว่า hypnozoite ซึ่งอาศัยอยู่ในเซลล์ตับ (liver) เมื่อได้รับการกระตุ้นก็จะเจริญเติบโตและเข้าสู่กระแสเลือดใหม่",
            state: false
        },
        {
            problem: "7. A 35-year-old woman without known allergies is given fresh frozen plasma. After a few minutes, she develops respiratory distress, urticaria, and hypotension. Which transfusion reaction does this woman suffer?",
            img: "",
            choices: "TRALI///Anaphylactic reaction///TACO///Acute hemolytic transfusion reaction///FNHTR",
            answer: "Anaphylactic reaction",
            select: "",
            explain: "อาการที่เกิดขึ้นอย่างรวดเร็ว (ภายในไม่กี่นาที) หลังได้รับเลือด ได้แก่ หายใจลำบาก (respiratory distress) ผื่นลมพิษ (urticaria) และความดันโลหิตต่ำ (hypotension) เป็นลักษณะจำเพาะของ Anaphylactic reaction ซึ่งเป็นการแพ้อย่างรุนแรง มักเกิดในผู้ป่วยที่ขาด IgA แต่มี anti-IgA antibody อยู่แล้ว",
            state: false
        },
        {
            problem: "8. A 13-year-old girl was diagnosed with thalassemia and has been receiving blood transfusions. She developed hemochromatosis. What is a proper management for her iron level?",
            img: "",
            choices: "Deferoxamine///Eltrombopag///Pegfilgrastim///Ferumoxytol///Idarucizumab",
            answer: "Deferoxamine",
            select: "",
            explain: "ผู้ป่วย Thalassemia ที่ได้รับเลือดบ่อยๆ จะเกิดภาวะธาตุเหล็กเกิน (hemochromatosis หรือ iron overload) การรักษาคือการให้ยาขับธาตุเหล็ก (iron chelator) ซึ่ง Deferoxamine เป็นหนึ่งในยาหลักในกลุ่มนี้",
            state: false
        },
        {
            problem: "9. A patient with a history of stroke is prescribed aspirin. Which of the following conditions is a contraindication for aspirin use?",
            img: "",
            choices: "Hypertension///Diabetes Mellitus///Rheumatoid arthritis///Asthma///Hyperlipidemia",
            answer: "Asthma",
            select: "",
            explain: "แอสไพริน (Aspirin) เป็นยาในกลุ่ม NSAIDs ซึ่งสามารถกระตุ้นให้เกิดอาการหอบหืดกำเริบในผู้ป่วยบางรายได้ (Aspirin-Exacerbated Respiratory Disease - AERD) ดังนั้นโรคหอบหืด (Asthma) จึงถือเป็นข้อห้ามใช้ (contraindication) ที่สำคัญในตัวเลือกเหล่านี้",
            state: false
        },
        {
            problem: "10. A 28-year-old woman presents with a fever of 39°C and malaise for three days. A blood smear shows parasites (see image). What are the possible Plasmodium species and the appropriate technique for discrimination?",
            img: "https://drive.google.com/open?id=1JdJ7hIGHnvLKv9gEdYrkWDu2gTo9zu9E&usp=drive_copy",
            choices: "P. vivax / P. malariae, Antigen detection///P. knowlesi / P. vivax, Antibody detection///P. falciparum / P. vivax, molecular technique///P. knowlesi / P. falciparum, molecular technique///P. malariae / P. knowlesi, molecular technique",
            answer: "P. malariae / P. knowlesi, molecular technique",
            select: "",
            explain: "จากรูป Blood smear อาจเห็นเชื้อมาลาเรียในระยะต่างๆ ที่มีลักษณะคาบเกี่ยวกัน เช่น band form ที่เป็นลักษณะของ P. malariae และ ring form ที่อาจเป็นได้ทั้ง P. falciparum หรือ P. knowlesi ซึ่ง P. knowlesi มีลักษณะทางสัณฐานวิทยาคล้ายกับ P. malariae และ P. falciparum มาก ทำให้แยกได้ยากด้วยกล้องจุลทรรศน์เพียงอย่างเดียว จึงจำเป็นต้องใช้เทคนิคระดับโมเลกุล (Molecular technique) เช่น PCR เพื่อยืนยันสายพันธุ์ที่แน่นอน",
            state: false
        },
        {
            problem: "11. A male patient is diagnosed with acute myocardial infarction. The doctor prescribed drug X to improve blood flow and relieve his symptoms by dissolving the clot. Which is the most likely drug X?",
            img: "",
            choices: "Heparin///Argatroban///Warfarin///Reteplase///Dabigatran",
            answer: "Reteplase",
            select: "",
            explain: "ในภาวะกล้ามเนื้อหัวใจขาดเลือดเฉียบพลัน (Acute MI) ที่เกิดจากลิ่มเลือดอุดตัน การรักษาคือการเปิดหลอดเลือด ซึ่งสามารถทำได้โดยการให้ยาละลายลิ่มเลือด (fibrinolytic drug) ในตัวเลือกนี้ Reteplase เป็นยาในกลุ่ม fibrinolytic ส่วน Heparin, Argatroban, Warfarin, Dabigatran เป็นยาต้านการแข็งตัวของเลือด (anticoagulant) ซึ่งป้องกันการเกิดลิ่มเลือดแต่ไม่สามารถสลายลิ่มเลือดที่เกิดขึ้นแล้วได้",
            state: false
        },
        {
            problem: "12. A patient is diagnosed with thrombocytopenia secondary to receiving chemotherapy for non-myeloid lymphoma. What drug would alleviate severe symptoms by stimulating platelet production?",
            img: "",
            choices: "Oprelvekin///Luspatercept///Sargramostim///Filgrastim///Eltrombopag",
            answer: "Eltrombopag",
            select: "",
            explain: "ภาวะเกล็ดเลือดต่ำจากเคมีบำบัด (Chemotherapy-induced thrombocytopenia) สามารถรักษาได้โดยการให้ยากระตุ้นการสร้างเกล็ดเลือด Eltrombopag เป็น thrombopoietin (TPO) receptor agonist ที่กระตุ้นไขกระดูกให้สร้างเกล็ดเลือดมากขึ้น ส่วน Oprelvekin (IL-11) ก็ใช้ได้เช่นกันแต่มีผลข้างเคียงเยอะกว่า ปัจจุบันนิยมใช้กลุ่ม TPO agonist มากกว่า Sargramostim และ Filgrastim เป็นยากระตุ้นเม็ดเลือดขาว",
            state: false
        },
        {
            problem: "13. When donating blood, an HIV-Ag/Ab combo test is performed. If this result is negative, what additional test should be done to ensure safety?",
            img: "",
            choices: "NAT for HIV///HIV Western blot///CD4 count///HIV p24 antigen test///Repeat combo test in 3 months",
            answer: "NAT for HIV",
            select: "",
            explain: "การตรวจ HIV-Ag/Ab combo test ยังมีช่วง window period ที่อาจให้ผลลบได้หากผู้บริจาคเพิ่งได้รับเชื้อมาไม่นาน ดังนั้นในการคัดกรองเลือดบริจาคจึงต้องมีการตรวจเพิ่มเติมด้วยเทคนิค Nucleic Acid Testing (NAT) ซึ่งสามารถตรวจจับสารพันธุกรรม (RNA) ของเชื้อ HIV ได้โดยตรง ทำให้ตรวจพบการติดเชื้อได้เร็วกว่าและลด window period ลง",
            state: false
        },
        {
            problem: "14. A 65-year-old female came up with high grade fever and productive cough for 2 days. After admission, she developed stupor, epistaxis, and coffee ground vomiting. Vitals: BP 80/50 mmHg, PR 120/min, RR 24/min. CBC: Hct 43%, WBC 12000/mm³ (PMN 79%, Lymph 11%, Band 10%), Platelets 50000/mm³. Blood smear: anisocytosis 2+, poikilocytosis 2+, schistocyte 1+. UA: numerous white cells, albumin 1+. What is the mechanism of epistaxis and coffee ground vomiting?",
            img: "",
            choices: "Platelet dysfunction///Increased fibrinolysis///Decreased coagulation factors///Increased protein C and protein S///Decreased fibrinogen synthesis",
            answer: "Decreased coagulation factors",
            select: "",
            explain: "ผู้ป่วยรายนี้มีอาการของ Sepsis และภาวะช็อก (Hypotension, Tachycardia) ร่วมกับมีเลือดออกผิดปกติ (epistaxis, coffee ground) และผล Lab มีเกล็ดเลือดต่ำ (Thrombocytopenia) และพบ Schistocyte บน blood smear ลักษณะทั้งหมดนี้บ่งชี้ถึงภาวะ Disseminated Intravascular Coagulation (DIC) ซึ่งเป็นภาวะแทรกซ้อนของ Sepsis กลไกหลักของเลือดออกใน DIC คือการใช้ coagulation factors และเกล็ดเลือดไปจนหมดสิ้น (consumption coagulopathy) ทำให้ปัจจัยการแข็งตัวของเลือดลดลง",
            state: false
        },
        {
            problem: "15. What medication is given to a patient with excessive bleeding, for example, after surgery or in conditions like hemophilia, to promote clotting?",
            img: "",
            choices: "Streptokinase///Vorapaxar///Tranexamic acid///Plasmin///Heparin",
            answer: "Tranexamic acid",
            select: "",
            explain: "Tranexamic acid เป็นยาในกลุ่ม antifibrinolytic agent ออกฤทธิ์โดยการยับยั้งการทำงานของ plasminogen และ plasmin ทำให้กระบวนการสลายลิ่มเลือด (fibrinolysis) ช้าลง ส่งผลให้ลิ่มเลือดที่สร้างขึ้นมามีความคงตัวและช่วยห้ามเลือดได้ จึงใช้ในภาวะเลือดออกมากผิดปกติ ส่วน Streptokinase และ Plasmin เป็นตัวสลายลิ่มเลือด",
            state: false
        },
        {
            problem: "16. Taking a proton pump inhibitor will render which of the following drugs ineffective?",
            img: "",
            choices: "Clopidogrel///Prasugrel///Tirofiban///Ticagrelor///Heparin",
            answer: "Clopidogrel",
            select: "",
            explain: "Clopidogrel เป็นยาในกลุ่ม prodrug ที่ต้องถูกเปลี่ยนให้อยู่ในรูป active form โดยเอนไซม์ CYP2C19 ที่ตับก่อนจึงจะออกฤทธิ์ได้ ยาลดกรดในกลุ่ม Proton Pump Inhibitors (PPIs) โดยเฉพาะ Omeprazole จะยับยั้งการทำงานของเอนไซม์นี้ ทำให้ Clopidogrel ไม่สามารถออกฤทธิ์ยับยั้งเกล็ดเลือดได้อย่างเต็มที่",
            state: false
        },
        {
            problem: "17. In a situation that lacks blood components of group A blood, which one can be used instead for a patient with group A blood?",
            img: "",
            choices: "Group B PRC and Group AB FFP///Group O PRC and Group B FFP///Group O PRC and Group AB FFP///Group B PRC and Group O FFP///Group O PRC and Group O FFP",
            answer: "Group O PRC and Group AB FFP",
            select: "",
            explain: "หลักการให้เลือดคือต้องเข้ากันได้ระหว่าง Antigen บนเม็ดเลือดแดงของผู้ให้และ Antibody ในพลาสมาของผู้รับ สำหรับเม็ดเลือดแดง (PRC) ผู้ป่วยหมู่ A สามารถรับหมู่ O (Universal donor) ได้ สำหรับพลาสมา (FFP) ผู้ป่วยหมู่ A มี Anti-B antibody ดังนั้นต้องรับพลาสมาที่ไม่มี Anti-A antibody ซึ่งก็คือหมู่ A และ AB (Universal recipient for plasma) ดังนั้นในกรณีที่ไม่มีเลือดหมู่ A เลย ตัวเลือกที่ปลอดภัยที่สุดคือ Group O PRC และ Group AB FFP",
            state: false
        },
        {
            problem: "18. A 28 year old man is seropositive for HIV. His CD4 count is 750 cells/mm³. What is the advice or drug regimen that a doctor should give him?",
            img: "",
            choices: "No Antivirals drug needed, CD4 check up every year///Triple drug AZT, efavirenz, ritonavir-boosted lopinavir///He is still young, monotherapy is enough///No antivirals drug needed, CD4 check up every 6 months///Triple therapy 3TC, TAF, DTG",
            answer: "Triple therapy 3TC, TAF, DTG",
            select: "",
            explain: "ตามแนวทางการรักษาผู้ติดเชื้อ HIV ในปัจจุบัน แนะนำให้เริ่มยาต้านไวรัส (Antiretroviral therapy - ART) ทุกรายโดยเร็วที่สุด ไม่ว่าจะตรวจพบที่ระดับ CD4 เท่าใดก็ตาม (Test and Treat strategy) สำหรับสูตรยาเริ่มต้น (first-line regimen) ที่แนะนำในปัจจุบันคือการใช้ยา 3 ชนิดร่วมกัน ซึ่งสูตรที่ประกอบด้วย 2 NRTIs + 1 INSTI เช่น 3TC (Lamivudine) + TAF (Tenofovir alafenamide) + DTG (Dolutegravir) เป็นสูตรที่มีประสิทธิภาพสูงและผลข้างเคียงน้อย",
            state: false
        },
        {
            problem: "19. An 18 year old presents with fever for 5 days, enlarged tonsils, and a blood smear showing >10% Downey cells (atypical lymphocytes). What is the most likely diagnosis?",
            img: "",
            choices: "HTLV-1///Infectious Mononucleosis (IM)///CMV///Acute leukemia///Bacterial pharyngitis",
            answer: "Infectious Mononucleosis (IM)",
            select: "",
            explain: "อาการไข้ เจ็บคอ ต่อมทอนซิลโต (tonsillitis/pharyngitis) ร่วมกับการตรวจพบ Downey cells หรือ Atypical lymphocytes ในเลือด มากกว่า 10% เป็นลักษณะคลาสสิกของโรค Infectious Mononucleosis (IM) ซึ่งส่วนใหญ่เกิดจากการติดเชื้อ Epstein-Barr virus (EBV)",
            state: false
        },
        {
            problem: "20. A patient's case is described in detail, and the key genetic finding is the translocation t(8;14). What is the diagnosis?",
            img: "",
            choices: "Burkitt lymphoma///Follicular lymphoma///Acute promyelocytic leukemia///Diffuse large B cell lymphoma///Acute myelogenous leukemia",
            answer: "Burkitt lymphoma",
            select: "",
            explain: "Chromosomal translocation t(8;14) เป็นลักษณะทางพันธุกรรมที่จำเพาะเจาะจง (pathognomonic) ของมะเร็งต่อมน้ำเหลืองชนิด Burkitt lymphoma โดยเป็นการย้ายตำแหน่งของ c-MYC oncogene จากโครโมโซมที่ 8 ไปยังตำแหน่งของ immunoglobulin heavy chain บนโครโมโซมที่ 14 ทำให้มีการแสดงออกของ MYC มากผิดปกติและกระตุ้นการแบ่งตัวของเซลล์อย่างรวดเร็ว",
            state: false
        },
        {
            problem: "21. A 45-year-old male developed mucous bloody diarrhea 20 days after a kidney transplant. An intestinal biopsy revealed inclusion bodies. What is the most likely diagnosis?",
            img: "",
            choices: "CMV reactivation///CMV latent mutation///CMV metastasis///Chronic CMV infection///Graft-versus-host disease",
            answer: "CMV reactivation",
            select: "",
            explain: "ในผู้ป่วยที่ได้รับยากดภูมิคุ้มกันหลังการปลูกถ่ายอวัยวะ (immunosuppressed host) การเกิดอาการทางระบบทางเดินอาหารเช่นถ่ายเป็นมูกเลือด และผลตรวจชิ้นเนื้อ (biopsy) พบ inclusion bodies (ลักษณะคล้ายตานกฮูก 'owl's eye') เป็นลักษณะจำเพาะของการติดเชื้อ Cytomegalovirus (CMV) ซึ่งมักเป็นการกำเริบของเชื้อที่เคยติดมาแล้ว (reactivation)",
            state: false
        },
        {
            problem: "22. A 23 year old university student presents with high fever for 5 days, subconjunctival hemorrhage, and tender hepatomegaly. CBC: Hct 47%, WBC 5400/mm³ (PMN 60%, Lymph 35%, Atypical lymph 5%), Platelet 90,000/mm³. UA: specific gravity 1.025, Ketone 3+. What is the pathogenesis of hepatomegaly?",
            img: "",
            choices: "Plasma leakage///Vasculitis///Endotoxin///DIC///Immune complex",
            answer: "Plasma leakage",
            select: "",
            explain: "ผู้ป่วยมีอาการและผลเลือดเข้าได้กับโรคไข้เลือดออก (Dengue infection) ซึ่งได้แก่ ไข้สูง เกล็ดเลือดต่ำ และ Hct สูง (hemoconcentration) พยาธิกำเนิดหลักของภาวะตับโต (hepatomegaly) และภาวะแทรกซ้อนอื่นๆในไข้เลือดออกคือการรั่วของพลาสมา (plasma leakage)ออกนอกหลอดเลือดไปยังเนื้อเยื่อต่างๆ รวมถึงตับ ทำให้เกิดตับบวมและโตขึ้น",
            state: false
        },
        {
            problem: "23. What is the main purpose for using Ritonavir with Protease Inhibitor (PI) drugs?",
            img: "",
            choices: "Increase bioavailability of PI by inhibiting CYP3A4///Inhibit renal tubular secretion///Increase distribution///Increase absorption///Act as a primary antiviral agent",
            answer: "Increase bioavailability of PI by inhibiting CYP3A4",
            select: "",
            explain: "Ritonavir ในขนาดต่ำๆ ถูกใช้เป็นยาเสริม (booster หรือ pharmacokinetic enhancer) ร่วมกับยาต้านไวรัสกลุ่ม Protease Inhibitors (PIs) ตัวอื่น กลไกคือ Ritonavir เป็นตัวยับยั้งเอนไซม์ CYP3A4 ที่ตับอย่างมีประสิทธิภาพ ซึ่งเอนไซม์นี้เป็นตัวหลักในการทำลายยา PIs ตัวอื่น การยับยั้ง CYP3A4 จะทำให้ระดับยา PIs ในเลือดสูงขึ้นและอยู่นานขึ้น เพิ่มประสิทธิภาพในการรักษา",
            state: false
        },
        {
            problem: "24. A 25 years old female presents with an anterior mediastinal mass. A biopsy reveals lymph nodules surrounded by fibrous bands. Within the nodules, Reed-Sternberg cells are found against a background of mixed inflammatory cells. What is the diagnosis?",
            img: "",
            choices: "Thymoma///T-cell lymphoblastic lymphoma///B-cell lymphoblastic lymphoma///Diffuse large B-cell lymphoma///Classical Hodgkin lymphoma",
            answer: "Classical Hodgkin lymphoma",
            select: "",
            explain: "การพบเซลล์ขนาดใหญ่ที่จำเพาะเจาะจงคือ Reed-Sternberg cell อยู่ท่ามกลางเซลล์อักเสบอื่นๆ (mixed inflammatory cells) และมีลักษณะเป็นก้อนๆที่ถูกล้อมรอบด้วยพังผืด (nodular sclerosis) เป็นลักษณะทางพยาธิวิทยาที่คลาสสิกของ Classical Hodgkin lymphoma โดยเฉพาะชนิดย่อย Nodular Sclerosis ซึ่งพบบ่อยในหญิงสาวและมักมีก้อนที่ mediastinum",
            state: false
        },
        {
            problem: "25. Which antiplatelet drugs are most commonly used in patients undergoing Percutaneous Coronary Intervention (PCI)?",
            img: "",
            choices: "Ticagrelor and Aspirin///Aspirin only///Abciximab and Clopidogrel///Prasugrel only///Clopidogrel and Heparin",
            answer: "Ticagrelor and Aspirin",
            select: "",
            explain: "ในผู้ป่วยที่ทำ PCI หรือการสวนหัวใจเพื่อใส่ขดลวด การรักษามาตรฐานคือการให้ยาต้านเกล็ดเลือด 2 ชนิดร่วมกัน (Dual Antiplatelet Therapy - DAPT) ซึ่งประกอบด้วย Aspirin ร่วมกับยาในกลุ่ม P2Y12 inhibitor ซึ่งในปัจจุบันยาที่มีประสิทธิภาพสูงเช่น Ticagrelor หรือ Prasugrel มักถูกเลือกใช้มากกว่า Clopidogrel (Aspirin + P2Y12 inhibitor)",
            state: false
        },
        {
            problem: "26. A patient with idiopathic thrombocytopenic purpura (ITP) has active bleeding. Lab results: Hb 13 g/dL, Hct 30%, MCV 86 fL, RDW 13%, WBC 3800/mm³, Platelet 10,000/mm³. What is the proper management?",
            img: "",
            choices: "FFP///Whole blood///LDPRC///Platelet concentration///Cryoprecipitate",
            answer: "Platelet concentration",
            select: "",
            explain: "ผู้ป่วย ITP มีปัญหาที่เกล็ดเลือดต่ำมาก (severe thrombocytopenia) และมีเลือดออก (active bleeding) การรักษาที่เร่งด่วนที่สุดเพื่อหยุดเลือดคือการให้เกล็ดเลือดทดแทน ซึ่งก็คือ Platelet concentrate หรือเกล็ดเลือดเข้มข้น การให้ส่วนประกอบเลือดอื่นๆ เช่น FFP หรือ Cryoprecipitate ไม่ช่วยเพิ่มจำนวนเกล็ดเลือด",
            state: false
        },
        {
            problem: "27. A 35 years old male farmer had acute fever, headache, and myalgia. PE: injected conjunctivae, mild jaundice, and a well-defined small crust (eschar) at the right groin. CBC: WBC 12,500/mm³, Platelet 90,000/mm³. UA: WBC 2-3 cells, RBC 10 cells, albumin 2+. What's the diagnosis for this disease?",
            img: "",
            choices: "Dengue fever///Leptospirosis///Scrub typhus///Murine typhus///Spotted fever",
            answer: "Scrub typhus",
            select: "",
            explain: "ประวัติเป็นเกษตรกร มีไข้เฉียบพลัน และตรวจร่างกายพบแผลคล้ายบุหรี่จี้ที่เรียกว่า eschar เป็นลักษณะที่จำเพาะมากสำหรับโรค Scrub typhus (โรคไข้รากสาดใหญ่) ซึ่งเกิดจากการติดเชื้อ Orientia tsutsugamushi โดยมีตัวไรอ่อนเป็นพาหะ อาการอื่นเช่น ตาแดง ตัวเหลือง เกล็ดเลือดต่ำก็พบได้เช่นกัน",
            state: false
        },
        {
            problem: "28. A 70-year-old man has fever, dyspnea, and hypotension, and was admitted and treated for sepsis. Which of the following indicates adequate resuscitation?",
            img: "",
            choices: "Lactate clearance///Tachycardia///Fever down///Respiratory alkalosis///Hyperglycemia",
            answer: "Lactate clearance",
            select: "",
            explain: "ในภาวะ Sepsis และ Septic shock ร่างกายจะมีการสร้าง Lactate เพิ่มขึ้นจากการที่เซลล์ขาดออกซิเจน (tissue hypoxia) การวัดระดับ Lactate และติดตามการลดลงของมัน (Lactate clearance) เป็นตัวบ่งชี้ที่สำคัญว่าการให้สารน้ำและกู้ชีพ (resuscitation) นั้นเพียงพอและสามารถแก้ไขภาวะ tissue hypoxia ได้แล้ว ส่วนตัวเลือกอื่นเป็นอาการของโรคหรือภาวะแทรกซ้อน ไม่ใช่เป้าหมายของการกู้ชีพ",
            state: false
        },
        {
            problem: "29. A 15 year old girl has unprotected sex. Her anti-HIV test is reactive with high CD4+ and CD8+ T lymphocytes. Which one of the following is a factor for HIV entry into a CD4+ cell?",
            img: "",
            choices: "p24 Ag///HIV RNA///Protease enzyme///Antibody dependent enhancement///CCR5-CXCR4",
            answer: "CCR5-CXCR4",
            select: "",
            explain: "เชื้อ HIV จะเข้าสู่เซลล์ CD4+ T lymphocyte ได้นั้น นอกจากจะต้องจับกับ CD4 receptor บนผิวเซลล์แล้ว ยังต้องอาศัยการจับกับ co-receptor ตัวที่สองด้วย ซึ่ง co-receptor ที่สำคัญก็คือ CCR5 และ CXCR4 ดังนั้นโปรตีนเหล่านี้จึงเป็นปัจจัยสำคัญในขั้นตอนการเข้าสู่เซลล์ (entry) ของเชื้อ HIV",
            state: false
        },
        {
            problem: "30. A 65-year old female with sepsis was transfused with FFP. Within 6 hours, she developed acute respiratory distress. A chest x-ray found diffuse alveolar infiltrates without cardiomegaly. CBC: Hb 10g/dL, Hct 30%, WBC 15,000/mm³, platelet 100,000/mm³. Coagulogram: PT & aPTT prolonged. What is the transfusion reaction?",
            img: "",
            choices: "AHTR///FNHTR///Anaphylaxis///TRALI///TACO",
            answer: "TRALI",
            select: "",
            explain: "การเกิดภาวะหายใจล้มเหลวเฉียบพลัน (acute respiratory distress) ภายใน 6 ชั่วโมงหลังได้รับผลิตภัณฑ์จากเลือด โดยที่ผล X-ray พบฝ้าขาวในปอดทั้งสองข้าง (diffuse alveolar infiltrates) แต่ไม่มีภาวะหัวใจโตหรือน้ำเกิน (no cardiomegaly) เป็นลักษณะจำเพาะของ Transfusion-Related Acute Lung Injury (TRALI) ซึ่งเป็นปฏิกิริยาจากการได้รับเลือดที่รุนแรง",
            state: false
        },
        {
            problem: "31. Which of the following is the correct pair of an anti-HIV drug and its common complication?",
            img: "",
            choices: "AZT – bone marrow suppression///RTV – hepatotoxicity///LPV – CNS side effects///EFV – renal toxicity///TDF - hypersensitivity",
            answer: "AZT – bone marrow suppression",
            select: "",
            explain: "Zidovudine (AZT) เป็นยาต้านไวรัส HIV ในกลุ่ม NRTI ที่มีผลข้างเคียงที่สำคัญและพบบ่อยคือการกดไขกระดูก (bone marrow suppression) ทำให้เกิดภาวะโลหิตจาง (anemia) และเม็ดเลือดขาวชนิดนิวโตรฟิลต่ำ (neutropenia) ส่วน Efavirenz (EFV) มีผลข้างเคียงเด่นทางระบบประสาท (CNS) และ Tenofovir (TDF) มีผลข้างเคียงเด่นที่ไต (renal toxicity)",
            state: false
        },
        {
            problem: "32. Gastroscopy with biopsy was done in a 56-year-old patient who has underlying chronic gastritis with H.pylori infection for many years. An extranodal marginal zone lymphoma was diagnosed. Which of the following is an important pathogenesis of this lymphoma?",
            img: "",
            choices: "Overexpression of cell-cycle protein progression///Overexpression of anti-apoptotic protein///Chronic antigenic stimuli///Translocation mutation affecting chromosome 14///Overexpression of MYC protein",
            answer: "Chronic antigenic stimuli",
            select: "",
            explain: "Extranodal marginal zone lymphoma หรือ MALT lymphoma ที่กระเพาะอาหาร มีความสัมพันธ์อย่างยิ่งกับการติดเชื้อ Helicobacter pylori เรื้อรัง พยาธิกำเนิดที่สำคัญคือการที่เชื้อ H. pylori กระตุ้นระบบภูมิคุ้มกันเฉพาะที่อย่างต่อเนื่องเป็นเวลานาน (Chronic antigenic stimulation) ทำให้เซลล์ B-lymphocyte แบ่งตัวเพิ่มจำนวนขึ้นเรื่อยๆ จนในที่สุดกลายเป็นเซลล์มะเร็ง",
            state: false
        },
        {
            problem: "33. Which of the following viral infections during pregnancy is classically associated with intrauterine growth retardation and microcephaly in the newborn?",
            img: "",
            choices: "Dengue///Zika///Chikungunya///Influenza///Rubella",
            answer: "Zika",
            select: "",
            explain: "การติดเชื้อไวรัส Zika ในระหว่างตั้งครรภ์มีความสัมพันธ์อย่างชัดเจนกับการเกิดความผิดปกติแต่กำเนิดในทารก ที่เรียกว่า Congenital Zika Syndrome ซึ่งมีลักษณะเด่นคือภาวะศีรษะเล็กผิดปกติ (microcephaly) และภาวะทารกโตช้าในครรภ์ (intrauterine growth retardation)",
            state: false
        },
        {
            problem: "34. A healthy sex worker consults a doctor about prevention. The prompt emphasizes that this person is already educated about safe sex. What is the most effective prevention method to offer?",
            img: "",
            choices: "PrEP///PEP///Condom///See the doctor every 4 weeks///Abstinence",
            answer: "PrEP",
            select: "",
            explain: "โจทย์เน้นว่าผู้รับบริการมีความรู้เรื่องเพศศึกษาดีแล้ว แสดงว่ารู้จักการใช้ถุงยางอนามัย การป้องกันที่มีประสิทธิภาพสูงเพิ่มเติมสำหรับผู้ที่มีความเสี่ยงสูงในการรับเชื้อ HIV เช่น sex worker คือการใช้ยาต้านไวรัสก่อนการสัมผัสเชื้อ หรือ Pre-Exposure Prophylaxis (PrEP) ซึ่งสามารถลดความเสี่ยงในการติดเชื้อ HIV ได้อย่างมากเมื่อทานยาอย่างสม่ำเสมอ",
            state: false
        },
        {
            problem: "35. A patient presents with dyspnea. Vitals: BT 39°C, BP 80/120 mmHg (unclear), PR 120/min, RR high. The doctor diagnoses clinical sepsis. Which finding most strongly supports a rapid diagnosis of sepsis?",
            img: "",
            choices: "Tachycardia (PR > 100/min)///PR 120/min///BT 39°C///Oliguria///Hypotension (e.g., SBP < 100 mmHg)",
            answer: "Hypotension (e.g., SBP < 100 mmHg)",
            select: "",
            explain: "qSOFA(quick Sequential Organ Failure Assessment) score เป็นเครื่องมือที่ใช้ประเมินความเสี่ยงของผู้ป่วยที่สงสัยการติดเชื้อได้อย่างรวดเร็วข้างเตียง ประกอบด้วย 3 เกณฑ์หลัก ได้แก่: \n\n1.  ** Altered Mental Status(GCS < 15):** ผู้ป่วยมีภาวะสับสน ซึมลง หรือการรับรู้เปลี่ยนแปลง\n2.  ** Fast Respiratory Rate:** อัตราการหายใจ(RR) ≥ 22 ครั้ง / นาที\n3.  ** Low Blood Pressure(Hypotension):** ความดันโลหิตตัวบน(Systolic BP) ≤ 100 mmHg\n\nจากโจทย์ ผู้ป่วยมี RR 28 / min, SBP 90 mmHg และมีอาการสับสน ซึ่งเข้าเกณฑ์ qSOFA ทั้ง 3 ข้อ(qSOFA score = 3) แสดงว่ามีความเสี่ยงสูงมาก\n\n *   ** ความดันโลหิตตัวบน ≤ 100 mmHg(SBP ≤ 100 mmHg) ** เป็นหนึ่งในสามเกณฑ์ของ qSOFA จึงเป็นคำตอบที่ถูกต้อง\n\nส่วนตัวเลือกอื่นๆ แม้จะพบในผู้ป่วย Sepsis แต่ไม่ได้อยู่ในเกณฑ์ของ qSOFA: \n * ไข้สูงและหัวใจเต้นเร็ว เป็นเกณฑ์ของ ** SIRS(Systemic Inflammatory Response Syndrome) ** ซึ่งเป็นเกณฑ์ที่เคยใช้ในอดีต\n * เม็ดเลือดขาวสูง เป็นเกณฑ์ของ SIRS เช่นกัน\n * ปัสสาวะออกน้อย(Oliguria) เป็นสัญญาณของอวัยวะล้มเหลว(Organ dysfunction) ซึ่งใช้ในการประเมิน ** SOFA score ** ตัวเต็ม แต่ไม่ใช่ qSOFA",
            state: false
        },
        {
            problem: "36. Which of the following pairs of drug and its mechanism of action (MOA) is correct?",
            img: "",
            choices: "Eltrombopag - stimulates thrombopoietin receptor///Darbepoetin - stimulates G-CSF receptor///Luspatercept - stimulates thrombopoietin receptor///Romiplostim - stimulates GM-CSF receptor///Pegfilgrastim - inhibits TGF-beta",
            answer: "Eltrombopag - stimulates thrombopoietin receptor",
            select: "",
            explain: "Eltrombopag และ Romiplostim เป็นยากลุ่ม Thrombopoietin (TPO) receptor agonists ซึ่งออกฤทธิ์โดยการจับและกระตุ้น TPO receptor ทำให้เกิดการสร้างเกล็ดเลือดเพิ่มขึ้น Darbepoetin เป็น Erythropoiesis-stimulating agent (ESA) กระตุ้นการสร้างเม็ดเลือดแดง Pegfilgrastim เป็น G-CSF กระตุ้นการสร้างเม็ดเลือดขาวนิวโตรฟิล Luspatercept เป็น TGF-beta ligand trap ช่วยเรื่องการเจริญของเม็ดเลือดแดงในระยะท้าย",
            state: false
        },
        {
            problem: "37. A 60-year-old man presented with chronic fever and weight loss. PE: cervical and axillary lymphadenopathy. A cervical lymph node biopsy diagnosed mantle cell lymphoma. Which of the following is a function of the abnormal molecule central to the pathogenesis of this tumor cell?",
            img: "",
            choices: "Producing monoclonal immunoglobulin///Producing potent cellular proliferation molecules///Regulating the cell cycle///Producing anti-apoptotic proteins///Promoting G1-S progression",
            answer: "Promoting G1-S progression",
            select: "",
            explain: "พยาธิกำเนิดของ Mantle cell lymphoma เกี่ยวข้องกับ chromosomal translocation t(11;14) ซึ่งทำให้เกิดการแสดงออกของโปรตีน Cyclin D1 มากผิดปกติ (overexpression) โดย Cyclin D1 มีหน้าที่สำคัญในการควบคุมวัฏจักรของเซลล์ (cell cycle) โดยจะกระตุ้นให้เซลล์ผ่านจากระยะ G1 เข้าสู่ระยะ S (G1-S progression) ทำให้เซลล์มีการแบ่งตัวไม่หยุด",
            state: false
        },
        {
            problem: "38. Which of the following is a characteristic sign of cercarial infestation, also known as swimmer's itch?",
            img: "",
            choices: "Itchy rash///Swelling///Migration///Eschar///Painless ulcer",
            answer: "Itchy rash",
            select: "",
            explain: "Cercarial infestation หรือโรคพยาธิใบไม้ในเลือด (Schistosomiasis) ในระยะแรกที่ตัวอ่อน cercaria ไชเข้าสู่ผิวหนัง จะทำให้เกิดปฏิกิริยาแพ้ที่ผิวหนังบริเวณนั้น มีลักษณะเป็นผื่นแดงคัน หรือที่เรียกว่า swimmer's itch หรือ cercarial dermatitis",
            state: false
        },
        {
            problem: "39. Which drug used in malarial treatment is contraindicated in G6PD deficiency?",
            img: "",
            choices: "Chloroquine///Primaquine///Piperaquine///Quinidine///Mefloquine",
            answer: "Primaquine",
            select: "",
            explain: "Primaquine เป็นยาที่มีคุณสมบัติเป็น strong oxidizing agent ซึ่งสามารถกระตุ้นให้เกิดภาวะเม็ดเลือดแดงแตกอย่างรุนแรง (severe hemolysis) ในผู้ป่วยที่พร่องเอนไซม์ Glucose-6-Phosphate Dehydrogenase (G6PD deficiency) ดังนั้นจึงเป็นข้อห้ามใช้ที่สำคัญ",
            state: false
        },
        {
            problem: "40. A 65-year-old man has a history of peptic ulcer disease. He is admitted for hematemesis and orthostatic hypotension. Lab: Hb 6.8 g/dL, Platelet 145,000/mm³, and aPTT normal. Which of the following blood products is most appropriate and effective for increasing oxygen-carrying capacity?",
            img: "",
            choices: "Irradiated RBC///Washed RBC///Packed Red Cells (PRC)///Leukocyte-Depleted Red Cells (LDRC)///Fresh Frozen Plasma (FFP)",
            answer: "Packed Red Cells (PRC)",
            select: "",
            explain: "ผู้ป่วยมีอาการเสียเลือด (hematemesis) และมีภาวะโลหิตจางรุนแรง (Hb 6.8) ซึ่งส่งผลต่อความสามารถในการขนส่งออกซิเจนของร่างกาย สิ่งที่ต้องการเร่งด่วนคือการเพิ่มมวลเม็ดเลือดแดงเพื่อเพิ่ม oxygen-carrying capacity ซึ่งผลิตภัณฑ์เลือดที่เหมาะสมที่สุดคือ Packed Red Cells (PRC) หรือเม็ดเลือดแดงอัดแน่น",
            state: false
        },
        {
            problem: "41. A 29-year-old woman presented with fever, jaundice, weight loss and opportunistic infection. A blood smear shows lymphocytes with multilobulated nuclei ('flower cells'). What is the most likely diagnosis?",
            img: "",
            choices: "AIDS///B cell lymphoma///B cell leukemia///Adult T-cell leukemia/lymphoma (ATLL)///Hairy cell leukemia",
            answer: "Adult T-cell leukemia/lymphoma (ATLL)",
            select: "",
            explain: "การพบเซลล์ lymphocyte ที่มีนิวเคลียสลักษณะเป็นแฉกๆ หรือหลายพูคล้ายดอกไม้ (multilobulated nucleus or 'flower cell') ในเลือด เป็นลักษณะที่จำเพาะของโรค Adult T-cell leukemia/lymphoma (ATLL) ซึ่งเป็นมะเร็งของ T-lymphocyte ที่เกิดจากการติดเชื้อไวรัส Human T-lymphotropic virus type 1 (HTLV-1)",
            state: false
        },
        {
            problem: "42. For P. falciparum treatment, what stages do dihydroartemisinin and primaquine act on, respectively?",
            img: "",
            choices: "Tissue schizonticide and blood schizonticide///Blood schizonticide and gametocytocide///Blood schizonticide and tissue schizonticide///Gametocytocide and blood schizonticide///Tissue schizonticide and gametocytocide",
            answer: "Blood schizonticide and gametocytocide",
            select: "",
            explain: "Dihydroartemisinin (ซึ่งเป็น active metabolite ของ artemisinin derivatives) เป็นยาที่ออกฤทธิ์เร็วและแรงต่อเชื้อมาลาเรียระยะที่อยู่ในเม็ดเลือดแดง (blood schizonticide) ส่วน Primaquine ในการรักษา P. falciparum จะใช้ในขนาด single dose เพื่อฆ่าเชื้อมาลาเรียระยะเพศ (gametocyte) เพื่อป้องกันการแพร่กระจายของเชื้อไปสู่ยุง (gametocytocidal effect)",
            state: false
        },
        {
            problem: "43. A 33-year-old woman is diagnosed with an uncomplicated P. falciparum infection in a multidrug-resistant area. What is the recommended first-line treatment?",
            img: "",
            choices: "Atovaquone-Proguanil///Artesunate-Pyronaridine///Dihydroartemisinin-Piperaquine///Artesunate monotherapy///Chloroquine",
            answer: "Artesunate-Pyronaridine",
            select: "",
            explain: "ตามแนวทางการรักษามาลาเรียชนิดฟัลซิปารัมที่ไม่มีภาวะแทรกซ้อนในพื้นที่ดื้อยา (รวมถึงประเทศไทย) แนะนำให้ใช้ยาสูตรผสมกลุ่ม Artemisinin-based combination therapies (ACTs) เป็นยาขนานแรก ซึ่งในปัจจุบันสูตรยาที่แนะนำคือ Artesunate-Pyronaridine หรือ Dihydroartemisinin-Piperaquine",
            state: false
        },
        {
            problem: "44. Which of the following pairs of drugs and mechanism of action are correct?",
            img: "",
            choices: "Abacavir (ABC) – protease inhibitor///Lopinavir – integrase inhibitor///Dolutegravir – noncompetitively inhibit reverse transcriptase enzyme///Maraviroc – inhibit penetration of HIV virus to CD4+ cell by binding to gp41///Lamivudine (3TC) – competitively inhibits reverse transcriptase enzyme",
            answer: "Lamivudine (3TC) – competitively inhibits reverse transcriptase enzyme",
            select: "",
            explain: "Lamivudine (3TC) เป็นยาในกลุ่ม Nucleoside Reverse Transcriptase Inhibitor (NRTI) ออกฤทธิ์โดยการแข่งขันกับ nucleoside ปกติในการเข้าไปในสาย DNA ที่กำลังสร้างโดยเอนไซม์ reverse transcriptase ทำให้การสร้างสาย DNA ของไวรัสหยุดชะงัก ส่วน Abacavir เป็น NRTI, Lopinavir เป็น Protease inhibitor, Dolutegravir เป็น Integrase inhibitor และ Maraviroc เป็น CCR5 antagonist",
            state: false
        },
        {
            problem: "45. A boy came to the hospital with a swelling right knee due to a fall. His mother informed that he was diagnosed with hemophilia A. Hct 30%, PT 12 sec, aPTT 80 sec, Factor VIII level 4%. Factor VIII concentrate was unavailable at the time. What is the appropriate treatment?",
            img: "",
            choices: "Cryoprecipitate///Cryoprecipitate + FFP///PRC///Factor IX concentration///LDRC",
            answer: "Cryoprecipitate",
            select: "",
            explain: "ผู้ป่วยเป็น Hemophilia A ซึ่งมีการขาด Factor VIII ผล aPTT ที่ยาวผิดปกติยืนยันการมีปัญหาใน intrinsic pathway ในกรณีที่ไม่มี Factor VIII concentrate ซึ่งเป็นการรักษาที่ดีที่สุด ตัวเลือกถัดมาคือการให้ Cryoprecipitate ซึ่งเป็นผลิตภัณฑ์จากพลาสมาที่อุดมไปด้วย Factor VIII, von Willebrand factor, fibrinogen, และ Factor XIII",
            state: false
        },
        {
            problem: "46. A 10 year old boy came with 5 days of fever. Vital signs were WNL except for BT 39°C. Labs: Hct 34%, WBC 4000/mm³, Platelet 120,000/mm³. Anti-dengue IgM, IgG negative, Dengue NS1 negative. What is the diagnosis?",
            img: "",
            choices: "Dengue hemorrhagic fever///Dengue shock syndrome///Dengue fever with warning signs///Secondary Dengue virus infection///Dengue fever",
            answer: "Dengue fever",
            select: "",
            explain: "ผู้ป่วยมีไข้และผลเลือดเข้าได้กับไข้เลือดออก คือมี WBC และ Platelet ค่อนข้างต่ำ แต่ผลการตรวจจำเพาะต่อเชื้อเดงกี (NS1, IgM, IgG) ทั้งหมดให้ผลลบ ซึ่งอาจเกิดจากการตรวจเร็วเกินไป (อยู่ในช่วง window period) อย่างไรก็ตาม จากอาการทางคลินิกที่ยังไม่มีภาวะเลือดออกรุนแรงหรือ plasma leakage ที่ชัดเจน (ไม่มี warning signs) จึงวินิจฉัยเป็น Dengue fever (ไข้เดงกี) ไปก่อน",
            state: false
        },
        {
            problem: "47. A 62-year-old came to the hospital with suspected pneumonia. He has had cardiac failure for years. He received PRC and developed respiratory distress. A Chest x-ray shows bilateral (bat wing) edema with fluid effusion. Some condition DAT positive, Anti-HLA negative. What likely occurred in this patient?",
            img: "",
            choices: "AHTR///TRALI///TACO///Anaphylaxis///FNHTR",
            answer: "TACO",
            select: "",
            explain: "ผู้ป่วยมีประวัติโรคหัวใจล้มเหลว (cardiac failure) ซึ่งเป็นปัจจัยเสี่ยงสำคัญ การเกิดอาการหายใจลำบากหลังได้รับเลือด ร่วมกับภาพรังสีทรวงอกที่แสดงลักษณะของภาวะน้ำท่วมปอด (pulmonary edema) แบบ bat wing appearance ซึ่งเป็นลักษณะของภาวะหัวใจล้มเหลว บ่งชี้ถึงภาวะน้ำเกินจากการให้เลือด หรือ Transfusion-Associated Circulatory Overload (TACO) มากที่สุด",
            state: false
        },
        {
            problem: "48. What are the differences between Enoxaparin and unfractionated heparin?",
            img: "",
            choices: "Enoxaparin does not bind to Antithrombin III///Enoxaparin is available in oral form, it is therefore less invasive///Enoxaparin is less likely to induce thrombocytopenia///Enoxaparin is completely reversed by protamine sulfate///Both drugs should be evaluated by aPTT monitoring",
            answer: "Enoxaparin is less likely to induce thrombocytopenia",
            select: "",
            explain: "Enoxaparin เป็น Low-molecular-weight heparin (LMWH) ซึ่งเมื่อเทียบกับ Unfractionated heparin (UFH) แล้ว Enoxaparin มีโอกาสกระตุ้นให้เกิดภาวะเกล็ดเลือดต่ำจากยา (Heparin-induced thrombocytopenia - HIT) ได้น้อยกว่า นอกจากนี้ Enoxaparin ยังมี half-life ยาวกว่า ทำให้ฉีดแค่วันละ 1-2 ครั้ง และไม่จำเป็นต้องตรวจติดตาม aPTT เป็นประจำเหมือน UFH",
            state: false
        },
        {
            problem: "49. The patient has been diagnosed with renal failure for 5 years. He came to the hospital and looked fatigued. The doctor diagnosed underlying anemia. What is an appropriate treatment for anemia of chronic kidney disease?",
            img: "",
            choices: "Folic acid///Ferrous sulfate///Carbamazepine///Pegfilgrastim///Epoetin alfa",
            answer: "Epoetin alfa",
            select: "",
            explain: "ภาวะโลหิตจางในผู้ป่วยโรคไตเรื้อรัง (Anemia of CKD) มีสาเหตุหลักมาจากการที่ไตไม่สามารถสร้างฮอร์โมน Erythropoietin (EPO) ได้เพียงพอ ซึ่งฮอร์โมนนี้จำเป็นต่อการสร้างเม็ดเลือดแดงในไขกระดูก การรักษาที่ตรงจุดที่สุดคือการให้สารทดแทนฮอร์โมนนี้ ซึ่งก็คือ Erythropoiesis-stimulating agents (ESAs) เช่น Epoetin alfa",
            state: false
        },
        {
            problem: "50. Interpret the results from the cell grouping and Rh typing table. Cell grouping: Anti-A 4+, Anti-B 4+, Anti-A,B 4+. Serum grouping: A cell Neg, B cell Neg. Rh typing (IAT): 2+.",
            img: "https://drive.google.com/open?id=13pSU-QTQzYyK_tNGf85ElQpC-GaMBDkH&usp=drive_copy",
            choices: "Blood group O Rh negative///Blood group AB Rh positive///Blood group AB weakly positive D///Blood group AB Rh negative///Blood group O Rh positive",
            answer: "Blood group AB weakly positive D",
            select: "",
            explain: "การแปลผลหมู่เลือด: จาก Cell grouping (Forward type) พบว่าเม็ดเลือดแดงของผู้ป่วยจับกับทั้ง Anti-A และ Anti-B แสดงว่ามีทั้ง Antigen A และ B บนผิวเม็ดเลือดแดง คือหมู่เลือด AB จาก Serum grouping (Reverse type) พบว่าน้ำเหลืองของผู้ป่วยไม่จับกับทั้ง A cell และ B cell แสดงว่าไม่มีทั้ง Anti-A และ Anti-B antibody ซึ่งยืนยันว่าเป็นหมู่เลือด AB ส่วนผล Rh typing ที่ IAT ให้ผลบวก 2+ บ่งชี้ว่าผู้ป่วยมี Weak D antigen ดังนั้นผลรวมคือหมู่เลือด AB Rh positive (weak D)",
            state: false
        },
        {
            problem: "51. A 19-year-old woman presents with easy bruising, mild nose bleeding, and heavy menstrual periods, which occurred more frequently after aspirin ingestion. PE: a few small bruises on her arms and legs. Her mother and her brothers have the same symptoms. What is the first most appropriate initial screening test to diagnose?",
            img: "",
            choices: "PT check coagulation defect///aPTT check coagulation defect///Mixing test check coagulation defect///CBC check thrombocytopenia///Bleeding time check platelet dysfunction",
            answer: "Bleeding time check platelet dysfunction",
            select: "",
            explain: "ผู้ป่วยมีอาการเลือดออกผิดปกติที่เยื่อบุ (mucocutaneous bleeding) เช่น เลือดกำเดาไหล ประจำเดือนมามาก ซึ่งแย่ลงหลังทานยา aspirin และมีประวัติครอบครัว ลักษณะเหล่านี้บ่งชี้ถึงความผิดปกติของเกล็ดเลือด (platelet disorder) หรือ von Willebrand disease การตรวจคัดกรองเบื้องต้นที่เหมาะสมที่สุดเพื่อประเมินการทำงานของเกล็ดเลือดโดยรวมคือ Bleeding time หรือ Platelet Function Analyzer (PFA-100) ซึ่งจะยาวนานผิดปกติในภาวะเหล่านี้",
            state: false
        },
        {
            problem: "52. The patient has elephantiasis (lymphatic filariasis). What is the best time to collect the patient's blood if the parasite is suspected to be Wuchereria bancrofti?",
            img: "",
            choices: "12:00 pm – 04:00 pm///10:00 pm – 02:00 am///07:00 am – 10:00 am///08:00 am – 05:00 pm///Any time of the day",
            answer: "10:00 pm – 02:00 am",
            select: "",
            explain: "พยาธิตัวอ่อน (microfilariae) ของเชื้อ Wuchereria bancrofti ที่ก่อโรคเท้าช้าง มีลักษณะพิเศษคือจะออกมาอยู่ในกระแสเลือดส่วนปลาย (peripheral blood) ในช่วงเวลากลางคืน หรือที่เรียกว่า Nocturnal periodicity ดังนั้นช่วงเวลาที่ดีที่สุดในการเจาะเลือดเพื่อตรวจหาเชื้อคือช่วงกลางดึก ประมาณ 4 ทุ่มถึงตี 2 (10:00 pm – 02:00 am)",
            state: false
        },
        {
            problem: "53. What is a key difference between thrombolytic drugs Streptokinase, Alteplase, and Tenecteplase?",
            img: "",
            choices: "Streptokinase has the highest fibrin specificity///Alteplase has a longer half-life than Tenecteplase///Tenecteplase can be given as a single IV bolus///Alteplase is highly antigenic and can only be used once///All three are indirect plasminogen activators",
            answer: "Tenecteplase can be given as a single IV bolus",
            select: "",
            explain: "ยาทั้งสามตัวเป็นยาละลายลิ่มเลือด (fibrinolytic drugs) แต่มีความแตกต่างกัน Streptokinase เป็น non-fibrin specific และมีคุณสมบัติเป็นแอนติเจน Alteplase (t-PA) มีความจำเพาะต่อไฟบริน (fibrin-specific) สูงกว่าแต่มี half-life สั้นมาก ต้องให้แบบ infusion ส่วน Tenecteplase เป็นยาที่พัฒนามาจาก Alteplase ให้มีความจำเพาะต่อไฟบรินสูงขึ้นและมี half-life ยาวขึ้น ทำให้สามารถบริหารยาโดยการฉีดเข้าหลอดเลือดดำครั้งเดียว (single IV bolus) ได้",
            state: false
        },
        {
            problem: "54. Why is the drug Artesunate specific to Malaria parasites?",
            img: "",
            choices: "It inhibits parasite DNA gyrase///It requires heme iron within the parasite for activation///It blocks the parasite's protein synthesis at the ribosomal level///It acts as an antagonist to para-aminobenzoic acid (PABA)///It targets the mitochondria of human red blood cells",
            answer: "It requires heme iron within the parasite for activation",
            select: "",
            explain: "ยา Artesunate และกลุ่ม Artemisinin มีโครงสร้างที่เป็นสะพาน endoperoxide ซึ่งจะถูกกระตุ้น (activation) โดยธาตุเหล็กในโมเลกุลฮีม (heme iron) ที่มีอยู่ปริมาณมากภายในตัวเชื้อมาลาเรีย (จากการย่อยฮีโมโกลบินในเม็ดเลือดแดง) เมื่อยาถูกกระตุ้นจะเกิดการสร้างอนุมูลอิสระ (free radicals) ที่เป็นพิษและทำลายโปรตีนและส่วนประกอบต่างๆของเชื้อ ทำให้เชื้อตาย ความจำเพาะนี้เกิดจากการที่ยาต้องการ heme iron ในการออกฤทธิ์นั่นเอง",
            state: false
        }
    ],
    "HL51LAB": [
        {
            "problem": "1. Mixing test is no correction. Which of the following is true?",
            "img": "",
            "choices": "There is factor deficiency///An inhibitor should be suspected///There is no fibrinogen///This patient must be hemophilia///Autoantibody should be suspected",
            "answer": "An inhibitor should be suspected",
            "select": "",
            "explain": "Mixing test คือการนำ plasma ของผู้ป่วยไปผสมกับ normal plasma แล้วดูว่าค่า aPTT หรือ PT ที่เคยผิดปกติกลับมาสู่ค่าปกติหรือไม่ ถ้าไม่กลับมาสู่ค่าปกติ (no correction) แสดงว่าในเลือดของผู้ป่วยมีสารยับยั้ง (inhibitor) ที่ไปรบกวนการทำงานของปัจจัยการแข็งตัวของเลือด (coagulation factor) ใน normal plasma ซึ่ง inhibitor ที่พบบ่อยก็คือ autoantibody ดังนั้นการสงสัยว่ามี inhibitor จึงเป็นข้อสรุปที่ถูกต้องที่สุด",
            "state": false
        },
        {
            "problem": "2. A 19-year-old woman comes with easy bruising. She has mild nose bleeding and heavy menstrual period more frequently after aspirin ingestion. Her mother and brother don't have the same symptoms. What is the first appropriate screening test?",
            "img": "",
            "choices": "PT checks for coagulation defect///aPTT check for coagulation defect///Complete blood count///Mixing test///Bleeding time checking",
            "answer": "Complete blood count",
            "select": "",
            "explain": "ผู้ป่วยมีอาการเลือดออกผิดปกติที่เยื่อบุ (mucocutaneous bleeding) เช่น เลือดกำเดาไหล ประจำเดือนมามาก ซึ่งแย่ลงหลังทานยา aspirin ลักษณะเหล่านี้บ่งชี้ถึงความผิดปกติของเกล็ดเลือด (platelet disorder) หรือ von Willebrand disease การตรวจคัดกรองเบื้องต้นที่เหมาะสมที่สุดคือการตรวจนับเม็ดเลือด (Complete blood count) เพื่อดูจำนวนเกล็ดเลือดก่อน หากจำนวนเกล็ดเลือดปกติจึงจะตรวจเพิ่มเติมด้วยการวัดเวลาเลือดออก (Bleeding time) หรือ Platelet Function Analyzer (PFA-100) เพื่อประเมินการทำงานของเกล็ดเลือด",
            "state": false
        },
        {
            "problem": "3. A patient with blood group A must receive packed red cell and fresh frozen plasma for surgery. Which of the following can give to this patient in case that there is no group A blood in hospital?",
            "img": "",
            "choices": "Group B PRC and Group AB FFP///Group O PRC and Group B FFP///Group O PRC and Group AB FFP///Group B PRC and Group O FFP///Group O PRC and Group O FFP",
            "answer": "Group O PRC and Group AB FFP",
            "select": "",
            "explain": "ผู้ป่วยเลือดกรุ๊ป A มี A antigen บนเม็ดเลือดแดง และมี anti-B antibody ใน plasma. การให้ Packed Red Cells (PRC) ต้องเลือกกรุ๊ปที่ไม่มี B antigen ซึ่งก็คือกรุ๊ป O. การให้ Fresh Frozen Plasma (FFP) ต้องเลือกกรุ๊ปที่ไม่มี anti-A antibody ซึ่งก็คือกรุ๊ป AB (universal plasma donor). ดังนั้นตัวเลือกที่ถูกต้องคือ Group O PRC and Group AB FFP",
            "state": false
        },
        {
            "problem": "4. Which of the following is the goal of antibody screening in pretransfusion testing?",
            "img": "",
            "choices": "ABO compatibility///Mostly of clinically significant unexpected antibodies///All unexpected antibody///ABO compatibility + clinically significant antibody + autoantibody///Autoantibody",
            "answer": "Mostly of clinically significant unexpected antibodies",
            "select": "",
            "explain": "Antibody screening มีวัตถุประสงค์เพื่อตรวจหา unexpected antibodies (แอนติบอดีต่อแอนติเจนของหมู่เลือดอื่นๆ ที่ไม่ใช่ A และ B) ในเลือดของผู้ป่วยหรือผู้บริจาค โดยเน้นที่แอนติบอดีที่มีความสำคัญทางคลินิก (clinically significant) คือสามารถทำให้เกิดภาวะเม็ดเลือดแดงแตกเมื่อได้รับเลือด (hemolytic transfusion reaction) หรือโรคในทารกแรกเกิด (HDFN)",
            "state": false
        },
        {
            "problem": "5. What is the most suitable interpretation of cell grouping, serum grouping, and Rh typing from the table?",
            "img": "https://drive.google.com/open?id=14AD7u9mBX84RJl1BZN9hofo1m0qrfTPy&usp=drive_copy",
            "choices": "Blood group A, Rh weakly positive D///Blood group B, Rh positive///Blood group B, Rh weakly positive D///Blood group AB, Rh positive///Cell grouping Anti-B, serum grouping A cell positive, Agglutination IAT positive",
            "answer": "Blood group B, Rh weakly positive D",
            "select": "",
            "explain": "จากตาราง Cell grouping: เม็ดเลือดแดงของผู้ป่วยทำปฏิกิริยากับ Anti-B แสดงว่ามี B antigen (กรุ๊ป B). Serum grouping: serum ของผู้ป่วยทำปฏิกิริยากับ A cell แสดงว่ามี Anti-A antibody ซึ่งยืนยันว่าเป็นกรุ๊ป B. ผล IAT (Indirect Antiglobulin Test) ที่ให้ผลบวก ในบริบทของ Rh typing บ่งชี้ว่าเป็นการตรวจหา Weak D antigen ซึ่งเมื่อให้ผลบวกหมายความว่าเป็น Rh weakly positive D",
            "state": false
        },
        {
            "problem": "6. What is the diagnosis of this patient?",
            "img": "https://drive.google.com/open?id=1TgO8cF2paocaZsJl5JB2QArTPmwaO05X&usp=drive_copy",
            "choices": "Diffuse large B cell lymphoma///Hodgkin lymphoma///Plasma cell myeloma///Burkitt lymphoma///Follicular lymphoma",
            "answer": "Hodgkin lymphoma",
            "select": "",
            "explain": "ภาพ histology แสดงเซลล์ขนาดใหญ่ที่มีนิวเคลียสสองแฉก (bi-lobed nucleus) และมีนิวคลีโอลัสเด่นชัดติดสีชมพู (eosinophilic nucleoli) ซึ่งมีลักษณะคล้ายตานกฮูก (owl's eye appearance) เซลล์นี้คือ Reed-Sternberg cell ซึ่งเป็นเซลล์ที่พบจำเพาะในโรค Hodgkin lymphoma",
            "state": false
        },
        {
            "problem": "7. What is this structure?",
            "img": "https://drive.google.com/open?id=1L-HjRKCBUs0h70dYK4GtrgpS9lVVId9Q&usp=drive_copy",
            "choices": "Neutrophil///Eosinophil///Basophil///Monocyte///Lymphocyte",
            "answer": "Basophil",
            "select": "",
            "explain": "เซลล์ในภาพคือ Basophil ซึ่งเป็นเม็ดเลือดขาวชนิด granulocyte มีลักษณะเด่นคือมี granule ขนาดใหญ่ติดสีม่วงเข้ม (basophilic granules) จำนวนมากใน cytoplasm ซึ่งมักจะบดบังนิวเคลียส ทำให้เห็นรูปร่างของนิวเคลียสไม่ชัดเจน",
            "state": false
        },
        {
            "problem": "8. What is this structure?",
            "img": "https://drive.google.com/open?id=1RUyZjvhZzNEMjBLELNDBTG2XJH2pLlhP&usp=drive_copy",
            "choices": "Neutrophil///Eosinophil///Plasma cell///Monocyte///Lymphocyte",
            "answer": "Lymphocyte",
            "select": "",
            "explain": "เซลล์ในภาพคือ Lymphocyte ซึ่งเป็นเม็ดเลือดขาวชนิด agranulocyte มีลักษณะเด่นคือมีนิวเคลียสรูปทรงกลมขนาดใหญ่เกือบเต็มเซลล์ (high nuclear-to-cytoplasmic ratio) และมี cytoplasm ติดสีฟ้าล้อมรอบเป็นขอบบางๆ",
            "state": false
        },
        {
            "problem": "9. What is this organ?",
            "img": "https://drive.google.com/open?id=1txdq0YGVucy8J5k9do5uktd7dWn4prui&usp=drive_copy",
            "choices": "Thymus///Bone marrow///Spleen///Lymph node///Liver",
            "answer": "Lymph node",
            "select": "",
            "explain": "ภาพรวมของอวัยวะแสดงให้เห็นโครงสร้างที่ถูกห่อหุ้มด้วย capsule และมีการแบ่งส่วนเป็น cortex และ medulla ภายในมีกลุ่มของเซลล์น้ำเหลืองที่เรียกว่า lymphoid follicle ซึ่งมี germinal center อยู่ตรงกลาง ลักษณะเหล่านี้เป็นลักษณะทางจุลกายวิภาคของต่อมน้ำเหลือง (Lymph node)",
            "state": false
        },
        {
            "problem": "10. What is this structure?",
            "img": "https://drive.google.com/open?id=1OOIULlEc2qBdb1JATRyIpgz-D4uSrrv_&usp=drive_copy",
            "choices": "White pulp of spleen///Germinal center///Hassall's corpuscle///Red pulp of spleen///Medullary sinus",
            "answer": "Hassall's corpuscle",
            "select": "",
            "explain": "โครงสร้างในภาพคือ Hassall's corpuscle ซึ่งมีลักษณะเป็นกลุ่มเซลล์ epithelial ที่เรียงตัวกันเป็นวงซ้อนกันเป็นชั้นๆ (concentric, lamellated) พบได้เฉพาะในส่วน medulla ของต่อมไทมัส (Thymus) เท่านั้น และเป็นลักษณะจำเพาะของอวัยวะนี้",
            "state": false
        },
        {
            "problem": "11. Identify genus.",
            "img": "https://drive.google.com/open?id=1OgmYP_JSQZJonCTl1hyP62HU-SdlqDjS&usp=drive_copy",
            "choices": "Plasmodium///Leishmania///Trypanosoma///Babesia///Wuchereria",
            "answer": "Trypanosoma",
            "select": "",
            "explain": "ปรสิตที่พบใน blood smear มีรูปร่างยาวคล้ายใบมีด หรือรูปตัว C มีนิวเคลียสและ flagellum ซึ่งเป็นลักษณะของเชื้อในระยะ trypomastigote ของจีนัส Trypanosoma",
            "state": false
        },
        {
            "problem": "12. identify genus and species. (Patient from Laos)",
            "img": "https://drive.google.com/open?id=1is2TRIKBlSAqATMn7XZNYaWwBZshjOS3&usp=drive_copy",
            "choices": "Ascaris lumbricoides///Trichuris trichiura///Taenia saginata///Opisthorchis viverrini///Schistosoma mekongi",
            "answer": "Schistosoma mekongi",
            "select": "",
            "explain": "ไข่ในภาพมีลักษณะเป็นรูปรี (elliptical) มีฝาปิด (operculum) ที่ปลายด้านหนึ่ง และมีปลายแหลมที่ปลายอีกด้านหนึ่ง (terminal spine) ซึ่งเป็นลักษณะจำเพาะของไข่พยาธิใบไม้เลือดจีนัส Schistosoma โดยเฉพาะชนิด Schistosoma mekongi ที่พบในประเทศลาวและกัมพูชา",
            "state": false
        },
        {
            "problem": "13. Identify genus and species.",
            "img": "https://drive.google.com/open?id=1CAT2vwU3yErKM1BipJbDcDEhjbp3VUiM&usp=drive_copy",
            "choices": "Fasciola hepatica///Opisthorchis viverrini///Paragonimus westermani///Diphyllobothrium latum///Schistosoma haematobium",
            "answer": "Schistosoma haematobium",
            "select": "",
            "explain": "ไข่ในภาพมีลักษณะเป็นรูปรี (elliptical) มีฝาปิด (operculum) ที่ปลายด้านหนึ่ง และมีปลายแหลมที่ปลายอีกด้านหนึ่ง (terminal spine) ซึ่งเป็นลักษณะจำเพาะของไข่พยาธิใบไม้เลือดจีนัส Schistosoma โดยเฉพาะชนิด Schistosoma haematobium ที่พบได้ในแอฟริกาและตะวันออกกลาง",
            "state": false
        },
        {
            "problem": "14. Identify genus.",
            "img": "https://drive.google.com/open?id=1KoP83-ybfPNyOgu4B-grXCo0v-J1LGlm&usp=drive_copy",
            "choices": "Plasmodium///Leishmania///Trypanosoma///Toxoplasma///Babesia",
            "answer": "Leishmania",
            "select": "",
            "explain": "ภาพแสดงเซลล์ macrophage ที่ภายในมีปรสิตขนาดเล็ก รูปทรงกลมหรือรี (amastigote) อยู่เป็นจำนวนมาก การพบ amastigotes ภายในเซลล์เช่นนี้เป็นลักษณะจำเพาะของเชื้อในจีนัส Leishmania",
            "state": false
        },
        {
            "problem": "15. Identify genus, species and stage.",
            "img": "https://drive.google.com/open?id=1VG-C1vbDo7N1yzosv3GMakpVPrST5H_n&usp=drive_copy",
            "choices": "Plasmodium falciparum, gametocyte stage///Plasmodium vivax, schizont stage///Plasmodium malariae, schizont stage///Plasmodium ovale, schizont stage///Babesia microti, ring stage",
            "answer": "Plasmodium malariae, schizont stage",
            "select": "",
            "explain": "ภาพแสดงเชื้อมาลาเรียในระยะ schizont ซึ่งภายในมี merozoites ที่กำลังจะแตกตัว ลักษณะเด่นคือ merozoites มีการเรียงตัวกันเป็นวงกลมคล้ายดอกไม้ (rosette form) ซึ่งเป็นลักษณะจำเพาะของเชื้อ Plasmodium malariae ในระยะ mature schizont",
            "state": false
        },
        {
            "problem": "16. Venous blood collection for malaria diagnosis should use EDTA as an anticoagulant.",
            "img": "",
            "choices": "True///False",
            "answer": "True",
            "select": "",
            "explain": "ถูกต้อง EDTA เป็นสารกันเลือดแข็งที่แนะนำสำหรับการเก็บเลือดเพื่อตรวจหาเชื้อมาลาเรีย เพราะสามารถรักษาสภาพและรูปร่าง (morphology) ของเม็ดเลือดและตัวเชื้อได้ดีที่สุดสำหรับการทำ blood film",
            "state": false
        },
        {
            "problem": "17. When collecting blood from a finger prick, the index finger is the best choice.",
            "img": "",
            "choices": "True///False",
            "answer": "False",
            "select": "",
            "explain": "ไม่ถูกต้อง โดยทั่วไปแนะนำให้เจาะเลือดจากปลายนิ้วกลาง (middle finger) หรือนิ้วนาง (ring finger) เนื่องจากนิ้วชี้มักจะมีผิวหนังที่หนาและด้านกว่า และมีความรู้สึกไวต่อความเจ็บปวดมากกว่า",
            "state": false
        },
        {
            "problem": "18. A thick blood film is more sensitive than a thin blood film.",
            "img": "",
            "choices": "True///False",
            "answer": "True",
            "select": "",
            "explain": "ถูกต้อง Thick blood film มีความไว (sensitivity) สูงกว่า เพราะเป็นการใช้เลือดในปริมาณที่มากกว่ามาตรวจในพื้นที่เล็กๆ ทำให้มีโอกาสเจอเชื้อได้ง่ายกว่า โดยเฉพาะในกรณีที่มีเชื้อน้อย (low parasitemia) ส่วน thin film จะดีกว่าในการจำแนกชนิดของเชื้อ",
            "state": false
        },
        {
            "problem": "19. The substance used for fixation is absolute ethanol.",
            "img": "",
            "choices": "True///False",
            "answer": "True",
            "select": "",
            "explain": "ถูกต้อง ในการเตรียม thin blood film จะต้องมีการ fix สไลด์ด้วย absolute methanol หรือ ethanol ก่อนย้อมสี เพื่อรักษารูปร่างของเซลล์เม็ดเลือดแดงและตัวเชื้อเอาไว้ (ส่วน thick film ไม่ต้อง fix)",
            "state": false
        },
        {
            "problem": "20. The parasite density of a thin blood film is estimated as a percentage (%).",
            "img": "",
            "choices": "True///False",
            "answer": "True",
            "select": "",
            "explain": "ถูกต้อง การรายงานความหนาแน่นของเชื้อจาก thin film โดยทั่วไปจะรายงานเป็นเปอร์เซ็นต์ของเม็ดเลือดแดงที่ติดเชื้อ (percent parasitemia) ซึ่งคำนวณจากการนับจำนวนเม็ดเลือดแดงที่ติดเชื้อต่อเม็ดเลือดแดงทั้งหมด",
            "state": false
        },
        {
            "problem": "21. The appropriate pH of phosphate buffer is 7.0-7.2.",
            "img": "",
            "choices": "True///False",
            "answer": "True",
            "select": "",
            "explain": "ถูกต้อง pH ของ buffer ที่ใช้ผสมสีย้อม Giemsa มีความสำคัญต่อคุณภาพการย้อมสีมาก โดย pH ที่เหมาะสมที่สุดสำหรับย้อมเชื้อมาลาเรียคือ 7.2 เพื่อให้ส่วนประกอบต่างๆ ของเซลล์และเชื้อติดสีได้ดีและเห็นความแตกต่างชัดเจน",
            "state": false
        },
        {
            "problem": "22. The stages found during diagnosis are from the asexual reproduction cycle.",
            "img": "",
            "choices": "True///False",
            "answer": "True",
            "select": "",
            "explain": "ถูกต้อง ระยะของเชื้อมาลาเรียที่ใช้ในการวินิจฉัยหลักๆ ในเลือดของผู้ป่วยคือระยะในวงจรที่ไม่ใช้เพศ (asexual stages) ได้แก่ ring, trophozoite และ schizont ซึ่งเป็นระยะที่ทำให้เกิดอาการทางคลินิก แม้ว่าระยะสืบพันธุ์ (gametocyte) อาจพบได้ แต่ระยะ asexual เป็นเป้าหมายหลักในการวินิจฉัย",
            "state": false
        }
    ],
    "HL50MCQ1": [
        {
            "problem": "1. A patient presents with thalassemia and a large percentage of erythrocytes. Which of the following sites will the abnormal erythrocytes be removed from the blood circulation?",
            "img": "",
            "choices": "Splenic sinusoid///Splenic cord///Medullary sinus of lymph node///Periarterial lymphoid sheath of white pulp///Marginal zone of lymphoid follicles",
            "answer": "Splenic cord",
            "select": "",
            "explain": "ในผู้ป่วย Thalassemia จะมีการสร้างเม็ดเลือดแดงที่ผิดปกติ (abnormal erythrocytes) ซึ่งร่างกายจะกำจัดออกไปโดยกระบวนการ Extravascular hemolysis ที่ม้าม (spleen) เป็นหลัก โดยเม็ดเลือดแดงที่ผิดปกติจะถูกจับกินโดย macrophages ที่อยู่ใน Splenic cord (Cords of Billroth) ซึ่งเป็นส่วนหนึ่งของ red pulp ของม้าม",
            "state": false
        },
        {
            "problem": "2. Which of the following is an effector cell of immunosurveillance of cancer & viral infection?",
            "img": "",
            "choices": "B cell///Erythrocyte///Macrophage///NK cell///Neutrophil",
            "answer": "NK cell",
            "select": "",
            "explain": "NK cell (Natural Killer cell) เป็นเซลล์เม็ดเลือดขาวชนิด lymphocyte ที่มีความสำคัญในระบบภูมิคุ้มกันโดยกำเนิด (innate immunity) ทำหน้าที่ในการเฝ้าระวังและกำจัดเซลล์มะเร็ง (cancer) และเซลล์ที่ติดเชื้อไวรัส (viral infection) ได้โดยตรง โดยไม่ต้องการการกระตุ้นที่จำเพาะเจาะจงเหมือน T cell หรือ B cell",
            "state": false
        },
        {
            "problem": "4. When there is a wound, what protein is for blood clotting?",
            "img": "",
            "choices": "albumin///globulin///transferrin///fibrinogen///hemoglobin",
            "answer": "fibrinogen",
            "select": "",
            "explain": "Fibrinogen เป็นโปรตีนที่ละลายน้ำได้ในพลาสมา (soluble plasma protein) และเป็นปัจจัยการแข็งตัวของเลือดตัวที่ 1 (Factor I) เมื่อเกิดบาดแผลจะถูกกระตุ้นในขั้นตอนสุดท้ายของ coagulation cascade โดย thrombin ให้เปลี่ยนเป็น Fibrin ซึ่งเป็นเส้นใยที่ไม่ละลายน้ำ สานกันเป็นร่างแหเพื่อสร้างลิ่มเลือด (blood clot) อุดบาดแผล",
            "state": false
        },
        {
            "problem": "5. Which of the following structures is partially encapsulated thickening collagen by stratified squamous epithelium?",
            "img": "",
            "choices": "Thymus corpuscle///Lymph node///Palatine tonsil///Axillary lymph node///White pulp",
            "answer": "Palatine tonsil",
            "select": "",
            "explain": "Palatine tonsil เป็นกลุ่มของเนื้อเยื่อน้ำเหลือง (lymphoid tissue) ที่มีแคปซูลหุ้มไม่สมบูรณ์ (partially encapsulated) พื้นผิวด้านนอกถูกปกคลุมด้วย non-keratinized stratified squamous epithelium ซึ่งบุ๋มลึกลงไปเป็นร่องเรียกว่า tonsillar crypts ส่วน Thymus corpuscle อยู่ใน thymus, Axillary lymph node เป็น lymph node ที่มีแคปซูลหุ้มสมบูรณ์ และ White pulp เป็นส่วนหนึ่งของม้าม",
            "state": false
        },
        {
            "problem": "6. A boy presented with swellings of the axillary lymph nodes. The doctor explains that these are active lymph nodes enlarged in response to the infection. What is the cause of the swellings?",
            "img": "",
            "choices": "Enlargement and increased activity of blood vessels in lymph nodes.///Formation of the germinal center for B-cell proliferation in each cortex of lymph nodes///Increased lymph flow through afferent lymphatics of lymph nodes.///Increased thickness of each paracortex of lymph nodes.///Increased thickness of each medulla of lymph nodes.",
            "answer": "Formation of the germinal center for B-cell proliferation in each cortex of lymph nodes",
            "select": "",
            "explain": "การบวมของต่อมน้ำเหลือง (lymphadenopathy) เมื่อมีการติดเชื้อ เกิดจากการตอบสนองของระบบภูมิคุ้มกัน เมื่อมีแอนติเจน (antigen) จากเชื้อโรคเข้ามาในต่อมน้ำเหลือง จะไปกระตุ้น B-cell ในส่วน cortex ให้เกิดการแบ่งตัวเพิ่มจำนวนอย่างรวดเร็ว (proliferation) และเปลี่ยนแปลงรูปร่างกลายเป็นโครงสร้างที่เรียกว่า germinal center ซึ่งทำให้ lymphoid follicle และต่อมน้ำเหลืองโดยรวมมีขนาดใหญ่ขึ้น",
            "state": false
        },
        {
            "problem": "8. Which following are the main components of a network of reticular material that form in reticulocyte on supravital staining?",
            "img": "",
            "choices": "Ribosomal RNA///DNA///Band 3///Spectrin///Protein 4.2",
            "answer": "Ribosomal RNA",
            "select": "",
            "explain": "Reticulocyte คือเซลล์เม็ดเลือดแดงตัวอ่อนที่ยังเจริญไม่เต็มที่ ซึ่งยังมีออร์แกเนลล์บางชนิดหลงเหลืออยู่ โดยเฉพาะ Ribosomal RNA (rRNA) เมื่อนำมาย้อมด้วยสี supravital stain เช่น new methylene blue, rRNA จะตกตะกอน (precipitate) ติดสีให้เห็นเป็นลักษณะเส้นใยร่างแห (reticulum) อยู่ภายในเซลล์ จึงเป็นที่มาของชื่อ reticulocyte",
            "state": false
        },
        {
            "problem": "9. The patient presented with a rash along the body after gardening. The doctor advised that the cause was poisonous plants. What is the cell that cause of rash.",
            "img": "",
            "choices": "Monocyte///Basophil///Lymphocyte///PMN///RBC",
            "answer": "Basophil",
            "select": "",
            "explain": "ผื่นที่เกิดจากการสัมผัสพืชมีพิษ (poisonous plants) เป็นปฏิกิริยาภูมิแพ้ชนิดหนึ่ง เซลล์ที่เกี่ยวข้องโดยตรงกับการเกิดอาการผื่นคันคือ Basophil (และ Mast cell) ซึ่งเมื่อถูกกระตุ้นจะปล่อยสารเคมี เช่น histamine ออกมาจาก granule ภายในเซลล์ ทำให้หลอดเลือดขยายตัว (vasodilation) เกิดอาการบวม แดง คัน เป็นผื่นขึ้นมา แม้ว่า Lymphocyte (โดยเฉพาะ T-cell) จะเป็นเซลล์หลักในกระบวนการภูมิแพ้ชนิดนี้ (Type IV hypersensitivity) แต่ Basophil คือเซลล์ที่ทำให้เกิดอาการผื่นโดยตรง",
            "state": false
        },
        {
            "problem": "11. What organ is responsible for erythropoiesis in fetus?",
            "img": "",
            "choices": "Liver///Yolk sac///White bone marrow///Spleen (Normoxia)///Lungs (Hypoxia/anemia)",
            "answer": "Liver",
            "select": "",
            "explain": "การสร้างเม็ดเลือดแดง (Erythropoiesis) ในทารกในครรภ์ (fetus) เกิดขึ้นในหลายอวัยวะตามช่วงอายุครรภ์ เริ่มแรกที่ Yolk sac (mesoblastic stage) จากนั้นจะย้ายไปที่ตับ (Liver) และม้าม (Spleen) ในช่วงไตรมาสที่สอง (hepatic stage) โดยตับเป็นอวัยวะหลัก และสุดท้ายจะย้ายไปที่ไขกระดูก (Bone marrow) ในช่วงไตรมาสที่สาม (myeloid stage) และเป็นแหล่งสร้างหลักหลังคลอด ดังนั้นตับจึงเป็นอวัยวะหลักที่รับผิดชอบการสร้างเม็ดเลือดแดงในช่วงส่วนใหญ่ของชีวิตในครรภ์",
            "state": false
        },
        {
            "problem": "12. A 50-year-business man had been gastric surgery last year. He presented with fatigue and numbness for 1 month. PE: moderately pale, no jaundice CBC: Hb 9 mg/dl, Hct 27%, MCV 107 fL What substance is most appropriate to prescribe for treatment?",
            "img": "",
            "choices": "Vitamin K///Vitamin B12///Vitamin C///Erythropoietin///Ferrous fumarate",
            "answer": "Vitamin B12",
            "select": "",
            "explain": "ผู้ป่วยมีประวัติผ่าตัดกระเพาะอาหาร (gastric surgery) มีอาการอ่อนเพลียและชา (fatigue and numbness) ซึ่งเป็นอาการทางระบบประสาท ผลเลือด CBC พบภาวะโลหิตจางชนิดเม็ดเลือดแดงขนาดใหญ่ (Macrocytic anemia) โดยดูจากค่า MCV > 100 fL การผ่าตัดกระเพาะอาหารทำให้ขาด Intrinsic factor ซึ่งสร้างจาก parietal cell ในกระเพาะอาหารและจำเป็นต่อการดูดซึม Vitamin B12 ที่ลำไส้เล็กส่วนปลาย การขาด Vitamin B12 จะทำให้เกิด Macrocytic anemia และอาการทางระบบประสาทได้ จึงควรให้ Vitamin B12 เพื่อการรักษา",
            "state": false
        },
        {
            "problem": "13. A shifts to B. What happens?",
            "img": "https://drive.google.com/open?id=19iOBXNTjIGOxBer1Pg6AHjRglcErWh7r&usp=drive_copy",
            "choices": "Decrease 2-3 BPG///Decrease temperature///Increase Hb O2 affinity///Respiratory acidosis///Increase Hb F in RBC",
            "answer": "Respiratory acidosis",
            "select": "",
            "explain": "กราฟแสดง Oxygen-hemoglobin dissociation curve มีการเลื่อนไปทางขวา (right shift) จาก A ไป B การเลื่อนไปทางขวาหมายถึง Hemoglobin (Hb) มีความสามารถในการจับออกซิเจน (O2 affinity) ลดลง ทำให้ปล่อยออกซิเจนให้แก่เนื้อเยื่อได้ง่ายขึ้น ปัจจัยที่ทำให้เกิด right shift ได้แก่ ภาวะกรดในเลือด (acidosis, pH ต่ำ), อุณหภูมิร่างกายสูงขึ้น (increased temperature), ระดับ 2,3-BPG เพิ่มขึ้น และระดับ CO2 ในเลือดสูงขึ้น ดังนั้น Respiratory acidosis ซึ่งทำให้เลือดเป็นกรดจึงเป็นคำตอบที่ถูกต้อง",
            "state": false
        },
        {
            "problem": "14. In a patient with hemolytic anemia, which of the following changes would you expect to observe in a red blood cell ?",
            "img": "",
            "choices": "Decrease 2,3-BPG levels///Decrease hemoglobin concentration///Increase 2,3-BPG levels///increase hemoglobin concentration///No change 2,3-BPG levels",
            "answer": "Increase 2,3-BPG levels",
            "select": "",
            "explain": "ในภาวะโลหิตจางจากการแตกของเม็ดเลือดแดง (hemolytic anemia) ร่างกายจะเกิดภาวะขาดออกซิเจนที่เนื้อเยื่อ (tissue hypoxia) ร่างกายจะมีการปรับตัว (compensation) โดยการสร้าง 2,3-BPG (2,3-Bisphosphoglycerate) ในเม็ดเลือดแดงเพิ่มขึ้น ซึ่ง 2,3-BPG จะไปจับกับ hemoglobin ทำให้ hemoglobin ปล่อยออกซิเจนให้แก่เนื้อเยื่อได้ดีขึ้น (right shift) เพื่อชดเชยภาวะพร่องออกซิเจน",
            "state": false
        },
        {
            "problem": "15. Which one is gower-2 hemoglobin",
            "img": "",
            "choices": "α2β2///α2δ2///α2γ2///α2ε2///ζ2ε2",
            "answer": "α2ε2",
            "select": "",
            "explain": "Hemoglobin ในช่วงตัวอ่อน (embryo) มีหลายชนิด Gower-1 ประกอบด้วย zeta 2 chains และ epsilon 2 chains (ζ2ε2) ส่วน Gower-2 ประกอบด้วย alpha 2 chains และ epsilon 2 chains (α2ε2) และ Hb Portland ประกอบด้วย zeta 2 chains และ gamma 2 chains (ζ2γ2) สำหรับ HbF (Fetal) คือ α2γ2 และ HbA (Adult) คือ α2β2",
            "state": false
        },
        {
            "problem": "16. A 30 years old male recruited for research projects. He reported he has no significant symptoms. CBC : hb 11 HCT 34% mcv 68 hb typing : HbA2A : HbA2 = 5.8 what is the diagnosis?",
            "img": "",
            "choices": "alpha 2 thalassemia trait///beta 0 thalassemia trait///beta E thalassemia trait///alpha 1 thalassemia trait///Normal",
            "answer": "beta 0 thalassemia trait",
            "select": "",
            "explain": "ผู้ป่วยไม่มีอาการ แต่ผลเลือด CBC พบภาวะโลหิตจางเล็กน้อยชนิดเม็ดเลือดแดงขนาดเล็ก (mild microcytic anemia) โดยมีค่า MCV < 80 fL ผลการตรวจชนิดของฮีโมโกลบิน (Hb typing) พบว่ามีระดับ HbA2 สูงถึง 5.8% (ค่าปกติ < 3.5%) ซึ่งการมีระดับ HbA2 สูงเป็นลักษณะจำเพาะของ Beta-thalassemia trait หรือพาหะของเบต้าธาลัสซีเมีย",
            "state": false
        },
        {
            "problem": "17. Which of the following patient should be received intravenous erythropoietin treatment ?",
            "img": "",
            "choices": "A boy with transfusions dependent thalassemia.///A heart failure patient with anemia of chronic disease///A man with chronic lower gastrointestinal bleeding.///A cirrhotic patient with serum hemoglobin 11 g/dL and Vitamin D deficiency///A chronic kidney disease patient with anemia and serum ferritin 120 ng/dL",
            "answer": "A chronic kidney disease patient with anemia and serum ferritin 120 ng/dL",
            "select": "",
            "explain": "Erythropoietin (EPO) เป็นฮอร์โมนที่สร้างจากไตเพื่อกระตุ้นการสร้างเม็ดเลือดแดง การให้ EPO เป็นการรักษาภาวะโลหิตจางที่เกิดจากการขาด EPO ซึ่งสาเหตุที่พบบ่อยที่สุดคือโรคไตวายเรื้อรัง (Chronic kidney disease, CKD) เนื่องจากไตไม่สามารถสร้าง EPO ได้เพียงพอ ในผู้ป่วย CKD ที่มีภาวะโลหิตจางและมีธาตุเหล็กสำรองเพียงพอ (ดูจากค่า serum ferritin ที่ไม่ต่ำ ในที่นี้คือ 120 ng/dL) การให้ EPO จึงเป็นการรักษาที่เหมาะสม",
            "state": false
        },
        {
            "problem": "19. A 22-year-old male comes to the emergency room with dark urine. He reports eating fava beans before onset of symptoms. Physical examinations show pale and jaundice. Laboratory investigations report hemoglobinuria and elevated indirect bilirubin. Which pathways in red blood cells have problems?",
            "img": "",
            "choices": "Gluconeogenesis///Krebs cycle///Glycolysis///Oxidative phosphorylation///Pentose phosphate pathway",
            "answer": "Pentose phosphate pathway",
            "select": "",
            "explain": "ผู้ป่วยมีประวัติกินถั่วปากอ้า (fava beans) และมีอาการของเม็ดเลือดแดงแตกเฉียบพลัน (acute hemolysis) ได้แก่ ซีด (pale), ดีซ่าน (jaundice), ปัสสาวะสีเข้มจาก hemoglobinuria และมี indirect bilirubin สูง ซึ่งเป็นลักษณะคลาสสิกของโรคพร่องเอนไซม์ G6PD (G6PD deficiency) เอนไซม์ G6PD เป็นเอนไซม์สำคัญในกระบวนการสลายน้ำตาลที่เรียกว่า Pentose Phosphate Pathway (PPP) ซึ่งทำหน้าที่สร้าง NADPH เพื่อใช้ป้องกันเม็ดเลือดแดงจากสารอนุมูลอิสระ (oxidative stress) เมื่อขาดเอนไซม์นี้ เม็ดเลือดแดงจึงแตกง่ายเมื่อเจอสิ่งกระตุ้น",
            "state": false
        },
        {
            "problem": "20. Which one is the genotype from alpha thalassemia abnormality?",
            "img": "",
            "choices": "Hb AA2 (A2>3.5)///Hb AA2 (A2<3.5)///Hb A2F///Hb Cs///Hb EA (E=31%)",
            "answer": "Hb Cs",
            "select": "",
            "explain": "โจทย์ถามถึงลักษณะที่พบได้ใน alpha thalassemia, Hb Constant Spring (Hb Cs) เป็นฮีโมโกลบินผิดปกติชนิดหนึ่งที่เกิดจากการกลายพันธุ์ของยีน alpha-globin ทำให้สาย alpha-globin ยาวกว่าปกติ จัดเป็น alpha thalassemia ชนิด non-deletional การตรวจพบ Hb Cs ในผล Hb typing จึงบ่งชี้ถึงความผิดปกติของ alpha thalassemia ส่วน HbA2>3.5% เป็นลักษณะของ beta-thalassemia trait และ HbEA เป็นของ HbE trait หรือ disease",
            "state": false
        },
        {
            "problem": "21. Process that occur in beta thalassemia patients, excess alpha goblin precipitate in precursors cell and apoptosis?",
            "img": "",
            "choices": "extravascular hemolysis///intravascular hemolysis///bone marrow failure///ineffective erythropoiesis///extramedullary erythropoiesis",
            "answer": "ineffective erythropoiesis",
            "select": "",
            "explain": "ในผู้ป่วย Beta thalassemia ร่างกายสร้างสาย beta-globin ได้น้อยลง ทำให้มีสาย alpha-globin ที่ไม่มีคู่มาจับเกินความจำเป็น (excess alpha globin) สาย alpha ที่เกินมานี้จะไม่เสถียรและจะตกตะกอน (precipitate) อยู่ในเซลล์ตัวอ่อนของเม็ดเลือดแดง (precursors cell) ในไขกระดูก ตะกอนนี้เป็นพิษต่อเซลล์ ทำให้เซลล์ตายก่อนที่จะเจริญเป็นเม็ดเลือดแดงที่สมบูรณ์และออกจากไขกระดูกได้ กระบวนการสร้างเม็ดเลือดแดงที่ไม่มีประสิทธิภาพเช่นนี้เรียกว่า Ineffective erythropoiesis",
            "state": false
        },
        {
            "problem": "22. Which of the following could be in supravital stain of hemoglobin H disease?",
            "img": "",
            "choices": "Pappenheimer body///Howel jelly bodies///Inclusion body///Basophilic stippling///Heinz body",
            "answer": "Inclusion body",
            "select": "",
            "explain": "Hemoglobin H disease เป็นภาวะที่เกิดจากการขาดสาย alpha-globin อย่างรุนแรง ทำให้มีการสร้างสาย beta-globin เกินความจำเป็น สาย beta ที่เกินมาจะจับกันเป็น tetramer (β4) เรียกว่า Hemoglobin H (HbH) HbH มีความไม่เสถียรและจะตกตะกอน (precipitate) ภายในเม็ดเลือดแดง ทำให้เกิด Inclusion bodies ซึ่งสามารถตรวจพบได้โดยการย้อมสี supravital stain เช่น new methylene blue หรือ brilliant cresyl blue",
            "state": false
        },
        {
            "problem": "24. A couple is seeking genetic counseling. The father has Hb 13 g/dL, MCV 67 fL, and Hb typing of AE with 21% Hb E. The mother has Hb 11.5 g/dL, MCV 70 fL, and Hb typing of AA2 with 2.5% Hb A2. What is the most severe possible condition for their child?",
            "img": "",
            "choices": "Beta thalassemia/Hb E disease///Homozygous hemoglobin E///Beta thalassemia major///Hemoglobin Bart's hydrops fetalis///Hemoglobin H disease",
            "answer": "Hemoglobin Bart's hydrops fetalis",
            "select": "",
            "explain": "การวินิจฉัยจีโนไทป์ของพ่อแม่เป็นขั้นตอนแรกที่สำคัญที่สุด:\n\n*   **บิดา (Father):** มีภาวะ Microcytic (MCV 67) ร่วมกับ Hb typing แบบ AE แต่มี %Hb E เพียง 21% (ต่ำกว่าค่าปกติของ Hb E trait ที่ ~25-30%) ลักษณะนี้บ่งชี้ชัดเจนว่าบิดาเป็นพาหะ Hb E ที่มี **พาหะ α-thalassemia 1 (--/αα)** อยู่ร่วมด้วย (Co-inheritance) ทำให้การสร้างสาย α ลดลง ส่งผลให้ %Hb E ลดลงตามไปด้วย\n    *   **Genotype ของบิดา:** EA; --/αα\n\n*   **มารดา (Mother):** มีภาวะ Microcytic (MCV 70) แต่ Hb A2 อยู่ในระดับปกติ (2.5%) ซึ่งตัดภาวะพาหะ β-thalassemia ออกไปได้ ดังนั้นสาเหตุของ Microcytosis ที่เป็นไปได้มากที่สุดคือการเป็น **พาหะ α-thalassemia 1 (--/αα)**\n    *   **Genotype ของมารดา:** AA; --/αα\n\n**การประเมินความเสี่ยงของบุตร:** เมื่อพ่อและแม่ต่างเป็นพาหะ α-thalassemia 1 (--/αα) ทั้งคู่ จะมีความเสี่ยงที่บุตรจะได้รับยีน α-thalassemia ที่ผิดปกติจากทั้งสองฝ่าย:\n\n*   **โอกาส 25% ที่บุตรจะมีจีโนไทป์เป็น --/-- (Homozygous α-thalassemia 1)**\n\n*   จีโนไทป์ --/-- หมายถึงการขาดหายไปของยีน α-globin ทั้งหมด ทำให้ร่างกายไม่สามารถสร้างสาย α-globin ได้เลย ส่งผลให้ไม่สามารถสร้างฮีโมโกลบินที่ใช้งานได้ (เช่น Hb F (α2γ2) หรือ Hb A (α2β2)) ฮีโมโกลบินที่สร้างได้จะเป็น **Hb Bart's (γ4)** ซึ่งไม่สามารถขนส่งออกซิเจนได้ ทำให้เกิดภาวะทารกบวมน้ำอย่างรุนแรงและเสียชีวิตในครรภ์หรือหลังคลอดไม่นาน เรียกว่า **Hemoglobin Bart's hydrops fetalis** ซึ่งเป็นภาวะที่รุนแรงที่สุดในกลุ่มโรคธาลัสซีเมีย",
            "state": false
        },
        {
            "problem": "25. Which of the following is the most likely cause of cirrhosis in dependent transfusion thalassemia patients?",
            "img": "",
            "choices": "Extramedullary erythropoiesis///Non alcoholic fatty liver patients///Hemochromatosis///Chronic HCV///Autoimmune hepatitis",
            "answer": "Hemochromatosis",
            "select": "",
            "explain": "ผู้ป่วยธาลัสซีเมียชนิดรุนแรงที่ต้องได้รับเลือดเป็นประจำ (transfusion dependent) จะได้รับธาตุเหล็กจำนวนมากที่มากับเลือดที่ได้รับ แต่ร่างกายไม่มีกลไกขับธาตุเหล็กส่วนเกินออกจากร่างกายได้อย่างมีประสิทธิภาพ ทำให้เกิดภาวะธาตุเหล็กเกิน (iron overload) หรือที่เรียกว่า Secondary hemochromatosis ธาตุเหล็กที่เกินจะไปสะสมตามอวัยวะต่างๆ โดยเฉพาะที่ตับ ทำให้เกิดพังผืด (fibrosis) และตับแข็ง (cirrhosis) ในที่สุด",
            "state": false
        },
        {
            "problem": "26. Which one could be the complication of sickle cell anemia?",
            "img": "",
            "choices": "Decrease oxygen affinity of Hb///Hyperkalemia///Acute renal failure///Thrombocytopenia///Splenic infarction",
            "answer": "Splenic infarction",
            "select": "",
            "explain": "ในโรคโลหิตจางชนิด Sickle cell (Sickle cell anemia) เมื่ออยู่ในภาวะออกซิเจนต่ำ ฮีโมโกลบิน S (HbS) จะตกตะกอน ทำให้เม็ดเลือดแดงเปลี่ยนรูปร่างเป็นเคียว (sickle shape) ซึ่งขาดความยืดหยุ่นและไปอุดตันหลอดเลือดเล็กๆ ได้ (vaso-occlusion) อวัยวะที่ได้รับผลกระทบบ่อยคือม้าม การอุดตันหลอดเลือดในม้ามซ้ำๆ จะทำให้เนื้อเยื่อม้ามตายจากการขาดเลือด (Splenic infarction) และในระยะยาวม้ามจะฝ่อและไม่ทำงาน (autosplenectomy)",
            "state": false
        },
        {
            "problem": "27. Given various patient histories, a blood smear found numerous spherocytes. What is the cause? (ให้ประวัติมาต่างๆ แล้วบอกว่า blood smear found numerous spherocyte เกิดจากอะไร)",
            "img": "",
            "choices": "Band 3///Protein 4.1///Glycolipid///Glucocerebroside///Spectrin",
            "answer": "Spectrin",
            "select": "",
            "explain": "การพบ Spherocytes จำนวนมากเป็นลักษณะเด่นของโรค Hereditary Spherocytosis (HS) ซึ่งเป็นโรคเลือดจางจากเม็ดเลือดแดงแตกที่ถ่ายทอดทางพันธุกรรม เกิดจากการกลายพันธุ์ของโปรตีนที่เป็นโครงสร้างของเยื่อหุ้มเซลล์เม็ดเลือดแดง (RBC membrane cytoskeleton) ทำให้สูญเสียความแข็งแรงและพื้นที่ผิวของเยื่อหุ้มเซลล์ จนเปลี่ยนรูปทรงเป็นทรงกลมและถูกทำลายที่ม้ามได้ง่าย\n\nโปรตีนที่เกี่ยวข้องและความผิดปกติ:\n*   **Spectrin (คำตอบ):** เป็นโปรตีนหลักของโครงสร้างเยื่อหุ้มเซลล์ การกลายพันธุ์ของ Spectrin (ทั้ง α และ β) เป็นสาเหตุที่ **พบบ่อยที่สุด** ของ HS (พบได้ประมาณ 60% ของเคสทั้งหมด)\n*   **Ankyrin:** ทำหน้าที่เชื่อม Spectrin เข้ากับ Band 3 (Vertical interaction) การกลายพันธุ์เป็นสาเหตุที่พบบ่อยรองลงมา\n*   **Band 3:** เป็นโปรตีนที่ทอดผ่านเยื่อหุ้มเซลล์และเป็นจุดยึดของ Ankyrin การกลายพันธุ์ก็เป็นสาเหตุที่พบบ่อยเช่นกัน\n*   **Protein 4.1:** มีหน้าที่หลักในการยึดโครงสร้างในแนวระนาบ (Horizontal interaction) การกลายพันธุ์ของโปรตีนนี้มักทำให้เกิดโรค **Hereditary Elliptocytosis** (เม็ดเลือดแดงรูปไข่) มากกว่า\n*   **Glucocerebroside:** คือไขมันที่สะสมผิดปกติในโรค **Gaucher disease** ไม่เกี่ยวข้องโดยตรงกับโครงสร้างเม็ดเลือดแดง",
            "state": false
        },
        {
            "problem": "29. What is the most common cause of iron deficiency anemia?",
            "img": "",
            "choices": "Chronic blood loss///Defect heme synthesis///Shedding of mucosal///Prolong intravascular hemolysis///Mutation of iron sensing gene",
            "answer": "Chronic blood loss",
            "select": "",
            "explain": "สาเหตุที่พบบ่อยที่สุดของภาวะโลหิตจางจากการขาดธาตุเหล็ก (iron deficiency anemia) ในผู้ใหญ่คือการเสียเลือดเรื้อรัง (Chronic blood loss) เช่น การเสียเลือดจากทางเดินอาหาร (gastrointestinal bleeding) หรือการมีประจำเดือนมามากผิดปกติในผู้หญิง (menorrhagia) เพราะร่างกายจะสูญเสียธาตุเหล็กไปพร้อมกับเลือดที่เสียไป",
            "state": false
        },
        {
            "problem": "30. Eculizumab inhibits C5, and activation of complement. Which of following conditions is suitable for eculizumab",
            "img": "",
            "choices": "Thalassemia///PNH///HS///Chronic anemia///HE",
            "answer": "PNH",
            "select": "",
            "explain": "Eculizumab เป็นยา monoclonal antibody ที่ออกฤทธิ์ยับยั้ง complement C5 ทำให้ป้องกันการเกิด MAC (Membrane Attack Complex) ซึ่งเป็นขั้นตอนสุดท้ายของระบบ complement ที่ทำให้เซลล์แตกได้ โรค Paroxysmal Nocturnal Hemoglobinuria (PNH) เกิดจากเซลล์เม็ดเลือดขาดโปรตีน CD55 และ CD59 ที่ใช้ป้องกันตัวเองจากระบบ complement ทำให้เม็ดเลือดแดงถูกทำลายโดย MAC เกิดภาวะ intravascular hemolysis ดังนั้น Eculizumab จึงเป็นยาที่เหมาะสมสำหรับรักษาโรค PNH",
            "state": false
        },
        {
            "problem": "31. Female 41 years old present with anemia (Hemoglobin 9.5 g/dl) and past medical history has significant Rheumatoid arthritis with active symmetrical polyarthritis. Peripheral blood smear reveals normochromic normocytic red blood cells. What is mechanism that cause anemia?",
            "img": "",
            "choices": "Decrease hepcidin///Extravascular hemolysis///Cell membrane defect///Hyperfunction ferroportin///Increase storage in macrophage",
            "answer": "Increase storage in macrophage",
            "select": "",
            "explain": "ผู้ป่วยเป็นโรคข้ออักเสบรูมาตอยด์ (Rheumatoid arthritis) ซึ่งเป็นโรคอักเสบเรื้อรัง และมีภาวะโลหิตจางชนิด normochromic normocytic ซึ่งเป็นลักษณะของ Anemia of Chronic Disease (ACD) กลไกสำคัญของ ACD คือการอักเสบเรื้อรังทำให้มีการหลั่ง cytokine เช่น IL-6 ซึ่งไปกระตุ้นให้ตับสร้าง hepcidin เพิ่มขึ้น Hepcidin จะไปยับยั้งการทำงานของ ferroportin ทำให้ธาตุเหล็กไม่สามารถออกจากแหล่งเก็บ (macrophage และ enterocyte) สู่กระแสเลือดได้ ส่งผลให้เกิดภาวะธาตุเหล็กถูกกักเก็บไว้ใน macrophage (Increase storage in macrophage) และไม่สามารถนำไปใช้สร้างเม็ดเลือดแดงได้ตามปกติ",
            "state": false
        },
        {
            "problem": "32. A 37-year-old man presented with headache. From childhood, the patient presented with erythrocytosis. Furthermore, at the age of 30 years, the patient underwent surgery for pheochromocytoma. Mutation of the von-Hippel Lindau gene was demonstrated. Which condition that could be found in this patient?",
            "img": "",
            "choices": "Increase protein degradation by proteasome///Decrease oxygen saturation of hemoglobin///Decrease function of hypoxia-inducible factor///Ubiquitination of hypoxia-inducible factor///Increase erythropoietin",
            "answer": "Increase erythropoietin",
            "select": "",
            "explain": "Von-Hippel Lindau (VHL) disease เกิดจาก mutation ของยีน VHL ซึ่งเป็น tumor suppressor gene ปกติโปรตีน VHL จะทำหน้าที่จับกับ Hypoxia-Inducible Factor (HIF) ในภาวะปกติเพื่อให้ถูกทำลายไป เมื่อเกิด mutation ของ VHL จะทำให้ HIF ไม่ถูกทำลายและมีการทำงานมากเกินไป HIF จะไปกระตุ้นการสร้างยีนต่างๆ รวมถึงยีน Erythropoietin (EPO) ทำให้มีการสร้าง EPO เพิ่มขึ้น ส่งผลให้เกิดภาวะเม็ดเลือดแดงมากผิดปกติ (erythrocytosis) นอกจากนี้ VHL syndrome ยังเพิ่มความเสี่ยงของเนื้องอกหลายชนิดรวมถึง pheochromocytoma",
            "state": false
        },
        {
            "problem": "33. A patient with severe abdominal pain and numbness in extremities has an HMBS mutation. Which is correct?",
            "img": "",
            "choices": "Increase Aminolaevulinic acid(ALA) synthase///Decrease Aminolaevulinic acid(ALA)///Increase porphobilinogen (PBG)///Decrease porphobilinogen(PBG)///Normal porphobilinogen (PBG)",
            "answer": "Increase porphobilinogen (PBG)",
            "select": "",
            "explain": "อาการปวดท้องรุนแรงและอาการทางระบบประสาท (ชา) ร่วมกับการมี mutation ของยีน HMBS เป็นลักษณะของโรค Acute Intermittent Porphyria (AIP) การขาดเอนไซม์ HMBS (hydroxymethylbilane synthase) ทำให้สารตั้งต้นในกระบวนการสร้าง Heme คือ Porphobilinogen (PBG) และ Aminolevulinic acid (ALA) ไม่สามารถเปลี่ยนไปเป็นสารตัวต่อไปได้ ทำให้เกิดการสะสมของ PBG และ ALA ในร่างกาย ซึ่งเป็นพิษและทำให้เกิดอาการต่างๆ ดังนั้นการตรวจพบระดับ Porphobilinogen (PBG) ที่สูงขึ้นจึงเป็นสิ่งที่ถูกต้อง",
            "state": false
        },
        {
            "problem": "34. Caplacizumab is a recombinant humanized monoclonal antibody against von Willebrand factor. It acts by blocking platelet aggregation. Which condition could be gain a benefit from caplacizumab?",
            "img": "",
            "choices": "Autoimmune hemolytic anemia///Paroxysmal nocturnal hemoglobinuria///Thrombotic thrombocytopenic purpura///Beta thalassemia///Sickle cell anemia",
            "answer": "Thrombotic thrombocytopenic purpura",
            "select": "",
            "explain": "Caplacizumab ออกฤทธิ์จับกับ von Willebrand factor (vWF) เพื่อยับยั้งการเกาะกลุ่มของเกล็ดเลือด ในโรค Thrombotic Thrombocytopenic Purpura (TTP) มีพยาธิกำเนิดหลักคือการมี large vWF multimers ที่กระตุ้นให้เกล็ดเลือดมาเกาะกลุ่มกันอย่างผิดปกติและแพร่กระจายทั่วร่างกาย ทำให้เกิดลิ่มเลือดอุดตันหลอดเลือดขนาดเล็ก ดังนั้นการใช้ Caplacizumab เพื่อยับยั้งการทำงานของ vWF จึงเป็นประโยชน์ในการรักษา TTP",
            "state": false
        },
        {
            "problem": "35. A 45 year old male presented with pallor and icterus. Peripheral blood smear revealed microspherosis and polychromasia. Urine analysis demonstrates hemoglobinuria. A Flow cytometry revealed decreasing of CD55 and CD59 protein membrane. Which condition that could be found in the patient?",
            "img": "",
            "choices": "Mutation of α-globin gene///Mutation of β-globin gene///Mutation of PIG-A gene///Autoantibody of red cell membrane///Abnormality of catabolic enzyme",
            "answer": "Mutation of PIG-A gene",
            "select": "",
            "explain": "ผู้ป่วยมีอาการของ intravascular hemolysis (ซีด, ดีซ่าน, hemoglobinuria) และผล flow cytometry พบการลดลงของโปรตีน CD55 และ CD59 บนผิวเซลล์ ซึ่งเป็นลักษณะจำเพาะของโรค Paroxysmal Nocturnal Hemoglobinuria (PNH) โรคนี้เกิดจากการกลายพันธุ์แบบ somatic mutation ของยีน PIG-A (Phosphatidylinositol glycan anchor biosynthesis, class A) ซึ่งเป็นยีนที่จำเป็นในการสร้าง GPI anchor ที่ใช้ยึดโปรตีนต่างๆ รวมถึง CD55 และ CD59 ไว้บนผิวเซลล์",
            "state": false
        },
        {
            "problem": "36. Influenza infection, BT 38.T, RR 20, PR 90, 120/80 mmHg. Which is most likely to be found in the blood test?",
            "img": "",
            "choices": "Monocytosis///Eosinophilia///Neutropenia///Leukopenia///Basophilia",
            "answer": "Neutropenia",
            "select": "",
            "explain": "การติดเชื้อไวรัส เช่น Influenza มักทำให้เกิดภาวะเม็ดเลือดขาวต่ำ (Leukopenia) โดยเฉพาะอย่างยิ่ง neutropenia เนื่องจากไวรัสสามารถทำลายไขกระดูกหรือมีการกระตุ้นให้ neutrophil ออกไปยังเนื้อเยื่อที่ติดเชื้อมากขึ้น ทำให้ระดับ neutrophil ในเลือดลดลง นอกจากนี้ การติดเชื้อไวรัสยังสามารถทำให้เกิด lymphocytosis ได้ในบางกรณี แต่ neutropenia เป็นลักษณะที่พบบ่อยกว่าในการติดเชื้อไวรัสเฉียบพลัน",
            "state": false
        },
        {
            "problem": "37. 32yo woman with SLE on immunosuppressant drugs come to ICU w/ infect bacteria pneumonia and septic shock. Hemoculture :S. Pneumoniae CBC: Hb10 Hct 30 WBC 18700 Plt 125000. What is WBC finding?",
            "img": "",
            "choices": "Pseudo-Pelger-Huët anomaly///Atypical lymphocyte///PMN with toxic granule///Hypersegmented PMN///Lymphocytosis",
            "answer": "PMN with toxic granule",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะติดเชื้อแบคทีเรียรุนแรง (S. pneumoniae) และ septic shock ซึ่งเป็นภาวะที่ร่างกายมีการอักเสบอย่างรุนแรง ในภาวะเช่นนี้ ไขกระดูกจะเร่งสร้างและปล่อย neutrophil (PMN) ออกมาอย่างรวดเร็ว ทำให้พบ neutrophil ตัวอ่อน (เช่น band form) และการเปลี่ยนแปลงทางสัณฐานวิทยาที่บ่งบอกถึงการถูกกระตุ้นอย่างมาก เช่น toxic granulation (granule ใน cytoplasm ติดสีเข้มและหยาบขึ้น), Döhle bodies, และ cytoplasmic vacuolation การพบ PMN with toxic granule จึงเป็นลักษณะที่คาดว่าจะพบได้",
            "state": false
        },
        {
            "problem": "38. Which of the following is the most possible cause of monocytosis?",
            "img": "",
            "choices": "Pulmonary nocardiosis///Myelophthisis anemia///Parasite infection///CMV colitis///Recovery from myelosuppression",
            "answer": "Recovery from myelosuppression",
            "select": "",
            "explain": "Monocytosis หรือภาวะที่ monocyte สูง สามารถพบได้ในหลายภาวะ เช่น การติดเชื้อเรื้อรัง (เช่น วัณโรค), โรคภูมิต้านตนเอง, และมะเร็งบางชนิด หนึ่งในภาวะที่พบ monocytosis ได้คือช่วงที่ร่างกายกำลังฟื้นตัวจากภาวะไขกระดูกถูกกด (Recovery from myelosuppression) เช่น หลังได้รับยาเคมีบำบัด โดย monocyte มักจะเป็นเม็ดเลือดขาวชนิดแรกๆ ที่ฟื้นตัวกลับสู่ระดับปกติ",
            "state": false
        },
        {
            "problem": "39. A 28-year-old man is being forced to fever with hepatosplenomegaly. He was diagnosed with infectious mononucleosis. Which of the following can be found in blood smear?",
            "img": "",
            "choices": "Atypical lymphocyte///Neutrophil with toxic granules///Basophil///Eosinophil///Monocyte",
            "answer": "Atypical lymphocyte",
            "select": "",
            "explain": "โรค Infectious Mononucleosis เกิดจากการติดเชื้อ Epstein-Barr virus (EBV) ซึ่งเชื้อนี้จะติดเชื้อใน B-lymphocyte เป็นหลัก จากนั้น T-lymphocyte (โดยเฉพาะ CD8+) จะถูกกระตุ้นให้เพิ่มจำนวนและเข้าทำลาย B-lymphocyte ที่ติดเชื้อ T-cell ที่ถูกกระตุ้นเหล่านี้จะมีลักษณะทางสัณฐานวิทยาที่เปลี่ยนแปลงไป คือมีขนาดใหญ่ขึ้น, นิวเคลียสรูปร่างหลากหลาย, และไซโตพลาสซึมติดสีฟ้าและมีขอบเขตไม่ชัดเจน ซึ่งเรียกว่า Atypical lymphocyte และเป็นลักษณะจำเพาะที่พบได้ใน blood smear ของผู้ป่วยโรคนี้",
            "state": false
        },
        {
            "problem": "41. What is the following stimulates platelet production",
            "img": "",
            "choices": "Fibrinogen///Thrombin///Thrombomodulin///Tissue thromboplastin///Thrombopoietin",
            "answer": "Thrombopoietin",
            "select": "",
            "explain": "Thrombopoietin (TPO) เป็นฮอร์โมนหลักที่ควบคุมการสร้างเกล็ดเลือด (thrombopoiesis) TPO สร้างขึ้นส่วนใหญ่ที่ตับและไต ไปออกฤทธิ์ที่ไขกระดูกเพื่อกระตุ้นการเจริญและแบ่งตัวของ megakaryocyte ซึ่งเป็นเซลล์ต้นกำเนิดของเกล็ดเลือด ทำให้มีการผลิตเกล็ดเลือดเพิ่มขึ้น",
            "state": false
        },
        {
            "problem": "42. Which of the following act as adhesion molecules between platelets and endothelial injury in platelet adhesion?",
            "img": "",
            "choices": "Calcium///Tissue factor///Von Willebrand factor///Thromboxane A2///Serotonin",
            "answer": "Von Willebrand factor",
            "select": "",
            "explain": "ในขั้นตอนแรกของ hemostasis คือ platelet adhesion เมื่อหลอดเลือดได้รับบาดเจ็บ คอลลาเจนที่อยู่ใต้ชั้น endothelium จะถูกเปิดออก Von Willebrand factor (vWF) ซึ่งเป็นโปรตีนในพลาสมาจะเข้ามาจับกับคอลลาเจนนี้ จากนั้น vWF จะทำหน้าที่เป็นสะพานเชื่อมให้เกล็ดเลือด (platelet) ผ่านทางตัวรับ GPIb บนผิวเกล็ดเลือด เข้ามาเกาะติดกับบริเวณที่บาดเจ็บได้",
            "state": false
        },
        {
            "problem": "43. Which of the following initiates the extrinsic coagulation pathway?",
            "img": "",
            "choices": "Endothelium cell release of prostaglandin///Platelet glycoprotein IIb/IIIa conformational alteration///Contact component adhere to a negatively charged surface///Tissue factor released by injured endothelium///Fibrinogen converts to insoluble fibrin",
            "answer": "Tissue factor released by injured endothelium",
            "select": "",
            "explain": "Extrinsic coagulation pathway ถูกเริ่มต้นเมื่อมีการบาดเจ็บของหลอดเลือด ทำให้เซลล์ที่อยู่ใต้ endothelium ซึ่งมี Tissue factor (TF หรือ Factor III) อยู่บนผิวเซลล์ สัมผัสกับเลือด Tissue factor ที่ถูกปล่อยออกมาจะจับกับ Factor VII ในเลือดและกระตุ้นให้กลายเป็น Factor VIIa ซึ่งเป็นจุดเริ่มต้นของ extrinsic pathway",
            "state": false
        },
        {
            "problem": "44. A patient has GPIIb/IIIa defect on platelet. What is the disease called?",
            "img": "",
            "choices": "Glanzmann thrombasthenia///Von Willebrand disease///Hemophilia///Leukemia///Bernard-Soulier syndrome",
            "answer": "Glanzmann thrombasthenia",
            "select": "",
            "explain": "Glanzmann thrombasthenia เป็นโรคเกล็ดเลือดทำงานผิดปกติทางพันธุกรรมที่เกิดจากความบกพร่องหรือขาดตัวรับ (receptor) Glycoprotein IIb/IIIa (GPIIb/IIIa) บนผิวเกล็ดเลือด ตัวรับนี้มีความสำคัญในขั้นตอน platelet aggregation โดยทำหน้าที่เป็นตัวจับกับ fibrinogen เพื่อเชื่อมเกล็ดเลือดแต่ละตัวเข้าด้วยกัน เมื่อขาดตัวรับนี้ไปจะทำให้เกล็ดเลือดไม่สามารถเกาะกลุ่มกันได้",
            "state": false
        },
        {
            "problem": "46. Which of the following is the natural anticoagulant factor?",
            "img": "",
            "choices": "Thrombin///Thrombomodulin///Ca2+///Protein C&S///Fibrin",
            "answer": "Protein C&S",
            "select": "",
            "explain": "Protein C และ Protein S เป็นโปรตีนที่สร้างจากตับและเป็นส่วนสำคัญของระบบป้องกันการเกิดลิ่มเลือดตามธรรมชาติ (natural anticoagulant system) โดย Thrombomodulin บนผิว endothelium จะจับกับ Thrombin และเปลี่ยนหน้าที่ของ Thrombin ให้ไปกระตุ้น Protein C จากนั้น Activated Protein C (APC) จะทำงานร่วมกับ Protein S (ซึ่งเป็น cofactor) เพื่อยับยั้งการทำงานของ Factor Va และ Factor VIIIa ทำให้ชะลอการสร้างลิ่มเลือด",
            "state": false
        },
        {
            "problem": "48. What is the anticoagulant heparin mechanism?",
            "img": "",
            "choices": "Accelerated antithrombin III///Activate tissue factor pathway inhibitor///Inhibit extrinsic pathway///Inhibit factor XII///Inhibit t-PA",
            "answer": "Accelerated antithrombin III",
            "select": "",
            "explain": "Heparin เป็นยาต้านการแข็งตัวของเลือดที่ออกฤทธิ์โดยการจับกับ Antithrombin III (ATIII) ซึ่งเป็น natural anticoagulant ในร่างกาย การจับกันนี้จะทำให้โครงสร้างของ ATIII เปลี่ยนแปลงไปและสามารถยับยั้งการทำงานของ clotting factor ต่างๆ โดยเฉพาะ Thrombin (Factor IIa) และ Factor Xa ได้รวดเร็วและมีประสิทธิภาพมากขึ้นหลายพันเท่า (Accelerated antithrombin III activity)",
            "state": false
        },
        {
            "problem": "49. A 12-year-old boy is admitted to the hospital with bleeding disorder. His aPTT is prolonged. What is the possible cause of his bleeding disorder?",
            "img": "",
            "choices": "Tissue factor deficiency///Factor VII deficiency///Platelet dysfunction///Plasminogen deficiency///Factor VIII or IX deficiency",
            "answer": "Factor VIII or IX deficiency",
            "select": "",
            "explain": "Activated Partial Thromboplastin Time (aPTT) เป็นการทดสอบการทำงานของ Intrinsic pathway และ common pathway ของระบบการแข็งตัวของเลือด การที่ค่า aPTT ยาวนานขึ้น (prolonged) แต่ค่า PT (ซึ่งทดสอบ extrinsic pathway) ปกติ บ่งชี้ว่ามีความผิดปกติใน intrinsic pathway ซึ่ง factor ที่เกี่ยวข้องได้แก่ Factor XII, XI, IX, และ VIII การขาด Factor VIII (Hemophilia A) หรือ Factor IX (Hemophilia B) เป็นสาเหตุของโรคเลือดออกผิดปกติทางพันธุกรรมที่พบบ่อยและทำให้ aPTT ยาวนานขึ้น",
            "state": false
        },
        {
            "problem": "50. Immobilizing patients with deep venous thrombosis. What can be occur in this patient if the immobilization is prolonged?",
            "img": "",
            "choices": "DIC///Atrial fibrillation///Pulmonary embolism///Stroke///Myocardial infarction",
            "answer": "Pulmonary embolism",
            "select": "",
            "explain": "Deep Venous Thrombosis (DVT) คือภาวะที่มีลิ่มเลือดเกิดขึ้นในหลอดเลือดดำส่วนลึก ซึ่งมักเกิดที่ขา การที่ผู้ป่วยไม่เคลื่อนไหวเป็นเวลานาน (prolonged immobilization) เป็นปัจจัยเสี่ยงสำคัญของ DVT ภาวะแทรกซ้อนที่อันตรายที่สุดของ DVT คือลิ่มเลือดนั้นอาจหลุดจากผนังหลอดเลือดและลอยไปตามกระแสเลือดเข้าสู่หัวใจห้องขวาและไปอุดตันที่หลอดเลือดในปอด ทำให้เกิดภาวะ Pulmonary Embolism (PE) ซึ่งเป็นภาวะฉุกเฉินทางการแพทย์",
            "state": false
        },
        {
            "problem": "51. Which of the following is associated with vitamin K deficiency?",
            "img": "",
            "choices": "Uremia///Bile duct obstruction///Gastrectomy///Massive hematoma///Malignancy",
            "answer": "Bile duct obstruction",
            "select": "",
            "explain": "Vitamin K เป็นวิตามินที่ละลายในไขมัน (fat-soluble vitamin) การดูดซึมจึงต้องอาศัยเกลือน้ำดี (bile salt) ซึ่งผลิตจากตับและหลั่งออกมาทางท่อน้ำดี (bile duct) เพื่อช่วยในการย่อยและดูดซึมไขมัน ในภาวะที่มีการอุดตันของท่อน้ำดี (Bile duct obstruction) น้ำดีจะไม่สามารถลงมาสู่ลำไส้เล็กได้ ทำให้การดูดซึมไขมันและวิตามินที่ละลายในไขมันรวมถึงวิตามินเคบกพร่องไป ส่งผลให้ร่างกายขาดวิตามินเคและไม่สามารถสร้าง clotting factor ที่ต้องอาศัยวิตามินเค (II, VII, IX, X) ได้ตามปกติ",
            "state": false
        },
        {
            "problem": "52. Which one of the following is the pathophysiology of immune thrombocytopenia",
            "img": "",
            "choices": "Platelet apoptosis///Platelet destruction///Platelet sequestration///Platelet consumption///Myelophthisis",
            "answer": "Platelet destruction",
            "select": "",
            "explain": "Immune Thrombocytopenia (ITP) เป็นโรคภูมิต้านตนเอง (autoimmune disorder) ที่มีพยาธิกำเนิดหลักคือการที่ร่างกายสร้าง autoantibody (ส่วนใหญ่เป็น IgG) ขึ้นมาต่อต้านโปรตีนบนผิวของเกล็ดเลือดตนเอง เกล็ดเลือดที่ถูก antibody จับจะถูกกำจัดและทำลาย (destruction) อย่างรวดเร็วโดย macrophage ในระบบ reticuloendothelial system โดยเฉพาะที่ม้าม ทำให้จำนวนเกล็ดเลือดในกระแสเลือดลดต่ำลง",
            "state": false
        },
        {
            "problem": "53. Which of the following is the clinical manifestation of secondary hemostatic disorder?",
            "img": "",
            "choices": "Purpura///Epistaxis///Muscle hematoma///Menorrhagia///Bleeding gum",
            "answer": "Muscle hematoma",
            "select": "",
            "explain": "ความผิดปกติของ Secondary hemostasis คือความผิดปกติของ clotting factors ซึ่งทำให้การสร้างลิ่มเลือด fibrin ไม่สมบูรณ์ ลักษณะเลือดออกที่บ่งชี้ถึงภาวะนี้มักเป็นการมีเลือดออกในบริเวณที่ลึก เช่น เลือดออกในข้อ (hemarthrosis) หรือเลือดออกในกล้ามเนื้อ (muscle hematoma) ส่วนอาการเลือดออกตามผิวหนัง เช่น purpura, petechiae หรือเลือดออกตามเยื่อบุ เช่น เลือดกำเดา (epistaxis), เลือดออกตามไรฟัน (bleeding gum) มักเป็นลักษณะของความผิดปกติของเกล็ดเลือด (primary hemostasis disorder)",
            "state": false
        },
        {
            "problem": "54. A 4 years old girl: - previous medical history is multiple superficial ecchymoses on both arms and legs for 4 days - no remarkable symptoms more than multiple superficial ecchymoses CBC: - Hct 11.5% - Hb 33 g/dL - WBC 9000/ cu.mm - Platelet 345000/cu.mm - PMN 55% Lymphocyte 20% Monocyte 5% Eosinophil 20% What is the most appropriate further lab diagnosis?",
            "img": "",
            "choices": "Thyroid function test///Platelet morphology///Autoimmune work out///Coagulogram///Bleeding time",
            "answer": "Coagulogram",
            "select": "",
            "explain": "ผู้ป่วยมีอาการจ้ำเลือด (ecchymoses) ซึ่งบ่งชี้ถึงภาวะเลือดออกผิดปกติ ผล CBC พบว่าจำนวนเกล็ดเลือด (platelet count) และเม็ดเลือดขาว (WBC) อยู่ในเกณฑ์ปกติ แต่มีภาวะโลหิตจางอย่างรุนแรง (Hb 3.3 g/dL, ซึ่งอาจเป็นความผิดพลาดในการพิมพ์โจทย์ ที่ถูกต้องอาจเป็น 3.3 g/dL หรือ Hb 11.5/Hct 33) อย่างไรก็ตาม เมื่อจำนวนเกล็ดเลือดปกติ แต่มีอาการเลือดออก ควรสงสัยความผิดปกติของปัจจัยการแข็งตัวของเลือด (coagulation factors) ซึ่งเป็นส่วนของ secondary hemostasis ดังนั้นการส่งตรวจ Coagulogram (ซึ่งประกอบด้วย PT, aPTT) จึงเป็นขั้นตอนต่อไปที่เหมาะสมที่สุดเพื่อประเมินการทำงานของ clotting factors",
            "state": false
        },
        {
            "problem": "55. A patient with BP 80/30, RR 24, low RBC, low WBC, prolonged aPTT, and PT, likely has DIC secondary to sepsis. What is the primary mechanism?",
            "img": "",
            "choices": "bm suppression///Procoagulation activation///inhibit fibrinolysis///natural anticoagulation destruction///natural protein destruction",
            "answer": "Procoagulation activation",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะช็อกจากการติดเชื้อ (Septic shock) ซึ่งเป็นตัวกระตุ้นให้เกิดภาวะ Disseminated Intravascular Coagulation (DIC) ได้ พยาธิกำเนิดหลักของ DIC คือการกระตุ้นระบบการแข็งตัวของเลือดอย่างรุนแรงและแพร่กระจายทั่วร่างกาย (widespread procoagulation activation) ทำให้มีการสร้างลิ่มเลือดขนาดเล็ก (microthrombi) ในหลอดเลือดต่างๆ ซึ่งไปใช้ (consume) ปัจจัยการแข็งตัวของเลือด (clotting factors) และเกล็ดเลือด (platelets) จนหมดไป ทำให้ผลตรวจ aPTT และ PT ยาวนานขึ้น และเสี่ยงต่อการมีเลือดออกผิดปกติในที่สุด",
            "state": false
        },
        {
            "problem": "56. A-28-year-old woman presented with subacute anemia for two months. PE: Moderate pale with atrophic glossitis. Her liver and spleen were impalpable. She also has had history of heavy menstruation. What is the most likely diagnosis for this patient?",
            "img": "",
            "choices": "Autoimmune hemolytic anemia///Iron deficiency anemia///Thalassemia///Folate deficiency///Vitamin B12 deficiency",
            "answer": "Iron deficiency anemia",
            "select": "",
            "explain": "ผู้ป่วยหญิงวัยเจริญพันธุ์มีประวัติประจำเดือนมามาก (heavy menstruation) ซึ่งเป็นการเสียเลือดเรื้อรัง และมีอาการแสดงของภาวะโลหิตจาง เช่น ซีดปานกลาง (moderate pale) และลิ้นเลี่ยนอักเสบ (atrophic glossitis) ซึ่งเป็นลักษณะที่พบได้ในภาวะขาดธาตุเหล็ก การเสียเลือดเรื้อรังเป็นสาเหตุที่พบบ่อยที่สุดของภาวะโลหิตจางจากการขาดธาตุเหล็ก (Iron deficiency anemia) ในผู้หญิงวัยนี้",
            "state": false
        },
        {
            "problem": "58. A 67-year-old man presented with unexplained anemia for 4 months. He has had multiple bone pain at multiple joints of his body. Laboratory results showed renal failure, anemia, hypercalcemia, hyperglobulinemia. Blood smear showed rouleaux formation. What is the most common cause of anemia in this patient?",
            "img": "",
            "choices": "Hyperparathyroid disease///Multiple myeloma///Solid tumor with bone and bone metastasis///Autoimmune hemolytic anemia///Acute renal failure",
            "answer": "Multiple myeloma",
            "select": "",
            "explain": "อาการและผลตรวจทางห้องปฏิบัติการของผู้ป่วยรายนี้ ได้แก่ ปวดกระดูก (bone pain), ไตวาย (renal failure), โลหิตจาง (anemia), แคลเซียมในเลือดสูง (hypercalcemia), และโปรตีนโกลบูลินในเลือดสูง (hyperglobulinemia) ร่วมกับการพบ rouleaux formation (เม็ดเลือดแดงเรียงซ้อนกันเป็นตั้ง) ใน blood smear เป็นลักษณะที่คลาสสิกของโรค Multiple Myeloma ซึ่งเป็นมะเร็งของ plasma cell ในไขกระดูก ภาวะโลหิตจางในผู้ป่วย MM เกิดได้จากหลายกลไก เช่น การที่เซลล์มะเร็งเข้าไปแทนที่เซลล์ปกติในไขกระดูก (bone marrow infiltration)",
            "state": false
        },
        {
            "problem": "59. 26-years old woman presented hypermenorrhea with intermittent bleeding gum and epistaxis for 2 months. PE: petechial @ extremity (and possibly ecchymosis), no underlying disease what is most likely hemostasis defect ?",
            "img": "",
            "choices": "Thrombocytopenia///Platelet dysfunction///Hyperfibrinolysis///Clotting factor deficiency///Clotting factor inhibitors",
            "answer": "Thrombocytopenia",
            "select": "",
            "explain": "ผู้ป่วยมีอาการเลือดออกผิดปกติในหลายตำแหน่ง โดยเป็นลักษณะของเลือดออกตามเยื่อบุ (bleeding gum, epistaxis), ประจำเดือนมามาก (hypermenorrhea) และพบจุดเลือดออกใต้ผิวหนัง (petechiae) ซึ่งอาการเหล่านี้เป็นลักษณะเด่นของความผิดปกติในระบบ primary hemostasis ซึ่งเกี่ยวข้องกับเกล็ดเลือด สาเหตุที่พบบ่อยที่สุดของภาวะนี้คือภาวะเกล็ดเลือดต่ำ (Thrombocytopenia) หรือการที่เกล็ดเลือดทำงานผิดปกติ (Platelet dysfunction) แต่ภาวะเกล็ดเลือดต่ำเป็นสาเหตุที่พบได้บ่อยกว่า",
            "state": false
        },
        {
            "problem": "60. Patient have pregnancy lost for 3 time. Have venous thrombosis , non familial history of thrombophilia, what is the diagnosis?",
            "img": "",
            "choices": "Antiphospholipid syndrome///Antithrombin deficiency///Protein C deficiency///DIC///Fibrinolysis deficiency",
            "answer": "Antiphospholipid syndrome",
            "select": "",
            "explain": "การมีประวัติแท้งซ้ำซ้อน (recurrent pregnancy loss) ร่วมกับภาวะลิ่มเลือดอุดตันในหลอดเลือด (venous thrombosis) โดยที่ไม่มีประวัติครอบครัวเป็นโรคเลือดแข็งตัวง่าย เป็นลักษณะสำคัญของ Antiphospholipid Syndrome (APS) ซึ่งเป็นโรคภูมิต้านตนเองที่ร่างกายสร้างแอนติบอดีต่อฟอสโฟไลปิด ทำให้เกิดภาวะเลือดแข็งตัวง่ายผิดปกติ",
            "state": false
        },
        {
            "problem": "61. A 22-year-old male patient present with chronic anemia and moderate pale, mild jaundice. He also has premature graying hair. Liver and spleen are impalpable. He has a history of gastrectomy. Which of the following is the most related to his symptoms.?",
            "img": "",
            "choices": "Megaloblastic anemia///Autoimmune hemolytic anemia///Iron deficiency anemia///Thalassemia///Sideroblastic anemia",
            "answer": "Megaloblastic anemia",
            "select": "",
            "explain": "ผู้ป่วยมีประวัติผ่าตัดกระเพาะอาหาร (gastrectomy) ซึ่งทำให้ขาด intrinsic factor ที่จำเป็นต่อการดูดซึม Vitamin B12 การขาด Vitamin B12 จะนำไปสู่ภาวะโลหิตจางชนิด Megaloblastic anemia ซึ่งมีลักษณะของ ineffective erythropoiesis ทำให้เซลล์เม็ดเลือดแดงตัวอ่อนตายในไขกระดูก ส่งผลให้มีอาการโลหิตจาง (pale) และดีซ่านเล็กน้อย (mild jaundice) จากการมี indirect bilirubin สูงขึ้นได้ อาการผมหงอกก่อนวัย (premature graying hair) ก็เป็นลักษณะหนึ่งที่พบได้ในภาวะขาด Vitamin B12",
            "state": false
        },
        {
            "problem": "62. A 20 year old man presented with intermittent anemia and mild jaundice. Symptom usually occurred after infection or severe stress. PE: moderate pale with mild jaundice, spleen and liver are impalpable. The younger brother of his mother also has these symptoms. What is the diagnosis?",
            "img": "",
            "choices": "AIHA///MAHA///G6PD deficiency with acute hemolysis///PNH///Thalassemia",
            "answer": "G6PD deficiency with acute hemolysis",
            "select": "",
            "explain": "ผู้ป่วยมีอาการของภาวะเม็ดเลือดแดงแตกเฉียบพลัน (anemia, jaundice) เป็นๆ หายๆ โดยมีอาการกำเริบเมื่อมีการติดเชื้อหรือความเครียด (infection or severe stress) ซึ่งเป็นตัวกระตุ้น (trigger) ที่สำคัญ ประวัติที่ญาติฝ่ายแม่ (younger brother of his mother) มีอาการคล้ายกัน บ่งชี้ถึงการถ่ายทอดทางพันธุกรรมแบบ X-linked recessive ซึ่งทั้งหมดนี้เป็นลักษณะคลาสสิกของโรคพร่องเอนไซม์ G6PD (G6PD deficiency)",
            "state": false
        },
        {
            "problem": "63. A man came to hospital with abdominal pain in right upper quadrant for 3 months. PE showed palpable spleen and liver. Superficial vein dilated, ascites, parotid gland enlargement with spider nevi on abdominal chest wall. What is the cause of a patient's splenomegaly?",
            "img": "",
            "choices": "Lymphoma///Liver cirrhosis///Metastatic cancer///Splenic vein thrombosis///Myelofibrosis",
            "answer": "Liver cirrhosis",
            "select": "",
            "explain": "ผู้ป่วยมีอาการแสดงของโรคตับแข็ง (Liver cirrhosis) อย่างชัดเจนหลายอย่าง ได้แก่ ตับและม้ามโต (palpable spleen and liver), ท้องมาน (ascites), หลอดเลือดดำหน้าท้องขยาย (superficial vein dilated), spider nevi, และต่อมน้ำลายพาโรติดโต (parotid gland enlargement) ภาวะม้ามโต (splenomegaly) ในผู้ป่วยตับแข็งเกิดจากภาวะความดันในหลอดเลือดพอร์ทัลสูง (portal hypertension) ซึ่งทำให้เลือดไหลย้อนกลับเข้าไปคั่งในม้าม ส่งผลให้ม้ามมีขนาดใหญ่ขึ้น",
            "state": false
        },
        {
            "problem": "65. A 45-year woman presented with prolonged fever and significant weight loss 5 kg within 3. months. Physical examination showed generalized lymphadenopathy 2-5 cm. in size. Liver was palpated 4 fb below right costal margin with liver span 18 cm. Spleen was also palpated 4 fb below left costal margin. She has neither skin lesion nor arthritis. What is the most likely cause of lymphadenopathy in this patient?",
            "img": "",
            "choices": "Metastatic cancer///Drug induced lymphadenopathy///Systemic infection such as Rickettsiosis///Lymphoma///Systemic Lupus Erythematosus",
            "answer": "Lymphoma",
            "select": "",
            "explain": "ผู้ป่วยมีอาการ B symptoms ซึ่งเป็นอาการสำคัญที่พบในมะเร็งต่อมน้ำเหลือง (Lymphoma) ได้แก่ ไข้เรื้อรัง (prolonged fever), น้ำหนักลดโดยไม่ทราบสาเหตุ (significant weight loss) ร่วมกับการตรวจร่างกายพบต่อมน้ำเหลืองโตทั่วตัว (generalized lymphadenopathy), ตับโต (hepatomegaly), และม้ามโต (splenomegaly) โดยไม่มีอาการอื่นที่บ่งชี้ถึงโรคติดเชื้อหรือโรคภูมิต้านตนเองที่ชัดเจน ทำให้ Lymphoma เป็นการวินิจฉัยที่น่าจะเป็นไปได้มากที่สุด",
            "state": false
        }
    ],
    "HL50MCQ2": [
        {
            "problem": "1. A 43-year-old male presented with low grade fever, cough and dyspnea. Blood sample showed 20% eosinophil. He was diagnosed as filariasis with Tropical pulmonary eosinophilia (TPE) by thick blood film examination. What is the cause of the presence of symptoms in the patient?",
            "img": "",
            "choices": "Immune response to microfilaria///Immune response to first stage larva///Immune response to second stage larva///Immune response to third stage larva///Immune response to adult stage",
            "answer": "Immune response to microfilaria",
            "select": "",
            "explain": "Tropical pulmonary eosinophilia (TPE) หรือเรียกว่า occult filariasis เป็นภาวะที่ร่างกายมีปฏิกิริยาภูมิไวเกิน (hypersensitivity reaction) ต่อแอนติเจนของพยาธิไมโครฟิลาเรีย (microfilariae) โดยเฉพาะของ Wuchereria bancrofti หรือ Brugia malayi พยาธิเหล่านี้จะถูกดักจับและทำลายในปอด ทำให้ไม่สามารถตรวจพบในกระแสเลือดได้ (amicrofilaremia) แต่จะกระตุ้นการตอบสนองทางภูมิคุ้มกันอย่างรุนแรง ทำให้เกิดการหลั่งสารจาก eosinophils และเซลล์อื่นๆ ส่งผลให้มีอาการทางระบบทางเดินหายใจ เช่น ไอ หอบเหนื่อย และมีภาวะ eosinophilia ในเลือดสูงอย่างชัดเจน",
            "state": false
        },
        {
            "problem": "5. A 34-year-old male presented with 3 weeks history of dyspnea on exertion, fatigue and a dry cough. A blood film revealed malaria-like organisms. He was diagnosed with babesiasis. What is the vector that cause disease?",
            "img": "",
            "choices": "House dust mice///Mosquito///Hard tick///Stable fly///Chigger",
            "answer": "Hard tick",
            "select": "",
            "explain": "โรค Babesiosis เป็นโรคติดเชื้อโปรโตซัวในเม็ดเลือดแดงสกุล Babesia ซึ่งมีลักษณะคล้ายกับเชื้อมาลาเรียในฟิล์มเลือด โรคนี้เป็นโรคที่ติดต่อจากสัตว์สู่คน (zoonosis) โดยมีพาหะนำโรคที่สำคัญคือ เห็บแข็ง (Hard tick) ในสกุล Ixodes โดยเฉพาะ Ixodes scapularis ซึ่งเป็นเห็บชนิดเดียวกับที่นำโรค Lyme disease",
            "state": false
        },
        {
            "problem": "8. 22 year-old female fever chill malaise, rapid diagnostic test : Plasmodium falciparum. Which of the following is specific to Plasmodium falciparum ?",
            "img": "",
            "choices": "negative LDH///positive HRP-2///positive LDH///negative HRP-2///positive aldolase",
            "answer": "positive HRP-2",
            "select": "",
            "explain": "ชุดตรวจเร็วมาลาเรีย (Malaria Rapid Diagnostic Tests, RDTs) ใช้หลักการตรวจหาแอนติเจนของเชื้อ ในปัจจุบันมีแอนติเจนที่ใช้หลักๆ คือ 1. Histidine-rich protein 2 (HRP-2) ซึ่งเป็นโปรตีนที่สร้างโดยเชื้อ Plasmodium falciparum เท่านั้น จึงมีความจำเพาะต่อเชื้อชนิดนี้ 2. Plasmodium lactate dehydrogenase (pLDH) และ aldolase เป็นเอนไซม์ที่พบในเชื้อ Plasmodium ทุกสายพันธุ์ที่ก่อโรคในคน จึงใช้เป็นตัวตรวจจับเชื้อมาลาเรียโดยรวม (pan-malarial antigen) ดังนั้นการให้ผลบวกต่อ HRP-2 จึงบ่งชี้จำเพาะถึงการติดเชื้อ P. falciparum",
            "state": false
        },
        {
            "problem": "11. Patient with sore throat and fever. The tests are Anti-CMV IgG positive, Anti EBV IgM positive, What can give the definitive diagnosis?",
            "img": "",
            "choices": "Polynucleosis///Swelling of posterior of pharyngeal wall///Leukopenia///Atypical lymphocytes 1%///Heterophile antibody positive",
            "answer": "Heterophile antibody positive",
            "select": "",
            "explain": "ผลเลือด Anti-EBV IgM positive บ่งชี้ว่ามีการติดเชื้อ Epstein-Barr virus (EBV) แบบเฉียบพลัน (acute infection) ซึ่งเป็นสาเหตุของโรค infectious mononucleosis การตรวจที่จำเพาะเพื่อยืนยันการวินิจฉัยนี้คือ Heterophile antibody test (เช่น Monospot test) ซึ่งจะให้ผลบวกในผู้ป่วยส่วนใหญ่ ส่วน Anti-CMV IgG positive บอกถึงการติดเชื้อ Cytomegalovirus ในอดีตเท่านั้น ไม่เกี่ยวข้องกับอาการปัจจุบัน อาการอื่นๆ ที่ให้มาเป็นอาการที่ไม่จำเพาะ",
            "state": false
        },
        {
            "problem": "12. 55 years old female present with malaise fever, lymphadenopathy, hepatosplenomegaly. The blood smear has shown hyperlobulated lymphocytes. What is the most likely diagnosis?",
            "img": "",
            "choices": "Acute lymphocytic leukemia///Chronic lymphocytic leukemia///burkitt lymphoma///Adult T cell lymphoma///Acute promyelocytic leukemia",
            "answer": "Adult T cell lymphoma",
            "select": "",
            "explain": "ลักษณะสำคัญที่พบในฟิล์มเลือดคือ hyperlobulated lymphocytes หรือที่เรียกว่า 'flower cells' ซึ่งเป็นลักษณะทางสัณฐานวิทยาที่จำเพาะ (pathognomonic) ของเซลล์มะเร็งในโรค Adult T-cell Leukemia/Lymphoma (ATLL) ซึ่งเป็นมะเร็งของ mature T-lymphocyte ที่มีความสัมพันธ์กับการติดเชื้อไวรัส Human T-lymphotropic virus type 1 (HTLV-1) อาการแสดงทางคลินิกที่ให้มาก็เข้าได้กับโรคนี้",
            "state": false
        },
        {
            "problem": "15. Patient have epistaxis nasopharyngeal carcinoma, what is the characteristics of this virus?",
            "img": "",
            "choices": "Infected T-cell///Infected B-cell///Infected epithelial cells///Negative IgM///Negative IgG",
            "answer": "Infected epithelial cells",
            "select": "",
            "explain": "มะเร็งโพรงหลังจมูก (Nasopharyngeal carcinoma - NPC) มีความสัมพันธ์อย่างยิ่งกับการติดเชื้อ Epstein-Barr virus (EBV) แม้ว่าเป้าหมายหลักของเชื้อ EBV คือ B-lymphocytes แต่เชื้อไวรัสนี้สามารถเข้าไปติดเชื้อแบบแฝง (latent infection) ในเซลล์เยื่อบุผิว (epithelial cells) ของ nasopharynx ได้ การแสดงออกของโปรตีนของไวรัสบางตัว เช่น LMP1 จะกระตุ้นให้เซลล์เยื่อบุผิวเกิดการแบ่งตัวผิดปกติและกลายเป็นเซลล์มะเร็งในที่สุด",
            "state": false
        },
        {
            "problem": "16. Patient came with fever and arthralgia for 3 days. Hct 39% wbc 5,300 cell/mm3 plt 250,000 Blood positive for Chikungunya RNA, anti-dengue igG,anti-zika igG. What is the diagnosis?",
            "img": "",
            "choices": "DHF with zika virus co-infection///Dengue fever with zika virus co-infection///Chikungunya Acute arthritis Chikungunya with dengue virus and zika virus co-infection///Chikungunya///Concurrent infection",
            "answer": "Chikungunya",
            "select": "",
            "explain": "การแปลผลห้องปฏิบัติการเป็นสิ่งสำคัญในการวินิจฉัย การตรวจพบ Chikungunya RNA ให้ผลบวกเป็นการยืนยันว่าผู้ป่วยมีการติดเชื้อไวรัสชิคุนกุนยาแบบเฉียบพลัน (acute infection) ส่วนการตรวจพบ anti-dengue IgG และ anti-zika IgG ที่ให้ผลบวก บ่งชี้ว่าผู้ป่วยเคยมีการติดเชื้อไวรัสเดงกี่และซิกาในอดีต ไม่ได้หมายถึงการติดเชื้อร่วมในปัจจุบัน ดังนั้นการวินิจฉัยหลักของผู้ป่วยรายนี้คือโรคชิคุนกุนยา",
            "state": false
        },
        {
            "problem": "18. A 10 years old man came with 5 days fever. Vital sign BT 39 with others were WNL Hct.34% WBC 4000 Platelet 120,000 Anti dengue IgM negative, Anti dengue IgG negative, Dengue NS1 negative. What is the diagnosis?",
            "img": "",
            "choices": "Dengue hemorrhagic fever///Dengue shock syndrome///Dengue fever with warning sign///Secondary Dengue virus infection///Dengue fever",
            "answer": "Dengue fever",
            "select": "",
            "explain": "แม้ว่าลักษณะทางคลินิกและผลเลือด CBC (leukopenia, thrombocytopenia) จะทำให้สงสัยโรคไข้เลือดออก แต่ผลการตรวจทางห้องปฏิบัติการที่จำเพาะต่อเชื้อเดงกี่ (NS1, IgM, IgG) ทั้งหมดให้ผลเป็นลบ ซึ่งทำให้การวินิจฉัยโรคไข้เลือดออก ณ ตอนนี้เป็นไปได้น้อยมาก อย่างไรก็ตาม หากพิจารณาจากตัวเลือกที่ให้มาซึ่งล้วนแต่เป็นโรคที่เกี่ยวกับเดงกี่ 'Dengue fever' เป็นการวินิจฉัยที่ครอบคลุมและมีความรุนแรงน้อยที่สุด ในทางปฏิบัติควรหาสาเหตุอื่นของไข้ต่อไป แต่ในบริบทของข้อสอบนี้ อาจต้องการให้เลือกคำตอบที่ทั่วไปที่สุดเมื่อผล lab ไม่ยืนยัน",
            "state": false
        },
        {
            "problem": "19. 16 years old man presented with fever headache myalgia arthralgia and petechiae for 5 days Chikungunya viral rna : neg Anti dengue IgG : neg Anti dengue IgM : positive Dengue NS1: neg Anti zika IgG :positive Anti zika IgM: neg What is the characteristic of causative virus?",
            "img": "",
            "choices": "1 genotype///Latent infection///DNA genome///4 serotypes///non-envelope",
            "answer": "4 serotypes",
            "select": "",
            "explain": "จากผลตรวจ Anti-dengue IgM positive และ IgG negative บ่งชี้ว่าเป็นการติดเชื้อเดงกี่ครั้งแรกแบบเฉียบพลัน (acute primary dengue infection) ดังนั้นเชื้อก่อโรคคือไวรัสเดงกี่ ซึ่งเป็นเชื้อไวรัสในวงศ์ Flaviviridae มีลักษณะที่สำคัญคือเป็น single-stranded RNA virus, มี envelope และมี 4 ซีโรไทป์ (serotypes) ที่แตกต่างกัน ได้แก่ DENV-1, DENV-2, DENV-3, และ DENV-4 การติดเชื้อซีโรไทป์หนึ่งจะสร้างภูมิคุ้มกันต่อซีโรไทป์นั้นตลอดชีวิต แต่มีภูมิคุ้มกันข้ามต่อซีโรไทป์อื่นเพียงชั่วคราว",
            "state": false
        },
        {
            "problem": "20. Pregnant woman came with fever, headache, myalgia, and arthralgia for 5 days. Doctor awared of arbovirus that can cause neurological defect to the fetus. What is the most appropriate test to rule out this arbovirus?",
            "img": "",
            "choices": "Anti-Dengue IgG/IgM///RDengue virus RNA///Chikungunya viral RNA///Anti-Zika IgG///Zika Viral RNA",
            "answer": "Zika Viral RNA",
            "select": "",
            "explain": "Arbovirus ที่มีความสัมพันธ์อย่างชัดเจนกับการก่อให้เกิดความผิดปกติทางระบบประสาทของทารกในครรภ์ (fetal neurological defects) โดยเฉพาะภาวะศีรษะเล็ก (microcephaly) คือเชื้อไวรัสซิกา (Zika virus) ในการวินิจฉัยการติดเชื้อแบบเฉียบพลัน โดยเฉพาะในหญิงตั้งครรภ์ซึ่งต้องการความรวดเร็วและแม่นยำ การตรวจหาสารพันธุกรรมของไวรัส (Zika Viral RNA) ด้วยวิธี Real-time PCR (RT-PCR) จากเลือดหรือปัสสาวะ เป็นวิธีที่เหมาะสมและมีความไวสูงสุด",
            "state": false
        },
        {
            "problem": "25. Which of the following is correct match of ARV drug and its common adverse effect?",
            "img": "",
            "choices": "Lopinavir – SJS-TEN///Efavirenz - bone marrow suppression///Rilpivirine – Hepatotoxicity///TAF - Lipodystrophy///ATZ - drug hypersensitivity",
            "answer": "Rilpivirine – Hepatotoxicity",
            "select": "",
            "explain": "วิเคราะห์ từng choice: A) Lopinavir (PI) ผลข้างเคียงหลักคือ GI upset. B) Efavirenz (NNRTI) ผลข้างเคียงเด่นคือ CNS side effects (ฝันร้าย) ส่วน bone marrow suppression เป็นของ Zidovudine (AZT) C) Rilpivirine (NNRTI) อาจทำให้เกิด hepatotoxicity ได้ โดยเฉพาะในผู้ป่วยที่ติดเชื้อไวรัสตับอักเสบบีหรือซีร่วมด้วย D) TAF (NRTI) มีข้อดีคือมีผลต่อไขมัน (Lipodystrophy) น้อยกว่ายาตัวเก่าๆ E) ATZ ถ้าหมายถึง Zidovudine ผลข้างเคียงหลักคือ bone marrow suppression ถ้าหมายถึง Atazanavir (PI) ผลข้างเคียงเด่นคือ hyperbilirubinemia. ดังนั้น Rilpivirine – Hepatotoxicity เป็นคู่ที่มีความเป็นไปได้และถูกต้อง",
            "state": false
        },
        {
            "problem": "31. Which drugs used in malarial treatment is a contraindicated in G-6-PD deficiency patient?",
            "img": "",
            "choices": "Chloroquine///Primaquine///Piperaquine///Quinidine///Mefloquine",
            "answer": "Primaquine",
            "select": "",
            "explain": "ภาวะพร่องเอนไซม์ G6PD (G-6-PD deficiency) ทำให้เม็ดเลือดแดงไม่สามารถทนต่อภาวะ oxidative stress ได้ ยา Primaquine และเมตาบอไลต์ของมันเป็นสารที่ก่อให้เกิด oxidative stress อย่างรุนแรง เมื่อผู้ป่วย G6PD ได้รับยานี้ จะทำให้เม็ดเลือดแดงแตกอย่างเฉียบพลัน (acute hemolysis) ซึ่งอาจรุนแรงถึงขั้นเสียชีวิตได้ ดังนั้น Primaquine จึงเป็นยาห้ามใช้ (contraindicated) ในผู้ป่วย G6PD หรือต้องใช้ด้วยความระมัดระวังอย่างยิ่งหลังตรวจยืนยันระดับเอนไซม์",
            "state": false
        },
        {
            "problem": "32. Srisaket patient is infected by Plasmodium vivax, which of the following is the first line of treating.",
            "img": "",
            "choices": "DHA-PIP + Primaquine///Artesunate + pyronaridine///Chloroquine + Primaquine///Artesunate IV",
                        "answer": "Chloroquine + Primaquine",
                        "select": "",
            "explain": "การรักษามาลาเรียที่เกิดจากเชื้อ Plasmodium vivax ในพื้นที่ที่ยังไม่มีรายงานการดื้อต่อยา Chloroquine (เช่น ประเทศไทย) ยังคงใช้ Chloroquine เป็นยาหลักในการรักษาเพื่อกำจัดเชื้อในเม็ดเลือดแดง (blood schizonticide) ร่วมกับ Primaquine เพื่อกำจัดเชื้อในตับ (hypnozoite) ซึ่งเป็นสาเหตุของการกลับมาเป็นซ้ำ (relapse) ของโรค การใช้ยาทั้งสองร่วมกันจึงเป็นมาตรฐานการรักษาที่เหมาะสมที่สุดสำหรับ P. vivax",
            "state": false
        },
        {
            "problem": "33. What is the role of antimalarial Primaquine for Plasmodium falciparum treatment?",
            "img": "",
            "choices": "Gametocytocidal สำหรับ Pf///Tissue schizonticide and gametocytocidal///Blood schizonticide///No activity///Only for vivax",
            "answer": "Gametocytocidal สำหรับ Pf",
            "select": "",
            "explain": "บทบาทของยา Primaquine ในการรักษามาลาเรียแต่ละชนิดจะแตกต่างกัน ใน P. vivax/ovale ใช้เพื่อกำจัด hypnozoite ในตับ แต่สำหรับ P. falciparum ยา Primaquine มีฤทธิ์ต่อเชื้อในเม็ดเลือดแดงน้อยมาก บทบาทสำคัญของมันคือใช้ในลักษณะ single dose เพื่อฆ่าเชื้อมาลาเรียระยะติดต่อทางเพศ (gametocyte) ซึ่งเป็นระยะที่สามารถแพร่เชื้อไปยังยุงได้ การให้ยา Primaquine จึงเป็นการตัดวงจรการแพร่ระบาดของโรค (transmission blocking) ซึ่งมีความสำคัญในแง่ของการควบคุมโรค",
            "state": false
        },
        {
            "problem": "35. A 70 years old man has fever, dyspnea, and hypotension. Admitted ICU and treated with aspirated pneumonia. Which of the following indicate adequate resuscitation?",
            "img": "",
            "choices": "Tachycardia///Lactate clearance///Fever down///Respiratory alkalosis///Hyperglycemia",
            "answer": "Lactate clearance",
            "select": "",
            "explain": "ผู้ป่วยน่าจะอยู่ในภาวะ Sepsis หรือ Septic shock ซึ่งเป็นภาวะที่ร่างกายมี tissue hypoperfusion (เลือดไปเลี้ยงเนื้อเยื่อไม่เพียงพอ) ทำให้เซลล์ต้องเผาผลาญแบบไม่ใช้ออกซิเจนและสร้างกรดแลคติก (lactic acid) ขึ้นมา การช่วยฟื้นคืนชีพ (resuscitation) ที่เพียงพอ เช่น การให้สารน้ำหรือยาเพิ่มความดันโลหิต จะช่วยให้เลือดกลับไปเลี้ยงเนื้อเยื่อได้ดีขึ้น ทำให้ระดับ lactate ในเลือดลดลง ดังนั้นการที่ lactate ลดลง (Lactate clearance) จึงเป็นตัวชี้วัดที่สำคัญว่าการ resuscitation นั้นได้ผลดี",
            "state": false
        },
        {
            "problem": "37. An 18 years old man engages in one night stand sexual activity. 1 week later came with headache & malaise, the doctor suspected acute retroviral infection. What should be found in this patient?",
            "img": "",
            "choices": "low CD4+///p24 antigen positive///high HIV RNA load///Anti HIV positive///low CD8+",
            "answer": "p24 antigen positive",
            "select": "",
            "explain": "Acute retroviral syndrome (ARS) คือกลุ่มอาการที่เกิดขึ้นในช่วง 1-4 สัปดาห์หลังติดเชื้อ HIV ซึ่งเป็นช่วงที่ไวรัสกำลังแบ่งตัวอย่างมหาศาล ในระยะนี้ร่างกายยังไม่ทันสร้างแอนติบอดีต่อเชื้อ (Anti-HIV negative) ซึ่งเรียกว่า window period แต่เราสามารถตรวจพบการติดเชื้อได้โดยการตรวจหาองค์ประกอบของตัวไวรัสโดยตรง ได้แก่ 1. p24 antigen ซึ่งเป็นโปรตีนแกนของไวรัส หรือ 2. HIV RNA (viral load) ซึ่งเป็นสารพันธุกรรมของไวรัส ทั้งสองอย่างนี้จะให้ผลบวกได้ก่อนที่แอนติบอดีจะให้ผลบวก (ข้อ B และ C ถูก แต่ p24 เป็น marker ที่นิยมใช้ในชุดตรวจ screening รุ่นที่ 4)",
            "state": false
        },
        {
            "problem": "39. A 25 years old man undergoing antiretroviral therapy came for regular check-up. His viral load is less than 50/mm3. What can be interpreted?",
            "img": "",
            "choices": "No viral replication///No cytotoxic T-cell response///No HIV co-receptor///Secretion is free of virus///No RNA viral load",
            "answer": "No viral replication",
            "select": "",
            "explain": "ระดับ viral load ที่ต่ำกว่า 50 copies/mm3 ถือว่าอยู่ในระดับที่ 'ตรวจไม่พบ' หรือ 'undetectable' ซึ่งหมายความว่ายาต้านไวรัส (antiretroviral therapy) สามารถกดการแบ่งตัวของเชื้อ HIV ได้อย่างมีประสิทธิภาพสูงสุด จนมีปริมาณไวรัสในเลือดน้อยมากจนเครื่องมือมาตรฐานตรวจไม่เจอ ไม่ได้หมายความว่าเชื้อหมดไปจากร่างกาย (not cured) แต่ในทางปฏิบัติหมายถึงการแบ่งตัวของไวรัสถูกควบคุมไว้ได้ ซึ่งเป็นเป้าหมายหลักของการรักษา",
            "state": false
        },
        {
            "problem": "40. A man with anti-HIV positive, Cd4+ is 1000+.the doctor prescribed three regimens of ARV drug. What is the most benefit of this treatment?",
            "img": "",
            "choices": "Preserve immune cell///Decrease HIV mutation///Decrease opportunistic infection///Short virus life span///Restoring HIV reservoir",
            "answer": "Preserve immune cell",
            "select": "",
            "explain": "ตามแนวทางการรักษาปัจจุบัน แนะนำให้เริ่มยาต้านไวรัส (ART) ในผู้ติดเชื้อ HIV ทุกรายโดยไม่คำนึงถึงระดับ CD4 (Treat All) แม้ว่าผู้ป่วยรายนี้จะมีระดับ CD4 ที่สูงมาก (>1000) ซึ่งบ่งชี้ว่าระบบภูมิคุ้มกันยังดีอยู่ แต่การที่ยังมีการแบ่งตัวของไวรัสจะทำให้เกิดการอักเสบเรื้อรังและทำลายเซลล์ CD4 ไปเรื่อยๆ ประโยชน์ที่สำคัญที่สุดของการเริ่มการรักษาคือการหยุดยั้งกระบวนการทำลายนี้ และรักษาระดับเซลล์ภูมิคุ้มกัน (immune cell) ที่มีอยู่ให้คงอยู่ต่อไปในระยะยาว",
            "state": false
        },
        {
            "problem": "44. คนไข้มี black spot at inguinal area ถาม pathogenesis (เค้าให้โจทย์มาแค่นี้อะ)",
            "img": "",
            "choices": "Direct invasion///Vascular injury///Necrosis///Inflammation///Infection",
            "answer": "Vascular injury",
            "select": "",
            "explain": "คำว่า 'black spot' ในทางการแพทย์อาจหมายถึง 'eschar' ซึ่งเป็นแผลเนื้อตายสีดำมีสะเก็ด eschar เป็นรอยโรคที่จำเพาะของการติดเชื้อในกลุ่ม Rickettsia บางชนิด เช่น Scrub typhus (เกิดจากตัวไรอ่อนกัด) พยาธิกำเนิดของ eschar เกิดจากการที่เชื้อโรคเข้าสู่ผิวหนังและมีการติดเชื้อที่เซลล์บุผนังหลอดเลือด (endothelial cells) ทำให้เกิดการอักเสบของหลอดเลือด (vasculitis) และเกิดลิ่มเลือดอุดตัน (thrombosis) ส่งผลให้เนื้อเยื่อบริเวณนั้นขาดเลือดไปเลี้ยงและเกิดเป็นเนื้อตาย (necrosis) สีดำในที่สุด ดังนั้นกลไกหลักคือ Vascular injury",
            "state": false
        },
        {
            "problem": "45. A 63-year-old male patient has been diagnosed with chronic kidney disease and pure red cell anemia. He is currently undergoing hemodialysis and presents increasing fatigue and dyspnea on exertion Vital signs : BP 110/70 mmHg PR 110/min RR 70/min O2 saturation : 98% on room air CBC: Hb 8.1 g/L Hct 25% platelet 200,000 cells/uL wbc 6,000 cells/uL He is already receiving Erythropoiesis stimulating agent(EPO)but symptoms persist. What is the most proper management/blood component in this patient?",
            "img": "",
            "choices": "Increase EPO dosage///Leukocyte reduced packed red blood cell///Fresh frozen plasma///No transfusion is indicated,continue with current EPO dosage///Cryoprecipitate",
            "answer": "Leukocyte reduced packed red blood cell",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะโลหิตจางที่มีอาการ (symptomatic anemia) คือ อ่อนเพลียและเหนื่อยง่าย โดยมีระดับ Hemoglobin ที่ 8.1 g/L แม้ว่าจะได้รับยา EPO อยู่แล้ว เป้าหมายเร่งด่วนคือการบรรเทาอาการ ซึ่งทำได้โดยการให้เลือดเพื่อเพิ่มความสามารถในการขนส่งออกซิเจน ส่วนประกอบของเลือดที่เหมาะสมคือ Packed Red Cells (PRBCs) และเนื่องจากผู้ป่วยโรคไตอาจต้องรับเลือดบ่อยครั้ง การให้เลือดที่เป็น Leukocyte reduced (ผ่านการกรองเม็ดเลือดขาวออก) จะช่วยลดความเสี่ยงของปฏิกิริยาไข้ (FNHTR) และการสร้างแอนติบอดีต่อ HLA ได้",
            "state": false
        },
        {
            "problem": "46. A 24 year-old female is in labor and starts to hemorrhage excessively. She has no coagulation disorder. CBC: Hb 6 g/dL, Hct 18 %, WBC 16000 ,platelet 100000 cell/mm3 Coagulogram :PT, aPTT prolonged Fibrinogen 93 mg/dL (200-400) What is the most appropriate blood component for transfusion in this patient?",
            "img": "",
            "choices": "Fresh frozen plasma///Pack red cell+Fresh frozen plasma+cryoprecipitate///Pack red cell+Platelet///Cryoprecipitate///Pack red cell",
            "answer": "Pack red cell+Fresh frozen plasma+cryoprecipitate",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะตกเลือดหลังคลอดอย่างรุนแรง (massive postpartum hemorrhage) จนเกิดภาวะ consumptive coagulopathy หรือ DIC ผลเลือดแสดงภาวะโลหิตจางรุนแรง (Hb 6), การขาดปัจจัยการแข็งตัวของเลือด (prolonged PT, aPTT) และที่สำคัญคือมีระดับ fibrinogen ต่ำมาก (93 mg/dL) การรักษาจึงต้องให้ส่วนประกอบทดแทนทั้งหมดที่ขาดไป ได้แก่ 1. Pack red cell เพื่อแก้ไขภาวะซีดและเพิ่ม oxygen-carrying capacity 2. Fresh frozen plasma (FFP) เพื่อทดแทนปัจจัยการแข็งตัวของเลือดทุกตัว และ 3. Cryoprecipitate ซึ่งเป็นแหล่งของ fibrinogen เข้มข้น เพื่อแก้ไขภาวะ hypofibrinogenemia โดยด่วน",
            "state": false
        },
        {
            "problem": "47. A 70 years old female. She has liver cirrhosis. She is undergoing liver transplant. She has prolonged PT and aPTT. Which of the blood components is the most appropriate for transfusion in this case?",
            "img": "",
            "choices": "Fresh frozen plasma///Cryoprecipitate///Frozen plasma///Single donor platelet///LPRC",
            "answer": "Fresh frozen plasma",
            "select": "",
            "explain": "ภาวะตับแข็ง (liver cirrhosis) ทำให้ตับไม่สามารถสังเคราะห์ปัจจัยการแข็งตัวของเลือด (coagulation factors) ส่วนใหญ่ได้ตามปกติ ส่งผลให้ค่า PT และ aPTT ยาวผิดปกติ การจะแก้ไขภาวะเลือดออกผิดปกติที่เกิดจากการขาดปัจจัยการแข็งตัวของเลือดหลายๆ ตัวพร้อมกัน โดยเฉพาะในผู้ป่วยที่กำลังจะได้รับการผ่าตัดใหญ่ เช่น การปลูกถ่ายตับ ส่วนประกอบของเลือดที่เหมาะสมที่สุดคือ Fresh Frozen Plasma (FFP) เพราะมี coagulation factors ครบทุกชนิด",
            "state": false
        },
        {
            "problem": "48. multiple myeloma patient receive a unit of packed red blood cells , develop FNHTR. Which blood component should be given in the next transfusion in order to avoid FNHTR?",
            "img": "",
            "choices": "Irradiated red blood cells///Leukocyte reduced red blood cells///Packed red blood cells with less incompatible///Washed red blood cells///All of the above",
            "answer": "Leukocyte reduced red blood cells",
            "select": "",
            "explain": "Febrile Non-Hemolytic Transfusion Reaction (FNHTR) เป็นปฏิกิริยาจากการรับเลือดที่พบบ่อย เกิดจากแอนติบอดีของผู้รับทำปฏิกิริยากับเม็ดเลือดขาวของผู้ให้ หรือเกิดจากไซโตไคน์ (cytokines) ที่หลั่งจากเม็ดเลือดขาวระหว่างการเก็บรักษาเลือด วิธีการป้องกันการเกิด FNHTR ในครั้งถัดไปที่มีประสิทธิภาพที่สุดคือการให้เลือดที่ผ่านการกรองเมedเลือดขาวออก (Leukocyte reduced red blood cells)",
            "state": false
        },
        {
            "problem": "50. 30-year-old female type O blood, scheduled for total hip replacement. She receives a unit of packed red cell components during surgery. She developed fever (38.6 degree celcius), chill, back pain shortly after transfusion started. CBC: Hb 6.5 g/dL, WBC 15,000 cells/mm^3, platelets 70,000 cells/mm^3 Coagulation test: prolonged PT, prolonged aPTT, elevated LDH Blood bank examination: DAT positive, repeat cross matching: incompatible What is the most likely diagnosis?",
            "img": "",
            "choices": "Acute hemolytic transfusion reaction(AHTR)///Transfusion-related acute lung injury(TRALI)///Transfusion associated circulatory overload(TACO)///Febrile non hemolytic transfusion reaction(FNHTR)///Allergic transfusion reaction",
            "answer": "Acute hemolytic transfusion reaction(AHTR)",
            "select": "",
            "explain": "อาการแสดงของผู้ป่วย (ไข้ หนาวสั่น ปวดหลัง) ที่เกิดขึ้นทันทีหลังเริ่มให้เลือด เป็นอาการคลาสสิกของ Acute Hemolytic Transfusion Reaction (AHTR) ซึ่งเป็นภาวะฉุกเฉินที่เกิดจากแอนติบอดีของผู้ป่วยจับและทำลายเม็ดเลือดแดงที่ได้รับมา การวินิจฉัยได้รับการยืนยันจากผลตรวจทางห้องปฏิบัติการ คือ Direct Antiglobulin Test (DAT) positive (บ่งชี้ว่ามีแอนติบอดีเคลือบอยู่บนผิวเม็ดเลือดแดง) และผล cross-match ที่ incompatible ซึ่งยืนยันว่ามีปฏิกิริยาระหว่างแอนติบอดีผู้ป่วยกับเลือดผู้ให้",
            "state": false
        },
        {
            "problem": "51. A 35 years old with leukemia scheduled for bone marrow transplant. She received a unit of platelet concentration. DAT : negative Anti-HLA from donor's plasma : positive Chest X ray : diffuse alveolar infiltration with normal heart size. What is the diagnosis?",
            "img": "",
            "choices": "AHTR///TRALI///FNHTR///TACO///Allergic transfusion reaction",
            "answer": "TRALI",
            "select": "",
            "explain": "กลุ่มอาการที่ประกอบด้วยภาวะหายใจล้มเหลวเฉียบพลัน (acute respiratory distress) ภายในไม่กี่ชั่วโมงหลังรับเลือด, ภาพถ่ายรังสีทรวงอกพบ diffuse infiltration, ขนาดหัวใจปกติ (ตัดภาวะ TACO ออกไป), และที่สำคัญคือการตรวจพบ Anti-HLA antibody ในพลาสมาของผู้ให้เลือด เป็นลักษณะที่จำเพาะอย่างยิ่งของภาวะ Transfusion-Related Acute Lung Injury (TRALI) ซึ่งเกิดจากแอนติบอดีของผู้ให้ไปกระตุ้นเม็ดเลือดขาวของผู้รับให้ไปจับกลุ่มที่ปอดและก่อให้เกิดการบาดเจ็บของถุงลม",
            "state": false
        },
        {
            "problem": "52. 62 yo come to hospital with suspected pneumonia. He has had cardiac failure for years. He received PRC and has some condition DAT positive Anti HLA negative. Chest x-ray shows bilateral (bat wing) with fluid effusion. What likely occurred in this patient?",
            "img": "",
            "choices": "AHTR///TRALI///TACO///Anaphylaxis///FNHTR",
            "answer": "TACO",
            "select": "",
            "explain": "ปัจจัยสำคัญในผู้ป่วยรายนี้คือประวัติภาวะหัวใจล้มเหลว (cardiac failure) ซึ่งเป็นปัจจัยเสี่ยงหลักของภาวะน้ำเกินในระบบไหลเวียนโลหิต ภาพถ่ายรังสีทรวงอกที่แสดงลักษณะ 'bat wing' appearance เป็นลักษณะคลาสสิกของภาวะน้ำท่วมปอดจากหัวใจ (cardiogenic pulmonary edema) เมื่ออาการนี้เกิดขึ้นหลังการให้เลือด จึงบ่งชี้ถึงภาวะ Transfusion-Associated Circulatory Overload (TACO) ซึ่งคือการที่ระบบไหลเวียนเลือดของผู้ป่วยไม่สามารถรับปริมาตรของเลือดที่ให้เพิ่มเข้าไปได้",
            "state": false
        },
        {
            "problem": "53. A 55 year old man with hepatic carcinoma is scheduled hepatic resection. He received 5 units of PRC during surgery. He develops fever and chills during the transfusion of the last PRC. Past history : He had a history of fever and chills after receiving PRC Blood bank investigation : Patient blood group A+, all units of PRC blood group A+ DAT : compatible, Anti-HLA : negative, Hemoculture for bact : pending. What is the initially diagnosis?",
            "img": "",
            "choices": "AHTR///FNHTR///TRALI///TACO///Anaphylaxis",
            "answer": "FNHTR",
            "select": "",
            "explain": "ผู้ป่วยมีอาการไข้และหนาวสั่นระหว่างรับเลือด และมีประวัติเคยเกิดอาการเช่นนี้มาก่อน ผลการตรวจไม่พบภาวะเม็ดเลือดแดงแตก (DAT compatible), ไม่พบหลักฐานของ TRALI (Anti-HLA negative) และยังไม่ทราบผลเพาะเชื้อเลือด ดังนั้นการวินิจฉัยที่เป็นไปได้มากที่สุดสำหรับอาการไข้และหนาวสั่นโดยที่ไม่มีหลักฐานของภาวะแทรกซ้อนรุนแรงอื่นๆ คือ Febrile Non-Hemolytic Transfusion Reaction (FNHTR) ซึ่งเป็นปฏิกิริยาที่พบบ่อยที่สุด",
            "state": false
        },
        {
            "problem": "54. A 70 year old woman with liver cirrhosis is scheduled for liver transplantation. She received a unit of FFP. She had urticaria, hypotension and wheezing after she received a transfusion. What is the cause?",
            "img": "",
            "choices": "Anaphylaxis from FFP///AHTR///TACO///TALI///FHTR",
            "answer": "Anaphylaxis from FFP",
            "select": "",
            "explain": "การเกิดอาการหลายระบบพร้อมกันอย่างรวดเร็วหลังรับเลือด ได้แก่ ผื่นลมพิษ (urticaria - ระบบผิวหนัง), ความดันโลหิตต่ำ (hypotension - ระบบหัวใจและหลอดเลือด) และเสียงหายใจวี้ด (wheezing - ระบบทางเดินหายใจ) เป็นอาการแสดงที่จำเพาะของปฏิกิริยาแอนาฟิแล็กซิส (Anaphylactic reaction) ซึ่งเป็นปฏิกิริยาภูมิไวเกินชนิดที่ 1 ที่รุนแรง มักเกิดในผู้ป่วยที่ขาด IgA แต่มี anti-IgA ซึ่งจะไปทำปฏิกิริยากับ IgA ที่มีอยู่ใน FFP",
            "state": false
        },
        {
            "problem": "58. A 22-year-old HIV patient present with weakness and fatigue,nausea, constipation, lymphadenopathy. ... PE : abdominal mass Finding mesenteric lymphoma at Ileo-caecal region. ... Tissue for histopathology : uniform lymphoblastic cell arranged in a starry-night sky pattern. What are the chromosomes translocation that cause the following pathology?",
            "img": "",
            "choices": "t(9;22)///t(8;14)///t(15;17)///t(14;18)///t(11,14)",
            "answer": "t(8;14)",
            "select": "",
            "explain": "ลักษณะทางจุลพยาธิวิทยาแบบ 'starry-night sky' เป็นลักษณะที่จำเพาะของ Burkitt lymphoma ซึ่งเป็นมะเร็งต่อมน้ำเหลืองชนิด B-cell ที่มีความรุนแรงสูง พยาธิกำเนิดหลักของมะเร็งชนิดนี้เกิดจากการทำงานที่ผิดปกติของยีน c-MYC ซึ่งเกิดจากการย้ายที่ของโครโมโซม (translocation) ที่พบบ่อยที่สุดคือ t(8;14) ซึ่งเป็นการย้ายตำแหน่งของยีน c-MYC บนโครโมโซมคู่ที่ 8 ไปอยู่ภายใต้การควบคุมของตัวกระตุ้นยีน immunoglobulin heavy chain บนโครโมโซมคู่ที่ 14 ทำให้มีการแสดงออกของ c-MYC มากเกินไปและเกิดเป็นมะเร็ง",
            "state": false
        },
        {
            "problem": "61. Patient was diagnosed with transient ischemic attack and underlying peptic ulcer. She is using omeprazole. Which of the following drug would have drug-drug interaction?",
            "img": "",
            "choices": "Aspirin///Clopidogrel///Ticagrelor///Prasugrel///Ticlopidine",
            "answer": "Clopidogrel",
            "select": "",
            "explain": "ปฏิกิริยาระหว่างยาที่สำคัญทางคลินิก Clopidogrel เป็นยาในกลุ่ม prodrug ซึ่งหมายความว่าตัวมันเองไม่มีฤทธิ์ แต่ต้องถูกเปลี่ยนให้อยู่ในรูปที่ออกฤทธิ์ (active metabolite) โดยเอนไซม์ที่ตับชื่อ CYP2C19 ก่อน ยา Omeprazole ซึ่งเป็นยาลดกรดกลุ่ม proton pump inhibitor เป็นตัวยับยั้ง (inhibitor) ที่รุนแรงของเอนไซม์ CYP2C19 การใช้ยาสองตัวนี้ร่วมกันจะทำให้ Clopidogrel ไม่สามารถถูกเปลี่ยนไปเป็นยาที่ออกฤทธิ์ได้ ส่งผลให้ฤทธิ์ต้านเกล็ดเลือดลดลงและเพิ่มความเสี่ยงต่อการเกิดลิ่มเลือดอุดตัน",
            "state": false
        },
        {
            "problem": "62. Hashimoto thyroiditis. What is the pathogenesis",
            "img": "",
            "choices": "BCL-2 over expression///BCL-2 under expression///BCL-6 over expression///BCL-1 over expression///BCL-1 under expression",
            "answer": "BCL-2 over expression",
            "select": "",
            "explain": "Hashimoto's thyroiditis เป็นโรคภูมิต้านตนเองที่เกิดจากเซลล์ลิมโฟไซต์ที่ควรจะทำลายสิ่งแปลกปลอมกลับมาทำลายเซลล์ของต่อมไทรอยด์เอง กลไกหนึ่งในการควบคุมเซลล์ลิมโฟไซต์ที่ต่อต้านตัวเอง (autoreactive lymphocyte) คือการกำจัดเซลล์เหล่านี้ผ่านกระบวนการ apoptosis BCL-2 เป็นโปรตีนที่ทำหน้าที่ยับยั้ง apoptosis การที่ autoreactive lymphocyte มีการแสดงออกของ BCL-2 มากผิดปกติ (overexpression) จะทำให้เซลล์เหล่านี้ไม่ตายตามกระบวนการปกติ สามารถมีชีวิตรอด เพิ่มจำนวน และไปทำลายเนื้อเยื่อของต่อมไทรอยด์ได้",
            "state": false
        },
        {
            "problem": "63. What are the differences between Enoxaparin and Heparin?",
            "img": "",
            "choices": "Enoxaparin does not bind to Antithrombin III///Enoxaparin is available in oral form, it is therefore less invasive///Enoxaparin is less likely to induce thrombocytopenia///Enoxaparin is completely reversed by protamine sulfate///Both drugs should be evaluated by aPTT monitoring",
            "answer": "Enoxaparin is less likely to induce thrombocytopenia",
            "select": "",
            "explain": "Enoxaparin คือ Low Molecular Weight Heparin (LMWH) ส่วน Heparin คือ Unfractionated Heparin (UFH) ข้อแตกต่างที่สำคัญคือความเสี่ยงในการเกิดภาวะเกล็ดเลือดต่ำจากเฮพาริน (Heparin-Induced Thrombocytopenia - HIT) ซึ่งเป็นภาวะแทรกซ้อนที่รุนแรง LMWH เช่น Enoxaparin มีโอกาสกระตุ้นให้เกิด HIT ได้น้อยกว่า UFH อย่างมีนัยสำคัญ เนื่องจากขนาดโมเลกุลที่เล็กกว่าและคุณสมบัติการจับกับ platelet factor 4 ที่แตกต่างกัน",
            "state": false
        },
        {
            "problem": "63.2 Which is the result of c-MYC overexpression?",
            "img": "",
            "choices": "Diffuse large B-cell lymphoma///Follicular lymphoma///Burkitt lymphoma.///Chronic myelogenous leukemia",
            "answer": "Burkitt lymphoma.",
            "select": "",
            "explain": "ยีน c-MYC เป็น proto-oncogene ที่สำคัญ ทำหน้าที่ควบคุมวงจรของเซลล์และการแบ่งตัว การแสดงออกที่มากเกินไป (overexpression) ของยีนนี้เป็นกลไกหลักในการเกิดมะเร็งต่อมน้ำเหลืองชนิด Burkitt lymphoma ซึ่งมักเกิดจากการย้ายที่ของโครโมโซม t(8;14) ดังที่ได้กล่าวไว้ในคำถามก่อนหน้า",
            "state": false
        },
        {
            "problem": "64. (There is faggot cells in the blood smear) What is the most likely diagnosis of this patient?",
            "img": "https://drive.google.com/open?id=1GvRSc41XvwZ4hLaNimS8800Ua2fR26ME&usp=drive_copy",
            "choices": "Acute myelogenous leukemia (AML)///Promyelocytic Leukemia with PML-RARA///B-ALL///CML///PMF",
            "answer": "Promyelocytic Leukemia with PML-RARA",
            "select": "",
            "explain": "'Faggot cells' เป็นลักษณะที่พบเห็นได้จำเพาะ (pathognomonic) ของมะเร็งเม็ดเลือดขาวชนิด Acute Promyelocytic Leukemia (APL) ซึ่งเป็นชนิดย่อย (subtype M3) ของ AML เซลล์เหล่านี้คือเซลล์ตัวอ่อนระยะ promyelocyte ที่มีแท่ง Auer rods (ผลึกของเอนไซม์ myeloperoxidase) จำนวนมากอยู่รวมกันเป็นมัดๆ คล้ายมัดฟืน APL มีลักษณะทางพันธุกรรมที่จำเพาะคือการสลับที่ของโครโมโซม t(15;17) ซึ่งสร้างโปรตีนลูกผสม PML-RARA",
            "state": false
        },
        {
            "problem": "67. Male patient is having acute myocardial infarction, which of the following is the drug to lyse blood clot?",
            "img": "",
            "choices": "Heparin///Warfarin///Dabigatran///Alteplase///Imatinib",
            "answer": "Alteplase",
            "select": "",
            "explain": "ยาที่ใช้ในการสลายลิ่มเลือด (lyse blood clot) เรียกว่ายาละลายลิ่มเลือด (thrombolytic/fibrinolytic agents) Alteplase เป็นยาในกลุ่มนี้ ซึ่งเป็น recombinant tissue plasminogen activator (t-PA) ทำหน้าที่เปลี่ยน plasminogen ให้เป็น plasmin ซึ่งเป็นเอนไซม์ที่ไปย่อยสลายโครงข่ายไฟบริน (fibrin) ของลิ่มเลือด ทำให้ลิ่มเลือดสลายไป ส่วน Heparin, Warfarin, Dabigatran เป็นยาต้านการแข็งตัวของเลือด (anticoagulants) ซึ่งป้องกันการเกิดลิ่มเลือดใหม่ แต่ไม่สลายลิ่มเลือดที่เกิดขึ้นแล้ว",
            "state": false
        },
        {
            "problem": "68. Which of the following is TRUE drug MOA?",
            "img": "",
            "choices": "Cilostazol inhibit platelet P2Y19 receptor///Ticagrelor inhibit thrombin receptor///Clopidogrel inhibit PDE///Abciximab irreversible inhibit GP IIb/IIIa receptor///Aspirin reversible inhibit COX1",
            "answer": "Abciximab irreversible inhibit GP IIb/IIIa receptor",
            "select": "",
            "explain": "A) Cilostazol ยับยั้ง PDE3 B) Ticagrelor ยับยั้ง P2Y12 receptor C) Clopidogrel ยับยั้ง P2Y12 receptor E) Aspirin ยับยั้ง COX1 แบบ *irreversible* D) Abciximab เป็นแอนติบอดีที่ไปจับกับ Glycoprotein (GP) IIb/IIIa receptor ซึ่งเป็นขั้นตอนสุดท้ายของการรวมกลุ่มของเกล็ดเลือด การจับนี้มีความแข็งแรงมากและมีผลยับยั้งแบบถาวรตลอดอายุของเกล็ดเลือดนั้นๆ ดังนั้นข้อนี้จึงถูกต้อง",
            "state": false
        },
        {
            "problem": "71. In a patient undergoing chemotherapy, which of the following would be the most effective drug to reduce the duration of severe neutropenia?",
            "img": "",
            "choices": "Filgrastim///Ferrous sulfate///Oprelvekin///Epoetin alfa///Cobalamin",
            "answer": "Filgrastim",
            "select": "",
            "explain": "ภาวะเม็ดเลือดขาวชนิดนิวโทรฟิลต่ำ (neutropenia) เป็นผลข้างเคียงที่พบบ่อยและอันตรายของยาเคมีบำบัด Filgrastim คือยาในกลุ่ม Granulocyte Colony-Stimulating Factor (G-CSF) ซึ่งเป็นฮอร์โมนสังเคราะห์ที่เลียนแบบฮอร์โมนตามธรรมชาติ ทำหน้าที่กระตุ้นไขกระดูกให้สร้างและปล่อยนิวโทรฟิลออกมามากขึ้น การให้ยา Filgrastim หลังเคมีบำบัดจะช่วยลดระยะเวลาและความรุนแรงของภาวะ neutropenia ทำให้ลดความเสี่ยงของการติดเชื้อรุนแรงได้",
            "state": false
        },
        {
            "problem": "74. A patient was diagnosed with renal failure for 5 years. Recently he came to the hospital with fatigue. He is diagnosed with anemia. What is an appropriate treatment?",
            "img": "",
            "choices": "Epoetin alfa///Filgrastim///Sargramostim///Oprelvekin///Iron supplement",
            "answer": "Epoetin alfa",
            "select": "",
            "explain": "ภาวะโลหิตจางเป็นภาวะแทรกซ้อนที่พบบ่อยมากในผู้ป่วยโรคไตวายเรื้อรัง (chronic renal failure) สาเหตุหลักเกิดจากไตที่เสื่อมสภาพไม่สามารถสร้างฮอร์โมน Erythropoietin (EPO) ซึ่งเป็นฮอร์โมนที่กระตุ้นการสร้างเม็ดเลือดแดงได้เพียงพอ การรักษาที่เหมาะสมคือการให้ฮอร์โมนทดแทน ซึ่งก็คือ Epoetin alfa ซึ่งเป็น EPO สังเคราะห์ จะเข้าไปกระตุ้นไขกระดูกให้สร้างเม็ดเลือดแดงเพิ่มขึ้นและแก้ไขภาวะโลหิตจางได้",
            "state": false
        },
        {
            "problem": "75. จงแปลผล ตาราง cell grouping serum grouping and Rh typing",
            "img": "https://drive.google.com/open?id=1SZz24s1E5bVXr9EHbN_utGGTnaG2FtFy&usp=drive_copy",
            "choices": "Blood group O Rh negative///Blood group O///Blood group AB Rh weakly positive D///Blood group AB Rh negative///Blood group O Rh positive",
            "answer": "Blood group AB Rh weakly positive D",
            "select": "",
            "explain": "Cell grouping (forward typing) แสดงว่าเซลล์เม็ดเลือดแดงของผู้ป่วยจับกับแอนติบอดี Anti-A และ Anti-B ได้ทั้งคู่ ซึ่งหมายความว่าผู้ป่วยมีแอนติเจน A และ B บนผิวเซลล์เม็ดเลือดแดง จึงเป็นกรุ๊ปเลือด AB Serum grouping (reverse typing) แสดงว่าในซีรั่มของผู้ป่วยมีแอนติบอดี Anti-A และ Anti-B ไม่พบการจับกัน ซึ่งสอดคล้องกับกรุ๊ปเลือด AB ที่ไม่ควรมีแอนติบอดีเหล่านี้ สุดท้าย Rh typing แสดงว่าเซลล์เม็ดเลือดแดงจับกับ Anti-D ได้เล็กน้อย (weakly positive) ซึ่งหมายความว่าผู้ป่วยมีแอนติเจน D แต่ในระดับต่ำหรือไม่เสถียร จึงสรุปได้ว่ากรุ๊ปเลือดของผู้ป่วยคือ AB Rh weakly positive D",
            "state": false
        },
        {
            "problem": "89. According to Thai national guideline for Hemostasis laboratory testing, which of the laboratory test should request for screening vascular disorder?",
            "img": "",
            "choices": "Bleeding time///Clot retraction time///Tourniquet test///PT/APTT///Not necessary to request any laboratory test",
            "answer": "Tourniquet test",
            "select": "",
            "explain": "ตามแนวทางเวชปฏิบัติการทดสอบทางห้องปฏิบัติการด้านห้ามเลือดของประเทศไทย การทดสอบเพื่อคัดกรองความผิดปกติของหลอดเลือด (vascular disorder) คือ Tourniquet test (หรือ Capillary fragility test) ซึ่งเป็นการประเมินความเปราะของหลอดเลือดฝอย ส่วน Bleeding time ใช้คัดกรองการทำงานของเกล็ดเลือด และ PT/APTT ใช้คัดกรองความผิดปกติของปัจจัยการแข็งตัวของเลือด",
            "state": false
        },
        {
            "problem": "90. What cells are in the circles?",
            "img": "https://drive.google.com/open?id=1O1z3UAufSx3BLgqmz8ubHX_yArPXzL0I&usp=drive_copy",
            "choices": "Follicular dendritic cell///centroblast///Small centrocyte///Large centrocyte///tingible body macrophages",
            "answer": "tingible body macrophages",
            "select": "",
            "explain": "ภาพแสดง Germinal center ในต่อมน้ำเหลือง ซึ่งเป็นบริเวณที่มีการแบ่งตัวของ B-cell อย่างรวดเร็ว ในกระบวนการนี้ เซลล์ B-cell ที่ไม่สมบูรณ์จะเกิด apoptosis และถูกเก็บกินโดยเซลล์ macrophage ขนาดใหญ่ที่อยู่ในบริเวณนั้น ซึ่งเรียกว่า 'Tingible body macrophages' ลักษณะเด่นคือมีไซโตพลาสซึมใส และเห็นซากของเซลล์ (nuclear debris หรือ tingible bodies) ที่ถูกกินเข้าไปอยู่ภายใน คล้ายลักษณะของ 'starry sky'",
            "state": false
        },
        {
            "problem": "91. 19 years old woman - easy bruising - has mild nose bleeding and heavy menstrual period occurred more frequently after aspirin ingestion - PE: a few small bruise on her arms and legs but no other problems - Her mother and her brothers has the same symptoms. What is the first most appropriate screening test to diagnosis?",
            "img": "",
            "choices": "PT check coagulation defect///aPTT check coagulation defect///Mixing test check coagulation defect///CBC check thrombocytopenia///Bleeding time check platelet dysfunction",
            "answer": "Bleeding time check platelet dysfunction",
            "select": "",
            "explain": "ผู้ป่วยมีอาการเลือดออกผิดปกติแบบ mucocutaneous bleeding (จ้ำเลือด, เลือดกำเดา, ประจำเดือนมามาก) อาการแย่ลงหลังกินยา Aspirin (ซึ่งยับยั้งการทำงานของเกล็ดเลือด) และมีประวัติครอบครัวในลักษณะเดียวกัน ลักษณะเหล่านี้บ่งชี้ถึงความผิดปกติของการห้ามเลือดระยะปฐมภูมิ (Primary hemostasis) ซึ่งเกี่ยวข้องกับเกล็ดเลือดและผนังหลอดเลือด การตรวจคัดกรองเบื้องต้นที่เหมาะสมที่สุดเพื่อประเมินการทำงานของเกล็ดเลือดคือ Bleeding time หรือในปัจจุบันนิยมใช้ Platelet Function Analyzer (PFA-100) มากกว่า",
            "state": false
        }
    ],
    "HL50QUIZ": [
        {
            problem: "กระบวนการที่ Platelet เกาะกันเอง โดยอาศัย fibrinogen เป็นสะพานเชื่อมกับตัวรับ GP IIb/IIIa บนผิวของเกล็ดเลือดเรียกว่าอะไร",
            img: "",
            choices: "Platelet adhesion///Platelet aggregation///Platelet activation///Coagulation",
            answer: "Platelet aggregation",
            select: "",
            explain: "Platelet aggregation คือการที่เกล็ดเลือดมาเกาะกลุ่มกัน (aggregate) โดยมี Fibrinogen ทำหน้าที่เป็นตัวเชื่อมระหว่าง Glycoprotein (GP) IIb/IIIa receptor ของเกล็ดเลือดแต่ละอัน ซึ่งเป็นขั้นตอนสำคัญในการสร้างลิ่มเลือด. ส่วน Platelet adhesion คือการที่เกล็ดเลือดเกาะกับ subendothelial matrix ในขั้นตอนแรก.",
            state: false
        },
        {
            problem: "สารใดต่อไปนี้ถูกบรรจุอยู่ใน dense-granules ของเกล็ดเลือดและหลั่งออกมาเพื่อกระตุ้นการแข็งตัวของเลือด",
            img: "",
            choices: "fibronectin, factor V, vWF///Thrombopoietin (TPO)///ADP, serotonin, Ca2+///Tissue factor (TF)",
            answer: "ADP, serotonin, Ca2+",
            select: "",
            explain: "Dense granules (หรือ delta granules) ในเกล็ดเลือดเป็นที่เก็บสารโมเลกุลเล็กที่สำคัญต่อกระบวนการ hemostasis ได้แก่ ADP (กระตุ้นเกล็ดเลือดอื่น), Serotonin (ทำให้หลอดเลือดหดตัว) และ Calcium ions (Ca2+) ซึ่งเป็น cofactor ที่จำเป็นในหลายขั้นตอนของ coagulation cascade.",
            state: false
        },
        {
            problem: "เอนไซม์ใดที่ทำหน้าที่สำคัญในขั้นตอนสุดท้ายของ coagulation cascade โดยเปลี่ยน Fibrinogen ที่ละลายน้ำได้ให้เป็น Fibrin ที่ไม่ละลายน้ำและกลายเป็นโครงข่ายของลิ่มเลือด",
            img: "",
            choices: "Thrombin///Plasmin///Tissue factor (TF)///Thrombopoietin (TPO)",
            answer: "Thrombin",
            select: "",
            explain: "Thrombin (Factor IIa) เป็นเอนไซม์หลักในกระบวนการแข็งตัวของเลือด มีหน้าที่หลักในการตัดสายโปรตีน Fibrinogen ให้กลายเป็น Fibrin monomer ซึ่งจะมาต่อกันเป็นสายยาว (polymerize) และถูกทำให้คงตัวโดย Factor XIIIa กลายเป็นโครงข่ายลิ่มเลือดที่แข็งแรง.",
            state: false
        },
        {
            problem: "ฮอร์โมนใดที่เป็นตัวกระตุ้นหลักในการสร้างเกล็ดเลือด (thrombopoiesis) จากเซลล์ต้นกำเนิด megakaryocyte ในไขกระดูก",
            img: "",
            choices: "Erythropoietin (EPO)///Thrombopoietin (TPO)///Tissue factor (TF)///Thrombin",
            answer: "Thrombopoietin (TPO)",
            select: "",
            explain: "Thrombopoietin (TPO) เป็นฮอร์โมนที่สร้างจากตับและไตเป็นหลัก ทำหน้าที่ควบคุมการเจริญเติบโตและพัฒนาของ megakaryocytes ในไขกระดูก และกระตุ้นให้ megakaryocytes แตกตัวออกเป็นเกล็ดเลือด (platelets).",
            state: false
        },
        {
            problem: "สารใดที่หลั่งจาก endothelial cells ปกติ มีฤทธิ์ยับยั้งการทำงานของเกล็ดเลือด (platelet activation and aggregation)",
            img: "",
            choices: "TXA2///ADP///NO, PGI2///Serotonin",
            answer: "NO, PGI2",
            select: "",
            explain: "เซลล์บุผนังหลอดเลือด (endothelial cells) ที่ปกติจะสร้างและหลั่ง Nitric Oxide (NO) และ Prostacyclin (PGI2) ซึ่งเป็นสารที่มีฤทธิ์แรงในการยับยั้งการเกาะกลุ่มและการทำงานของเกล็ดเลือด และยังช่วยขยายหลอดเลือด เพื่อป้องกันการเกิดลิ่มเลือดในสภาวะปกติ.",
            state: false
        },
        {
            problem: "สารใดที่สร้างจากเกล็ดเลือดที่ถูกกระตุ้น (activated platelets) และมีฤทธิ์แรงในการกระตุ้นเกล็ดเลือดอื่น ๆ ให้มาเกาะกลุ่มกันเพิ่มขึ้น (platelet activation and aggregation)",
            img: "",
            choices: "NO, PGI2///Thrombopoietin (TPO)///TXA2///Plasmin",
            answer: "TXA2",
            select: "",
            explain: "Thromboxane A2 (TXA2) เป็นสารที่สังเคราะห์ขึ้นภายในเกล็ดเลือดเมื่อถูกกระตุ้นผ่าน COX-1 pathway มันมีฤทธิ์เป็น potent vasoconstrictor (ทำให้หลอดเลือดหดตัว) และเป็นตัวกระตุ้นที่แรงมากสำหรับ platelet activation และ aggregation ทำให้มีการเรียกเกล็ดเลือดอื่น ๆ มารวมตัวกันอย่างรวดเร็ว.",
            state: false
        },
        {
            problem: "เมื่อหลอดเลือดได้รับบาดเจ็บ เนื้อเยื่อที่อยู่รอบๆ จะหลั่งสารใดออกมาเพื่อเป็นตัวเริ่มต้นของ extrinsic pathway ในกระบวนการแข็งตัวของเลือด",
            img: "",
            choices: "Thrombin///vWF///Tissue factor (TF)///Stuart Factor",
            answer: "Tissue factor (TF)",
            select: "",
            explain: "Tissue factor (TF) หรือ Factor III เป็นโปรตีนที่อยู่บนผิวของเซลล์นอกหลอดเลือด (เช่น fibroblasts) เมื่อหลอดเลือดเสียหาย TF จะสัมผัสกับเลือดและจับกับ Factor VIIa เพื่อเริ่มต้น Extrinsic pathway ซึ่งเป็นกระบวนการแข็งตัวของเลือดที่เกิดขึ้นอย่างรวดเร็ว.",
            state: false
        },
        {
            problem: "Factor X มีชื่อเรียกอีกอย่างว่าอะไร",
            img: "",
            choices: "Stuart Factor///Prothrombin///Christmas factor///Hageman factor",
            answer: "Stuart Factor",
            select: "",
            explain: "Factor X หรือ Stuart Factor (หรือ Stuart-Prower factor) เป็นจุดร่วมของ Extrinsic และ Intrinsic pathway เมื่อ Factor X ถูกกระตุ้นให้เป็น Factor Xa มันจะทำหน้าที่ร่วมกับ Factor Va ในการเปลี่ยน Prothrombin (Factor II) ให้เป็น Thrombin (Factor IIa).",
            state: false
        },
        {
            problem: "สารกลุ่มใดต่อไปนี้ถูกบรรจุอยู่ใน alpha-granules ของเกล็ดเลือด",
            img: "",
            choices: "ADP, serotonin, Ca2+///NO, PGI2///TXA2///fibronectin, factor V, vWF",
            answer: "fibronectin, factor V, vWF",
            select: "",
            explain: "Alpha-granules เป็น granule ที่มีจำนวนมากที่สุดในเกล็ดเลือด ทำหน้าที่เก็บโปรตีนโมเลกุลใหญ่หลายชนิดที่สำคัญต่อ hemostasis และการซ่อมแซมบาดแผล เช่น von Willebrand factor (vWF), Factor V, Fibrinogen และ Fibronectin.",
            state: false
        },
        {
            problem: "กระบวนการที่เกล็ดเลือดเกาะกับ sub-endothelial matrix (เช่น collagen) หลังจากหลอดเลือดบาดเจ็บ โดยอาศัย vWF และ GP Ia/IIa, GP VI, GP Ib-IX-V complex เรียกว่าอะไร",
            img: "",
            choices: "Platelet adhesion///Platelet aggregation///Platelet activation///Extrinsic pathway initiation",
            answer: "Platelet adhesion",
            select: "",
            explain: "Platelet adhesion เป็นขั้นตอนแรกสุดของ primary hemostasis เมื่อหลอดเลือดเสียหาย collagen ที่อยู่ใน sub-endothelial matrix จะถูกเปิดเผยออกมา เกล็ดเลือดจะเข้ามาเกาะจับ โดยอาศัยตัวกลางสำคัญคือ von Willebrand Factor (vWF) ที่เชื่อมระหว่าง collagen กับ GP Ib-IX-V receptor บนเกล็ดเลือด.",
            state: false
        },
        {
            problem: "ข้อใดต่อไปนี้คือ anti-clotting factor ที่ทำหน้าที่ยับยั้งการเริ่มต้นของ extrinsic pathway",
            img: "",
            choices: "Tissue factor pathway inhibitor///Plasmin///Plasminogen///Thrombin",
            answer: "Tissue factor pathway inhibitor",
            select: "",
            explain: "TFPI (Tissue factor pathway inhibitor) เป็นโปรตีนที่สร้างจาก endothelium ทำหน้าที่เป็น anticoagulant โดยตรง โดยการจับและยับยั้ง TF-Factor VIIa complex ซึ่งเป็นตัวเริ่มต้นของ extrinsic pathway. ส่วน Plasmin ทำหน้าที่สลายลิ่มเลือด (fibrinolysis) และ Plasminogen เป็น proenzyme ของ plasmin.",
            state: false
        },
        {
            problem: "สารในข้อใดมีผลลดการสร้าง plasmin โดยการยับยั้ง plasminogen activators",
            img: "",
            choices: "t-PA///u-PA///PAI-1///Streptokinase",
            answer: "PAI-1",
            select: "",
            explain: "PAI-1 (Plasminogen activator inhibitor-1) ทำหน้าที่ยับยั้ง t-PA (tissue plasminogen activator) และ u-PA (urokinase plasminogen activator) ซึ่งเป็นเอนไซม์ที่เปลี่ยน plasminogen เป็น plasmin ดังนั้น PAI-1 จึงมีผลยับยั้งกระบวนการสลายลิ่มเลือด (fibrinolysis) หรือก็คือลดการสร้าง plasmin.",
            state: false
        },
        {
            problem: "ระบบหลอดเลือดที่ปกติสามารถป้องกันการเกิดลิ่มเลือดด้วยปัจจัยบนผิวของ endothelial cells ได้อย่างไร",
            img: "",
            choices: "ยับยั้ง intrinsic pathway ด้วยผิวที่เรียบของ endothelial cells///Glycocalyx เพิ่มการยึดเกาะของ clotting factors กับ endothelial cells///Thrombin จับกับ antithrombin III บนผิว endothelial///หลั่ง Tissue Factor จำนวนมากออกมาตลอดเวลา",
            answer: "ยับยั้ง intrinsic pathway ด้วยผิวที่เรียบของ endothelial cells",
            select: "",
            explain: "ผิวของ endothelial cell ที่ปกติจะเรียบและมีประจุลบ ซึ่งจะช่วยป้องกันการสัมผัสและกระตุ้น (contact activation) ของ Factor XII ซึ่งเป็นจุดเริ่มต้นของ Intrinsic pathway. นอกจากนี้ยังมีกลไกอื่นๆ เช่น การสร้าง NO, PGI2 และการมี heparin-like molecules ที่ช่วยกระตุ้น Antithrombin III.",
            state: false
        },
        {
            problem: "การทดสอบ Bleeding Time ใช้เพื่อประเมินการทำงานของส่วนใดในกระบวนการห้ามเลือด",
            img: "",
            choices: "Extrinsic pathway///Intrinsic pathway///Platelets function///Common pathway",
            answer: "Platelets function",
            select: "",
            explain: "Bleeding Time (BT) เป็นการทดสอบการทำงานของกระบวนการห้ามเลือดปฐมภูมิ (Primary hemostasis) โดยรวม ซึ่งประกอบด้วยการทำงานของเกล็ดเลือด (platelet function) และการหดตัวของหลอดเลือด. หากค่า BT ยาวนานผิดปกติจะบ่งชี้ถึงความผิดปกติของจำนวนหรือการทำงานของเกล็ดเลือด.",
            state: false
        },
        {
            problem: "การทดสอบ Prothrombin Time (PT) ใช้เพื่อประเมินการทำงานของ pathway ใด",
            img: "",
            choices: "Extrinsic and common pathways///Intrinsic and common pathways///Platelets function///Fibrinolysis",
            answer: "Extrinsic and common pathways",
            select: "",
            explain: "Prothrombin Time (PT) เป็นการวัดระยะเวลาที่ใช้ในการสร้างลิ่มเลือดหลังจากเติม tissue factor เข้าไปในน้ำเลือด เป็นการประเมินการทำงานของปัจจัยการแข็งตัวของเลือดใน Extrinsic pathway (Factor VII) และ Common pathway (Factors X, V, II, I).",
            state: false
        },
        {
            problem: "ผู้ป่วยที่ได้รับการวินิจฉัยว่าเป็นโรค Hemophilia ซึ่งมีการแข็งตัวของเลือดช้า ควรได้รับการตรวจทางห้องปฏิบัติการใดเพื่อช่วยในการวินิจฉัย",
            img: "",
            choices: "Prothrombin Time (PT)///aPTT (Activated Partial Thromboplastin Time)///Bleeding Time///Thrombin Time",
            answer: "aPTT (Activated Partial Thromboplastin Time)",
            select: "",
            explain: "โรค Hemophilia A และ B เกิดจากการขาด Factor VIII และ IX ตามลำดับ ซึ่งทั้งสองเป็นปัจจัยใน Intrinsic pathway. การทดสอบ aPTT (Activated Partial Thromboplastin Time) ใช้ประเมินการทำงานของ Intrinsic pathway และ Common pathway ดังนั้นในผู้ป่วย Hemophilia จะพบว่าค่า aPTT ยาวนานขึ้น (prolonged) ในขณะที่ค่า PT จะยังคงปกติ.",
            state: false
        },
        {
            problem: "ผู้ป่วยที่มีภาวะ Venous thrombosis (ลิ่มเลือดอุดตันในหลอดเลือดดำ) มีความเสี่ยงที่จะเกิดภาวะแทรกซ้อนใดมากที่สุด",
            img: "",
            choices: "Stroke///Myocardial infarction///Pulmonary Embolism///Aortic dissection",
            answer: "Pulmonary Embolism",
            select: "",
            explain: "Venous thrombosis มักเกิดที่หลอดเลือดดำส่วนลึกของขา (Deep Vein Thrombosis - DVT). หากลิ่มเลือดนี้หลุดออกจากผนังหลอดเลือด มันจะลอยไปตามกระแสเลือดเข้าสู่หัวใจห้องขวาและถูกส่งต่อไปยังปอด ซึ่งอาจไปอุดตันหลอดเลือดในปอด ทำให้เกิดภาวะ Pulmonary Embolism (PE) ซึ่งเป็นภาวะแทรกซ้อนที่อันตรายและพบบ่อยที่สุด.",
            state: false
        },
        {
            problem: "หน้าที่หลักของ Antithrombin III คืออะไร",
            img: "",
            choices: "สลายลิ่มเลือด (Fibrinolysis)///ยับยั้ง Thrombin และ Factor Xa///กระตุ้น Plasminogen///สร้างโครงข่าย Fibrin",
            answer: "ยับยั้ง Thrombin และ Factor Xa",
            select: "",
            explain: "Antithrombin III เป็นโปรตีนยับยั้งเอนไซม์ (serpin) ที่สำคัญในระบบ anticoagulant ของร่างกาย ทำหน้าที่หลักในการยับยั้ง (inactivate) เอนไซม์ในกลุ่ม serine protease ของกระบวนการแข็งตัวของเลือด โดยเฉพาะอย่างยิ่ง Thrombin (Factor IIa) และ Factor Xa. หน้าที่สลายลิ่มเลือดเป็นของ Plasmin.",
            state: false
        },
        {
            problem: "Thrombomodulin ซึ่งเป็นโปรตีนบนผิว endothelial cell ทำหน้าที่เป็น anticoagulant โดยการจับกับโมเลกุลใด",
            img: "",
            choices: "Plasmin///Factor Xa///Thrombin///Fibrinogen",
            answer: "Thrombin",
            select: "",
            explain: "Thrombomodulin จะจับกับ Thrombin ที่เกิดขึ้นบริเวณใกล้ผิว endothelial cell. การจับกันนี้จะเปลี่ยนหน้าที่ของ Thrombin จากเดิมที่เป็น procoagulant ให้กลายเป็น anticoagulant โดย Thrombin-Thrombomodulin complex จะไปกระตุ้น Protein C ให้กลายเป็น Activated Protein C (APC) ซึ่งจะไปยับยั้ง Factor Va และ VIIIa.",
            state: false
        },
        {
            problem: "Streptokinase ซึ่งเป็นยาละลายลิ่มเลือด ทำงานโดยกลไกใด",
            img: "",
            choices: "ย่อยสลาย Fibrin โดยตรง///ยับยั้ง Thrombin///สร้าง complex กับ Plasminogen เพื่อไปกระตุ้น Plasminogen โมเลกุลอื่น///ยับยั้งการเกาะกลุ่มของเกล็ดเลือด",
            answer: "สร้าง complex กับ Plasminogen เพื่อไปกระตุ้น Plasminogen โมเลกุลอื่น",
            select: "",
            explain: "Streptokinase เป็นโปรตีนที่สกัดจากแบคทีเรีย มันออกฤทธิ์โดยการจับกับ Plasminogen เกิดเป็น Streptokinase-Plasminogen complex ที่มีคุณสมบัติเป็นเอนไซม์ สามารถไปเปลี่ยน Plasminogen โมเลกุลอื่นๆ ให้กลายเป็น Plasmin ได้จำนวนมาก ซึ่ง Plasmin จะทำหน้าที่ย่อยสลาย Fibrin ในลิ่มเลือด.",
            state: false
        },
        {
            problem: "ภาวะใดต่อไปนี้มีความสัมพันธ์กับการติดเชื้อ Cytomegalovirus (CMV) ในผู้ป่วยที่มีภาวะภูมิคุ้มกันบกพร่อง (immunocompromised patient)",
            img: "",
            choices: "Infectious mononucleosis///Retinitis///Oral hairy leukoplakia///Kaposi's sarcoma",
            answer: "Retinitis",
            select: "",
            explain: "ในผู้ป่วยภูมิคุ้มกันบกพร่อง เช่น ผู้ป่วย AIDS หรือผู้ป่วยปลูกถ่ายอวัยวะ เชื้อ CMV ที่แฝงตัวอยู่สามารถ reactivate และก่อโรคที่รุนแรงได้ อวัยวะที่พบบ่อยคือจอประสาทตา ทำให้เกิด Retinitis (จอประสาทตาอักเสบ) ซึ่งอาจทำให้ตาบอดได้. Infectious mononucleosis และ Oral hairy leukoplakia สัมพันธ์กับ EBV. Kaposi's sarcoma สัมพันธ์กับ HHV-8.",
            state: false
        },
        {
            problem: "เชื้อไวรัสใดต่อไปนี้จัดอยู่ในกลุ่ม TORCH infections ซึ่งสามารถติดต่อจากแม่สู่ทารกในครรภ์ได้",
            img: "",
            choices: "HPV///CMV///TB///RSV",
            answer: "CMV",
            select: "",
            explain: "TORCH เป็นตัวย่อของกลุ่มเชื้อโรคที่สามารถทำให้เกิดความพิการแต่กำเนิดหากแม่ติดเชื้อขณะตั้งครรภ์ ประกอบด้วย T = Toxoplasmosis, O = Other (Syphilis, Varicella-zoster), R = Rubella, C = Cytomegalovirus (CMV), H = Herpes simplex virus. ดังนั้น CMV จึงเป็นหนึ่งใน TORCH infections.",
            state: false
        },
        {
            problem: "จากภาพเซลล์ที่มีลักษณะ 'owl's eye' inclusion body และภาพทารกแรกเกิดที่มีอาการผิดปกติ ควรให้การวินิจฉัยว่าเป็นโรคอะไร",
            img: "https://drive.google.com/open?id=1g7oaqAJjy__yJHAYp_7ihrV6FxlVOHcN&usp=drive_copy",
            choices: "Cytomegalic inclusion disease///Leukemia///Glandular fever///Mononucleosis",
            answer: "Cytomegalic inclusion disease",
            select: "",
            explain: "ภาพ histology แสดงเซลล์ขนาดใหญ่ (Cytomegaly) ที่มี intranuclear inclusion body ขนาดใหญ่และมีขอบใสล้อมรอบ (halo) ซึ่งเป็นลักษณะจำเพาะที่เรียกว่า 'owl's eye' ของเซลล์ที่ติดเชื้อ CMV. เมื่อพบร่วมกับอาการผิดปกติในทารกแรกเกิด เช่น ศีรษะเล็ก ตับม้ามโต จะเรียกว่า Cytomegalic inclusion disease ซึ่งเป็นผลจาก congenital CMV infection.",
            state: false
        },
        {
            problem: "เชื้อไวรัส HTLV-I (Human T-lymphotropic virus type I) ไม่สามารถติดต่อผ่านทางใด",
            img: "",
            choices: "เพศสัมพันธ์ (Sexual)///เลือด (Blood)///แมลงเป็นพาหะ (Vector)///การให้นมบุตร (Breast feeding)",
            answer: "แมลงเป็นพาหะ (Vector)",
            select: "",
            explain: "HTLV-I เป็น retrovirus ที่สามารถติดต่อได้ 3 ทางหลักคือ 1) จากแม่สู่ลูก (Vertical transmission) โดยเฉพาะผ่านการให้นม 2) ทางเพศสัมพันธ์ (Sexual transmission) และ 3) ทางเลือด (Parenteral transmission) เช่น การใช้เข็มฉีดยาร่วมกันหรือการรับเลือด. ไม่พบว่ามีแมลงเป็นพาหะในการติดต่อของเชื้อนี้.",
            state: false
        },
        {
            problem: "มะเร็งชนิดใดต่อไปนี้ ไม่มีความสัมพันธ์ กับการติดเชื้อ Epstein-Barr virus (EBV)",
            img: "",
            choices: "Gastric cancer///Nasopharyngeal carcinoma///Cervical cancer///African Burkitt's lymphoma",
            answer: "Cervical cancer",
            select: "",
            explain: "มะเร็งปากมดลูก (Cervical cancer) มีสาเหตุหลักมาจากการติดเชื้อ Human Papillomavirus (HPV). ส่วน EBV มีความสัมพันธ์กับมะเร็งหลายชนิด เช่น Burkitt's lymphoma, Hodgkin lymphoma, Nasopharyngeal carcinoma (มะเร็งโพรงหลังจมูก) และมะเร็งกระเพาะอาหารบางชนิด (Gastric cancer).",
            state: false
        },
        {
            problem: "เชื้อไวรัสที่เป็นสาเหตุหลักของโรค Infectious mononucleosis คือเชื้ออะไร",
            img: "",
            choices: "HTLV-I///HSV///HIV///EBV",
            answer: "EBV",
            select: "",
            explain: "Infectious mononucleosis (IM) หรือ Glandular fever เป็นกลุ่มอาการที่มีไข้ เจ็บคอ ต่อมน้ำเหลืองโต และอ่อนเพลีย ซึ่งมีสาเหตุหลักมาจากการติดเชื้อ Epstein-Barr virus (EBV) ซึ่งเป็นไวรัสในกลุ่ม Human herpesvirus 4 (HHV-4).",
            state: false
        },
        {
            problem: "ภาพ blood smear แสดงเซลล์เม็ดเลือดขาวชนิด Atypical lymphocytes ซึ่งมักพบในการติดเชื้อไวรัสชนิดใด",
            img: "https://drive.google.com/open?id=1SJQS0H5AiMtWIFHQnQTXAQucs8NHgxxu&usp=drive_copy",
            choices: "EBV///CMV///HIV///HTLV-I",
            answer: "HTLV-I",
            select: "",
            explain: "ภาพแสดงลักษณะของ Atypical lymphocytes ที่มีขนาดใหญ่ขึ้น มีนิวเคลียสที่ผิดปกติและไซโตพลาสซึมที่ขยายออก ซึ่งเป็นลักษณะเฉพาะที่พบได้ในผู้ป่วยที่ติดเชื้อ HTLV-I โดยเฉพาะในผู้ป่วยที่มีภาวะ Adult T-cell leukemia/lymphoma (ATLL).",
            state: false
        },
        {
            problem: "ข้อใดคือกลไกการเกิดโรค (pathogenesis) ที่สำคัญของการติดเชื้อ EBV",
            img: "",
            choices: "การแฝงตัวในเซลล์ประสาท (Latency in ganglia)///การติดต่อผ่านแมลง (Vector transmission)///การแพร่กระจายจากแผลที่ผิวหนัง (Spread from skin lesion)///การทำให้ B lymphocyte เปลี่ยนแปลงและแบ่งตัว (B lymphocyte transformation)",
            answer: "การทำให้ B lymphocyte เปลี่ยนแปลงและแบ่งตัว (B lymphocyte transformation)",
            select: "",
            explain: "EBV มีเป้าหมายหลักคือ B-lymphocytes โดยไวรัสจะเข้าไปติดเชื้อและกระตุ้นให้ B-cells เกิดการเปลี่ยนแปลง (transformation) และแบ่งตัวเพิ่มจำนวนอย่างไม่สิ้นสุด (immortalization) ซึ่งเป็นกลไกสำคัญที่ทำให้เกิดโรคและมะเร็งบางชนิดที่เกี่ยวข้องกับ EBV.",
            state: false
        },
        {
            problem: "เกณฑ์การวินิจฉัยที่สำคัญสำหรับโรคมะเร็งเม็ดเลือดขาว Adult T cell leukemia คือข้อใด",
            img: "",
            choices: "Leukopenia///HTLV-I seronegativity///ตรวจพบ Integrated HTLV-I genomes ใน neoplastic lymphocytes///พบ Increased atypical lymphocyte",
            answer: "ตรวจพบ Integrated HTLV-I genomes ใน neoplastic lymphocytes",
            select: "",
            explain: "Adult T-cell Leukemia/Lymphoma (ATLL) เป็นมะเร็งที่เกิดจากการติดเชื้อ HTLV-I. การวินิจฉัยที่แน่นอน (definite diagnosis) คือการพิสูจน์ว่าเซลล์มะเร็ง (neoplastic T-lymphocytes) นั้นมีการติดเชื้อ HTLV-I จริง โดยการตรวจพบสารพันธุกรรมของไวรัส (proviral DNA) แทรกตัว (integrated) อยู่ในโครโมโซมของเซลล์มะเร็ง.",
            state: false
        },
        {
            problem: "จากภาพที่แสดงการอักเสบของต่อมทอนซิลและคอหอยอย่างรุนแรง ควรให้การวินิจฉัยที่เป็นไปได้มากที่สุดว่าอะไร",
            img: "https://drive.google.com/open?id=1nwzgPEW1HKfLi3zt8Dkjaz5XZWVHFrms&usp=drive_copy",
            choices: "Oral hairy leukoplakia///Nasopharyngeal carcinoma///Cytomegalic inclusion disease///Infectious mononucleosis",
            answer: "Infectious mononucleosis",
            select: "",
            explain: "ภาพแสดงลักษณะของ Pharyngitis และ Tonsillitis ที่รุนแรง มีอาการบวมแดงและมีแผ่นฝ้าขาว (exudate) ปกคลุม ซึ่งเป็นอาการเด่นอย่างหนึ่งของโรค Infectious mononucleosis ที่เกิดจากเชื้อ EBV โดยเฉพาะในวัยรุ่นและผู้ใหญ่ตอนต้น.",
            state: false
        },
        {
            problem: "แอนติเจนของเชื้อเดงกี่ชนิดใดที่ถูกปล่อยออกมาจากเซลล์ที่ติดเชื้อและสามารถตรวจพบได้ในกระแสเลือดในช่วงแรกของการป่วย",
            img: "",
            choices: "NS2///NS1///NS4///NS3",
            answer: "NS1",
            select: "",
            explain: "NS1 (Non-structural protein 1) เป็น glycoprotein ของเชื้อ dengue virus ที่เซลล์เจ้าบ้านซึ่งติดเชื้อสร้างขึ้นและหลั่งออกมาสู่กระแสเลือดในปริมาณสูงในช่วงที่มีไข้ (febrile phase) ทำให้สามารถใช้ตรวจวินิจฉัยการติดเชื้อเดงกี่ในระยะแรกได้.",
            state: false
        },
        {
            problem: "อาการใดต่อไปนี้เป็นอาการที่พบได้ไม่บ่อย (uncommon) ในผู้ป่วยไข้เลือดออก",
            img: "",
            choices: "Headache///Petechiae///Encephalitis///Fever",
            answer: "Encephalitis",
            select: "",
            explain: "อาการทั่วไปของไข้เลือดออกคือ ไข้สูง (Fever), ปวดศีรษะ (Headache), ปวดกล้ามเนื้อ, และอาจพบจุดเลือดออกตามผิวหนัง (Petechiae). ส่วนภาวะสมองอักเสบ (Encephalitis) เป็นภาวะแทรกซ้อนทางระบบประสาทที่พบได้แต่ไม่บ่อยนัก.",
            state: false
        },
        {
            problem: "เชื้อไวรัสใดเป็นสาเหตุสำคัญของภาวะศีรษะเล็กแต่กำเนิด (microcephaly) ในทารก",
            img: "",
            choices: "Zika virus///Chikungunya virus///Dengue virus///Japanese E encephalitis virus",
            answer: "Zika virus",
            select: "",
            explain: "มีการค้นพบความสัมพันธ์ที่ชัดเจนระหว่างการติดเชื้อ Zika virus ในหญิงตั้งครรภ์กับการเกิดความผิดปกติทางสมองของทารกในครรภ์ โดยเฉพาะภาวะศีรษะเล็กแต่กำเนิด (congenital microcephaly).",
            state: false
        },
        {
            problem: "การกำจัดเชื้อไวรัสเดงกี่ออกจากร่างกายต้องอาศัยการทำงานของระบบภูมิคุ้มกันใด",
            img: "",
            choices: "Adaptive immunity///Innate and adaptive immunity///Innate immunity///Antiviral drugs",
            answer: "Innate and adaptive immunity",
            select: "",
            explain: "ร่างกายต้องใช้ระบบภูมิคุ้มกันทั้งสองส่วนในการควบคุมและกำจัดเชื้อเดงกี่ โดย Innate immunity (เช่น Interferon, NK cell) จะทำงานในระยะแรกเพื่อควบคุมการเพิ่มจำนวนของไวรัส และ Adaptive immunity (T cells และ B cells ที่สร้าง antibody) จะทำงานในระยะต่อมาเพื่อกำจัดเซลล์ที่ติดเชื้อและไวรัสให้หมดไป.",
            state: false
        },
        {
            problem: "ไวรัสในข้อใด ไม่ได้ จัดอยู่ในจีนัส Flavivirus",
            img: "",
            choices: "Japanese E encephalitis virus///Zika virus///Chikungunya virus///Dengue virus",
            answer: "Chikungunya virus",
            select: "",
            explain: "Dengue virus, Zika virus, และ Japanese Encephalitis virus ล้วนเป็นสมาชิกในจีนัส Flavivirus วงศ์ Flaviviridae. ส่วน Chikungunya virus จัดอยู่ในจีนัส Alphavirus วงศ์ Togaviridae.",
            state: false
        },
        {
            problem: "เชื้อไวรัสใดที่ทำให้เกิดอาการปวดข้อรุนแรง และอาจมีอาการปวดข้อเรื้อรัง (chronic arthritis) ตามมาได้",
            img: "",
            choices: "Dengue virus///Japanese E encephalitis virus///Zika virus///Chikungunya virus",
            answer: "Chikungunya virus",
            select: "",
            explain: "อาการปวดข้ออย่างรุนแรง (severe arthralgia) เป็นอาการเด่นของการติดเชื้อ Chikungunya (โรคไข้ปวดข้อยุงลาย). ในผู้ป่วยบางรายอาการปวดข้อสามารถคงอยู่ได้นานเป็นเดือนหรือเป็นปี กลายเป็นภาวะปวดข้ออักเสบเรื้อรัง (chronic arthritis).",
            state: false
        },
        {
            problem: "ข้อใดคืออาการที่เป็นสัญญาณเตือน (warning sign) ในผู้ป่วยไข้เลือดออก ซึ่งบ่งชี้ว่าอาจเข้าสู่ภาวะช็อกได้",
            img: "",
            choices: "Nausea, vomiting///Tourniquet test positive///Fever///Abdominal pain",
            answer: "Abdominal pain",
            select: "",
            explain: "ตามแนวทางของ WHO อาการปวดท้องรุนแรงและต่อเนื่อง (severe abdominal pain) เป็นหนึ่งใน warning signs ที่สำคัญของไข้เลือดออก บ่งชี้ว่าอาจมีการรั่วของพลาสมา (plasma leakage) ซึ่งเป็นกลไกหลักที่นำไปสู่ภาวะช็อก. อาเจียนต่อเนื่องก็เป็น warning sign เช่นกัน แต่ปวดท้องมักมีความจำเพาะกว่า.",
            state: false
        },
        {
            problem: "ลักษณะใดที่มักเกิดขึ้นในช่วง 1-2 วันหลังจากไข้ลด (defervescence) ในผู้ป่วยไข้เลือดออก",
            img: "",
            choices: "Maculopapular rash///Convalescent rash///Purpura///Petechiae",
            answer: "Convalescent rash",
            select: "",
            explain: "หลังจากผ่านช่วงไข้ลง (critical phase) ไปแล้ว ผู้ป่วยจะเข้าสู่ระยะฟื้นตัว (convalescent phase) ซึ่งมักจะมีผื่นลักษณะเฉพาะปรากฏขึ้นเรียกว่า convalescent rash มีลักษณะเป็นผื่นแดงแล้วมีวงขาวๆ กระจายอยู่ เรียกว่า 'isles of white in a sea of red'.",
            state: false
        },
        {
            problem: "ไวรัสที่สามารถทำให้เกิดการติดเชื้อแต่กำเนิด (congenital infections) และสามารถแพร่เชื้อทางปัสสาวะของทารกที่ติดเชื้อได้คือไวรัสชนิดใด",
            img: "",
            choices: "Dengue virus///Zika virus///Japanese E encephalitis virus///Chikungunya virus",
            answer: "Zika virus",
            select: "",
            explain: "Zika virus สามารถติดต่อจากแม่สู่ทารกทำให้เกิด Congenital Zika Syndrome และเชื้อไวรัสสามารถถูกขับออกมาในปัสสาวะและน้ำลายของทารกที่ติดเชื้อได้เป็นระยะเวลานาน.",
            state: false
        },
        {
            problem: "เซลล์เป้าหมายแรก (primary target cells) ของเชื้อไวรัสเดงกี่บริเวณที่ถูกยุงกัดคือเซลล์ชนิดใด",
            img: "",
            choices: "Neurons///Enterocytes///Dendritic cells///Hepatocytes",
            answer: "Dendritic cells",
            select: "",
            explain: "เมื่อยุงลายที่มีเชื้อเดงกี่กัด เชื้อจะถูกปล่อยเข้าสู่ผิวหนัง และเซลล์กลุ่มแรกๆ ที่จะติดเชื้อคือเซลล์ในระบบภูมิคุ้มกันที่อยู่ในผิวหนัง ได้แก่ Dendritic cells (โดยเฉพาะ Langerhans cells) และ Macrophages ซึ่งต่อมาจะนำเชื้อไปยังต่อมน้ำเหลืองและกระจายไปทั่วร่างกาย.",
            state: false
        },
        {
            problem: "ข้อใดคือกลไกการเกิดโรค (pathogenesis) ที่สำคัญของ Dengue Hemorrhagic Fever (DHF)",
            img: "",
            choices: "Enhancing antibody promotes viruses to infect monocytes///Dengue virus replicates in red blood cells///Dengue virus replicates in platelets///C3a and C5a decrease vascular permeability",
            answer: "Enhancing antibody promotes viruses to infect monocytes",
            select: "",
            explain: "กลไกที่เชื่อว่าเป็นสาเหตุหลักของ DHF คือ Antibody-Dependent Enhancement (ADE). ซึ่งมักเกิดในการติดเชื้อครั้งที่สอง (secondary infection) โดย antibody ที่สร้างจากการติดเชื้อครั้งแรก (ซึ่งเป็นคนละ serotype) ไม่สามารถทำลายเชื้อไวรัสตัวใหม่ได้ แต่กลับไปจับกับไวรัสและช่วยนำไวรัสเข้าสู่เซลล์ monocyte/macrophage ได้ง่ายขึ้น ทำให้มีการติดเชื้อที่รุนแรงขึ้น เกิดการหลั่ง cytokine จำนวนมาก และนำไปสู่การรั่วของพลาสมา.",
            state: false
        },
        {
            problem: "ไข้เลือดออกเดงกี่ติดต่อโดยมีอะไรเป็นพาหะนำโรค",
            img: "",
            choices: "Fecal-oral///Ticks///Mosquitoes///Sexual",
            answer: "Mosquitoes",
            select: "",
            explain: "โรคไข้เลือดออกเดงกี่เป็นโรคติดต่อนำโดยแมลง (vector-borne disease) โดยมี 'ยุงลาย' (Aedes aegypti และ Aedes albopictus) เป็นพาหะสำคัญในการนำเชื้อไวรัสเดงกี่จากคนหนึ่งไปสู่อีกคนหนึ่ง.",
            state: false
        },
        {
            problem: "ชายอายุ 18 ปี มีไข้และเจ็บคอ จากภาพการตรวจร่างกายและ blood smear ควรให้การวินิจฉัยว่าอะไร",
            img: "https://drive.google.com/open?id=1MxcWs_AF-AzjLcoGmpAaDQk5S2K1S07o&usp=drive_copy",
            choices: "Nasopharyngeal carcinoma///Infectious mononucleosis///Cytomegalic inclusion disease///Burkitt's lymphoma",
            answer: "Infectious mononucleosis",
            select: "",
            explain: "อาการไข้ เจ็บคอ ในผู้ป่วยวัยรุ่น ร่วมกับภาพการตรวจร่างกายที่แสดง pharyngitis/tonsillitis และภาพ blood smear ที่น่าจะแสดง atypical lymphocytes เป็นลักษณะทางคลินิกและห้องปฏิบัติการที่คลาสสิกของโรค Infectious Mononucleosis ซึ่งเกิดจากการติดเชื้อ EBV.",
            state: false
        },
        {
            problem: "หญิงอายุ 13 ปี มีไข้ เจ็บคอ หนังตาบนบวม ต่อมทอนซิลมีหนอง (exudates) Blood smear พบ Atypical lymphocytes 15% และ Heterophile antibody ให้ผลบวก เซลล์เป้าหมายหลักของเชื้อก่อโรคนี้คือเซลล์ชนิดใด",
            img: "",
            choices: "Monocyte///B lymphocyte///Atypical lymphocyte///T lymphocyte",
            answer: "B lymphocyte",
            select: "",
            explain: "ข้อมูลทั้งหมดชี้ไปที่โรค Infectious Mononucleosis ที่เกิดจากเชื้อ EBV. เชื้อไวรัส EBV มีเซลล์เป้าหมายหลัก (main target cell) คือ B lymphocyte โดยไวรัสจะใช้โปรตีนที่ผิว (gp350) จับกับ CD21 receptor ที่อยู่บนผิวของ B cell เพื่อเข้าสู่เซลล์.",
            state: false
        },
        {
            problem: "เด็กหญิงอายุ 9 ปี มีอาการปวดท้อง เลือดกำเดาไหล มีไข้ต่อเนื่อง 4 วัน ผลตรวจ Hct 44%, Platelet 96,000/cu.mm. ผลเลือด Anti-dengue IgM: negative, IgG: positive, Dengue NS1: positive การวินิจฉัยที่เป็นไปได้มากที่สุดคืออะไร",
            img: "",
            choices: "Dengue fever///Dengue without warning signs///Dengue hemorrhagic fever///Dengue shock syndrome",
            answer: "Dengue hemorrhagic fever",
            select: "",
            explain: "ผู้ป่วยมีไข้, มีอาการเลือดออก (epistaxis), เกล็ดเลือดต่ำ (thrombocytopenia < 100,000), และมีหลักฐานของการรั่วของพลาสมาคือค่า Hct ที่สูงขึ้น (hemoconcentration) ซึ่งเข้าเกณฑ์การวินิจฉัยของ Dengue Hemorrhagic Fever (DHF). ผล NS1 positive ยืนยันการติดเชื้อเฉียบพลัน และ IgG positive บ่งชี้ว่าเป็น secondary infection ซึ่งเพิ่มความเสี่ยงต่อการเป็น DHF.",
            state: false
        },
        {
            problem: "ชายอายุ 21 ปี มีไข้ เจ็บคอ ตรวจพบคอหอยแดง ต่อมทอนซิลโตมีหนอง (exudate) และพบ lymphocyte เพิ่มขึ้นในเลือด การตรวจจำเพาะใดที่ควรใช้เพื่อการวินิจฉัยที่แน่นอน (definite diagnosis)",
            img: "",
            choices: "Anti-cytomegalovirus IgM positive///Heterophile antibody positive///Anti-Epstein-Barr virus IgG positive///Atypical lymphocyte 12%",
            answer: "Heterophile antibody positive",
            select: "",
            explain: "อาการทางคลินิกเข้าได้กับ Infectious Mononucleosis (IM). การตรวจพบ Heterophile antibody (เช่นการทดสอบ Monospot) เป็นการตรวจที่มีความจำเพาะสูงสำหรับ IM ที่เกิดจากการติดเชื้อ EBV และมักใช้เพื่อยืนยันการวินิจฉัย. การพบ Atypical lymphocyte สนับสนุนการวินิจฉัยแต่ไม่จำเพาะเท่า. Anti-EBV IgG บอกถึงการติดเชื้อในอดีต.",
            state: false
        },
        {
            problem: "ชายอายุ 65 ปี มีไข้ อ่อนเพลีย ตัวเหลืองตาเหลือง (jaundice) และน้ำหนักลด ภาพ blood smear แสดงเซลล์ที่มีลักษณะเรียกว่า 'flower cells' ควรให้การวินิจฉัยว่าอะไร",
            img: "https://drive.google.com/open?id=1SJQS0H5AiMtWIFHQnQTXAQucs8NHgxxu&usp=drive_copy",
            choices: "Infectious mononucleosis///Burkitt's lymphoma///Lymphocytosis///Adult T cell leukemia",
            answer: "Adult T cell leukemia",
            select: "",
            explain: "Flower cells (หรือ cloverleaf cells) เป็นเซลล์เม็ดเลือดขาวชนิด T-lymphocyte ที่เป็นเซลล์มะเร็ง ซึ่งมีลักษณะนิวเคลียสเป็นแฉกๆ คล้ายดอกไม้ เป็นลักษณะที่จำเพาะอย่างยิ่ง (pathognomonic) สำหรับโรค Adult T-cell Leukemia/Lymphoma (ATLL) ซึ่งเป็นมะเร็งที่เกิดจากการติดเชื้อไวรัส HTLV-I.",
            state: false
        },
        {
            problem: "ชายอายุ 62 ปี มีอาการคัดจมูกและเลือดกำเดาไหล การส่องกล้อง (Endoscopy) พบก้อนที่น่าจะเป็นมะเร็งโพรงหลังจมูก (nasopharyngeal carcinoma) เชื้อไวรัสใดต่อไปนี้มีความสัมพันธ์กับมะเร็งชนิดนี้",
            img: "",
            choices: "Human T lymphotropic virus type I///Cytomegalovirus///Epstein-Barr virus///Human immunodeficiency virus",
            answer: "Epstein-Barr virus",
            select: "",
            explain: "Epstein-Barr virus (EBV) มีความสัมพันธ์อย่างมากกับการเกิดมะเร็งโพรงหลังจมูก หรือ Nasopharyngeal carcinoma (NPC) โดยเฉพาะชนิด undifferentiated carcinoma ที่พบบ่อยในประชากรแถบเอเชียตะวันออกเฉียงใต้และจีนตอนใต้.",
            state: false
        },
        {
            problem: "ทารกแรกเกิดมีภาวะศีรษะเล็ก (microcephaly) ตับและม้ามโต (hepatosplenomegaly) และตัวเหลือง (jaundice) ตรวจพบเซลล์ดังรูปในปัสสาวะ คุณลักษณะของเชื้อก่อโรคนี้คืออะไร",
            img: "https://drive.google.com/open?id=1g7oaqAJjy__yJHAYp_7ihrV6FxlVOHcN&usp=drive_copy",
            choices: "Oncogenic virus///Latent infection///Very long incubation period///Arbovirus",
            answer: "Latent infection",
            select: "",
            explain: "อาการและภาพเซลล์ 'owl's eye' บ่งชี้ถึง Congenital CMV infection. เชื้อ Cytomegalovirus (CMV) เป็นไวรัสในกลุ่ม Herpesviridae ซึ่งมีคุณสมบัติที่สำคัญคือสามารถก่อให้เกิดการติดเชื้อแบบแฝง (latent infection) ในร่างกายได้ตลอดชีวิต และอาจถูกกระตุ้นให้กลับมาทำงานใหม่ (reactivation) เมื่อภูมิคุ้มกันของร่างกายอ่อนแอลง.",
            state: false
        },
        {
            problem: "เด็กชายมีไข้ 6 วัน วันนี้ไข้ลดลงแล้ว แต่มาพบแพทย์ด้วยอาการมีผื่นขึ้นดังรูป ผลตรวจ NS1 negative, Anti-dengue IgM positive, IgG negative ควรให้การวินิจฉัยว่าอะไร",
            img: "https://drive.google.com/open?id=1PkNRHPehal_t8FcfyhB5SxyCwvByOrwS&usp=drive_copy",
            choices: "Secondary dengue infection with severe dengue///Dengue infection///Dengue shock syndrome///Primary dengue infection with severe dengue",
            answer: "Dengue infection",
            select: "",
            explain: "ผู้ป่วยมีอาการไข้เดงกี่ในระยะฟื้นตัว (convalescent phase) ซึ่งมักมีผื่นลักษณะเฉพาะ (convalescent rash). ผลตรวจ NS1 negative บ่งชี้ว่าไม่ใช่ระยะเฉียบพลัน (acute phase) แล้ว. ผล IgM positive และ IgG negative บ่งชี้ว่าเป็นการติดเชื้อครั้งแรก (primary infection). เนื่องจากผู้ป่วยไม่มีอาการรุนแรงหรือภาวะแทรกซ้อน จึงวินิจฉัยเป็น Dengue infection หรือ Dengue fever (DF).",
            state: false
        },
        {
            problem: "ชายมีอาการปวดศีรษะ ปวดกล้ามเนื้อ มีไข้ 2 วัน Hct และ platelet ปกติ ผลตรวจ NS1 positive, Anti-dengue IgM และ IgG negative ควรให้การวินิจฉัยว่าอะไร",
            img: "https://drive.google.com/open?id=16OV0IURAhA6YgSlDheiARdBiHxLYX9uy&usp=drive_copy",
            choices: "Severe dengue///Acute febrile illness///Dengue with warning signs///Dengue without warning signs",
            answer: "Dengue without warning signs",
            select: "",
            explain: "ผู้ป่วยมีอาการของไข้เดงกี่ในระยะแรก (acute febrile phase). ผล NS1 positive ยืนยันการติดเชื้อเดงกี่. IgM และ IgG ยังไม่ขึ้นเพราะเป็นช่วงแรกของการติดเชื้อ (primary infection). เนื่องจากผู้ป่วยยังไม่มี warning signs และผลเลือด Hct, platelet ยังปกติ จึงวินิจฉัยเป็น Dengue without warning signs หรือ Dengue fever (DF).",
            state: false
        },
        {
            problem: "เด็กชายอายุ 9 ปี มีเลือดกำเดาไหลและไข้สูง 7 วัน Hct 48%, WBC 3,200, Platelet 80,000. ผล Anti-dengue IgM: positive, IgG: positive, NS1: negative. ข้อใดน่าจะมีความเกี่ยวข้องกับโรคของผู้ป่วยรายนี้มากที่สุด",
            img: "",
            choices: "Primary infection///Decreased C3a and C5a///Enhancing antibody///Homotypic antibody",
            answer: "Enhancing antibody",
            select: "",
            explain: "อาการและผลเลือด (hemoconcentration, thrombocytopenia) บ่งชี้ภาวะ DHF. ผลตรวจพบทั้ง IgM และ IgG เป็นบวก (หรือ IgG บวกอย่างเดียวในบางกรณี) บ่งชี้ว่าเป็น secondary dengue infection. กลไกสำคัญที่ทำให้เกิดความรุนแรงใน secondary infection คือ Antibody-Dependent Enhancement (ADE) ซึ่ง antibody จากการติดเชื้อครั้งก่อน (Enhancing antibody) ช่วยให้ไวรัสเข้าเซลล์ได้ดีขึ้น ทำให้โรคมีความรุนแรงมากขึ้น.",
            state: false
        },
        {
            problem: "ชายอายุ 31 ปี มีไข้และปวดข้อ 3 วัน ผลเลือด Hct 38%, WBC 5,100, Platelet 160,000. การตรวจใดต่อไปนี้ใช้สำหรับการวินิจฉัยที่แน่นอน (definite diagnosis) ในระยะนี้",
            img: "",
            choices: "Convalescent serum positive for viral antigen///Acute serum positive for viral IgG///Convalescent serum positive for viral IgG///Acute serum positive for viral RNA",
            answer: "Acute serum positive for viral RNA",
            select: "",
            explain: "ในช่วง 3-5 วันแรกของอาการ (acute phase) ระดับไวรัสในเลือด (viremia) จะสูงที่สุด การตรวจวินิจฉัยที่แม่นยำและรวดเร็วที่สุดคือการตรวจหาส่วนประกอบของไวรัสโดยตรง ได้แก่ การตรวจหาสารพันธุกรรมของไวรัส (viral RNA) ด้วยวิธี RT-PCR หรือการตรวจหาแอนติเจนของไวรัส (NS1 antigen). การตรวจหา antibody ในระยะนี้อาจยังไม่พบ.",
            state: false
        },
        {
            problem: "ทารกแรกเกิดมีภาวะศีรษะเล็ก (microcephaly) ตรวจปัสสาวะด้วย RT-PCR พบเชื้อ zika virus. คุณลักษณะของเชื้อก่อโรคนี้คืออะไร",
            img: "",
            choices: "Very long incubation period///Latent infection///Oncogenic virus///Arbovirus",
            answer: "Arbovirus",
            select: "",
            explain: "Zika virus เป็นไวรัสที่ติดต่อโดยมียุงลายเป็นพาหะนำโรค. ไวรัสที่มีสัตว์ขาปล้อง (arthropod) เป็นพาหะ จะถูกจัดอยู่ในกลุ่ม Arbovirus ซึ่งย่อมาจาก ARthropod-BOrne virus.",
            state: false
        },
        {
            problem: "หญิงอายุ 65 ปี เป็นโรคกล้ามเนื้อหัวใจขาดเลือด ได้รับ packed red blood cells (PRCs) 5 นาทีต่อมาเกิดอาการไข้ หนาวสั่น และหายใจลำบาก ผล Chest X-ray และการตรวจทางธนาคารเลือดปกติ การวินิจฉัยที่เป็นไปได้มากที่สุดคืออะไร",
            img: "",
            choices: "Acute hemolytic transfusion reaction (AHTR)///Febrile non-hemolytic transfusion reaction (FNHTR)///Transfusion-related acute lung injury (TRALI)///Allergic transfusion reaction",
            answer: "Febrile non-hemolytic transfusion reaction (FNHTR)",
            select: "",
            explain: "FNHTR เป็นปฏิกิริยาต่อการให้เลือดที่พบบ่อยที่สุด เกิดจากปฏิกิริยาต่อเม็ดเลือดขาวของผู้ให้หรือ cytokine ที่สะสมในถุงเลือด ทำให้เกิดไข้และหนาวสั่นหลังรับเลือดไม่นาน อาการไม่รุนแรงเท่า AHTR และไม่มีหลักฐานของ hemolysis. CXR ปกติช่วยแยกจาก TRALI และ TACO.",
            state: false
        },
        {
            problem: "ชายอายุ 40 ปี เป็นมะเร็งเม็ดเลือดขาว ได้รับเกล็ดเลือด (platelets) 30 นาทีต่อมาเกิดผื่นและอาการคัน การวินิจฉัยที่เป็นไปได้มากที่สุดคืออะไร",
            img: "",
            choices: "AHTR///FNHTR///TRALI///Allergic transfusion reaction",
            answer: "Allergic transfusion reaction",
            select: "",
            explain: "อาการผื่นคัน (rash and pruritus) หรือลมพิษ (urticaria) เป็นอาการคลาสสิกของ Allergic transfusion reaction. เกิดจากปฏิกิริยาภูมิไวเกิน (hypersensitivity) ต่อโปรตีนในพลาสมาของผู้ให้เลือด มักไม่รุนแรงและตอบสนองต่อยาแก้แพ้ (antihistamine).",
            state: false
        },
        {
            problem: "หญิงอายุ 70 ปี ได้รับอุบัติเหตุรุนแรง ได้รับ PRCs 5 units ใน 4 ชั่วโมง ต่อมา 1 ชั่วโมงเกิดความดันโลหิตสูงและหัวใจเต้นเร็ว Chest X-ray พบ Bilateral alveolar infiltration (Bat wing opacities) และหัวใจโต การวินิจฉัยที่เป็นไปได้มากที่สุดคืออะไร",
            img: "",
            choices: "AHTR///FNHTR///TRALI///TACO",
            answer: "TACO",
            select: "",
            explain: "TACO (Transfusion-Associated Circulatory Overload) คือภาวะหัวใจล้มเหลวจากปริมาณของเหลวเกิน (volume overload) เนื่องจากการให้เลือดในปริมาณมากหรือเร็วเกินไป. ลักษณะสำคัญที่ช่วยแยกจาก TRALI คือ ความดันโลหิตสูง (hypertension) และพบหลักฐานของภาวะหัวใจล้มเหลวใน CXR เช่น หัวใจโต (cardiomegaly) และ pleural effusion.",
            state: false
        },
        {
            problem: "หญิงอายุ 30 ปี เป็นธาลัสซีเมีย ได้รับ leukocyte-depleted PRC 5 วันต่อมาเกิดไข้และตัวเหลือง (jaundice) ตรวจพบ alloantibodies ชนิดใหม่ (anti-E) ในซีรั่ม การวินิจฉัยที่เป็นไปได้มากที่สุดคืออะไร",
            img: "",
            choices: "AHTR///FNHTR///TRALI///Delayed hemolytic transfusion reaction (DHTR)",
            answer: "Delayed hemolytic transfusion reaction (DHTR)",
            select: "",
            explain: "DHTR เกิดขึ้นหลังรับเลือดไปแล้วหลายวัน (3-14 วัน) มักเกิดในผู้ป่วยที่เคยได้รับเลือดหรือตั้งครรภ์มาก่อน ทำให้เคยมี antibody ต่อ minor red cell antigen แต่ระดับต่ำจนตรวจไม่พบก่อนให้เลือด. เมื่อได้รับเลือดที่มี antigen นั้นอีกครั้ง ร่างกายจะสร้าง antibody ขึ้นมาใหม่ (anamnestic response) ทำให้เม็ดเลือดแดงของผู้ให้แตก เกิดไข้, โลหิตจาง, และตัวเหลือง.",
            state: false
        },
        {
            problem: "ชายอายุ 40 ปี ประสบอุบัติเหตุรุนแรง ได้รับ PRBCs 5 units 2 สัปดาห์ต่อมามีไข้เรื้อรัง ปวดศีรษะ ต่อมน้ำเหลืองโตทั่วตัว ตรวจ Anti-HIV test ได้ผลบวก การวินิจฉัยที่เป็นไปได้มากที่สุดคืออะไร",
            img: "",
            choices: "AHTR///FNHTR///TRALI///Transfusion-transmitted infection (TTI)",
            answer: "Transfusion-transmitted infection (TTI)",
            select: "",
            explain: "อาการที่เกิดขึ้นหลังการรับเลือด 2 สัปดาห์ ร่วมกับผลการตรวจพบการติดเชื้อ HIV เป็นบวก บ่งชี้อย่างชัดเจนว่าเป็นการติดเชื้อที่มาจากการรับเลือด หรือ Transfusion-transmitted infection (TTI).",
            state: false
        },
        {
            problem: "ผลิตภัณฑ์เลือดชนิดใดมีโอกาสทำให้เกิด Febrile non-hemolytic transfusion reaction (FNHTR) ได้มากที่สุด",
            img: "",
            choices: "PRC (Packed Red Cells)///LPRC (Leukocyte-reduced PRC)///Cryoprecipitate///LDPPC (Leukocyte-depleted Platelet Pheresis Concentrate)",
            answer: "PRC (Packed Red Cells)",
            select: "",
            explain: "FNHTR เกิดจาก cytokine ที่สร้างจากเม็ดเลือดขาวที่ปนเปื้อนในผลิตภัณฑ์เลือด. ในบรรดาตัวเลือก PRC แบบมาตรฐาน (ที่ยังไม่ผ่านการกรองเม็ดเลือดขาวออก) จะมีปริมาณเม็ดเลือดขาวและ cytokine สะสมอยู่มากที่สุด จึงมีความเสี่ยงสูงสุดที่จะทำให้เกิด FNHTR. ผลิตภัณฑ์อื่นๆ เป็นแบบ leukocyte-reduced หรือมีเซลล์น้อย (Cryoprecipitate) จึงมีความเสี่ยงต่ำกว่า.",
            state: false
        },
        {
            problem: "ชายอายุ 20 ปี ได้รับ PRC ระหว่างผ่าตัดแล้วเกิดไข้ หนาวสั่น ปัสสาวะสีเข้มทันที ตรวจพบ DAT: Positive และ repeat crossmatching: incompatible สาเหตุที่เป็นไปได้มากที่สุดของ ABO incompatibility นี้คืออะไร",
            img: "",
            choices: "Mislabeling of blood samples///Misidentification of patients///Misreading of blood unit labels///All of the above",
            answer: "All of the above",
            select: "",
            explain: "Acute hemolytic transfusion reaction จาก ABO incompatibility เป็นภาวะฉุกเฉินที่รุนแรง และเกือบทั้งหมดเกิดจากความผิดพลาดของมนุษย์ (clerical error) ในขั้นตอนใดขั้นตอนหนึ่งของกระบวนการให้เลือด ตั้งแต่การเก็บตัวอย่างเลือดผู้ป่วย การระบุตัวผู้ป่วย การหยิบถุงเลือด ไปจนถึงการให้เลือดข้างเตียง ดังนั้นทุกข้อจึงเป็นสาเหตุที่เป็นไปได้.",
            state: false
        },
        {
            problem: "หญิงอายุ 40 ปี เป็น AML ได้รับเกล็ดเลือดแล้วเกิดอาการหายใจหอบเหนื่อย ไข้ และไอทันที ตรวจพบ DAT: Negative, anti-HLA จากซีรั่มผู้ให้: positive, CXR: diffuse alveolar infiltration และขนาดหัวใจปกติ การวินิจฉัยที่เป็นไปได้มากที่สุดคืออะไร",
            img: "",
            choices: "Allergic transfusion reaction///FNHTR///Transfusion-related acute lung injury (TRALI)///TACO",
            answer: "Transfusion-related acute lung injury (TRALI)",
            select: "",
            explain: "TRALI เป็นภาวะปอดบาดเจ็บเฉียบพลันที่ไม่ใช่จากภาวะหัวใจล้มเหลว กลไกเกิดจาก antibody ในเลือดผู้ให้ (เช่น anti-HLA) ไปกระตุ้น neutrophil ของผู้รับที่ปอด. ลักษณะสำคัญคือ หายใจลำบากเฉียบพลัน, ความดันอาจจะปกติหรือต่ำ, CXR พบ pulmonary edema แต่ขนาดหัวใจปกติ ซึ่งช่วยแยกจาก TACO.",
            state: false
        },
        {
            problem: "หญิงอายุ 58 ปี เป็นโรคตับแข็ง (liver cirrhosis) มีเลือดออกในทางเดินอาหารส่วนบน มีภาวะโลหิตจาง (Hb 6 g/dl) และค่า PT, aPTT ยาวนานผิดปกติ แต่ Fibrinogen และเกล็ดเลือดปกติ ควรให้ผลิตภัณฑ์เลือดชนิดใดเหมาะสมที่สุด",
            img: "",
            choices: "Packed red blood cell Component///Fresh frozen plasma///Cryoprecipitate///Platelets Component",
            answer: "Fresh frozen plasma",
            select: "",
            explain: "ผู้ป่วยมีเลือดออกและมีภาวะการแข็งตัวของเลือดบกพร่อง (สังเกตจาก PT และ aPTT ที่ prolonged) ซึ่งเกิดจากโรคตับแข็งทำให้ตับสร้าง clotting factors ได้ลดลง. การให้ Fresh frozen plasma (FFP) จะช่วยทดแทน clotting factors ได้ทุกตัวเพื่อช่วยหยุดเลือด. แม้จะมีภาวะซีด แต่การให้ FFP เพื่อหยุดเลือดมีความสำคัญเร่งด่วนกว่า. Platelet และ Fibrinogen ยังปกติจึงยังไม่จำเป็นต้องให้ส่วนประกอบดังกล่าว.",
            state: false
        },
        {
            problem: "ชายอายุ 17 ปี เป็นโรค hemophilia A มีเลือดออกเอง แต่ Factor VIII Concentrate หมดสต็อก ควรให้ผลิตภัณฑ์เลือดชนิดใดทดแทนที่เหมาะสมที่สุด",
            img: "",
            choices: "Packed Red Blood Cells component///Fresh Frozen Plasma///Cryoprecipitate///Platelets component",
            answer: "Cryoprecipitate",
            select: "",
            explain: "Hemophilia A คือโรคขาด Factor VIII. ในกรณีที่ไม่มี Factor VIII concentrate, Cryoprecipitate เป็นตัวเลือกที่ดีที่สุด เพราะเป็นผลิตภัณฑ์เลือดที่มี Factor VIII, von Willebrand factor (vWF), fibrinogen และ Factor XIII ในปริมาณเข้มข้น. Fresh Frozen Plasma (FFP) ก็มี Factor VIII แต่มีความเข้มข้นน้อยกว่า Cryoprecipitate มาก จึงต้องใช้ในปริมาณที่สูงกว่ามากเพื่อให้ได้ผลเท่ากัน.",
            state: false
        },
        {
            problem: "เด็กชายอายุ 7 ปี มาด้วยอาการตัวเหลืองตาเหลือง ตรวจเลือดพบ RBC ลดลงอย่างมาก แต่ WBC และเกล็ดเลือดปกติ ตรวจร่างกายพบตับและม้ามโต และมีการขยายตัวของไขกระดูกที่กะโหลกศีรษะทำให้รูปหน้าเปลี่ยนไป เด็กคนนี้น่าจะเป็นโรคในกลุ่มใด",
            img: "",
            choices: "Thrombophilia///Bleeding disorder///Hemolytic anemia///Vein thrombosis",
            answer: "Hemolytic anemia",
            select: "",
            explain: "อาการและอาการแสดงทั้งหมดชี้ไปที่ภาวะโลหิตจางจากการแตกของเม็ดเลือดแดงชนิดเรื้อรัง (chronic hemolytic anemia) เช่น โรคธาลัสซีเมีย. ตัวเหลือง (Jaundice) เกิดจากบิลิรูบินที่เพิ่มขึ้น, ตับม้ามโตเกิดจากการทำลายเม็ดเลือดแดงที่ผิดปกติและการสร้างเลือดนอกไขกระดูก, และการขยายตัวของไขกระดูก (bone marrow expansion) เป็นการตอบสนองเพื่อสร้างเม็ดเลือดแดงชดเชย.",
            state: false
        },
        {
            problem: "หญิงตั้งครรภ์อายุ 35 ปี มีผิวและเยื่อบุตาซีด เล็บมีลักษณะเป็นรูปช้อน (spoon-shaped) และลิ้นเลี่ยน (atrophic glossitis) ผล CBC พบ HCT 25% และ MCV 70 fL การรักษาที่เหมาะสมที่สุดคืออะไร",
            img: "",
            choices: "Blood transfusion///Prescribed Fe supplement///Prescribed VitC supplement///Prescribed B2 supplement",
            answer: "Prescribed Fe supplement",
            select: "",
            explain: "อาการแสดงทางคลินิก (ซีด, koilonychia, glossitis) และผลเลือด (microcytic anemia; MCV < 80) เป็นลักษณะคลาสสิกของภาวะโลหิตจางจากการขาดธาตุเหล็ก (Iron Deficiency Anemia - IDA). การรักษาหลักคือการให้ธาตุเหล็กเสริม (Fe supplement) เพื่อแก้ไขสาเหตุ. การให้เลือดจะพิจารณาในกรณีที่ซีดมากหรือมีอาการรุนแรง.",
            state: false
        },
        {
            problem: "หญิงอายุ 25 ปี มีประจำเดือนมามากผิดปกติ และมีจุดเลือดออกขนาด 1 มม. ทั่วแขนซึ่งไม่เกี่ยวข้องกับรูขุมขน แพทย์ควรส่งตรวจอะไร และความผิดปกตินี้น่าจะอยู่ในขั้นตอนใดของการห้ามเลือด",
            img: "",
            choices: "CBC, Primary hemostasis///aPTT, Secondary hemostasis///Bleeding time, Primary hemostasis///CBC, Secondary hemostasis",
            answer: "Bleeding time, Primary hemostasis",
            select: "",
            explain: "อาการเลือดออกเป็นจุดเล็กๆ ที่ผิวหนัง (petechiae) และเลือดออกตามเยื่อบุ (mucosal bleeding) เป็นลักษณะของความผิดปกติในกระบวนการห้ามเลือดปฐมภูมิ (Primary hemostasis) ซึ่งเกี่ยวข้องกับการทำงานของเกล็ดเลือดและผนังหลอดเลือด. การทดสอบที่ใช้ประเมินการทำงานในขั้นตอนนี้คือ Bleeding time (และ platelet count จาก CBC). ส่วน aPTT ใช้ประเมิน Secondary hemostasis (coagulation cascade).",
            state: false
        },
        {
            problem: "ใครมีความเสี่ยงต่อการติดเชื้อ schistosomiasis (โรคพยาธิใบไม้ในเลือด) มากที่สุด",
            img: "",
            choices: "คนที่ชอบว่ายน้ำในแหล่งน้ำธรรมชาติ///คนที่ชอบกินหอยดิบ///คนที่ชอบเดินเท้าเปล่า///คนที่ชอบกินผักดิบ",
            answer: "คนที่ชอบว่ายน้ำในแหล่งน้ำธรรมชาติ",
            select: "",
            explain: "โรคพยาธิใบไม้ในเลือดติดต่อโดยการที่ตัวอ่อนระยะติดต่อของพยาธิ (cercariae) ซึ่งอาศัยอยู่ในหอยน้ำจืด ไชเข้าสู่ผิวหนังของคนที่ลงไปสัมผัสน้ำในแหล่งน้ำนั้น เช่น การว่ายน้ำ ทำการเกษตร หรือซักล้าง.",
            state: false
        },
        {
            problem: "อาการแทรกซ้อนที่รุนแรงของเชื้อมาลาเรียชนิดฟัลซิพารัม (falciparum malaria) คือข้อใด",
            img: "",
            choices: "Fever///Anemia///Pulmonary edema///Headache",
            answer: "Pulmonary edema",
            select: "",
            explain: "เชื้อ Plasmodium falciparum สามารถก่อให้เกิดมาลาเรียชนิดรุนแรง (severe malaria) ซึ่งมีภาวะแทรกซ้อนได้หลายอย่าง. ภาวะน้ำท่วมปอด (Pulmonary edema) หรือ Acute Respiratory Distress Syndrome (ARDS) เป็นหนึ่งในภาวะแทรกซ้อนที่อันตรายถึงชีวิต. ส่วนไข้และโลหิตจางเป็นอาการทั่วไปที่พบได้.",
            state: false
        },
        {
            problem: "เชื้อพลาสโมเดียม (Plasmodium) สายพันธุ์ใดที่รุนแรงและอันตรายถึงชีวิตมากที่สุด",
            img: "",
            choices: "Plasmodium vivax///Plasmodium falciparum///Plasmodium knowlesi///Plasmodium malariae",
            answer: "Plasmodium falciparum",
            select: "",
            explain: "Plasmodium falciparum เป็นสายพันธุ์ที่อันตรายที่สุด เนื่องจากสามารถเพิ่มจำนวนในกระแสเลือดได้สูงมาก และทำให้เม็ดเลือดแดงที่ติดเชื้อมีปุ่มเหนียวไปเกาะติดกับผนังหลอดเลือดฝอย (cytoadherence/sequestration) ในอวัยวะสำคัญเช่นสมอง ทำให้เกิด cerebral malaria และภาวะแทรกซ้อนรุนแรงอื่นๆ.",
            state: false
        },
        {
            problem: "คำจำกัดความของ sequestration ในการติดเชื้อมาลาเรียคืออะไร",
            img: "",
            choices: "ระยะพักตัวของมาลาเรียในเซลล์ตับ///ระยะพักตัวของมาลาเรียในเซลล์เม็ดเลือดแดง///การที่เม็ดเลือดแดงที่ติดเชื้อเกาะติดกับผนังหลอดเลือด///การที่เชื้อมาลาเรียเข้าไปในม้าม",
            answer: "การที่เม็ดเลือดแดงที่ติดเชื้อเกาะติดกับผนังหลอดเลือด",
            select: "",
            explain: "Sequestration เป็นกระบวนการที่เม็ดเลือดแดงที่ติดเชื้อ P. falciparum ในระยะเจริญเติบโต (mature forms) ไปเกาะติดกับเซลล์บุผนังหลอดเลือดฝอย (endothelium) ของอวัยวะภายในต่างๆ เพื่อหลีกเลี่ยงการถูกทำลายโดยม้าม ซึ่งเป็นสาเหตุหลักของพยาธิสภาพที่รุนแรงในมาลาเรียชนิดฟัลซิพารัม.",
            state: false
        },
        {
            problem: "ข้อใดถูกต้องสำหรับโรคเท้าช้าง (elephantiasis)",
            img: "",
            choices: "เป็นระยะแรกของโรคพยาธิฟิลาเรียในระบบน้ำเหลือง///เป็นระยะเฉียบพลันของโรคพยาธิฟิลาเรียในระบบน้ำเหลือง///เป็นระยะเรื้อรังของโรคพยาธิฟิลาเรียในระบบน้ำเหลือง///เป็นการติดเชื้อแบคทีเรียแทรกซ้อน",
            answer: "เป็นระยะเรื้อรังของโรคพยาธิฟิลาเรียในระบบน้ำเหลือง",
            select: "",
            explain: "โรคเท้าช้าง (Elephantiasis) เป็นอาการแสดงในระยะเรื้อรัง (chronic stage) ของโรคพยาธิตัวกลมฟิลาเรียในระบบน้ำเหลือง (lymphatic filariasis). เกิดจากการอุดตันของท่อน้ำเหลืองจากการอักเสบเรื้อรังที่เกิดจากพยาธิตัวแก่ ทำให้เกิดอาการบวม แข็ง และหนาตัวของผิวหนังบริเวณนั้นๆ.",
            state: false
        },
        {
            problem: "เชื้อพลาสโมเดียมสายพันธุ์ใดที่จำเป็นต้องใช้เทคนิคระดับโมเลกุล (molecular techniques) เพื่อช่วยในการวินิจฉัยแยกโรคให้แม่นยำ",
            img: "",
            choices: "Plasmodium falciparum///Plasmodium vivax///Plasmodium knowlesi///Plasmodium malariae",
            answer: "Plasmodium knowlesi",
            select: "",
            explain: "Plasmodium knowlesi ซึ่งเป็นเชื้อมาลาเรียที่ปกติพบในลิง สามารถติดเชื้อในคนได้ และมีลักษณะทางสัณฐานวิทยาภายใต้กล้องจุลทรรศน์ที่คล้ายกับ P. falciparum และ P. malariae มาก ทำให้การวินิจฉัยด้วยการดูฟิล์มเลือดอาจผิดพลาดได้ จึงมักต้องใช้เทคนิค PCR เพื่อยืนยันการวินิจฉัย.",
            state: false
        },
        {
            problem: "เชื้อพลาสโมเดียมสายพันธุ์ใดที่มีระยะพักตัว (dormant stage) ในตับ",
            img: "",
            choices: "Plasmodium malariae///Plasmodium vivax///Plasmodium falciparum///Plasmodium knowlesi",
            answer: "Plasmodium vivax",
            select: "",
            explain: "เชื้อ Plasmodium vivax และ Plasmodium ovale เป็นสองสายพันธุ์ที่มีระยะพักตัวในเซลล์ตับที่เรียกว่า 'hypnozoites'. ระยะนี้สามารถคงอยู่ได้นานเป็นเดือนหรือเป็นปี และสามารถกลับมาเจริญใหม่ (reactivate) ทำให้ผู้ป่วยกลับมาเป็นไข้มาลาเรียซ้ำได้ (relapse) แม้ไม่ถูกยุงกัดใหม่.",
            state: false
        },
        {
            problem: "พยาธิสภาพหลักของโรคพยาธิใบไม้ในเลือด (schistosomiasis) เกิดจากอะไร",
            img: "",
            choices: "ปฏิกิริยาของร่างกายต่อพยาธิตัวแก่///ปฏิกิริยาของร่างกายต่อไข่พยาธิ///ปฏิกิริยาของร่างกายต่อตัวอ่อนพยาธิ///สารพิษที่พยาธิปล่อยออกมา",
            answer: "ปฏิกิริยาของร่างกายต่อไข่พยาธิ",
            select: "",
            explain: "ความเสียหายต่ออวัยวะต่างๆ ในโรค schistosomiasis ไม่ได้เกิดจากพยาธิตัวแก่โดยตรง แต่เกิดจากปฏิกิริยาทางภูมิคุ้มกันของร่างกายต่อ 'ไข่' ของพยาธิที่ถูกปล่อยออกมาและไปฝังตัวตามเนื้อเยื่อต่างๆ เช่น ตับ ลำไส้ ทำให้เกิดการอักเสบแบบ granuloma และเกิดพังผืด (fibrosis) ตามมา.",
            state: false
        },
        {
            problem: "สาเหตุของการกลับเป็นซ้ำที่แท้จริง (true relapse) ในโรคมาลาเรียคืออะไร",
            img: "",
            choices: "การติดเชื้อซ้ำจากการถูกยุงกัดใหม่///การกลับมาเจริญใหม่ของเชื้อระยะ hypnozoite///การกลับมาป่วยซ้ำจากการรักษาเชื้อในเลือดไม่หมด///การติดเชื้อสายพันธุ์ดื้อยา",
            answer: "การกลับมาเจริญใหม่ของเชื้อระยะ hypnozoite",
            select: "",
            explain: "True relapse หมายถึงการกลับมามีอาการของมาลาเรียอีกครั้งหลังจากรักษาหายแล้ว โดยเกิดจากการที่เชื้อระยะ hypnozoite ที่พักตัวอยู่ในตับ (พบใน P. vivax และ P. ovale) ถูกกระตุ้นให้กลับมาเจริญเติบโตและปล่อยเชื้อเข้าสู่กระแสเลือด. ส่วนการป่วยซ้ำจากเชื้อในกระแสเลือดที่ยังหลงเหลืออยู่เรียกว่า recrudescence.",
            state: false
        },
        {
            problem: "ใครมีความเสี่ยงที่จะเกิดอาการรุนแรงจากโรคทอกโซพลาสโมซิส (toxoplasmosis) มากที่สุด",
            img: "",
            choices: "เด็ก///ชายที่ได้รับการปลูกถ่ายอวัยวะ///ผู้สูงอายุ///หญิงตั้งครรภ์",
            answer: "ชายที่ได้รับการปลูกถ่ายอวัยวะ",
            select: "",
            explain: "การติดเชื้อ Toxoplasma gondii มักไม่แสดงอาการหรือมีอาการน้อยในคนที่มีภูมิคุ้มกันปกติ. แต่จะมีความรุนแรงและเป็นอันตรายในผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง (immunocompromised) เช่น ผู้ป่วยที่ได้รับยากดภูมิคุ้มกันหลังการปลูกถ่ายอวัยวะ, ผู้ป่วย AIDS, ซึ่งเชื้ออาจลุกลามไปที่สมองทำให้เกิดสมองอักเสบได้.",
            state: false
        }
    ],
    "HL50TBL": [{
        problem: "1. A 65-year-old female presents with fatigue and experiencing a burning sensation at tongue for 2 months. Physical examination showed marked pale conjunctivae, anicteric sclerae, atrophic glossitis, brittle and spoon-shaped nails. Blood smear shown in figure.",
        img: "https://drive.google.com/open?id=1hyGYOZz4Nqh_okInhf6iRF9gDVI656TF&usp=drive_copy",
        choices: "Elevated serum iron levels///Decreased total iron-binding capacity (TIBC)///Decreased ferritin levels///Increased transferrin saturation///Decreased haptoglobin",
        answer: "Decreased ferritin levels",
        select: "",
        explain: "ผู้ป่วยมีอาการและอาการแสดงที่ชัดเจนของภาวะขาดธาตุเหล็ก (Iron Deficiency Anemia - IDA) ได้แก่ อ่อนเพลีย, ลิ้นเลี่ยนแดงอักเสบ (atrophic glossitis), และเล็บรูปช้อน (spoon-shaped nails หรือ koilonychia). ภาพ blood smear จะพบเม็ดเลือดแดงมีขนาดเล็กและติดสีจาง (microcytic, hypochromic anemia). การตรวจทางห้องปฏิบัติการที่จำเพาะที่สุดสำหรับภาวะนี้คือการตรวจระดับ ferritin ในเลือด ซึ่งจะลดลงอย่างมาก เนื่องจาก ferritin เป็นโปรตีนที่ใช้เก็บสะสมธาตุเหล็กในร่างกาย. ส่วนค่า TIBC จะสูงขึ้น และ transferrin saturation จะลดลง.",
        state: false
    }, {
        problem: "2. A 3-year-old Thai girl presented for fatigue and weakness. Physical examination: mild jaundice and hepatosplenomegaly. CBC: Hb 6.5 g/dL, Hct 19 %, MCV 65 fL. WBC and platelets are normal. Blood smear as shown in the picture. Hemoglobin typing: Hb A2F. There is no evidence of abnormal bleeding. What is the most likely diagnosis?",
        img: "https://drive.google.com/open?id=1CL07Kx4MpNfqOZIKc1Kpt9jv__Tm5JgI&usp=drive_copy",
        choices: "Alpha thalassemia trait///Beta thalassemia trait///Homozygous beta thalassemia///Autoimmune hemolytic anemia (AIHA)///Hereditary ovalocytosis",
        answer: "Homozygous beta thalassemia",
        select: "",
        explain: "เด็กหญิงไทยมีภาวะซีดรุนแรงชนิดเม็ดเลือดแดงขนาดเล็ก (severe microcytic anemia) ร่วมกับอาการตัวเหลืองและตับม้ามโต ซึ่งบ่งชี้ถึงภาวะเม็ดเลือดแดงแตกเรื้อรัง. ผลการตรวจชนิดฮีโมโกลบิน (Hemoglobin typing) พบเพียง Hb A2 และ Hb F โดยไม่พบ Hb A เลย แสดงว่าร่างกายไม่สามารถสร้างสายเบต้าโกลบิน (beta-globin chain) ได้เลย ซึ่งเป็นลักษณะเฉพาะของโรค Homozygous beta thalassemia หรือที่เรียกว่า Beta-thalassemia major (Cooley's anemia).",
        state: false
    }, {
        problem: "3. A 25-year-old male presents with fatigue 2 months. Physical examination: jaundice, pale, splenomegaly. Laboratory: CBC Hb 8.4 g/dL, Hct 25.2 %, WBC 7,300 /cu.mm, platelet 100,000 /cu.mm, reticulocyte count 5%. Blood smear shown in figure. The patient also has a family history of similar symptoms. Which disorder is most likely responsible for these symptoms?",
        img: "https://drive.google.com/open?id=1v17BaDiCkp58EgPpbyjW_RbxfCUgumT4&usp=drive_copy",
        choices: "Hereditary spherocytosis///G6PD deficiency///Sickle cell disease///Thalassemia///Autoimmune hemolytic anemia",
        answer: "Hereditary spherocytosis",
        select: "",
        explain: "ผู้ป่วยมีอาการของภาวะเม็ดเลือดแดงแตกเรื้อรัง (chronic hemolysis) ได้แก่ ซีด, เหลือง, ม้ามโต และมี reticulocyte count สูงเพื่อชดเชย. ภาพ blood smear แสดงเม็ดเลือดแดงรูปร่างกลม หนา และไม่มีรอยบุ๋มตรงกลาง (lacking central pallor) ซึ่งเป็นลักษณะของ Spherocytes. การมีประวัติคนในครอบครัวมีอาการคล้ายกันทำให้ยิ่งสนับสนุนการวินิจฉัยโรคทางพันธุกรรม. ลักษณะทั้งหมดนี้เข้าได้กับโรค Hereditary Spherocytosis มากที่สุด.",
        state: false
    }, {
        problem: "4. A 60-year-old female with a history of rheumatoid arthritis presents with fatigue. Physical examination: weakness, pale, anicteric sclerae, multiple joints swelling. Laboratory test: CBC Hb 8.5 g/dL, Hct 25.5 %, WBC 7,300 /cu.mm, platelet 150,000 /cu.mm, MCV 81 fL. Which of the following molecules should be increased in the serum?",
        img: "",
        choices: "Erythropoietin///Transferrin saturation///Hepcidin///Haptoglobin///Hemopexin",
        answer: "Hepcidin",
        select: "",
        explain: "ผู้ป่วยมีประวัติเป็นโรคข้ออักเสบรูมาตอยด์ (Rheumatoid arthritis) ซึ่งเป็นโรคที่มีการอักเสบเรื้อรัง (chronic inflammatory disease). ภาวะซีดที่พบร่วมกับโรคเหล่านี้เรียกว่า Anemia of Chronic Disease (ACD) หรือ Anemia of Inflammation. กลไกสำคัญเกิดจากการอักเสบไปกระตุ้นให้ตับสร้างโปรตีนที่ชื่อว่า Hepcidin เพิ่มขึ้น. Hepcidin จะไปยับยั้งการดูดซึมธาตุเหล็กจากลำไส้และขัดขวางการนำเหล็กที่สะสมในร่างกายออกมาใช้ ทำให้เกิดภาวะซีดแม้ว่าจะมีธาตุเหล็กสะสมในร่างกายเพียงพอก็ตาม.",
        state: false
    }, {
        problem: "5. A 55-year-old vegetarian male presents with fatigue, pale skin, and a sore, red tongue for 1 month. The patient also reports experiencing tingling and numbness in the extremities. Blood smear shown in figure. Which of the following nutrition deficiencies is most likely responsible for these symptoms?",
        img: "https://drive.google.com/open?id=1btWgwuuh-b4xx88osiZFc3mmj-7YHkit&usp=drive_copy",
        choices: "Protein deficiency///Vitamin C deficiency///Vitamin B9 deficiency///Vitamin B12 deficiency///Iron deficiency",
        answer: "Vitamin B12 deficiency",
        select: "",
        explain: "ผู้ป่วยเป็นมังสวิรัติ (vegetarian) ซึ่งมีความเสี่ยงต่อการขาดวิตามิน B12 เนื่องจากวิตามินนี้พบได้ในผลิตภัณฑ์จากสัตว์เป็นหลัก. อาการที่ปรากฏ ได้แก่ อาการซีด, ลิ้นอักเสบแดง (glossitis), และที่สำคัญคืออาการทางระบบประสาท เช่น ชาตามปลายมือปลายเท้า (tingling and numbness). ภาพ blood smear จะพบเม็ดเลือดแดงขนาดใหญ่ (macrocytic anemia) และ hypersegmented neutrophils. การมีอาการทางระบบประสาทร่วมด้วยเป็นลักษณะเด่นที่ช่วยแยกภาวะขาดวิตามิน B12 ออกจากภาวะขาดโฟเลต (Vitamin B9).",
        state: false
    }, {
        problem: "6. A 30-year-old woman presents with anemia, jaundice, and splenomegaly. Laboratory tests reveal a positive direct antiglobulin test (Coombs' test) and the presence of IgG antibodies on the surface of her red blood cells. Anti-nuclear antibody (ANA) negative, Anti- dsDNA negative. Blood smear as shown in the picture. Which type of anemia is most likely responsible for these symptoms?",
        img: "https://drive.google.com/open?id=1hOCF14n5rgGqDVhiccIfUWiqFGskNWcA&usp=drive_copy",
        choices: "Warm antibody AIHA///G6PD deficiency///Cold agglutinin disease///Paroxysmal nocturnal hemoglobinuria///Thalassemia",
        answer: "Warm antibody AIHA",
        select: "",
        explain: "การที่ผล Direct antiglobulin test (DAT หรือ Coombs' test) ให้ผลบวก หมายความว่ามีแอนติบอดีมาจับอยู่บนผิวของเม็ดเลือดแดงของผู้ป่วย ทำให้เม็ดเลือดแดงถูกทำลายและเกิดภาวะซีด. ภาวะนี้เรียกว่า Autoimmune Hemolytic Anemia (AIHA). การตรวจพบว่าเป็นแอนติบอดีชนิด IgG ซึ่งทำงานได้ดีที่สุดที่อุณหภูมิร่างกาย (37°C) จะบ่งชี้ว่าเป็นชนิด Warm antibody AIHA.",
        state: false
    }, {
        problem: "7. A 70-year-old woman with type O blood receives a unit of packed red cell component before surgery. She develops fever (39°C), chills, and back pain shortly after the transfusion is started. Physical examination: normal breath sound. Investigations: CBC: Hb 7 g/dL, WBC 15,000 cells/μL, Plt: 80,000 cells/μL. Coagulation profile: Prolong PT and aPTT, elevated LDH. Blood bank investigation: Direct anti-globulin test (DAT): Positive. Which of the following is the most likely diagnosis?",
        img: "",
        choices: "Delayed hemolytic transfusion reaction///Acute hemolytic transfusion reaction (AHTR)///Transfusion-related acute lung injury (TRALI)///Bacteria contamination///Febrile Nonhemolytic Transfusion Reaction (FNHTR)",
        answer: "Acute hemolytic transfusion reaction (AHTR)",
        select: "",
        explain: "การเกิดไข้, หนาวสั่น, และปวดหลังอย่างรวดเร็วระหว่างการให้เลือด เป็นอาการคลาสสิกของปฏิกิริยาการให้เลือดที่รุนแรง. การตรวจพบหลักฐานของเม็ดเลือดแดงแตกในหลอดเลือด (intravascular hemolysis) เช่น LDH สูง, และภาวะเลือดแข็งตัวผิดปกติทั่วร่างกาย (DIC) ที่แสดงออกด้วยเกล็ดเลือดต่ำและค่า PT, aPTT ยาวขึ้น บ่งชี้อย่างชัดเจนถึง Acute Hemolytic Transfusion Reaction (AHTR). ซึ่งเป็นภาวะฉุกเฉินที่มักเกิดจากความไม่เข้ากันของหมู่เลือด ABO.",
        state: false
    }, {
        problem: "8. A 30-year-old female presents with fever and fatigue for 3 days. Physical examination: Confusion, weakness, purpura on the skin. Laboratory: CBC Hb 7 g/dL, Hct 27%, WBC 12,000 cell/mm³, platelet 20,000 /mm³, normal PT, aPTT, elevated levels of LDH, decreased haptoglobin levels. One week later, a special test showed decrease serum ADAMTS13. Blood smear shows in the figure. What condition is most likely responsible for these symptoms?",
        img: "https://drive.google.com/open?id=1HLQlRRRCcfRJf1WKTx1Dn9CNBuzd2PAe&usp=drive_copy",
        choices: "Immune thrombocytopenic purpura (ITP)///Hemolytic uremic syndrome (HUS)///Thrombotic thrombocytopenic purpura (TTP)///Disseminated intravascular coagulation (DIC)///Malaria infection",
        answer: "Thrombotic thrombocytopenic purpura (TTP)",
        select: "",
        explain: "ผู้ป่วยมีอาการครบ 5 อย่าง (pentad) ของโรค Thrombotic Thrombocytopenic Purpura (TTP) คือ 1) เกล็ดเลือดต่ำ (thrombocytopenia) ทำให้มี purpura, 2) ภาวะซีดจากเม็ดเลือดแดงแตกชนิด microangiopathic (MAHA) ซึ่งจะพบ schistocytes ใน blood smear และ LDH สูง, 3) อาการทางระบบประสาท (confusion), 4) ไตทำงานผิดปกติ, และ 5) ไข้. การตรวจพบระดับเอนไซม์ ADAMTS13 ที่ลดลงเป็นการยืนยันการวินิจฉัย TTP.",
        state: false
    }, {
        problem: "9. A 60-year-old female presents with fever and fatigue for 2 weeks. Physical examination: BT 38 C, pale conjunctivae, anicteric sclerae, petechiae at all extremities, no hepatosplenomegaly. Laboratory tests: CBC Hb 8, Hct 24 %, WBC 3,300 cell/mm³, PMN 40%, Lymphocyte 50%, Monocyte 10%, platelet 20,000 /mm³. What is most likely diagnosis?",
        img: "",
        choices: "Anemic of chronic disease///Hemolytic anemia///Aplastic anemia///Acute leukemia///Megaloblastic anemia",
        answer: "Acute leukemia",
        select: "",
        explain: "ผู้ป่วยมีภาวะเม็ดเลือดต่ำทั้งสามชนิด (pancytopenia) ได้แก่ ซีด (Hb 8), เม็ดเลือดขาวต่ำ (WBC 3,300), และเกล็ดเลือดต่ำ (platelet 20,000). อาการไข้, อ่อนเพลีย, และจุดเลือดออก (petechiae) ที่เกิดจากเกล็ดเลือดต่ำ เป็นอาการที่พบบ่อยในโรคของไขกระดูก. ในผู้ใหญ่ที่มาด้วยภาวะ pancytopenia เฉียบพลัน โรคที่ต้องนึกถึงเป็นอันดับแรกคือ Acute leukemia ซึ่งเซลล์มะเร็งเม็ดเลือดขาว (blast cells) เพิ่มจำนวนขึ้นในไขกระดูกจนไปเบียดบังการสร้างเซลล์เม็ดเลือดปกติ.",
        state: false
    }, {
        problem: "10. A 35-year-old male presents with symptoms of fatigue, dark urine, abdominal pain. The symptoms showed on and off for 2 months. Laboratory tests reveal hemolytic anemia, elevated LDH levels. Flow cytometry showed decreased CD55 and CD59 on red blood cells. What is the diagnosis of this patient?",
        img: "",
        choices: "Hereditary spherocytosis///Sickle cell anemia///Paroxysmal nocturnal hemoglobinuria (PNH)///Autoimmune hemolytic anemia (AIHA)///G6PD deficiency",
        answer: "Paroxysmal nocturnal hemoglobinuria (PNH)",
        select: "",
        explain: "อาการคลาสสิกของโรค Paroxysmal Nocturnal Hemoglobinuria (PNH) ประกอบด้วย ภาวะซีดจากเม็ดเลือดแดงแตกเรื้อรัง (chronic hemolysis), ภาวะลิ่มเลือดอุดตัน (thrombosis), และไขกระดูกทำงานล้มเหลว. อาการปัสสาวะสีเข้ม (hemoglobinuria) โดยเฉพาะในตอนเช้า เป็นที่มาของชื่อโรค. การวินิจฉัยที่แม่นยำที่สุดคือการใช้เทคนิค Flow cytometry เพื่อตรวจหาการขาดโปรตีนบนผิวเซลล์เม็ดเลือดที่เรียกว่า GPI-anchored proteins เช่น CD55 และ CD59.",
        state: false
    }, {
        problem: "1. An 18-month-old boy is brought to a hospital for routine vaccination. Physical examination: normal body weight and height with markedly pale conjunctivae and anicteric sclerae. No hepatosplenomegaly. CBC: Hb 5.7 g/dL Hct 16% WBC 7,500 /cu.mm (PMN 60% L 40%), platelet 650,000 /cu.mm MCV 48 fL MCH 14 pg MCHC 28 g/dL RDW 18%, reticulocyte count 0.8%. Which of the following is the most likely mechanism of anemia in this patient?",
        img: "",
        choices: "Ineffective erythropoiesis///Decreased RBC production///Intravascular hemolysis///Extravascular hemolysis///Extramedullary hematopoiesis",
        answer: "Decreased RBC production",
        select: "",
        explain: "เด็กมีภาวะซีดรุนแรงชนิดเม็ดเลือดแดงขนาดเล็ก (severe microcytic anemia). แต่ค่า reticulocyte count ซึ่งเป็นตัวบ่งชี้การสร้างเม็ดเลือดแดงใหม่จากไขกระดูกกลับมีค่าต่ำมาก (0.8%). ค่าที่ต่ำเช่นนี้ในขณะที่มีภาวะซีดรุนแรง (inappropriately low response) บ่งชี้ว่าไขกระดูกไม่สามารถสร้างเม็ดเลือดแดงออกมาได้เพียงพอ. ภาวะเกล็ดเลือดสูง (thrombocytosis) เป็นสิ่งที่พบร่วมได้บ่อยในภาวะขาดธาตุเหล็กอย่างรุนแรง. ดังนั้นกลไกหลักคือการสร้างเม็ดเลือดแดงลดลง (Decreased RBC production).",
        state: false
    }, {
        problem: "2. A 2-year-old boy presents with acute fever and dyspnea. Physical examination: pale conjunctivae with icteric sclerae, injected pharynx, and splenomegaly. CBC: Hb 7 g/dL, Hct 20%, MCV 45 fL, MCH 24 pg, MCHC 28 g/dL, RDW 27%, WBC 7,500 /cu.mm, platelet 300,000 /cu.mm and reticulocyte count 10%. Supravital stain: positive inclusion bodies. The antenatal laboratory results are as follows; Mother: Hb 10.8 g/dL MCV 55 fL Hb typing EE, E 85%. Father: Hb 13.7 g/dL MCV 64 fL Hb typing A2A, A2 2.4%. Which of the following is the diagnosis of this patient?",
        img: "",
        choices: "Hemoglobin H disease///Hemoglobin H disease with homozygous hemoglobin E///Hemoglobin H disease with heterozygous hemoglobin E///Beta thalassemia hemoglobin E (β⁰/βE)///Beta thalassemia hemoglobin E (β+/βE)",
        answer: "Hemoglobin H disease with heterozygous hemoglobin E",
        select: "",
        explain: "เด็กมีภาวะซีดรุนแรงและเม็ดเลือดแดงแตก. Supravital stain พบ inclusion bodies ซึ่งเป็นลักษณะของ Hemoglobin H (HbH). HbH disease เกิดจากการขาด alpha-globin gene 3 ยีน (--/-α). จากข้อมูลพ่อแม่: แม่มีภาวะ Homozygous Hb E (βE/βE) ดูจาก MCV 55 และ Hb E 85%. พ่อมี MCV 64 และ Hb typing ปกติ เข้าได้กับ α-thalassemia-1 trait (--/αα). ถ้าแม่เป็นพาหะ α-thalassemia-2 trait (-α/αα) ร่วมด้วย (พบได้บ่อย) ลูกสามารถรับยีน -- จากพ่อ และ -α จากแม่ ทำให้เป็น HbH disease (--/-α). และลูกจะได้รับยีน βE จากแม่มา 1 ยีน ทำให้เป็น heterozygous hemoglobin E ด้วย. จึงสรุปได้ว่าเป็น Hemoglobin H disease with heterozygous hemoglobin E.",
        state: false
    }, {
        problem: "3. A mother brings her 3-year-old boy to a hospital concerning his low body weight and height despite has been well-fed with nourishing food. Physical examination: frontal bossing and flat nasal bridge, moderate pallor, mild jaundice, and hepatosplenomegaly. CBC: Hb 6.7 g/dL, Hct 18%, MCV 49 fL, MCH 23 pg, MCHC 28 g/dL, RDW 28%, WBC 8,500 /cu.mm, platelet 250,000 /cu.mm and reticulocyte count 12.5%. Hemoglobin typing EFA2 E 35% F60% A2 5%. Which of the following is the major mechanism of anemia in this patient?",
        img: "",
        choices: "Decreased heme production from iron deficiency///Shortened RBC life span from intravascular hemolysis///Destruction of red cells by over-activated splenic macrophage///Ineffective erythropoiesis caused by excess unpaired alpha globin molecules///Decreased number of RBC progenitors due to absent beta globin",
        answer: "Ineffective erythropoiesis caused by excess unpaired alpha globin molecules",
        select: "",
        explain: "ลักษณะใบหน้า (frontal bossing), ตับม้ามโต, และภาวะซีดรุนแรง เป็นลักษณะของโรคธาลัสซีเมียชนิดรุนแรง. ผล Hb typing ไม่พบ HbA เลย แต่พบ HbE 35% และ HbF 60% ซึ่งเป็นลักษณะเฉพาะของ β-thalassemia/Hb E disease (β⁰/βE). พยาธิกำเนิดหลักของ β-thalassemia คือการที่ร่างกายสร้างสาย beta-globin ไม่ได้หรือได้น้อยมาก ทำให้มีสาย alpha-globin ที่ไม่มีคู่เหลืออยู่เป็นจำนวนมาก. สาย alpha-globin ที่เกินมานี้จะไปจับตัวกันและตกตะกอนภายในเซลล์ตัวอ่อนเม็ดเลือดแดงในไขกระดูก ทำให้เซลล์เหล่านี้ตายก่อนที่จะเจริญเป็นเม็ดเลือดแดงที่สมบูรณ์. กระบวนการนี้เรียกว่า Ineffective erythropoiesis ซึ่งเป็นกลไกหลักที่ทำให้เกิดภาวะซีด.",
        state: false
    }, {
        problem: "4. The expecting parents visit antenatal clinic for the screening of thalassemia carrier status. The results are shown below. Mother: Hb 11.5, MCV 65, Hemoglobin typing A2A, A2 5%, PCR for alpha- thal 1 Positive. Father: Hb 13.5, MCV 78, Hemoglobin typing EA, E 21%, PCR for alpha- thal 1 Positive. Which of the following is the most severe thalassemia disease that could be occurring in their baby?",
        img: "https://drive.google.com/open?id=1YAH28kde2HRf-ymS8vdq0RC-MXFTkPQm&usp=drive_copy",
        choices: "Beta thalassemia major///Homozygous hemoglobin E///Beta thalassemia hemoglobin E///Hemoglobin Bart's hydrops fetalis///Hemoglobin H disease with Heterozygous hemoglobin E",
        answer: "Hemoglobin Bart's hydrops fetalis",
        select: "",
        explain: "วิเคราะห์ผลเลือดของพ่อแม่: แม่มี MCV ต่ำ, Hb A2 สูง (5%) และ PCR for alpha-thal 1 positive แสดงว่าเป็นพาหะของทั้ง β-thalassemia และ α-thalassemia-1 (--/αα). พ่อมี Hb E (EA, E 21%) และ PCR for alpha-thal 1 positive แสดงว่าเป็นพาหะของทั้ง Hb E และ α-thalassemia-1 (--/αα). ความเสี่ยงที่รุนแรงที่สุดที่จะเกิดกับลูกคือการที่ลูกได้รับยีน α-thalassemia-1 (--) มาจากทั้งพ่อและแม่ ทำให้มี genotype เป็น (--/--) ซึ่งไม่มียีน alpha-globin เหลืออยู่เลย. ทารกจะไม่สามารถสร้างฮีโมโกลบินที่ใช้หลังคลอดได้เลย ทำให้เกิดภาวะบวมน้ำรุนแรงและเสียชีวิตในครรภ์หรือหลังคลอดไม่นาน เรียกว่า Hemoglobin Bart's hydrops fetalis ซึ่งเป็นภาวะที่รุนแรงที่สุด.",
        state: false
    }, {
        problem: "5. A 12-year-old girl presents with progressive fatigue for three months. She was diagnosed with hemoglobin H disease with hemoglobin Constant Spring at the age of six years old. She receives red cell transfusions every 1-2 months when she has symptoms of anemia. Her physical examination reveals moderately pale conjunctivae with mildly icteric sclerae and marked splenomegaly. CBC Hb 7.5 g/dL Hct 22% WBC 5,600 /cu.mm (N 70% L 30%) platelet 230,000 /cu.mm MCV 58 fL MCH 18 pg MCHC 29 g/dL RDW 26%. Which of the following is the most likely abnormal laboratory finding found in this patient?",
        img: "",
        choices: "High serum transferrin iron binding capacity (TIBC)///High serum haptoglobin///High hemoglobin F level///High serum hepcidin///High serum ferritin",
        answer: "High serum ferritin",
        select: "",
        explain: "ผู้ป่วยเป็นโรคธาลัสซีเมียชนิด HbH-CS ซึ่งเป็นโรคที่มีการแตกของเม็ดเลือดแดงเรื้อรัง และได้รับเลือดเป็นประจำ. ทั้งสองภาวะนี้ (chronic hemolysis และ multiple transfusions) เป็นสาเหตุสำคัญที่ทำให้เกิดภาวะธาตุเหล็กเกิน (iron overload) เนื่องจากร่างกายไม่สามารถขับธาตุเหล็กส่วนเกินออกไปได้อย่างมีประสิทธิภาพ. ธาตุเหล็กที่เกินมาจะถูกเก็บสะสมในร่างกายในรูปของ Ferritin. ดังนั้น การตรวจเลือดที่จะพบว่าผิดปกติอย่างชัดเจนในผู้ป่วยรายนี้คือระดับ Serum Ferritin ที่สูงมาก.",
        state: false
    }, {
        problem: "1. A 48-year-old male came to the hospital with complaint of abdominal discomfort at left upper abdomen for 3 months. PE: Liver: impalpable with 9 cm of liver span. Spleen: 12 cm below left costal margin (LCM) CBC: Hb 13, Hct 40 %, WBC 200,000 cells/mm³, PMN 50%, Myelocyte 15%, Metamyelocyte 10%, Basophil 7%, Lymphocyte 15%, Eosinophil 2%, Blast 1%, Platelets: 380,000 cells/mm³. Blood smear as figure. Which one of the following is the cytogenetic result that expected to see in this disease?",
        img: "https://drive.google.com/open?id=1aEFRHrjeWTVPausYnwvoc2aRBCcoVqVz&usp=drive_copy",
        choices: "t(15;17)(q24.1;q21.2)///t(9;22)(q34;q11)///t(14;18)(q32;q21)///t(11;14)(q13;q32)///t(8;14)(q24;q32)",
        answer: "t(9;22)(q34;q11)",
        select: "",
        explain: "ผู้ป่วยมีอาการแน่นท้องจากม้ามโตมาก (massive splenomegaly). ผลเลือดพบเม็ดเลือดขาวสูงมาก (marked leukocytosis) โดยพบเซลล์ตัวอ่อนสาย myeloid หลายระยะ (myelocytes, metamyelocytes) ปนออกมาในเลือด หรือที่เรียกว่า 'left shift' และที่สำคัญคือมี Basophil สูง (basophilia). ลักษณะทางคลินิกและผลเลือดทั้งหมดนี้เป็นลักษณะคลาสสิกของโรค Chronic Myeloid Leukemia (CML). โรค CML มีความผิดปกติทางพันธุกรรมที่จำเพาะคือ Philadelphia chromosome ซึ่งเกิดจากการสลับที่ของโครโมโซมคู่ที่ 9 และ 22 หรือ t(9;22)(q34;q11).",
        state: false
    }, {
        problem: "2. A 72-year-old man presented to the hospital with fatigue. CBC showed anemia and leukopenia. Blood smear showed the significant number of the abnormal cells as figure below. What is the most-likely diagnosis of this case?",
        img: "https://drive.google.com/open?id=11pzKBuibcPf-8vHhvj0EnbkcBV4urhVA&usp=drive_copy",
        choices: "Polycythemia vera///Primary myelofibrosis///Myelodysplastic neoplasm///Acute myelogenous leukemia///Chronic myelogenous leukemia",
        answer: "Myelodysplastic neoplasm",
        select: "",
        explain: "ผู้ป่วยสูงอายุมาด้วยอาการอ่อนเพลียจากภาวะซีดและเม็ดเลือดขาวต่ำ. ภาพ blood smear แสดงลักษณะของ neutrophil ที่มีนิวเคลียสผิดปกติ คือมีเพียง 2 lobes และเชื่อมกันด้วยสายเล็กๆ (bilobed nucleus) ซึ่งเรียกว่า Pelger-Huët anomaly. การพบเซลล์ที่มีรูปร่างผิดปกติ (dysplasia) เช่นนี้ ร่วมกับภาวะเม็ดเลือดต่ำ (cytopenias) ในผู้สูงอายุ เป็นลักษณะที่บ่งชี้ถึงกลุ่มโรค Myelodysplastic Neoplasm (MDS) หรือ Myelodysplastic Syndrome ซึ่งเป็นโรคความผิดปกติของเซลล์ต้นกำเนิดในไขกระดูก.",
        state: false
    }, {
        problem: "3. A 70-year-old man's annual checkup revealed leukocytosis. The absolute abnormal cell count (as the picture of blood smear below) is 42,000/mm³. Further investigation of flow cytometry shows positive for CD20+, CD5+, CD23+, CD10-, TdT-. 1) Mantle cell 2) Naïve B-cells 3) Memory B-cell 4) Precursor B-cell 5) Germinal center B-cell. Which is the postulate origin of the neoplastic cells in this case?",
        img: "https://drive.google.com/open?id=1uObdrVJuHoslIoY-XfASGDJAlMfoing2&usp=drive_copy",
        choices: "1,2///1,5///2,3///2,4///3,5",
        answer: "2,3",
        select: "",
        explain: "ผู้ป่วยสูงอายุมีจำนวน lymphocyte สูงมาก และ blood smear พบเซลล์ลักษณะ mature lymphocytes และ smudge cells ซึ่งเป็นลักษณะของ Chronic Lymphocytic Leukemia (CLL). ผล Flow cytometry ที่แสดง CD20+, CD5+, CD23+ เป็น immunophenotype ที่จำเพาะสำหรับ CLL. สำหรับต้นกำเนิดของเซลล์มะเร็งใน CLL เชื่อว่ามาจากเซลล์ B-lymphocyte ที่เจริญเต็มที่แล้ว (mature B-cell) ซึ่งอาจเป็นได้ทั้ง Naïve B-cells (เซลล์ที่ยังไม่เคยถูกกระตุ้นด้วยแอนติเจน) หรือ Memory B-cells (เซลล์ที่เคยถูกกระตุ้นแล้ว). ดังนั้นข้อ 2 และ 3 จึงเป็นคำตอบที่ครอบคลุมที่สุด.",
        state: false
    }, {
        problem: "4. A 12-year-old boy called his primary care physician, He initially complained of having 'white spots' on his right tonsil. The doctor prescribed him amoxicillin immediately. On the third day, the patient developed erythematous maculopapular rash entire body then he came to the clinic for further evaluation. On physical examination, His temperature was 38.0°C. The patient had two inflamed lymph nodes below the jaw, an extensive membrane covering the right tonsil with hepatosplenomegaly. No improvement was seen on the tonsils. CBC showed Hct 42% WBC 18000 cells/mm³ PMN 50% L 47% Mo3% Platelet 250000 cells/mm³. Liver enzymes are increasing. Blood smear as in the picture. What is the most likely appropriate management?",
        img: "https://drive.google.com/open?id=1jfUmLmhyYqFVsFyZbU6oREJhyoVnXeTK&usp=drive_copy",
        choices: "Throat swab culture///Bone marrow aspiration///Hemoculture///Anti VCA IgM///Viral hepatitis B profile",
        answer: "Anti VCA IgM",
        select: "",
        explain: "เด็กมีอาการไข้, เจ็บคอ, ต่อมน้ำเหลืองโต, ตับม้ามโต และ blood smear พบ atypical lymphocytes. ประวัติที่สำคัญอย่างยิ่งคือการได้รับยา amoxicillin แล้วเกิดผื่นแดงทั่วตัว (maculopapular rash) ซึ่งเป็นปฏิกิริยาที่พบได้บ่อยมากในผู้ป่วย Infectious Mononucleosis (IM) ที่เกิดจากเชื้อ Epstein-Barr Virus (EBV). ดังนั้น การวินิจฉัยที่เหมาะสมที่สุดคือการตรวจเลือดเพื่อยืนยันการติดเชื้อ EBV ในระยะเฉียบพลัน ซึ่งก็คือการตรวจหา Anti-Viral Capsid Antigen (VCA) IgM.",
        state: false
    }, {
        problem: "5. A 55-year-old male presents to the doctor with new symptoms of exertional fatigue. pain in the left hip and difficulty walking for 2 months. He is otherwise well with no significant past medical history. CBC: Hct 23 % WBC 9000 cells/mm3 PMN 65% L30% Mo 5% Platelet. 400000 cells/mm³. Bone marrow aspiration as shown in the figure. BUN 54 mg/dL Creatinine 2.7 mg/dL. What are the most benefit further investigations? 1. Serum protein electrophoresis 2. Serum calcium 3. Philadelphia chromosome 4. Heterophile antibody 5. Flow cytometry 6. Bone survey",
        img: "https://drive.google.com/open?id=1p6Ev4ZyBxT1lkigkKwU9SrQT9VmTf_tJ&usp=drive_copy",
        choices: "1,2,3///2,3,4///4,5,6///1,2,6///3,5,6",
        answer: "1,2,6",
        select: "",
        explain: "ผู้ป่วยมีอาการที่เข้าได้กับเกณฑ์การวินิจฉัยของ Multiple Myeloma (MM) หรือ CRAB criteria: C - Calcium (ต้องตรวจ), R - Renal failure (มีภาวะไตวายจาก BUN/Cr ที่สูง), A - Anemia (ซีด, Hct 23%), B - Bone lesions (ปวดสะโพก). ภาพไขกระดูก (bone marrow aspiration) ที่แสดงเซลล์พลาสมา (plasma cells) จำนวนมากเป็นการยืนยันการวินิจฉัย. การสืบค้นเพิ่มเติมที่สำคัญสำหรับ MM ได้แก่ 1. Serum protein electrophoresis เพื่อตรวจหา M-protein, 2. Serum calcium เพื่อดูภาวะแคลเซียมในเลือดสูง, และ 6. Bone survey หรือ x-ray กระดูกทั่วร่างกายเพื่อหา Lytic bone lesions.",
        state: false
    }, {
        problem: "6. A 45-year-old female came up with high grade fever and productive cough for 2 days. After admission she developed stuporus, epistaxis and coffee ground vomiting. BP 80/50 mmHg, PR 120/min, RR 24 /min. CBC: Hct 43 % WBC 12,000 cell/mm³, Platelet 250,000 cell/mm³ PMN 79%, Lymphocyte: 11%, band form10%. Blood smear: as picture. Urinalysis: numerous white cells. What is the most likely diagnosis?",
        img: "https://drive.google.com/open?id=10rdJOm0IbD1uB8sLz1PgQ59NmDfZuwSD&usp=drive_copy",
        choices: "ALL///CML///EBV///Sepsis///AML",
        answer: "Sepsis",
        select: "",
        explain: "ผู้ป่วยมีอาการของการติดเชื้อรุนแรง (ไข้สูง, ไอ) ซึ่งลุกลามจนเกิดภาวะแทรกซ้อนที่รุนแรง ได้แก่ ภาวะช็อก (septic shock) จากความดันโลหิตต่ำและอาการซึมลง, และอาจมีภาวะเลือดแข็งตัวผิดปกติ (DIC) จากอาการเลือดออก. ผลเลือดพบเม็ดเลือดขาวสูงโดยมี neutrophil และ band form เพิ่มขึ้น (left shift). ภาพ blood smear พบ toxic granules ใน neutrophil ซึ่งเป็นลักษณะที่บ่งชี้ถึงการติดเชื้อแบคทีเรียที่รุนแรง. ทั้งหมดนี้รวมกันเป็นภาพของภาวะติดเชื้อในกระแสเลือด หรือ Sepsis.",
        state: false
    }, {
        problem: "7. A 37-year-old healthy man without known underlying disease has the annual health check up at the hospital. 3. CBC: Hct 42 %, Hb 14 g/dL, WBC 8400 cell/mm³ (neutrophil 54%, lymphocyte 22%, monocyte 10%, eosinophil 13%, basophil 1%), and the platelets count is adequate. What should be a further investigation?",
        img: "",
        choices: "Bone marrow biopsy///Stool exam///Chest x-ray///Iron study///Skin prick test",
        answer: "Stool exam",
        select: "",
        explain: "ผลเลือดของผู้ป่วยรายนี้พบว่ามีจำนวน eosinophil สูงผิดปกติ (Eosinophilia) ที่ 13%. ในคนแข็งแรงที่ไม่มีอาการอื่นๆ สาเหตุของ Eosinophilia ที่พบบ่อยและควรนึกถึงเป็นอันดับแรกๆ คือการติดเชื้อพยาธิ. ดังนั้น การสืบค้นเบื้องต้นที่ง่าย, ไม่รุกล้ำ, และเหมาะสมที่สุดคือการตรวจอุจจาระเพื่อหาไข่พยาธิ (Stool examination for parasite ova).",
        state: false
    }, {
        problem: "8. A 29-year-old male came to the hospital due to a high-grade fever with acute severe multiple- joint pain for 2 days. Physical examination revealed a body temperature of 39.8 C, maculopapular rash, and joint effusions with tenderness of palpation. CBC revealed WBC 2,480 cell/mm³ (neutrophil 50%, lymphocyte 25%, monocyte 20%, eosinophil 3%, basophil 2%). A blood smear was shown in the picture. Other investigations are pending for the results. What is the most likely cause of his symptoms?",
        img: "https://drive.google.com/open?id=1VWjZ003QJETD25ySIbCKyCxbv6JDsfaH&usp=drive_copy",
        choices: "Bacterial arthritis///Systemic viral infection///Non-inflammatory arthritis///Gonococcal arthritis///Tuberculous arthritis",
        answer: "Systemic viral infection",
        select: "",
        explain: "ผู้ป่วยมีอาการไข้สูงเฉียบพลัน, ปวดข้อหลายข้อ (polyarthritis), และผื่น. ผลเลือดพบเม็ดเลือดขาวต่ำ (leukopenia) และ blood smear พบเซลล์เม็ดเลือดขาวผิดปกติที่เรียกว่า atypical lymphocytes. กลุ่มอาการเช่นนี้เป็นลักษณะที่พบได้บ่อยมากในการติดเชื้อไวรัสทั่วร่างกาย (Systemic viral infection) เช่น ไข้เลือดออกเดงกี (Dengue fever), ชิคุนกุนยา (Chikungunya), หรือการติดเชื้อไวรัสอื่นๆ. ส่วนภาวะข้ออักเสบจากแบคทีเรียมักเป็นข้อเดียวและเม็ดเลือดขาวมักจะสูง.",
        state: false
    }, {
        problem: "9. A 63-year-old female with underlying breast cancer currently receiving systemic chemotherapy comes to the hospital with a high-grade fever. She has no respiratory symptoms. Physical examination reveals a body temperature of 40.2 C, BP 100/70 mmHg, PR 90 bpm. Complete blood count shows Hct 28%, Hb 9 g/dL, WBC 1240 cells/mm³ (neutrophil 40%, lymphocyte 35, Monocyte 20%), with adequate platelets. The blood smear is shown in the picture. What should be the most appropriate treatment for this patient?",
        img: "https://drive.google.com/open?id=1EwZwszI6L4MSfV0sysQxypcx2OwMXjDq&usp=drive_copy",
        choices: "Paracetamol///Fluid resuscitation///Empirical antibiotics///Plasmapheresis///Leukocyte poor red cell transfusion",
        answer: "Empirical antibiotics",
        select: "",
        explain: "ผู้ป่วยที่ได้รับยาเคมีบำบัดและมีไข้ สิ่งสำคัญที่สุดที่ต้องทำคือการประเมินภาวะนิวโทรฟิลต่ำ (neutropenia). Absolute Neutrophil Count (ANC) คำนวณได้จาก WBC x %Neutrophil = 1240 x 40% = 496 cells/mm³. เมื่อ ANC ต่ำกว่า 500 ถือว่าเป็น severe neutropenia. ภาวะไข้ในผู้ป่วยที่มีนิวโทรฟิลต่ำ (Febrile Neutropenia) เป็นภาวะฉุกเฉินทางการแพทย์ เนื่องจากเสี่ยงต่อการติดเชื้อรุนแรงสูงมาก. การรักษาที่ต้องให้โดยทันทีคือยาปฏิชีวนะแบบครอบคลุมเชื้อในวงกว้าง (Empirical broad-spectrum antibiotics) โดยไม่ต้องรอผลเพาะเชื้อ.",
        state: false
    }, {
        problem: "10. A 18-year-old man comes to the hospital with a complaint of sore throat for 2 days. PE: Inject pharynx. CBC: Hb= 13.5 g/dL, Hct = 41%, WBC=12,000 /mm³, and platelets = 250,000 /mm³. Neutrophils =85%, Lymphocyte =14%, Monocytes = 1%. What is the mechanism of neutrophilic leukocytosis in this case?",
        img: "",
        choices: "Decreased margination///Increased production of marrow///Increased release from marrow stores///Decreased extravasation into tissue///Decreased splenic sequestration",
        answer: "Increased release from marrow stores",
        select: "",
        explain: "ในภาวะติดเชื้อแบคทีเรียเฉียบพลัน เช่น คออักเสบ (pharyngitis) ร่างกายจะตอบสนองโดยการเพิ่มจำนวน neutrophil ในกระแสเลือดอย่างรวดเร็ว. กลไกที่เกิดขึ้นเร็วที่สุดคือการกระตุ้นให้ไขกระดูกปล่อย neutrophil ที่เจริญเต็มที่แล้วซึ่งถูกเก็บสำรองไว้ใน 'storage pool' ออกมาสู่กระแสเลือด. กระบวนการนี้ทำให้จำนวน neutrophil เพิ่มขึ้นอย่างรวดเร็วภายในเวลาไม่กี่ชั่วโมงเพื่อไปต่อสู้กับเชื้อโรค. ส่วนการสร้างเพิ่ม (increased production) จะใช้เวลานานกว่า.",
        state: false
    }, {
        problem: "1. A 65-year-old male cancer patient, recently diagnosed with diffuse large B-cell lymphoma stage IV with extensive bone marrow involvement, is undergoing 3 cycles of the R-CHOP regimen (the last cycle was 10 days ago). He presents with a fever for 1 day. The physical exam showed a body temperature of 38.6°C, mild injected pharynx and tonsils, no lymphadenopathy, and no hepatosplenomegaly. The complete blood count revealed Hb at 9 g/dL, a WBC of 1,850 (PMN 25% and L 65%), and a platelet count of 78,000. What is the most likely diagnosis?",
        img: "",
        choices: "Influenza///Aplastic anemia///Febrile neutropenia///Pneumonia with septicemia///Disseminated intravascular coagulation",
        answer: "Febrile neutropenia",
        select: "",
        explain: "ผู้ป่วยมะเร็งต่อมน้ำเหลืองที่อยู่ระหว่างการให้เคมีบำบัด (R-CHOP) มา 10 วัน ซึ่งเป็นช่วงที่เม็ดเลือดจะต่ำที่สุด (nadir). ผู้ป่วยมีไข้ (38.6°C). การคำนวณ Absolute Neutrophil Count (ANC) = WBC x %PMN = 1,850 x 0.25 = 462.5 cells/mm³. เมื่อผู้ป่วยมีไข้ (T ≥ 38.3°C) และมี ANC < 500 cells/mm³ จะเข้าเกณฑ์การวินิจฉัยภาวะ Febrile Neutropenia. นี่เป็นภาวะฉุกเฉินทางการแพทย์ที่ต้องได้รับการรักษาด้วยยาปฏิชีวนะอย่างเร่งด่วน.",
        state: false
    }, {
        problem: "2. A 45-year-old male presents to the clinic with persistent fatigue, a chronic non-productive cough, and unintentional weight loss of 6 kg over the past three months (10% from baseline). The physical exam showed a body temperature of 38°C, a right cervical node enlarged to 3 cm in diameter, and no hepatosplenomegaly. A chest X-ray revealed reticulonodular infiltration in the right upper lung. The complete blood count showed Hb at 11 g/dL, a WBC count of 8,500 (PMN 55%, L 25%, and M 20%), and a platelet count of 378,000. What is the most likely diagnosis in this patient?",
        img: "",
        choices: "Tuberculosis///Pulmonary aspergillosis///Pulmonary nocardiosis///Infectious mononucleosis///Chronic myeloid leukemia",
        answer: "Tuberculosis",
        select: "",
        explain: "ผู้ป่วยมีกลุ่มอาการ B-symptoms (ไข้, ไอนาน, น้ำหนักลด) ซึ่งเป็นอาการที่พบบ่อยในวัณโรค. ผลการตรวจที่สำคัญคือ Chest X-ray พบฝ้าในปอดด้านบนขวา (right upper lung infiltration) ซึ่งเป็นตำแหน่งที่พบบ่อยที่สุดของวัณโรคปอดในผู้ใหญ่ (post-primary TB). นอกจากนี้ การตรวจพบต่อมน้ำเหลืองที่คอโต (cervical lymphadenopathy) ก็เป็นอีกอาการแสดงหนึ่งของวัณโรคได้ (เรียกว่า scrofula). ดังนั้น วัณโรค (Tuberculosis) จึงเป็นการวินิจฉัยที่น่าจะเป็นไปได้มากที่สุด.",
        state: false
    }, {
        problem: "3. A 48-year-old woman presents with early satiety. The physical exam showed a markedly enlarged spleen (8 cm below the left costal margin), with all other parameters within normal limits. CBC revealed Hb at 12 g/dL, WBC at 87,000 (PMN 35%, L 15%, Metamyelocyte 5%, Myelocyte 10%, Eosinophil 5%, Basophil 15%), and a platelet count of 432,000. What is the most likely diagnosis?",
        img: "",
        choices: "Leukemoid reaction///Primary myelofibrosis///Acute myeloid leukemia///Chronic myeloid leukemia///Acute myelomonocytic leukemia",
        answer: "Chronic myeloid leukemia",
        select: "",
        explain: "อาการอิ่มเร็ว (early satiety) เกิดจากม้ามที่โตมาก (markedly enlarged spleen) ไปเบียดกระเพาะอาหาร. ผลเลือดแสดงจำนวนเม็ดเลือดขาวสูงมาก (leukocytosis) และพบเซลล์ตัวอ่อนของสาย myeloid หลายระยะ (left shift) ร่วมกับ Basophil ที่สูงมากถึง 15% (marked basophilia). ภาพรวมทางคลินิกและผลเลือดทั้งหมดนี้เป็นลักษณะที่จำเพาะเจาะจงกับโรค Chronic Myeloid Leukemia (CML) อย่างยิ่ง.",
        state: false
    }, {
        problem: "4. A 28-year-old female presents to the emergency department with a high fever for 3 days. She also complains of a severe headache, joint pain, and muscle pain. The physical exam showed a body temperature of 39°C, a mildly injected pharynx and tonsils, no lymphadenopathy, no hepatosplenomegaly, and discrete petechial hemorrhages on both legs. The CBC showed Hct 48%, WBC 3,100 , N 35 %, L50 %, abnormal cell as seen in the figure 15%. What is the most likely diagnosis?",
        img: "https://drive.google.com/open?id=1NkImbE89vd0KnZ77toN4DA-_FL23VgCa&usp=drive_copy",
        choices: "Systemic infection///Dengue hemorrhagic fever///Acute monocytic leukemia///Systemic lupus erythematosus///Acute lymphoblastic leukemia",
        answer: "Dengue hemorrhagic fever",
        select: "",
        explain: "ผู้ป่วยมีอาการไข้สูงเฉียบพลัน ปวดศีรษะ ปวดกล้ามเนื้อ และมีจุดเลือดออก (petechial hemorrhages). ผลเลือดที่สำคัญคือ ภาวะเลือดข้น (hemoconcentration) จากค่า Hct ที่สูงถึง 48%, เม็ดเลือดขาวต่ำ (leukopenia), และพบ atypical lymphocytes. กลุ่มอาการและผลการตรวจทางห้องปฏิบัติการทั้งหมดนี้เป็นลักษณะคลาสสิกของโรคไข้เลือดออกเดงกี. การพบจุดเลือดออกและภาวะเลือดข้นเป็นสัญญาณเตือนของภาวะ Dengue Hemorrhagic Fever.",
        state: false
    }, {
        problem: "5. A 65-year-old male presents with a history of abnormal CBC from annual checkup. He denied consuming raw food, but he often walks barefoot in his garden. There is no history of allergies. He sometimes uses diclofenac for myalgia (the last dose was 2 weeks ago). The physical exam showed that he is afebrile, with no rash or hepatosplenomegaly. CBC revealed Hb at 13 g/dl, WBC at 7,800 (PMN 55%, L 20%, E 25%), and a platelet count of 375,000. What is the most likely causes of the abnormality?",
        img: "",
        choices: "Drug allergy///Parasitic infection///Allergic dermatitis///Autoimmune disease///Idiopathic eosinophilia",
        answer: "Parasitic infection",
        select: "",
        explain: "ความผิดปกติในผลเลือดคือมีจำนวน Eosinophil สูงถึง 25% (Eosinophilia). ประวัติที่สำคัญที่สุดคือผู้ป่วยเดินเท้าเปล่าในสวนเป็นประจำ. พฤติกรรมนี้เป็นความเสี่ยงสูงต่อการติดเชื้อพยาธิที่สามารถไชเข้าทางผิวหนังได้ เช่น พยาธิปากขอ (hookworm) หรือพยาธิเส้นด้าย (Strongyloides). การติดเชื้อพยาธิเป็นสาเหตุที่พบบ่อยที่สุดอย่างหนึ่งของภาวะ Eosinophilia. ดังนั้น การติดเชื้อพยาธิจึงเป็นสาเหตุที่น่าสงสัยที่สุดในผู้ป่วยรายนี้.",
        state: false
    }],
    "HL49MCQ1": [
        {
            "problem": "1. What cell structure does B cell reside in ?",
            "img": "",
            "choices": "marginal zone///germinal center lymph///medullary cord///paracortex///subcapsular sinus",
            "answer": "germinal center lymph",
            "select": "",
            "explain": "B cell หรือ B lymphocyte มีต้นกำเนิดที่ไขกระดูก เมื่อเจริญเต็มที่แล้วจะเคลื่อนที่ไปยัง secondary lymphoid organs เช่น ต่อมน้ำเหลือง ม้าม โดยจะไปอยู่รวมกันบริเวณ lymphoid follicle และเมื่อถูกกระตุ้นด้วย antigen ก็จะเกิดการรวมกลุ่ม แบ่งตัว และพัฒนาเป็น germinal center ซึ่งเป็นโครงสร้างสำคัญที่ B cell จะเจริญไปเป็น plasma cell และ memory B cell ต่อไป",
            "state": false
        },
        {
            "problem": "2. A 70-year-old woman presents with fever, malaise, lymphadenopathy, and hepatosplenomegaly. Blood smear reveals lymphocytes with polylobulated nuclei. Which of the following tests will provide a definite diagnosis?",
            "img": "",
            "choices": "Liver biopsy///Bone marrow biopsy///Lymph node biopsy///Urine for IgM///Blood for viral RNA",
            "answer": "Lymph node biopsy",
            "select": "",
            "explain": "จากอาการแสดง (lymphadenopathy, hepatosplenomegaly) และผล blood smear ที่พบ lymphocyte รูปร่างผิดปกติ (polylobulated nucleus) สงสัยภาวะ lymphoma หรือมะเร็งต่อมน้ำเหลืองมากที่สุด การตรวจที่จะให้การวินิจฉัยที่แน่นอน (definite diagnosis) คือการตัดชิ้นเนื้อจากต่อมน้ำเหลืองที่โตผิดปกติ (Lymph node biopsy) ไปตรวจทางพยาธิวิทยาเพื่อยืนยันชนิดของเซลล์มะเร็ง ส่วนการตรวจอื่นๆ เช่น bone marrow biopsy อาจจำเป็นในบางกรณีเพื่อประเมินการลุกลามของโรค แต่ไม่ใช่การวินิจฉัยแรกสุดในกรณีที่มีต่อมน้ำเหลืองโตชัดเจน",
            "state": false
        },
        {
            "problem": "3. During type 1 hypersensitivity progression, which of the following WBCs contain granules with vasodilation and anticoagulants substances?",
            "img": "",
            "choices": "Monocyte///Neutrophils///Lymphocytes///Basophils///Eosinophils",
            "answer": "Basophils",
            "select": "",
            "explain": "Basophils เป็นเม็ดเลือดขาวชนิด granulocyte ที่มีบทบาทสำคัญใน Type I hypersensitivity (allergic reaction) ใน granule ของ Basophil บรรจุสารสำคัญคือ Histamine ซึ่งมีฤทธิ์ขยายหลอดเลือด (vasodilation) และ Heparin ซึ่งมีฤทธิ์ต้านการแข็งตัวของเลือด (anticoagulant) เมื่อถูกกระตุ้นสารเหล่านี้จะถูกปล่อยออกมาทำให้เกิดอาการแพ้ต่างๆ",
            "state": false
        },
        {
            "problem": "4. wbc ตัวไหนมี vasodilator และ anticoagulant",
            "img": "",
            "choices": "Neutrophils///Lymphocytes///Eosinophils///Basophils///Monocytes",
            "answer": "Basophils",
            "select": "",
            "explain": "เม็ดเลือดขาว (WBC) ที่ใน granule มีสารที่มีฤทธิ์ขยายหลอดเลือด (vasodilator) คือ Histamine และสารต้านการแข็งตัวของเลือด (anticoagulant) คือ Heparin คือ Basophils ซึ่งมีบทบาทสำคัญในปฏิกิริยาภูมิแพ้",
            "state": false
        },
        {
            "problem": "5. A patient was bitten by a dog, and subsequently develops enlarged lymph nodes in the axilla. This enlargement is a result of what change in the lymph node? (ข้อสอบเก่า)",
            "img": "",
            "choices": "Increase in plasma cells///Thicken of medulla///Increase in macrophages///Decrease in lymphocytes///Thicken of paracortex",
            "answer": "Thicken of paracortex",
            "select": "",
            "explain": "การถูกสุนัขกัดเป็นการนำสิ่งแปลกปลอม/เชื้อโรคเข้าสู่ร่างกาย ซึ่งจะกระตุ้นระบบภูมิคุ้มกันแบบ cell-mediated immunity เป็นหลัก โดยมี T-lymphocyte เป็นเซลล์สำคัญ บริเวณในต่อมน้ำเหลืองที่เป็นที่อยู่ของ T-lymphocyte คือโซน Paracortex ดังนั้นเมื่อมีการกระตุ้น T cell ให้เพิ่มจำนวนขึ้น (proliferation) เพื่อต่อสู้กับเชื้อโรค จะทำให้บริเวณ Paracortex นี้หนาตัวขึ้น (Thickening หรือ hyperplasia)",
            "state": false
        },
        {
            "problem": "6. Which following are the main components of a network of reticular material that form in reticulocyte on supravital staining?",
            "img": "",
            "choices": "Ribosomal rna///Nucleolus///Golgi apparatus///Hemoglobin///Mitochondria",
            "answer": "Ribosomal rna",
            "select": "",
            "explain": "Reticulocyte คือเซลล์เม็ดเลือดแดงตัวอ่อนที่ยังไม่มีนิวเคลียส แต่ยังมีออร์แกเนลล์บางชนิดเหลืออยู่ โดยเฉพาะ Ribosomal RNA (rRNA) และ polyribosomes ที่ใช้ในการสังเคราะห์ฮีโมโกลบิน การย้อมด้วยสีย้อมชนิดพิเศษที่เรียกว่า supravital stain (เช่น new methylene blue) จะทำให้ rRNA เหล่านี้ตกตะกอนและติดสีให้เห็นเป็นลักษณะร่างแห (reticulum) ซึ่งเป็นที่มาของชื่อ reticulocyte",
            "state": false
        },
        {
            "problem": "7. A female patient suffers from chronic anemia. Peripheral blood smear revealed numerous spherocytes. What is the primary site of destruction of red blood cells?",
            "img": "",
            "choices": "Splenic cord///Splenic sinusoid///Lymph node medulla///Thymic corpuscles///Bone marrow",
            "answer": "Splenic cord",
            "select": "",
            "explain": "Spherocytes คือเม็ดเลือดแดงที่มีลักษณะกลม หนา และมีความยืดหยุ่นน้อยกว่าปกติ ทำให้ไม่สามารถบิดตัวผ่านช่องแคบๆ ในม้ามได้ดีเท่าเม็ดเลือดแดงปกติ โดยเฉพาะบริเวณ Splenic cord (Cords of Billroth) ซึ่งเป็นทางผ่านที่แคบก่อนเข้าสู่ Splenic sinusoid เม็ดเลือดแดง Spherocyte จะติดค้างอยู่ที่นี่และถูกจับกินโดย Macrophage ที่อยู่ในม้าม ดังนั้นม้ามจึงเป็นแหล่งทำลาย Spherocyte ที่สำคัญที่สุด (extravascular hemolysis)",
            "state": false
        },
        {
            "problem": "8. A patient presents with hemolytic anemia & a large percentage of spherical RBCs. Which of the following sites will the RBCs be removed from the blood circulation?",
            "img": "",
            "choices": "Splenic cord///Splenic sinusoid///Tonsillar crypt///Medullary sinus of lymph node///Periarterial lymphoid sheath of white pulp",
            "answer": "Splenic cord",
            "select": "",
            "explain": "เม็ดเลือดแดงทรงกลม (spherical RBCs หรือ spherocytes) มีความยืดหยุ่นต่ำ ทำให้ไม่สามารถเคลื่อนที่ผ่านโครงสร้างที่แคบของม้ามได้ โดยเฉพาะบริเวณ Splenic cords (Cords of Billroth) ซึ่งเป็นเนื้อเยื่อร่างแหที่เม็ดเลือดแดงต้องบีบตัวผ่านเพื่อกลับเข้าสู่กระแสเลือดใน Splenic sinusoid ด้วยเหตุนี้ spherocytes จึงถูกดักจับและทำลายโดย macrophages ที่อยู่ใน splenic cords เป็นหลัก",
            "state": false
        },
        {
            "problem": "9. A 55-year-old man has been deeply penetrated by a thorn. The next day his finger has become infected and there is pus inside. Which of the following cells plays a role in the pus formation?",
            "img": "",
            "choices": "A biconcave cell without nucleus///A cell with polymorphic and multiple lobed nucleus///A cell with large & rounded nucleus and scant cytoplasm///A cell with bilobed nucleus and many acidophilic specific granules///A very small cells without nucleus originated by cytoplasmic budding from giant cell",
            "answer": "A cell with polymorphic and multiple lobed nucleus",
            "select": "",
            "explain": "หนอง (Pus) คือซากของเซลล์ที่ตายแล้วซึ่งเกิดจากการต่อสู้กับการติดเชื้อแบคทีเรีย โดยเซลล์เม็ดเลือดขาวที่มีบทบาทสำคัญที่สุดในการกำจัดแบคทีเรียในระยะแรกคือ Neutrophil ซึ่งมีลักษณะเด่นคือมีนิวเคลียสเป็นหลายพู (polymorphic and multiple lobed nucleus) เมื่อ Neutrophil ทำหน้าที่จับกินเชื้อโรค (phagocytosis) แล้ว มันจะตายไปและกลายเป็นส่วนประกอบหลักของหนอง",
            "state": false
        },
        {
            "problem": "10. A 43-year-old woman has been deeply penetrated by a wooden stick. The next day her finger has become infected and there is pus inside. Which of the following cells plays a role in the pus formation?",
            "img": "",
            "choices": "A biconcave cell without nucleus///A cell with polymorphic and multiple lobed nucleus///A cell with large & rounded nucleus and scant cytoplasm///A cell with bilobed nucleus and many acidophilic specific granules///A very small cells without nucleus originated by cytoplasmic budding from giant cell",
            "answer": "A cell with polymorphic and multiple lobed nucleus",
            "select": "",
            "explain": "หนอง (Pus) เกิดจากการต่อสู้กับการติดเชื้อ โดยมีส่วนประกอบหลักเป็นซากของเซลล์เม็ดเลือดขาวชนิด Neutrophil ซึ่งเป็นเซลล์ด่านแรกที่เข้าไปกำจัดเชื้อโรค โดยเฉพาะแบคทีเรีย ลักษณะเด่นของ Neutrophil คือเป็นเซลล์ที่มีนิวเคลียสหลายพู (polymorphic and multiple lobed nucleus)",
            "state": false
        },
        {
            "problem": "11. Which of the following structures is a partially encapsulated dense fibrous connective tissue and non-keratinized squamous epithelial cell organ/follicle?",
            "img": "",
            "choices": "Lymph node///Spleen///Palatine tonsil///Thymus///Peyer's patch",
            "answer": "Palatine tonsil",
            "select": "",
            "explain": "Tonsils (โดยเฉพาะ Palatine tonsil) เป็นกลุ่มของเนื้อเยื่อน้ำเหลืองที่มีแคปซูลหุ้มไม่สมบูรณ์ (partially encapsulated) และมีส่วนของเยื่อบุผิว (epithelium) ที่บุพื้นผิวเป็นชนิด non-keratinized stratified squamous epithelium ซึ่งมีการยุบตัวลงไปเป็นร่องลึกเรียกว่า tonsillar crypts ส่วน Lymph node, Spleen, Thymus มีแคปซูลหุ้มสมบูรณ์ และ Peyer's patch ไม่มีแคปซูล",
            "state": false
        },
        {
            "problem": "12. Which of the following structures is partially encapsulated with Pseudostratified columnar epithelium?",
            "img": "",
            "choices": "Peyer's patch///Pharyngeal tonsils///Thymus///Spleen///Lymph node",
            "answer": "Pharyngeal tonsils",
            "select": "",
            "explain": "Pharyngeal tonsil (หรือ adenoid) เป็น lymphoid organ ที่มีแคปซูลหุ้มไม่สมบูรณ์ (partially encapsulated) และมีลักษณะเฉพาะคือเยื่อบุผิวที่ปกคลุมเป็นชนิด Pseudostratified ciliated columnar epithelium ซึ่งเป็นเยื่อบุชนิดเดียวกับที่พบในทางเดินหายใจส่วนบน (nasopharynx) ซึ่งเป็นตำแหน่งที่มันอยู่",
            "state": false
        },
        {
            "problem": "13. What organ normally develops less functionality and has increased in adipocytes with age?",
            "img": "",
            "choices": "Thymus///Red bone marrow///Lymph node///Spleen///Tonsil",
            "answer": "Thymus",
            "select": "",
            "explain": "ต่อม Thymus เป็นอวัยวะที่ทำหน้าที่เป็นแหล่งพัฒนาของ T-lymphocyte ซึ่งจะทำงานเต็มที่ในช่วงวัยเด็กและวัยรุ่น หลังจากนั้นต่อมไทมัสจะเริ่มฝ่อลง (involution) ตามอายุ เนื้อเยื่อของต่อมจะค่อยๆถูกแทนที่ด้วยเซลล์ไขมัน (adipocytes) และการทำงานก็จะลดลงไปเรื่อยๆ",
            "state": false
        },
        {
            "problem": "14. Which condition can cause a high hematocrit level?",
            "img": "",
            "choices": "dehydration///high lipid-diet///high sugar-diet///Increase serum protein///Intravascular hemolysis",
            "answer": "dehydration",
            "select": "",
            "explain": "Hematocrit (Hct) คือเปอร์เซ็นต์ปริมาตรของเม็ดเลือดแดงต่อปริมาตรเลือดทั้งหมด ภาวะขาดน้ำ (dehydration) ทำให้ปริมาตรของพลาสมา (ส่วนที่เป็นของเหลวของเลือด) ลดลง แต่ปริมาตรของเม็ดเลือดแดงยังคงเท่าเดิม เมื่อนำมาคำนวณสัดส่วนจึงทำให้ค่า Hct สูงขึ้น ซึ่งเรียกว่าภาวะ relative polycythemia (ค่า Hct สูงหลอกจากการขาดน้ำ)",
            "state": false
        },
        {
            "problem": "15. What is the adaptation to anemia of chronic disease that tends to increase oxygen flows to the tissue?",
            "img": "",
            "choices": "Decrease 2,3-DPG///Decrease NADH///Increase NADPH///Increase 2,3-DPG///Increase erythropoietin",
            "answer": "Increase erythropoietin",
            "select": "",
            "explain": "ในภาวะ Anemia (โลหิตจาง) ร่างกายจะเกิดภาวะพร่องออกซิเจน (hypoxia) ซึ่งจะไปกระตุ้นให้ไตสร้างฮอร์โมน Erythropoietin (EPO) เพิ่มมากขึ้น ฮอร์โมน EPO นี้จะไปกระตุ้นไขกระดูกให้สร้างเม็ดเลือดแดงเพิ่มขึ้น เพื่อเพิ่มความสามารถในการขนส่งออกซิเจนไปยังเนื้อเยื่อต่างๆ ซึ่งเป็นการปรับตัวของร่างกายเพื่อชดเชยภาวะโลหิตจาง (ส่วนการเพิ่ม 2,3-DPG จะช่วยให้ Hb ปล่อยออกซิเจนได้ดีขึ้น แต่การเพิ่ม EPO เป็นการแก้ที่ต้นทางมากกว่า)",
            "state": false
        },
        {
            "problem": "16. If decrease 2,3 BPG, what would the graph be like? given N is normal",
            "img": "https://drive.google.com/open?id=1M3RJUPx2v0bTIga36YYQA2X55aN4HCN8&usp=drive_copy",
            "choices": "A///B///C///D///N",
            "answer": "A",
            "select": "",
            "explain": "สาร 2,3-Bisphosphoglycerate (2,3-BPG) ทำหน้าที่ลดความสามารถในการจับออกซิเจนของฮีโมโกลบิน (decreases O2 affinity) ทำให้ฮีโมโกลบินปล่อยออกซิเจนให้เนื้อเยื่อได้ง่ายขึ้น (Shift to the right) ดังนั้น ถ้ามี 2,3-BPG ลดลง จะเกิดผลตรงกันข้าม คือ ฮีโมโกลบินจะจับกับออกซิเจนได้ดีขึ้นและปล่อยออกซิเจนได้ยากขึ้น ทำให้กราฟ Oxygen-hemoglobin dissociation curve เคลื่อนไปทางซ้าย (Shift to the left) ซึ่งตรงกับกราฟเส้น A",
            "state": false
        },
        {
            "problem": "17. a 39 year-old man has fatigue and dizziness. Blood smear shows hypochromic microcytic RBC. What history and further investigation are useful for this diagnosis?",
            "img": "",
            "choices": "Hemorrhoid symptoms, iron study///Vaccine history, parasite///Family history, thyroid///Developmental history, bone marrow aspiration///Dietary history, Vitamin B12 level",
            "answer": "Hemorrhoid symptoms, iron study",
            "select": "",
            "explain": "ผล Blood smear ที่พบ Hypochromic microcytic RBC เป็นลักษณะคลาสสิกของภาวะโลหิตจางจากการขาดธาตุเหล็ก (Iron Deficiency Anemia) ซึ่งสาเหตุที่พบบ่อยที่สุดในผู้ชายคือการเสียเลือดเรื้อรังทางเดินอาหาร ดังนั้นการซักประวัติเกี่ยวกับอาการของริดสีดวงทวาร (Hemorrhoid symptoms) ซึ่งอาจทำให้มีเลือดออกเรื้อรัง และการส่งตรวจทางห้องปฏิบัติการเพื่อประเมินปริมาณธาตุเหล็กในร่างกาย (Iron study: serum iron, ferritin, TIBC) จึงเป็นสิ่งสำคัญที่สุดในการวินิจฉัย",
            "state": false
        },
        {
            "problem": "18. What is Normal Hb in adult?",
            "img": "",
            "choices": "alpha2beta2, zeta2epsilon2, zeta2delta2///alpha2beta2, alpha2delta2, zeta2delta2///alpha2beta2, alpha2delta2, alpha2gamma2///zeta2beta2, seta2epsilon2, alpha2 beta2///alpha2beta2, seta2epsilon2, seta2delta2",
            "answer": "alpha2beta2, alpha2delta2, alpha2gamma2",
            "select": "",
            "explain": "ฮีโมโกลบินปกติในผู้ใหญ่ประกอบด้วย 3 ชนิดหลักๆ คือ 1. HbA (alpha2beta2) เป็นชนิดที่พบมากที่สุด (>95%) 2. HbA2 (alpha2delta2) พบประมาณ 2-3.5% 3. HbF (alpha2gamma2) เป็นฮีโมโกลบินหลักในทารก แต่ในผู้ใหญ่จะพบในปริมาณน้อยมาก (<1%) ดังนั้นองค์ประกอบของฮีโมโกลบินปกติในผู้ใหญ่จึงมีทั้ง 3 รูปแบบนี้อยู่",
            "state": false
        },
        {
            "problem": "19. Which metabolite is rarely be found in mature RBC in G6PD deficiency?",
            "img": "",
            "choices": "Glucose-6-phosphate///Pyruvate///2,3-bisphosphoglycerate///NADPH///Lactate",
            "answer": "NADPH",
            "select": "",
            "explain": "G6PD (Glucose-6-phosphate dehydrogenase) เป็นเอนไซม์สำคัญในวิถี Pentose Phosphate Pathway (PPP) ซึ่งเป็นวิถีเดียวในเม็ดเลือดแดงที่สร้าง NADPH (Nicotinamide adenine dinucleotide phosphate) สาร NADPH นี้มีความสำคัญอย่างยิ่งในการป้องกันเม็ดเลือดแดงจากภาวะเครียดออกซิเดชัน (oxidative stress) ดังนั้นในผู้ป่วยที่พร่องเอนไซม์ G6PD จะทำให้ไม่สามารถสร้าง NADPH ได้เพียงพอ ทำให้เม็ดเลือดแดงเสี่ยงต่อการถูกทำลายเมื่อเจอสารกระตุ้น",
            "state": false
        },
        {
            "problem": "20. Which of the following hemoglobin typing result is due to beta-globin gene mutation?",
            "img": "",
            "choices": "Hb F only///Hb Bart's///Hb H///Hb A2A with A2 = 3.5%///Hb CS A2A",
            "answer": "Hb A2A with A2 = 3.5%",
            "select": "",
            "explain": "การกลายพันธุ์ของยีน beta-globin (Beta-globin gene mutation) ทำให้การสร้างสายโกลบินชนิดเบต้าลดลง (Beta-thalassemia) ร่างกายจะพยายามชดเชยโดยการสร้างสายโกลบินชนิดเดลต้า (delta) เพิ่มขึ้นเล็กน้อย ทำให้สัดส่วนของ HbA2 (alpha2delta2) เพิ่มสูงขึ้นกว่าปกติ โดยทั่วไปถ้าค่า HbA2 > 3.5% จะบ่งชี้ถึงภาวะ Beta-thalassemia trait (พาหะ) ส่วน Hb Bart's, Hb H และ Hb CS เป็นลักษณะของ Alpha-thalassemia",
            "state": false
        },
        {
            "problem": "21. Which of the following genetic abnormalities is responsible for beta zero thalassemia?",
            "img": "",
            "choices": "Large deletion///Missense mutation///Point mutation in promoter region///Nonsense mutation///Fusion gene",
            "answer": "Nonsense mutation",
            "select": "",
            "explain": "Beta zero (β0) thalassemia คือภาวะที่ไม่สามารถสร้างสาย beta-globin ได้เลยจากยีนที่เป็นโรค ซึ่งมักเกิดจากการกลายพันธุ์ชนิดที่ทำให้การสังเคราะห์โปรตีนหยุดชะงักก่อนเวลาอันควร (premature termination) เช่น Nonsense mutation (การเกิด stop codon กลางยีน) หรือ Frameshift mutation ซึ่งจะทำให้โปรตีนที่สร้างขึ้นมาผิดปกติและไม่สามารถใช้งานได้",
            "state": false
        },
        {
            "problem": "22. Which of the following genetic abnormalities is responsible for beta thalassemia (Beta0)?",
            "img": "",
            "choices": "Large deletion///Nonsense mutation///Polyadenylation-signal mutation///Mutation affecting the initiation of transcription///Silent mutation",
            "answer": "Nonsense mutation",
            "select": "",
            "explain": "Beta-zero (β0) thalassemia หมายถึงการที่ไม่สามารถสร้างสาย beta-globin ได้เลย สาเหตุทางพันธุกรรมที่พบบ่อยที่ทำให้เกิดภาวะนี้คือ Point mutation ชนิดที่ส่งผลรุนแรงต่อการสร้างโปรตีน เช่น Nonsense mutation (สร้างรหัสหยุด) หรือ Frameshift mutation (ลำดับเบสเลื่อน) หรือ Splicing mutation (ตัดต่อ intron/exon ผิดพลาด) ซึ่งล้วนทำให้ไม่สามารถสร้างโปรตีน beta-globin ที่ใช้งานได้",
            "state": false
        },
        {
            "problem": "23. What is the mutation responsible for beta 0 thalassemia?",
            "img": "",
            "choices": "Large deletion///Nonsense mutation///Polyadenylation-signal mutation///Mutation affecting initiation of transcription///Missense mutation",
            "answer": "Nonsense mutation",
            "select": "",
            "explain": "Beta zero (β0) thalassemia เป็นภาวะที่ไม่มีการสร้างสาย beta-globin เลยจากยีนที่ผิดปกติ การกลายพันธุ์ที่ทำให้เกิดภาวะนี้มักเป็นการกลายพันธุ์ที่ส่งผลให้กระบวนการแปลรหัส (translation) หยุดลงกลางคัน เช่น Nonsense mutation ซึ่งเป็นการเปลี่ยน codon ให้กลายเป็น stop codon ทำให้ได้โปรตีนที่ไม่สมบูรณ์และใช้งานไม่ได้",
            "state": false
        },
        {
            "problem": "24. Which one is an alpha thalassemia typing?",
            "img": "",
            "choices": "Hb A2///Hb E///Hb F///Hb portland///Hb S",
            "answer": "Hb portland",
            "select": "",
            "explain": "ในภาวะ Alpha-thalassemia ที่รุนแรงมาก (เสียยีน alpha ทั้ง 4 ยีน หรือเรียกว่า Hb Bart's hydrops fetalis) ร่างกายจะไม่สามารถสร้างสาย alpha-globin ได้เลย ทำให้ไม่สามารถสร้างฮีโมโกลบินปกติได้ (HbA, HbA2, HbF) แต่ร่างกายจะสร้างฮีโมโกลบินที่ผิดปกติขึ้นมาแทน เช่น Hb Bart's (gamma4) และ Hb Portland (zeta2gamma2) ซึ่งเป็น embryonic hemoglobin ดังนั้นการตรวจพบ Hb Portland ในทารกหลังคลอดจึงเป็นตัวบ่งชี้ของ Alpha-thalassemia ชนิดรุนแรง",
            "state": false
        },
        {
            "problem": "25. โอกาสลูกเป็นโรคทาลัสซีเมีย (Assuming both parents are beta-thalassemia carriers)",
            "img": "",
            "choices": "0%///25%///50%///75%///100%",
            "answer": "25%",
            "select": "",
            "explain": "คำถามนี้ไม่ได้ให้ข้อมูลของพ่อแม่มา แต่โดยทั่วไปโจทย์มักจะตั้งสถานการณ์ที่พบบ่อยคือ พ่อและแม่เป็นพาหะของธาลัสซีเมียชนิดเดียวกัน (เช่น beta-thalassemia trait ทั้งคู่) ซึ่งเป็นยีนด้อย ตามหลักของเมนเดล โอกาสของลูกที่จะเกิดมาคือ 1. เป็นโรค (ได้รับยีนด้อยจากทั้งพ่อและแม่) = 25% 2. เป็นพาหะ (ได้รับยีนด้อยจากพ่อหรือแม่คนใดคนหนึ่ง) = 50% 3. เป็นปกติ (ไม่ได้รับยีนด้อยเลย) = 25% ดังนั้นโอกาสที่ลูกจะเป็นโรคคือ 25%",
            "state": false
        },
        {
            "problem": "26. What is the most appropriate management of iron overload in patients with severe thalassemia disease?",
            "img": "",
            "choices": "Lower volume for blood transfusions.///Taking iron chelating agents regularly.///Avoidance of iron-rich food.///Monitor signs of cirrhosis of iron overload with MRI T2*.///Give intravenous iron chelation along with blood transfusion every time.",
            "answer": "Taking iron chelating agents regularly.",
            "select": "",
            "explain": "ผู้ป่วยธาลัสซีเมียชนิดรุนแรงจำเป็นต้องได้รับเลือดเป็นประจำ (chronic blood transfusions) ซึ่งจะทำให้เกิดภาวะธาตุเหล็กเกิน (iron overload) เนื่องจากร่างกายไม่มีกลไกขับธาตุเหล็กส่วนเกินออกจากร่างกายได้ตามปกติ ภาวะเหล็กเกินนี้จะไปสะสมตามอวัยวะต่างๆและทำให้เกิดอันตรายได้ การรักษาที่สำคัญที่สุดคือการให้ยาขับธาตุเหล็ก (iron chelating agents) อย่างสม่ำเสมอ เพื่อจับกับธาตุเหล็กส่วนเกินและขับออกจากร่างกาย",
            "state": false
        },
        {
            "problem": "27. What is a common complication of sickle cell anemia?",
            "img": "",
            "choices": "Hyperkalemia///Thrombocytopenia///Acute renal failure///Avascular necrosis of bone///Decrease affinity of Hb to O2",
            "answer": "Avascular necrosis of bone",
            "select": "",
            "explain": "โรค Sickle cell anemia มีลักษณะเด่นคือเม็ดเลือดแดงจะเปลี่ยนเป็นรูปเคียว (sickle shape) เมื่ออยู่ในภาวะออกซิเจนต่ำ ทำให้เม็ดเลือดแดงขาดความยืดหยุ่นและไปอุดตันหลอดเลือดเล็กๆ (vaso-occlusion) ได้ง่าย เมื่อหลอดเลือดที่ไปเลี้ยงกระดูกเกิดการอุดตัน จะทำให้เกิดภาวะกระดูกขาดเลือด (Avascular necrosis of bone) ซึ่งเป็นภาวะแทรกซ้อนที่พบบ่อยและทำให้เกิดความเจ็บปวดอย่างรุนแรง โดยเฉพาะบริเวณหัวกระดูกต้นขา (femoral head)",
            "state": false
        },
        {
            "problem": "28. ในโรค Hereditary spherocytosis โปรตีนอะไรผิดปกติ",
            "img": "",
            "choices": "glycoproteins///protein 4.1///ankyrin///hemoglobin///spectrin",
            "answer": "ankyrin",
            "select": "",
            "explain": "Hereditary spherocytosis เป็นโรคที่เกิดจากความผิดปกติของโปรตีนที่เป็นโครงสร้างของเยื่อหุ้มเซลล์เม็ดเลือดแดง (RBC membrane cytoskeleton) ทำให้เม็ดเลือดแดงเสียความคงตัวและกลายเป็นทรงกลม (spherocyte) โปรตีนที่พบว่ามีความผิดปกติได้บ่อยที่สุดคือ Ankyrin นอกจากนี้ยังอาจเกิดจากความผิดปกติของ Spectrin, Band 3, หรือ Protein 4.2 ได้เช่นกัน",
            "state": false
        },
        {
            "problem": "29. A 60 y/o pt presents with chronic abdominal pain, PE: splenomegaly, Hb 18 g/dL, WBC 30 x 10^9/L, Plt 720 x 10^9/L. What condition could be found in this pt?",
            "img": "",
            "choices": "Portal vein thrombosis///Increased EPO///Aplastic anemia///Iron deficiency///Vitamin B12 deficiency",
            "answer": "Portal vein thrombosis",
            "select": "",
            "explain": "ผู้ป่วยสูงอายุมีม้ามโต และมีค่าเม็ดเลือดทั้ง 3 ชนิดสูงทั้งหมด (polycythemia, leukocytosis, thrombocytosis) เป็นลักษณะที่เข้าได้กับกลุ่มโรค Myeloproliferative Neoplasm (MPN) เช่น Polycythemia Vera (PV) ภาวะเหล่านี้ทำให้เลือดมีความหนืดสูง (hyperviscosity) และเกล็ดเลือดทำงานผิดปกติ ทำให้มีความเสี่ยงสูงมากในการเกิดลิ่มเลือดอุดตัน (thrombosis) โดยเฉพาะในตำแหน่งที่ผิดปกติ เช่น หลอดเลือดในช่องท้อง (splanchnic vein thrombosis) ซึ่งรวมถึง Portal vein thrombosis",
            "state": false
        },
        {
            "problem": "30. A woman present with hypermenorrhea, blood smear reveal microcytic hypochromic RBC. What is the cause of her anemia?",
            "img": "",
            "choices": "Iron deficiency///Vitamin B12 deficiency///Folate deficiency///Anemia of chronic disease///Hemolysis",
            "answer": "Iron deficiency",
            "select": "",
            "explain": "ผู้หญิงที่มีภาวะประจำเดือนมามากผิดปกติ (hypermenorrhea) เป็นการเสียเลือดเรื้อรัง ซึ่งทำให้ร่างกายสูญเสียธาตุเหล็กไปกับเลือด เมื่อเสียเลือดไปเรื่อยๆ ธาตุเหล็กที่สะสมไว้ในร่างกายจะหมดไป ทำให้ไม่สามารถสร้างฮีโมโกลบินได้เพียงพอ เกิดเป็นภาวะโลหิตจางจากการขาดธาตุเหล็ก (Iron deficiency anemia) ซึ่งมีลักษณะเด่นใน blood smear คือเม็ดเลือดแดงมีขนาดเล็กและติดสีจาง (microcytic, hypochromic RBC)",
            "state": false
        },
        {
            "problem": "31. A 34-year-old woman is referred for evaluation of anemia Hb = 9.5 g/dL. Past Medical history -> significant hypermenorrhea. Blood smear -> hypochromic microcytic anemia. What is the mechanism of this anemia?",
            "img": "",
            "choices": "Decreased iron storage///Extravascular hemolysis///Decreased hepcidin///Ferroportin degradation///Increased EPO",
            "answer": "Decreased iron storage",
            "select": "",
            "explain": "ภาวะประจำเดือนมามาก (hypermenorrhea) ทำให้เกิดการสูญเสียเลือดเรื้อรัง ซึ่งเป็นการสูญเสียธาตุเหล็กออกจากร่างกายอย่างต่อเนื่อง เมื่อการสูญเสียมากกว่าการได้รับจากการรับประทานอาหาร จะทำให้ปริมาณธาตุเหล็กที่เก็บสะสมในร่างกาย (iron storage) ซึ่งส่วนใหญ่อยู่ในรูปของ ferritin ลดลงเรื่อยๆ จนหมดไป ส่งผลให้ไขกระดูกขาดวัตถุดิบในการสร้างฮีโมโกลบิน และเกิดเป็นภาวะโลหิตจางจากการขาดธาตุเหล็กในที่สุด",
            "state": false
        },
        {
            "problem": "32. A boy is found to have VHL mutation. What is correct?",
            "img": "",
            "choices": "Decreased erythropoietin level///Increased function of hypoxia inducible factor (hypoxic)///Ubiquitination of hypoxia inducible factor///Increased protein degradation by protease///Decreased oxygen of Hb",
            "answer": "Increased function of hypoxia inducible factor (hypoxic)",
            "select": "",
            "explain": "โปรตีน VHL (von Hippel-Lindau) ทำหน้าที่เป็น tumor suppressor โดยการจับกับโปรตีน Hypoxia-Inducible Factor (HIF) และนำไปทำลายในภาวะปกติ แต่เมื่อยีน VHL กลายพันธุ์ (VHL mutation) จะไม่สามารถสร้างโปรตีน VHL ที่ทำงานได้ ทำให้ HIF ไม่ถูกทำลายและมีการสะสมอยู่ตลอดเวลา ส่งผลให้ HIF ทำงานมากขึ้น (Increased function) แม้ในภาวะที่ร่างกายไม่ได้ขาดออกซิเจนก็ตาม ซึ่งจะไปกระตุ้นยีนต่างๆ รวมถึงยีนที่สร้าง Erythropoietin ทำให้เกิดภาวะเม็ดเลือดแดงสูง (erythrocytosis)",
            "state": false
        },
        {
            "problem": "33. A 37 years old male present with headache, when he was young, he has erythrocytosis. When he was 30 years old he go for pheochromocytoma. VHL gene mutation is present. What condition that can be found in this patient?",
            "img": "",
            "choices": "Decrease EPO///Increased function of HIF///Increased protein degradation from proteosome///Ubiquitination of HIF///Normal HIF function",
            "answer": "Increased function of HIF",
            "select": "",
            "explain": "ผู้ป่วยรายนี้มีประวัติเข้าได้กับโรค von Hippel-Lindau (VHL) syndrome ซึ่งเกิดจาก VHL gene mutation ทำให้มีภาวะเม็ดเลือดแดงสูง (erythrocytosis) ตั้งแต่วัยหนุ่ม และมีเนื้องอกชนิดต่างๆ เช่น pheochromocytoma กลไกของโรคเกิดจากการที่โปรตีน VHL ที่ผิดปกติไม่สามารถทำลายโปรตีน Hypoxia-Inducible Factor (HIF) ได้ ทำให้ HIF มีการทำงานที่เพิ่มขึ้นตลอดเวลา (Increased function of HIF) ซึ่งเป็นตัวการที่ทำให้เกิดพยาธิสภาพต่างๆ ดังกล่าว",
            "state": false
        },
        {
            "problem": "34. A 45-year old man presents with microspherosis, polychromasia, and a cd55 cd59 defect. What is the underlying cause?",
            "img": "",
            "choices": "decrease gpi anchor production///mutation alpha gene///mutation beta gene///abnormal catabolic enzyme///auto ab red cell mb",
            "answer": "decrease gpi anchor production",
            "select": "",
            "explain": "การตรวจพบว่ามีโปรตีน CD55 และ CD59 บนผิวเซลล์เม็ดเลือดลดลง เป็นลักษณะเฉพาะของโรค Paroxysmal Nocturnal Hemoglobinuria (PNH) ซึ่งเกิดจากการกลายพันธุ์ของยีน PIGA ทำให้ไม่สามารถสร้าง GPI anchor ซึ่งเป็นโครงสร้างที่ใช้ยึดโปรตีนต่างๆ รวมถึง CD55 และ CD59 ไว้บนผิวเซลล์ได้ เมื่อขาดโปรตีนป้องกันเหล่านี้ไป จะทำให้เซลล์เม็ดเลือดแดงถูกทำลายโดยระบบคอมพลีเมนต์ (complement system) ของร่างกายเอง",
            "state": false
        },
        {
            "problem": "35. A 45 years old man presented with pallor and icterus. Blood smear: Microspherocyte, Polychromasia. UA: Hemoglobinuria. Flow cytometry: decreasing of CD55 and CD59. What is the diagnosis of this patient?",
            "img": "",
            "choices": "decreasing of GPI anchor gene production///decreases synthesis alpha globin chain///decreases synthesis beta globin chain///abnormal enzyme function///autoantibodies to RBC cell membrane",
            "answer": "decreasing of GPI anchor gene production",
            "select": "",
            "explain": "อาการ (ซีด, ดีซ่าน), ผลตรวจเลือด (hemolysis, hemoglobinuria) และโดยเฉพาะอย่างยิ่งผล Flow cytometry ที่พบการลดลงของ CD55 และ CD59 เป็นลักษณะที่วินิจฉัยโรค Paroxysmal Nocturnal Hemoglobinuria (PNH) ได้เลย โรคนี้เกิดจากการกลายพันธุ์ของยีน PIGA ซึ่งเป็นยีนที่จำเป็นสำหรับการสร้าง GPI anchor ทำให้เซลล์ไม่สามารถแสดงโปรตีนที่ยึดด้วย GPI anchor เช่น CD55 และ CD59 ได้ นำไปสู่การแตกของเม็ดเลือดแดงในหลอดเลือด",
            "state": false
        },
        {
            "problem": "36. A boy is found to have VHL mutation. What is correct?",
            "img": "",
            "choices": "Decreased erythropoietin level///Increased function of hypoxia inducible factor///Ubiquitination of hypoxia inducible factor///Increased protein degradation by protease///Decreased oxygen of Hb",
            "answer": "Increased function of hypoxia inducible factor",
            "select": "",
            "explain": "ยีน VHL สร้างโปรตีนที่ทำหน้าที่สลายโปรตีนอีกตัวหนึ่งที่ชื่อว่า Hypoxia Inducible Factor (HIF) ในภาวะที่มีออกซิเจนปกติ เมื่อยีน VHL เกิดการกลายพันธุ์ (mutation) โปรตีน VHL จะทำงานผิดปกติไป ทำให้ไม่สามารถสลาย HIF ได้ ส่งผลให้ HIF มีปริมาณเพิ่มขึ้นและทำงานมากขึ้น (Increased function) ซึ่ง HIF นี้จะไปกระตุ้นการสร้างฮอร์โมน Erythropoietin (EPO) ทำให้มีเม็ดเลือดแดงสูงผิดปกติ และยังเกี่ยวข้องกับการเกิดเนื้องอกบางชนิดด้วย",
            "state": false
        },
        {
            "problem": "37. A 25yo male presented with dark cola colored urine. The blood picture is provided. What is the patient's condition?",
            "img": "https://drive.google.com/open?id=11UbqOptDmtF08Dw0wFxAw5XRIZDvDpVH&usp=drive_copy",
            "choices": "malaria///thalassemia///Autoimmune hemolytic anemia///Microangiopathic hemolytic anemia (MAHA)///g6pd def+acute hemolytic",
            "answer": "g6pd def+acute hemolytic",
            "select": "",
            "explain": "ภาพ blood smear แสดงลักษณะของเม็ดเลือดแดงที่มีการแตกตัว (hemolysis) อย่างชัดเจน เช่น การมี schistocytes (fragmented RBCs) และการมี reticulocytes เพิ่มขึ้น ซึ่งเป็นลักษณะที่พบได้ในภาวะ Hemolytic anemia นอกจากนี้อาการปัสสาวะสีเข้ม (dark cola colored urine) บ่งชี้ถึงการมีเม็ดเลือดแดงแตกในหลอดเลือด (intravascular hemolysis) ซึ่งเป็นลักษณะเด่นของโรค G6PD deficiency ที่เกิดภาวะ hemolytic crisis เมื่อได้รับสารกระตุ้น เช่น ยาบางชนิด หรือการติดเชื้อ",
            "state": false
        },
        {
            "problem": "38. ผู้ชายกินมังสวิรัติ เป็น anemia มา 2 เดือนผล blood smear ให้รูป hypersegmented PMN กับรูป macrocytic RBC มา ถามว่าคนนี้เป็นโรคอะไร",
            "img": "",
            "choices": "B6 deficiency///B12 deficiency///iron deficiency///copper deficiency///myelodysplatic neoplasm",
            "answer": "B12 deficiency",
            "select": "",
            "explain": "การรับประทานมังสวิรัติอย่างเคร่งครัด (vegan) มีความเสี่ยงสูงต่อการขาดวิตามิน B12 เนื่องจากวิตามินนี้พบได้ในผลิตภัณฑ์จากสัตว์เป็นหลัก การขาดวิตามิน B12 จะรบกวนการสังเคราะห์ DNA ของเซลล์ไขกระดูก ทำให้เกิดภาวะโลหิตจางชนิดเม็ดเลือดแดงขนาดใหญ่ (macrocytic anemia) และมีลักษณะเฉพาะที่พบใน blood smear คือ hypersegmented neutrophils (นิวโทรฟิลที่มีนิวเคลียสมากกว่า 5 พู)",
            "state": false
        },
        {
            "problem": "39. ให้รูป blood picture มา ถามว่าเป็นโรคอะไร",
            "img": "https://drive.google.com/open?id=1FKKMAo6FJ8XMEOZxBKQWAFfLnm5KKZ4j&usp=drive_copy",
            "choices": "Thalassemia///Acute leukemia///Leukemoid reaction///CML///Myelofibrosis",
            "answer": "Thalassemia",
            "select": "",
            "explain": "ภาพ blood smear แสดงลักษณะของเม็ดเลือดแดงที่มีขนาดเล็กและติดสีจาง (microcytic, hypochromic RBCs) พร้อมกับการมี target cells และ anisopoikilocytosis ซึ่งเป็นลักษณะที่พบได้ในภาวะโลหิตจางจากธาลัสซีเมีย (Thalassemia) นอกจากนี้ยังมีการเพิ่มขึ้นของ reticulocytes ซึ่งบ่งชี้ถึงการตอบสนองของไขกระดูกต่อภาวะโลหิตจาง",
            "state": false
        },
        {
            "problem": "40. Which of the following causes monocytosis?",
            "img": "",
            "choices": "Myelophthisic anemia///Pulmonary nocardiosis///Pulmonary tuberculosis///Strongyloides infestation///Cytomegalovirus retinitis",
            "answer": "Pulmonary tuberculosis",
            "select": "",
            "explain": "Monocytosis คือภาวะที่มีจำนวน monocyte ในเลือดสูงกว่าปกติ มักพบเป็นการตอบสนองต่อการติดเชื้อเรื้อรัง (chronic infection) โดยเฉพาะการติดเชื้อที่ทำให้เกิด granuloma เช่น วัณโรค (Tuberculosis) นอกจากนี้ยังพบได้ในโรคติดเชื้ออื่นๆ เช่น bacterial endocarditis, โรคภูมิคุ้มกันทำลายตัวเอง และมะเร็งบางชนิด",
            "state": false
        },
        {
            "problem": "41. Which of the following is defined as relative lymphocytosis?",
            "img": "",
            "choices": "wbc 4,500 (PMNs 70%, lymph 20%)///wbc 19,000 (PMNs 55%, lymph 45%)///wbc 8,900 (PMN 40%, lymph 60%)///wbc 2,200 (PMN 30%, lymph 70%)///wbc 19,800 (PMN 45%, lymph 55%)",
            "answer": "wbc 2,200 (PMN 30%, lymph 70%)",
            "select": "",
            "explain": "Relative lymphocytosis คือภาวะที่เปอร์เซ็นต์ของ lymphocyte สูงกว่าปกติ (ปกติประมาณ 20-40%) แต่มักเกิดร่วมกับภาวะที่จำนวนเม็ดเลือดขาวโดยรวมต่ำ (leukopenia) โดยเฉพาะ neutropenia (PMN ต่ำ) ทำให้สัดส่วนของ lymphocyte ดูสูงขึ้น ใน choice D มี WBC รวมต่ำเพียง 2,200 และมี PMN ต่ำแค่ 30% แต่มี lymphocyte สูงถึง 70% ซึ่งเป็นตัวอย่างที่ชัดเจนของ relative lymphocytosis (Absolute lymphocyte count = 2200 * 0.7 = 1540 ซึ่งยังอยู่ในเกณฑ์ปกติ)",
            "state": false
        },
        {
            "problem": "42. Which condition represent relative lymphocytosis?",
            "img": "",
            "choices": "WBC 12000 lymphocyte 75% PMN 25%///WBC 20000 lymphocyte 40% PMN 60%///WBC 3900 lymphocyte 45% PMN 55%///WBC 2200 lymphocyte 80% PMN 20%///WBC 8500 lymphocyte 30% PMN 70%",
            "answer": "WBC 2200 lymphocyte 80% PMN 20%",
            "select": "",
            "explain": "Relative lymphocytosis คือภาวะที่สัดส่วน (percentage) ของ lymphocyte สูงผิดปกติ แต่มักพบในภาวะที่จำนวนเม็ดเลือดขาวรวม (WBC) ต่ำหรือปกติ และเมื่อคำนวณจำนวน lymphocyte สัมบูรณ์ (absolute count) แล้วอาจไม่สูงก็ได้ ตัวเลือก D แสดง WBC ที่ต่ำ (2200) และมีสัดส่วน PMN ต่ำ (20%) ทำให้สัดส่วนของ lymphocyte สูงถึง 80% ซึ่งเป็นลักษณะคลาสสิกของ relative lymphocytosis ที่เกิดร่วมกับ neutropenia",
            "state": false
        },
        {
            "problem": "43. GP ตัวไหน activated ระหว่าง platelet aggregation",
            "img": "",
            "choices": "GPla///GPIb///GPVI///GPX///GPIIb/IIIa",
            "answer": "GPIIb/IIIa",
            "select": "",
            "explain": "Glycoprotein (GP) IIb/IIIa เป็น receptor ที่อยู่บนผิวของเกล็ดเลือด ในภาวะปกติ receptor นี้จะยังไม่ทำงาน แต่เมื่อเกล็ดเลือดถูกกระตุ้น (activated) GP IIb/IIIa จะเปลี่ยนรูปร่างและพร้อมที่จะจับกับ Fibrinogen ซึ่ง Fibrinogen นี้จะทำหน้าที่เป็นสะพานเชื่อมระหว่างเกล็ดเลือดแต่ละตัวเข้าด้วยกัน ทำให้เกิดการเกาะกลุ่มของเกล็ดเลือด (platelet aggregation) ซึ่งเป็นขั้นตอนสุดท้ายที่สำคัญในการสร้างลิ่มเลือด",
            "state": false
        },
        {
            "problem": "44. Which are glycoproteins activated in blood clotting?",
            "img": "",
            "choices": "GPIb///GPIIb/IIIa///GPVI///CD36///P-selectin",
            "answer": "GPIIb/IIIa",
            "select": "",
            "explain": "ในกระบวนการแข็งตัวของเลือด Glycoprotein (GP) IIb/IIIa บนผิวเกล็ดเลือดมีบทบาทสำคัญที่สุดในขั้นตอนการเกาะกลุ่ม (aggregation) เมื่อเกล็ดเลือดถูกกระตุ้น ตัวรับ GP IIb/IIIa จะทำงาน (activated) และจับกับ fibrinogen เพื่อเชื่อมเกล็ดเลือดหลายๆอันเข้าด้วยกันเป็นก้อน (platelet plug) ส่วน GPIb มีบทบาทในขั้นตอนการยึดเกาะกับหลอดเลือด (adhesion) ผ่าน von Willebrand factor",
            "state": false
        },
        {
            "problem": "45. thrombin สามารถย้อนกลับกระตุ้น factor อะไรได้บ้าง",
            "img": "",
            "choices": "V, VIII, XI///V, VIII, XIII///II, VII, IX, X///I, II, V///IX, X, XI///V, VIII, XI, XIII",
            "answer": "V, VIII, XI",
            "select": "",
            "explain": "Thrombin (Factor IIa) เป็นเอนไซม์ที่มีบทบาทสำคัญในกระบวนการแข็งตัวของเลือด นอกจากจะทำหน้าที่เปลี่ยน fibrinogen เป็น fibrin แล้ว Thrombin ยังสามารถย้อนกลับไปกระตุ้นปัจจัยการแข็งตัวอื่นๆ ได้แก่ Factor V, Factor VIII และ Factor XI ซึ่งการกระตุ้นเหล่านี้ช่วยเพิ่มประสิทธิภาพและความรวดเร็วของกระบวนการแข็งตัวของเลือด ทำให้เกิดลิ่มเลือดได้อย่างมีประสิทธิภาพมากขึ้น",
            "state": false
        },
        {
            "problem": "46. A 6-year-old-boy was admitted to the hospital with a bleeding disorder. The lab shows aPTT prolonged. What could possibly be the cause of the disorder in this patient?",
            "img": "",
            "choices": "Platelet dysfunction///Tissue factor deficiency///Abnormal of extrinsic pathway///Factor VII deficiency///Hemophilia",
            "answer": "Hemophilia",
            "select": "",
            "explain": "ค่า aPTT (Activated Partial Thromboplastin Time) ที่ยาวนานผิดปกติ (prolonged) บ่งชี้ถึงความผิดปกติในระบบการแข็งตัวของเลือดในสาย Intrinsic pathway (Factor VIII, IX, XI, XII) หรือ Common pathway ในเด็กผู้ชายที่มีประวัติเลือดออกผิดปกติและมี aPTT prolonged สาเหตุที่พบบ่อยที่สุดคือโรค Hemophilia ซึ่งเป็นโรคถ่ายทอดทางพันธุกรรมที่เกิดจากการขาด Factor VIII (Hemophilia A) หรือ Factor IX (Hemophilia B)",
            "state": false
        },
        {
            "problem": "47. An 8-year-old boy was referred to a hematologist due to abnormal bleeding after tooth extraction. ตรวจพบ factor VIII def. เป็นโรคอะไร",
            "img": "",
            "choices": "Hemophilia A///Marfan's syndrome///Glanzmann thrombasthenia///Vasculitis///von Willebrand disease",
            "answer": "Hemophilia A",
            "select": "",
            "explain": "Hemophilia A เป็นโรคเลือดออกง่ายผิดปกติทางพันธุกรรมที่เกิดจากการขาดปัจจัยการแข็งตัวของเลือดหมายเลข 8 (Factor VIII deficiency) ซึ่งเป็นโรคที่ถ่ายทอดทางโครโมโซม X จึงมักพบในเพศชาย อาการเลือดออกนานผิดปกติหลังการบาดเจ็บหรือการทำหัตถการเช่นการถอนฟันเป็นอาการแสดงที่พบบ่อย",
            "state": false
        },
        {
            "problem": "48. pt.ชายวัยกลางคน-แก่ มาด้วยอาการม้ามโต (6 cm.) ถูกวินิจฉัยด้วย chronic myeloid leukemia ถามว่า blood smear จะเจออะไร",
            "img": "",
            "choices": "Basophilia///Neutropenia///Monocytosis///Relative lymphocytosis///Neutrophil with toxic granule",
            "answer": "Basophilia",
            "select": "",
            "explain": "โรค Chronic Myeloid Leukemia (CML) เป็นมะเร็งเม็ดเลือดขาวชนิดเรื้อรังที่มีลักษณะเฉพาะคือการเพิ่มจำนวนของเม็ดเลือดขาวสาย Myeloid ในทุกระยะการเจริญเติบโต สิ่งที่ตรวจพบใน blood smear ที่เป็นลักษณะเด่นและช่วยในการวินิจฉัย CML อย่างหนึ่งคือการพบจำนวน Basophil สูงผิดปกติ (Basophilia) ซึ่งพบได้ในผู้ป่วย CML เกือบทุกราย",
            "state": false
        },
        {
            "problem": "49. What is the coagulation inhibitor that interferes with the extrinsic coagulation pathway?",
            "img": "",
            "choices": "Protein C///Protein S///Thrombin///Thrombomodulin///Tissue factor pathway inhibitor",
            "answer": "Tissue factor pathway inhibitor",
            "select": "",
            "explain": "Extrinsic pathway เริ่มต้นจากการที่ Tissue Factor (TF) สัมผัสกับ Factor VII ในเลือด ตัวยับยั้งทางสรีรวิทยาที่สำคัญที่สุดของ pathway นี้คือ Tissue Factor Pathway Inhibitor (TFPI) ซึ่งจะทำงานโดยการจับและยับยั้ง complex ของ TF-Factor VIIa ทำให้การเริ่มต้นของกระบวนการแข็งตัวของเลือดถูกควบคุมไม่ให้มากจนเกินไป",
            "state": false
        },
        {
            "problem": "50. Which of the following substance requires heparin to accelerate its coagulation effect?",
            "img": "",
            "choices": "Tissue factor pathway inhibitor///Thrombomodulin///Antithrombin III///Protein C///Protein S",
            "answer": "Antithrombin III",
            "select": "",
            "explain": "Antithrombin III (AT III) เป็นสารต้านการแข็งตัวของเลือดที่มีอยู่ในร่างกายตามธรรมชาติ แต่จะทำงานได้ช้ามาก ยา Heparin จะออกฤทธิ์โดยการเข้าไปจับกับ AT III และทำให้โครงสร้างของ AT III เปลี่ยนแปลงไป ส่งผลให้ความสามารถในการยับยั้ง clotting factor โดยเฉพาะ Thrombin (Factor IIa) และ Factor Xa เพิ่มขึ้นอย่างมหาศาล (ประมาณ 1000 เท่า) จึงสามารถหยุดการแข็งตัวของเลือดได้อย่างรวดเร็ว",
            "state": false
        },
        {
            "problem": "51. Which of the following anticoagulants accelerate antithrombin III?",
            "img": "",
            "choices": "Heparin///Oxalate///Ethylenediaminetetraacetic acid///Warfarin///Citrate",
            "answer": "Heparin",
            "select": "",
            "explain": "Heparin เป็นยาต้านการแข็งตัวของเลือดที่ออกฤทธิ์โดยทำหน้าที่เป็นตัวเร่ง (catalyst) ให้กับ Antithrombin III ซึ่งเป็นโปรตีนในร่างกายที่คอยยับยั้ง clotting factors การจับกันของ Heparin และ Antithrombin III จะช่วยเพิ่มประสิทธิภาพการทำงานของ Antithrombin III ได้หลายร้อยถึงหลายพันเท่า ทำให้สามารถยับยั้งกระบวนการแข็งตัวของเลือดได้อย่างรวดเร็ว",
            "state": false
        },
        {
            "problem": "52. A 65 years old man come to the hospital with coronary occlusion. Which of the following can be given to treat his condition?",
            "img": "",
            "choices": "Human tissue plasminogen activator///Antithrombin III///Vitamin K///Fresh frozen plasma///Cryoprecipitate",
            "answer": "Human tissue plasminogen activator",
            "select": "",
            "explain": "Coronary occlusion หรือการอุดตันของหลอดเลือดหัวใจ มักเกิดจากลิ่มเลือด (thrombus) การรักษาในระยะเฉียบพลันคือการให้ยาละลายลิ่มเลือด (fibrinolytic drug) เพื่อสลายลิ่มเลือดและเปิดหลอดเลือดให้เลือดกลับไปเลี้ยงกล้ามเนื้อหัวใจได้อีกครั้ง Human tissue plasminogen activator (tPA) เป็นยาในกลุ่มนี้ซึ่งออกฤทธิ์โดยการเปลี่ยน plasminogen ให้เป็น plasmin ซึ่ง plasmin จะไปย่อยสลาย Fibrin ที่เป็นโครงสร้างหลักของลิ่มเลือด",
            "state": false
        },
        {
            "problem": "53. A 12-year-old boy is admitted to the hospital due to a bleeding disorder. His clotting time was prolonged. What is the cause of his bleeding disorder?",
            "img": "",
            "choices": "Platelet dysfunction///Tissue factor deficiency///Factor VII deficiency///Excessive plasmin///Abnormal of intrinsic pathway",
            "answer": "Abnormal of intrinsic pathway",
            "select": "",
            "explain": "Clotting time ที่นานผิดปกติบ่งชี้ถึงปัญหาใน Coagulation cascade (กระบวนการแข็งตัวของเลือดที่เกี่ยวกับ clotting factors) ในเด็กผู้ชายที่มีอาการเลือดออกผิดปกติ สาเหตุทางพันธุกรรมที่พบบ่อยคือความผิดปกติในสาย Intrinsic pathway เช่น โรคฮีโมฟีเลีย A (ขาด Factor VIII) หรือ ฮีโมฟีเลีย B (ขาด Factor IX) ซึ่งจะทำให้ค่าที่เกี่ยวข้องกับ Intrinsic pathway เช่น aPTT และ clotting time ยาวนานขึ้น",
            "state": false
        },
        {
            "problem": "54. A patient was immobilized in the hospital. What is the possible consequence?",
            "img": "",
            "choices": "Deep vein thrombosis///Embolism///Myocardial infarction///Stroke///Aortic dissection",
            "answer": "Deep vein thrombosis",
            "select": "",
            "explain": "การที่ผู้ป่วยต้องนอนนิ่งๆ เป็นเวลานาน (immobilization) ทำให้การไหลเวียนของเลือดในหลอดเลือดดำที่ขาช้าลง (venous stasis) ซึ่งเป็นปัจจัยเสี่ยงที่สำคัญที่สุดของการเกิดลิ่มเลือดอุดตันในหลอดเลือดดำส่วนลึก (Deep Vein Thrombosis - DVT) หากลิ่มเลือดนี้หลุดลอยไปตามกระแสเลือดก็อาจไปอุดตันที่ปอดกลายเป็น Pulmonary Embolism ได้",
            "state": false
        },
        {
            "problem": "55. Anticoagulant ของ extrinsic pathway",
            "img": "",
            "choices": "Tissue factor pathway inhibitor///Antithrombin III///Protein C///Protein S///Heparin",
            "answer": "Tissue factor pathway inhibitor",
            "select": "",
            "explain": "Extrinsic pathway เป็นขั้นตอนเริ่มต้นของการแข็งตัวของเลือดที่ถูกกระตุ้นโดย Tissue Factor ร่างกายมีกลไกควบคุมคือโปรตีนที่ชื่อว่า Tissue Factor Pathway Inhibitor (TFPI) ซึ่งเป็นสารต้านการแข็งตัวของเลือดตามธรรมชาติที่ทำหน้าที่ยับยั้งการทำงานของ Tissue Factor-Factor VIIa complex โดยตรง เพื่อป้องกันไม่ให้เกิดการสร้างลิ่มเลือดมากเกินความจำเป็น",
            "state": false
        },
        {
            "problem": "56. Which substance does inhibit plalete activation and aggregation?",
            "img": "",
            "choices": "Endothelin-1///Prostacyclin///Erythropoietin///Thrombomodulin///Thromboxane A2",
            "answer": "Prostacyclin",
            "select": "",
            "explain": "Prostacyclin (PGI2) เป็นสารที่สร้างจากเซลล์เยื่อบุหลอดเลือด (endothelial cells) ที่ปกติ มีฤทธิ์สำคัญในการยับยั้งการทำงานของเกล็ดเลือด (inhibit platelet activation and aggregation) และยังช่วยขยายหลอดเลือด (vasodilation) ด้วย Prostacyclin ทำงานตรงกันข้ามกับ Thromboxane A2 ที่สร้างจากเกล็ดเลือดซึ่งกระตุ้นการเกาะกลุ่มของเกล็ดเลือดและทำให้หลอดเลือดหดตัว",
            "state": false
        },
        {
            "problem": "57. ผู้ป่วยนอนติดเตียงมี hypercoagulation และ vein thrombosis จะเกิดอะไรขึ้นได้อีก",
            "img": "",
            "choices": "Stroke///Pulmonary embolism///DIC///Neutrophilia///Thrombocytopenia",
            "answer": "Pulmonary embolism",
            "select": "",
            "explain": "ผู้ป่วยนอนติดเตียงมีความเสี่ยงสูงที่จะเกิดลิ่มเลือดในหลอดเลือดดำที่ขา (vein thrombosis) ภาวะแทรกซ้อนที่อันตรายและเฉียบพลันที่สุดคือการที่ลิ่มเลือดนั้นหลุดออกจากผนังหลอดเลือด และลอยไปตามกระแสเลือดเข้าสู่หัวใจห้องขวา แล้วถูกส่งต่อไปยังปอด ไปอุดตันหลอดเลือดในปอด ทำให้เกิดภาวะ Pulmonary Embolism ซึ่งเป็นภาวะฉุกเฉินทางการแพทย์ที่อาจอันตรายถึงชีวิตได้",
            "state": false
        },
        {
            "problem": "58. The full-term male infant develops vomiting with blood 2 hrs after uneventfully normal delivery. His mother was treated with warfarin due to rheumatic heart disease s/p mitral valve replacement. Which of the following is the most likely diagnosis?",
            "img": "",
            "choices": "Severe hemophilia///Hypofibrinogenemia///Vitamin K deficiency bleeding///Gastric ulcer///Thrombocytopenia",
            "answer": "Vitamin K deficiency bleeding",
            "select": "",
            "explain": "ยา Warfarin ที่แม่ได้รับสามารถผ่านรกไปยังทารกได้ ซึ่ง Warfarin จะไปยับยั้งการทำงานของวิตามินเค ทำให้ร่างกายทารกไม่สามารถสร้าง Clotting factor ที่ต้องใช้วิตามินเค (Factor II, VII, IX, X) ได้ตามปกติ ส่งผลให้ทารกแรกเกิดมีภาวะเลือดออกง่ายผิดปกติ ที่เรียกว่า Vitamin K deficiency bleeding อาการอาเจียนเป็นเลือดบ่งชี้ว่ามีการเลือดออกในทางเดินอาหาร ซึ่งเป็นผลโดยตรงจากยาที่แม่ได้รับ",
            "state": false
        },
        {
            "problem": "59. What's that most likely diagnosis of the patient from these figures?",
            "img": "https://drive.google.com/open?id=1Nix9iYRYWP61rlIPWjMHCstn63dMpcyj&usp=drive_copy",
            "choices": "Folate deficiency///Copper deficiency///Vitamin C deficiency///Iron deficiency anemia///Vitamin B12 deficiency",
            "answer": "Iron deficiency anemia",
            "select": "",
            "explain": "ภาพซ้าย: แสดงอาการ Atrophic glossitis หรือ ลิ้นเลี่ยน สังเกตได้จากลิ้นที่มีลักษณะเรียบ มันวาว และแดงกว่าปกติ เนื่องจากปุ่มรับรสบนลิ้น (papillae) ฝ่อลีบหายไป ภาพขวา: แสดงอาการ Angular cheilitis หรือ ปากนกกระจอก ซึ่งเป็นรอยแผลอักเสบแตกเป็นร่องที่มุมปาก การพบอาการทั้งสองอย่างนี้ร่วมกัน(Atrophic glossitis และ Angular cheilitis) เป็นลักษณะที่คลาสสิกของ ภาวะโลหิตจางจากการขาดธาตุเหล็ก(Iron deficiency anemia) ",
            "state": false
        },
        {
            "problem": "60. Key substance of anemia of chronic disease",
            "img": "",
            "choices": "Hepcidin///Erythropoietin///Transferrin///Ferritin///Haptoglobin",
            "answer": "Hepcidin",
            "select": "",
            "explain": "Anemia of chronic disease (หรือ Anemia of inflammation) มีกลไกหลักเกิดจากสารที่ร่างกายสร้างขึ้นเมื่อมีการอักเสบเรื้อรัง คือ Hepcidin ซึ่งเป็นฮอร์โมนที่สร้างจากตับ Hepcidin จะไปยับยั้งการดูดซึมธาตุเหล็กจากลำไส้ และขัดขวางการปล่อยธาตุเหล็กออกจากเซลล์ที่เก็บสะสม (macrophage) ทำให้เกิดภาวะที่เรียกว่า functional iron deficiency คือมีธาตุเหล็กในร่างกายแต่ไม่สามารถนำออกมาใช้สร้างเม็ดเลือดแดงได้",
            "state": false
        },
        {
            "problem": "61. A 65 year-old male presented with subacute fever with generalized lymphadenopathy. Lymph node biopsy shows chronic granulomatous infection and culture positive for Mycobacterium tuberculosis. CBC: Hb 15%, Hct 45%, WBC 24,000 PMN 80% Reticulocyte 10% Promyelocyte 5% Basophil 5%. Other than Anti-tuberculosis what more should doctor prescribe to correct abnormal CBC?",
            "img": "",
            "choices": "Naproxen///Tyrosine kinase inhibitor (imatinib)///Oral iron supplement (Ferrous sulfate)///Corticosteroids///Reassure, anti-tuberculosis is sufficient",
            "answer": "Reassure, anti-tuberculosis is sufficient",
            "select": "",
            "explain": "ผล CBC ของผู้ป่วยแสดงภาวะ Leukemoid reaction คือมีเม็ดเลือดขาวสูงมากและพบตัวอ่อน (left shift) ซึ่งเป็นการตอบสนองของไขกระดูกต่อการติดเชื้อที่รุนแรง (ในกรณีนี้คือวัณโรค) ไม่ใช่ความผิดปกติของไขกระดูกโดยตรง ดังนั้นการรักษาจึงมุ่งเน้นไปที่การกำจัดสาเหตุคือการให้ยาต้านวัณโรค (Anti-tuberculosis) เมื่อการติดเชื้อดีขึ้น ผลเลือดก็จะกลับมาเป็นปกติได้เอง ไม่จำเป็นต้องให้ยาอื่นเพื่อ 'แก้ไข' ผลเลือดนี้",
            "state": false
        },
        {
            "problem": "62. The patient has fatigue, Hb10%, WBC 300,000, PMN 20%, Lymphocytes 80%, Platelets 50,000. What is the likely diagnosis?",
            "img": "",
            "choices": "Metastatic cancer///CLL///Acute Myeloid Leukemia///Aplastic Anemia///Myelofibrosis",
            "answer": "CLL",
            "select": "",
            "explain": "ผู้ป่วยมีอาการอ่อนเพลียจากภาวะโลหิตจาง (Hb 10%) ร่วมกับผลเลือดที่พบจำนวนเม็ดเลือดขาวสูงมาก (WBC 300,000) โดยส่วนใหญ่เป็น Lymphocyte (80%) และมีเกล็ดเลือดต่ำ (Thrombocytopenia) ลักษณะดังกล่าวเป็นภาพที่คลาสสิกของโรค Chronic Lymphocytic Leukemia (CLL) ซึ่งเป็นมะเร็งเม็ดเลือดขาวชนิดเรื้อรังที่เซลล์มะเร็ง (lymphocyte) ไปสะสมในไขกระดูกและแทนที่การสร้างเซลล์เม็ดเลือดปกติ ทำให้เกิดภาวะโลหิตจางและเกล็ดเลือดต่ำตามมา",
            "state": false
        },
        {
            "problem": "63. Which condition induces thrombocytopenia?",
            "img": "",
            "choices": "Solid cancer///Dengue infection///Leptospirosis///Rickettsia///Chronic alcohol drinking",
            "answer": "Dengue infection",
            "select": "",
            "explain": "Thrombocytopenia หรือภาวะเกล็ดเลือดต่ำ เป็นลักษณะสำคัญอย่างหนึ่งของโรคไข้เลือดออก (Dengue infection) โดยกลไกเกิดได้จากหลายอย่าง ทั้งการที่เชื้อไวรัสเดงกี่เข้าไปกดการทำงานของไขกระดูกโดยตรง และการที่ระบบภูมิคุ้มกันของร่างกายสร้างแอนติบอดีขึ้นมาทำลายเกล็ดเลือดของตัวเอง",
            "state": false
        },
        {
            "problem": "64. โรคอะไรบ้างที่จะทำให้เกิด thrombocytosis",
            "img": "",
            "choices": "Solid organ cancer///Chronic alcoholism///Leptospirosis///Rickettsia///Malaria",
            "answer": "Solid organ cancer",
            "select": "",
            "explain": "Thrombocytosis หรือภาวะเกล็ดเลือดสูง สามารถเกิดได้จากหลายสาเหตุ หนึ่งในนั้นคือ Reactive thrombocytosis ซึ่งเป็นการตอบสนองต่อภาวะอื่น ๆ ในร่างกาย เช่น การอักเสบ การติดเชื้อ หรือมะเร็ง โดยเฉพาะมะเร็งของอวัยวะภายใน (Solid organ cancer) ซึ่งเซลล์มะเร็งสามารถสร้างสาร cytokine ไปกระตุ้นไขกระดูกให้สร้างเกล็ดเลือดมากขึ้นได้ ส่วนภาวะอื่นในตัวเลือกมักทำให้เกิดเกล็ดเลือดต่ำ (thrombocytopenia)",
            "state": false
        },
        {
            "problem": "65. Which of the following condition can result in erythrocytosis?",
            "img": "",
            "choices": "Malaria infection///Chronic smoking///DIC///HIV infection///Prolong of an iron supplement",
            "answer": "Chronic smoking",
            "select": "",
            "explain": "Erythrocytosis คือภาวะที่มีจำนวนเม็ดเลือดแดงสูงกว่าปกติ การสูบบุหรี่เรื้อรัง (Chronic smoking) ทำให้ร่างกายได้รับก๊าซคาร์บอนมอนอกไซด์ (CO) ซึ่งจะไปจับกับฮีโมโกลบินได้ดีกว่าออกซิเจน ทำให้เกิดภาวะพร่องออกซิเจนในเนื้อเยื่อ (tissue hypoxia) ร่างกายจะตอบสนองโดยการกระตุ้นให้ไตสร้างฮอร์โมน Erythropoietin (EPO) มากขึ้น เพื่อไปสั่งให้ไขกระดูกสร้างเม็ดเลือดแดงเพิ่มขึ้นมาทดแทน เกิดเป็นภาวะ secondary erythrocytosis",
            "state": false
        },
        {
            "problem": "66. What can cause erythrocytosis?",
            "img": "",
            "choices": "Heavy smoking///Anemia///Blood loss///Renal failure///Iron deficiency",
            "answer": "Heavy smoking",
            "select": "",
            "explain": "การสูบบุหรี่จัด (Heavy smoking) เป็นสาเหตุของ Secondary erythrocytosis (ภาวะเม็ดเลือดแดงสูงชนิดทุติยภูมิ) ที่พบบ่อย เนื่องจากควันบุหรี่มีคาร์บอนมอนอกไซด์ (CO) ซึ่งไปลดความสามารถในการขนส่งออกซิเจนของเลือด ทำให้ร่างกายเกิดภาวะขาดออกซิเจนเรื้อรัง ซึ่งจะไปกระตุ้นการสร้าง Erythropoietin (EPO) และส่งผลให้มีการผลิตเม็ดเลือดแดงเพิ่มขึ้น",
            "state": false
        },
        {
            "problem": "67. What condition can result in erythrocytosis?",
            "img": "",
            "choices": "Smoking///DIC///Pregnancy///Chronic kidney disease///Prolong using iron supplement (ferrous fumarate)",
            "answer": "Smoking",
            "select": "",
            "explain": "การสูบบุหรี่ (Smoking) ทำให้เกิดภาวะเม็ดเลือดแดงสูง (Erythrocytosis) ได้ผ่านกลไกการเกิดภาวะพร่องออกซิเจนเรื้อรังจากก๊าซคาร์บอนมอนอกไซด์ ซึ่งจะกระตุ้นให้ร่างกายสร้างเม็ดเลือดแดงเพิ่มขึ้นเพื่อชดเชย ส่วนการได้รับธาตุเหล็กเสริมจะใช้รักษาภาวะโลหิตจางจากการขาดธาตุเหล็ก แต่ไม่ได้ทำให้เกิดภาวะเม็ดเลือดแดงสูงในคนปกติ",
            "state": false
        },
        {
            "problem": "1??. 23-year-old woman present with intermittent epistaxis and hypermenorrhea for 2 months. PE: petechial hemorrhage, no hepatosplenomegaly. What is the most likely pathogenesis?",
            "img": "",
            "choices": "Thrombocytopenia///Platelet dysfunction///Collagen-vascular defect///Clotting factor deficiency///Hyperfibrinolysis",
            "answer": "Thrombocytopenia",
            "select": "",
            "explain": "ผู้ป่วยหญิงอายุน้อยมีอาการเลือดออกตามเยื่อบุ (epistaxis, hypermenorrhea) และพบจุดเลือดออกใต้ผิวหนัง (petechiae) ซึ่งเป็นลักษณะของความผิดปกติในระบบห้ามเลือดปฐมภูมิ (primary hemostasis) ที่เกี่ยวข้องกับเกล็ดเลือด พยาธิกำเนิดที่พบบ่อยที่สุดของอาการเหล่านี้คือภาวะเกล็ดเลือดต่ำ (Thrombocytopenia) ส่วน Platelet dysfunction (เกล็ดเลือดทำงานผิดปกติ) ก็เป็นไปได้ แต่พบน้อยกว่า",
            "state": false
        },
        {
            "problem": "2??. Which of these is an abnormal hemoglobin found in alpha thalassemic patients?",
            "img": "",
            "choices": "Hb E///Hb Cs///Hb A2///Hb F///Portland Hb",
            "answer": "Portland Hb",
            "select": "",
            "explain": "ในภาวะ Alpha thalassemia ที่รุนแรงมากจนไม่สามารถสร้างสาย alpha-globin ได้เลย (Hb Bart's Hydrops Fetalis) ร่างกายจะไม่สามารถสร้างฮีโมโกลบินปกติที่มีสายอัลฟ่าเป็นองค์ประกอบได้ (เช่น HbA, HbA2, HbF) แต่จะสร้างฮีโมโกลบินที่ผิดปกติขึ้นมาแทน เช่น Hb Bart's (gamma4) และ Portland Hb (zeta2gamma2) ซึ่งเป็นฮีโมโกลบินในระยะตัวอ่อน (embryonic hemoglobin) ดังนั้นการตรวจพบ Portland Hb จึงเป็นตัวบ่งชี้ของโรค Alpha thalassemia ชนิดรุนแรง",
            "state": false
        },
        {
            "problem": "3??. 60 year old patient presents with severe anemia requiring blood transfusion for 5 months. What is the most likely diagnosis from the blood smear?",
            "img": "https://drive.google.com/open?id=1FKKMAo6FJ8XMEOZxBKQWAFfLnm5KKZ4j&usp=drive_copy",
            "choices": "Primary myelofibrosis / AGL///G6PD deficiency with acute hemolysis///Thalassemia disease///Autoimmune hemolytic anemia///Malaria",
            "answer": "Thalassemia disease",
            "select": "",
            "explain": "ภาพ blood smear แสดงลักษณะของเม็ดเลือดแดงที่ผิดปกติหลายอย่าง เช่น รูปร่างผิดปกติ (poikilocytosis), ขนาดไม่เท่ากัน (anisocytosis), มีจุดสีเข้มภายในเซลล์ (basophilic stippling) และมีเม็ดเลือดแดงขนาดเล็ก (microcytosis) ซึ่งเป็นลักษณะเฉพาะของโรค Thalassemia โดยเฉพาะในผู้ป่วยที่ต้องได้รับการถ่ายเลือดบ่อยๆ เนื่องจากภาวะโลหิตจางรุนแรง",
            "state": false
        },
        {
            "problem": "4??. ผู้ป่วยนอนติดเตียงจะเกิดอะไร (ข้อสอบเก่า)",
            "img": "",
            "choices": "Pulmonary embolism///Coronary occlusion///Cerebral infarction///Deep vein thrombosis///Myocardial infarction",
            "answer": "Deep vein thrombosis",
            "select": "",
            "explain": "ผู้ป่วยที่นอนติดเตียงเป็นเวลานานมีความเสี่ยงสูงที่จะเกิดภาวะเลือดคั่งในหลอดเลือดดำ (venous stasis) ซึ่งเป็นปัจจัยสำคัญที่ทำให้เกิดลิ่มเลือดอุดตันในหลอดเลือดดำส่วนลึก (Deep Vein Thrombosis - DVT) โดยเฉพาะที่ขา หากลิ่มเลือดนี้หลุดลอยไปตามกระแสเลือดก็อาจไปอุดตันที่ปอดกลายเป็น Pulmonary Embolism ได้ ซึ่งเป็นภาวะฉุกเฉินทางการแพทย์ที่อันตรายถึงชีวิต",
            "state": false
        },
        {
            "problem": "5??. Which complication should be found in sickle cell anemia? (เหมือนข้อสอบเก่าเลย แต่เปลี่ยน choice)",
            "img": "",
            "choices": "Iron overload///Thrombocytopenia///Acute renal failure///Avascular necrosis of bone///Decrease O2 affinity of Hb",
            "answer": "Avascular necrosis of bone",
            "select": "",
            "explain": "โรคโลหิตจางชนิด Sickle cell เกิดจากเม็ดเลือดแดงเปลี่ยนรูปร่างเป็นทรงเคียวเมื่อมีออกซิเจนต่ำ ทำให้ไปอุดตันหลอดเลือดฝอยเล็กๆได้ง่าย (vaso-occlusion) การอุดตันของหลอดเลือดที่ไปเลี้ยงกระดูกจะทำให้เนื้อกระดูกตายจากการขาดเลือด เรียกว่า Avascular necrosis of bone ซึ่งเป็นภาวะแทรกซ้อนที่พบบ่อยและสร้างความเจ็บปวดให้กับผู้ป่วย โดยเฉพาะบริเวณหัวกระดูกต้นขาและต้นแขน",
            "state": false
        }
    ],
    "HL49MCQ2": [
        {
            problem: "1. คนไข้มี Exudate tonsil (ทอนซิลอักเสบมีหนอง) ควรส่ง lab อะไรเพื่อช่วยในการวินิจฉัยแยกโรค (Ddx)?",
            img: "",
            choices: "Anti viral capsid IgA///Atypical lymphocytes >12%///anti EBV///anti CMV///heterophile AB",
            answer: "heterophile AB",
            select: "",
            explain: "Exudative tonsillitis เป็นอาการที่พบได้บ่อยในโรค Infectious Mononucleosis ซึ่งส่วนใหญ่เกิดจากเชื้อ Epstein-Barr virus (EBV) การตรวจ Heterophile antibody test (Monospot test) เป็นการตรวจคัดกรองที่ง่ายและรวดเร็วเพื่อหาแอนติบอดีที่จำเพาะกับโรคนี้ ซึ่งช่วยวินิจฉัยแยกโรคจากการติดเชื้อแบคทีเรียหรือไวรัสชนิดอื่นได้",
            state: false
        },
        {
            problem: "2. ผู้ป่วยติดเชื้อ ZIKV (Zika virus) ควรส่งตรวจทางห้องปฏิบัติการใดเพื่อยืนยันการวินิจฉัยในระยะเฉียบพลัน?",
            img: "",
            choices: "BM biopsy///liver biopsy///skin biopsy///urine with IgM///blood with viral RNA",
            answer: "blood with viral RNA",
            select: "",
            explain: "ในช่วงแรกของการติดเชื้อ Zika virus (ประมาณสัปดาห์แรก) จะมีเชื้อไวรัสอยู่ในกระแสเลือด (viremia) การตรวจหาสารพันธุกรรมของไวรัส (viral RNA) ด้วยวิธี Real-time PCR (RT-PCR) จากเลือดจึงเป็นวิธีที่ไวและจำเพาะที่สุดในการยืนยันการวินิจฉัยในระยะเฉียบพลัน (acute phase) ก่อนที่ร่างกายจะสร้างแอนติบอดีขึ้นมา",
            state: false
        },
        {
            problem: "3. Which virus is associated with nasopharyngeal carcinoma (มะเร็งโพรงจมูกส่วนหลัง)?",
            img: "",
            choices: "CMV///EBV///HIV///HTVL-1///HPV",
            answer: "EBV",
            select: "",
            explain: "Epstein-Barr virus (EBV) เป็นไวรัสที่มีความสัมพันธ์อย่างยิ่งกับการเกิดมะเร็งโพรงจมูกส่วนหลัง (Nasopharyngeal Carcinoma) โดยเฉพาะในประชากรแถบเอเชียตะวันออกเฉียงใต้และจีนตอนใต้ เชื้อ EBV สามารถเข้าไปติดเชื้อในเซลล์เยื่อบุโพรงจมูกและกระตุ้นให้เกิดการเปลี่ยนแปลงจนกลายเป็นเซลล์มะเร็งได้",
            state: false
        },
        {
            problem: "8. เด็กอายุ 3 ปี มีไข้, เลือดกำเดาไหล (epistaxis), ปวดท้อง ผลเลือด Hct ประมาณ 30+, WBC 3,000, Plt. ต่ำ ตรวจ dengue : IgM-, IgG+, NS1+ ควรวินิจฉัยว่าเป็นอะไร?",
            img: "",
            choices: "Dengue fever///Dengue hemorrhagic fever///Dengue shock syndrome///Undifferentiated febrile illness///Secondary bacterial infection",
            answer: "Dengue hemorrhagic fever",
            select: "",
            explain: "ผล NS1+ บ่งชี้ว่ามีการติดเชื้อไข้เลือดออกในปัจจุบัน ผล IgG+ ร่วมกับ IgM- บ่งชี้ว่าเป็นการติดเชื้อครั้งที่สอง (secondary infection) ซึ่งเพิ่มความเสี่ยงต่อการเป็นโรครุนแรง อาการทางคลินิกเช่น เลือดกำเดาไหล ปวดท้อง ร่วมกับผลเลือดที่เกล็ดเลือดต่ำ (Thrombocytopenia) และอาจมีภาวะเลือดข้น (Hemoconcentration) เข้าได้กับเกณฑ์การวินิจฉัย Dengue Hemorrhagic Fever (DHF)",
            state: false
        },
        {
            problem: "10. A 28-year old pregnant woman was diagnosed with zika infection. Blood serum test positive for anti-zika IgM. She was concerned about her baby of having neurological retardation. Zika antibody can have cross-reactivity with which virus?",
            img: "",
            choices: "EBV///CMV///Arbovirus///Dengue virus///Chikungunya virus",
            answer: "Dengue virus",
            select: "",
            explain: "Zika virus และ Dengue virus จัดอยู่ในกลุ่ม Flavivirus ซึ่งเป็น Arbovirus ที่มียุงเป็นพาหะเหมือนกัน ไวรัสสองชนิดนี้มีโครงสร้างโปรตีนที่ผิวเซลล์คล้ายคลึงกันมาก ทำให้แอนติบอดีที่ร่างกายสร้างขึ้นต่อเชื้อหนึ่ง (เช่น anti-Zika IgM) สามารถทำปฏิกิริยาข้ามกลุ่ม (cross-react) กับอีกเชื้อหนึ่งในการตรวจทางซีโรโลยีได้ ทำให้การแปลผลต้องทำอย่างระมัดระวัง",
            state: false
        },
        {
            problem: "15. ยาชนิดใดที่สามารถใช้เพื่อช่วยวินิจฉัยการติดเชื้อพยาธิฟิลาเรียชนิดที่พบ microfilariae ในเลือดช่วงกลางวัน (daytime filariasis) ได้?",
            img: "",
            choices: "mebendazole///artemisinin///praziquantel///diethylcarbamazine///albendazole",
            answer: "diethylcarbamazine",
            select: "",
            explain: "ยา Diethylcarbamazine (DEC) นอกจากจะเป็นยาที่ใช้รักษาโรคพยาธิฟิลาเรียแล้ว ยังสามารถใช้เป็น provocative test เพื่อช่วยวินิจฉัยได้ โดยเฉพาะในเชื้อ Loa loa ที่มี microfilariae ในเลือดช่วงกลางวัน การให้ยา DEC จะกระตุ้นให้ microfilariae ออกมาสู่กระแสเลือดในปริมาณมากขึ้น ทำให้ตรวจพบได้ง่ายขึ้น",
            state: false
        },
        {
            problem: "18. ผู้ป่วยมีแผลลักษณะคล้ายปากปล่องภูเขาไฟ (volcano-like) ซึ่งพัฒนาใหญ่ขึ้นภายใน 1 เดือน แผลลักษณะนี้เกิดจากเชื้อใด?",
            img: "",
            choices: "Toxoplasma///Trypanosoma///Leishmania///Babesia///Plasmodium",
            answer: "Leishmania",
            select: "",
            explain: "แผลที่มีขอบยกนูนและมีเนื้อตายอยู่ตรงกลางคล้ายปากปล่องภูเขาไฟ (volcano-like ulcer) เป็นลักษณะที่จำเพาะของโรค Leishmaniasis ชนิดที่เกิดแผลที่ผิวหนัง (Cutaneous Leishmaniasis) ซึ่งเกิดจากเชื้อโปรโตซัว Leishmania ที่มีริ้นฝอยทราย (sandfly) เป็นพาหะ",
            state: false
        },
        {
            problem: "19. ในผู้ป่วย HIV ที่ติดเชื้อ Toxoplasmosis และมีผล IgM positive อาการแสดงที่สำคัญคืออะไร?",
            img: "",
            choices: "anemia///fatigue///fever///jaundice///lymphadenopathy",
            answer: "fever",
            select: "",
            explain: "ในผู้ป่วยที่ภูมิคุ้มกันบกพร่องเช่นผู้ป่วย HIV การติดเชื้อ Toxoplasmosis มักเป็นการกำเริบของเชื้อเก่า (reactivation) และมักจะแสดงอาการที่ระบบประสาทส่วนกลาง (Toxoplasmic encephalitis) โดยอาการทาง systemic ที่สำคัญและพบบ่อยคือไข้ (fever) ซึ่งบ่งบอกถึงการติดเชื้อที่กำลัง active อยู่",
            state: false
        },
        {
            problem: "20. A 23-years-old female presented with malaise, body ache, nausea, episode of fever, chill and sweating for 3 days. Lab examination found malaria infection. What is the most common and dangerous cause of this disease?",
            img: "",
            choices: "Plasmodium vivax///Plasmodium ovale///Plasmodium falciparum///Plasmodium malariae///Plasmodium knowlesi",
            answer: "Plasmodium falciparum",
            select: "",
            explain: "อาการที่แสดงเป็นอาการไข้จับสั่นแบบไม่จำเพาะของโรคมาลาเรีย ซึ่งเชื้อ Plasmodium ได้ทุกชนิดสามารถทำให้เกิดอาการเหล่านี้ได้ อย่างไรก็ตามเชื้อ Plasmodium falciparum เป็นสายพันธุ์ที่อันตรายที่สุดและเป็นสาเหตุการเสียชีวิตส่วนใหญ่จากมาลาเรียทั่วโลก และเป็นสายพันธุ์ที่พบบ่อยในหลายพื้นที่รวมถึงประเทศไทย",
            state: false
        },
        {
            problem: "25. กลไกการออกฤทธิ์ (Mechanism of action) ของยา atovaquone คืออะไร?",
            img: "",
            choices: "Block electron transport///Block folic acid metabolism///Block heme metabolism///increase ROS production///inhibit protein synthesis",
            answer: "Block electron transport",
            select: "",
            explain: "Atovaquone เป็นยาต้านมาลาเรียที่ออกฤทธิ์โดยการยับยั้งการทำงานของ cytochrome bc1 complex ในไมโทคอนเดรียของเชื้อมาลาเรีย ซึ่งเป็นการขัดขวางกระบวนการขนส่งอิเล็กตรอน (electron transport chain) ทำให้เชื้อไม่สามารถสร้างพลังงาน (ATP) และตายในที่สุด",
            state: false
        },
        {
            problem: "26. ยาที่แนะนำสำหรับป้องกันโรคมาลาเรีย (chemoprophylaxis) ตามแนวทางของประเทศไทยปี 2021 คือข้อใด?",
            img: "",
            choices: "atovaquone proguanil///doxycycline///primaquine///chloroquine///no chemoprophylaxis",
            answer: "atovaquone proguanil",
            select: "",
            explain: "ในพื้นที่ของประเทศไทยที่มีการดื้อยามาลาเรียหลายขนาน แนวทางการป้องกันแนะนำให้ใช้ยา Doxycycline หรือ Atovaquone/Proguanil (Malarone) หรือ Mefloquine โดย Atovaquone/Proguanil เป็นหนึ่งในตัวเลือกหลักเนื่องจากมีประสิทธิภาพดีและผลข้างเคียงน้อยกว่ายาบางชนิด",
            state: false
        },
        {
            problem: "27. หญิงอายุ 33 ปี ติดเชื้อ P. falciparum จากพื้นที่จังหวัดอุบลราชธานี ยาที่เป็น first line treatment คือข้อใด?",
            img: "",
            choices: "Atovaquone-proguanil///Artesunate-Pyronaridine///Dihydroartemisinin-Piperaquine///Artesunate///Chloroquine",
            answer: "Artesunate-Pyronaridine",
            select: "",
            explain: "สำหรับเชื้อ P. falciparum ชนิดไม่รุนแรงจากพื้นที่ที่ดื้อยาในประเทศไทย เช่น จ.อุบลราชธานี แนวทางการรักษาคือการใช้ยาสูตรผสมที่มีอนุพันธ์ของ Artemisinin เป็นหลัก หรือ Artemisinin-based Combination Therapy (ACT) โดย Artesunate-Pyronaridine และ Dihydroartemisinin-Piperaquine เป็นสูตรยาหลักที่แนะนำให้ใช้เป็น first-line treatment",
            state: false
        },
        {
            problem: "30. What is the mechanism of action of TDF (Tenofovir Disoproxil Fumarate)?",
            img: "",
            choices: "Inhibit attachment of HIV to cd4+ cell///Inhibit reverse transcriptase enzyme///Inhibit integrase enzyme///Inhibit structural protein p-41 synthesis///Inhibit CCR5 receptor",
            answer: "Inhibit reverse transcriptase enzyme",
            select: "",
            explain: "TDF เป็นยาในกลุ่ม Nucleotide Reverse Transcriptase Inhibitor (NtRTI) เมื่อเข้าสู่เซลล์ยาจะถูกเปลี่ยนให้อยู่ในรูป active form และเข้าไปยับยั้งเอนไซม์ reverse transcriptase ของเชื้อ HIV แบบแข่งขัน (competitive inhibition) ทำให้เชื้อไม่สามารถเปลี่ยน RNA เป็น DNA ได้ เป็นการหยุดยั้งกระบวนการเพิ่มจำนวนของไวรัส",
            state: false
        },
        {
            problem: "31. which of the following pairs of drugs and mechanism of action are correct.",
            img: "",
            choices: "Abacavir (ABC) - protease inhibitor///Lopinavir - integrase inhibitor///Dolutegravir - non-competitively inhibit reverse transcriptase enzyme///Maraviroc - inhibit penetration of HIV virus to CD4+ cell by binding to gp41///Lamivudine (3TC) - competitively inhibits reverse transcriptase enzyme",
            answer: "Lamivudine (3TC) - competitively inhibits reverse transcriptase enzyme",
            select: "",
            explain: "Lamivudine (3TC) เป็นยาต้านไวรัส HIV ในกลุ่ม Nucleoside Reverse Transcriptase Inhibitor (NRTI) ซึ่งออกฤทธิ์โดยการยับยั้งเอนไซม์ reverse transcriptase แบบแข่งขัน ทำให้เกิดการสิ้นสุดสาย DNA ของไวรัส (chain termination) ส่วนข้ออื่นๆจับคู่ยาและกลไกผิดประเภทกัน",
            state: false
        },
        {
            problem: "32. Atazanavir ซึ่งเป็น protease inhibitor มักใช้ร่วมกับ cobicistat เพราะเหตุใด?",
            img: "",
            choices: "Inhibit viral entry///Inhibit renal tubular secretion of atazanavir///Increase distribution of atazanavir///Increase absorption of atazanavir by interacting with a receptor///Increase bioavailability of atazanavir by inhibit CYP3A4 mediated metabolism",
            answer: "Increase bioavailability of atazanavir by inhibit CYP3A4 mediated metabolism",
            select: "",
            explain: "Cobicistat เป็นยาในกลุ่ม pharmacokinetic enhancer หรือ 'booster' ไม่ได้มีฤทธิ์ต้านไวรัสโดยตรง แต่จะไปยับยั้งเอนไซม์ Cytochrome P450 3A4 (CYP3A4) ในตับ ซึ่งเป็นเอนไซม์หลักที่ใช้ทำลายยา Atazanavir การยับยั้งนี้ทำให้ระดับยา Atazanavir ในเลือดสูงขึ้นและอยู่นานขึ้น ส่งผลให้ประสิทธิภาพการรักษาสูงขึ้น",
            state: false
        },
        {
            problem: "34. Atazanavir ให้พร้อมกับ Cobicistat ทำไม?",
            img: "",
            choices: "Cobicistat ช่วยให้เข้า CD4+ ไวขึ้น///Cobicistat เป็น PK enhancer///Cobicistat เป็น NRTI///Cobicistat เป็น NNRTI///Cobicistat เป็น Integrase inhibitor",
            answer: "Cobicistat เป็น PK enhancer",
            select: "",
            explain: "คำถามนี้เป็นคำถามเดียวกับข้อ 32 Cobicistat ทำหน้าที่เป็น Pharmacokinetic (PK) enhancer หรือตัวเสริมฤทธิ์ทางเภสัชจลนศาสตร์ โดยการยับยั้งเอนไซม์ที่ใช้ทำลายยาอื่น (เช่น Atazanavir) ทำให้ระดับยาอื่นในเลือดสูงขึ้น",
            state: false
        },
        {
            problem: "35. A man undergoing antiretroviral therapy came for regular check-up. His viral load is less than 20 copies/mm³. What can be interpreted?",
            img: "",
            choices: "Effective viral suppression///No cytotoxic T cell response///No residual HIV///No HIV co-receptor///Secretion is free of virus",
            answer: "Effective viral suppression",
            select: "",
            explain: "ผล viral load ที่ต่ำกว่าระดับที่ตรวจวัดได้ (undetectable) เช่น <20 copies/mm³ หมายความว่ายาต้านไวรัส (ART) สามารถกดการแบ่งตัวของเชื้อ HIV ได้อย่างมีประสิทธิภาพ ซึ่งเป็นเป้าหมายหลักของการรักษา ไม่ได้หมายความว่าเชื้อหมดไปจากร่างกาย (ยังมี latent reservoir อยู่) แต่เชื้อมีปริมาณน้อยมากจนไม่สามารถตรวจพบด้วยวิธีมาตรฐานได้",
            state: false
        },
        {
            problem: "36. ชายอายุ 15 ปี (MSM) มีเพศสัมพันธ์มา 2 สัปดาห์ ตรวจ anti-HIV ได้ผล non-reactive ควรตรวจอะไรต่อ?",
            img: "",
            choices: "NAT///p24///HIV DNA PCR///นัดตรวจซ้ำอีกครั้ง 4 weeks///Repeat anti-HIV in 1 week",
            answer: "NAT",
            select: "",
            explain: "ช่วง 2 สัปดาห์หลังรับเชื้อเป็นช่วง 'window period' ซึ่งร่างกายอาจจะยังไม่สร้างแอนติบอดี (anti-HIV) ทำให้ตรวจไม่พบ การตรวจที่ไวที่สุดเพื่อวินิจฉัยการติดเชื้อระยะเฉียบพลัน (acute infection) คือการตรวจหาสารพันธุกรรมของไวรัสโดยตรง ซึ่งก็คือ Nucleic Acid Test (NAT) ที่สามารถตรวจพบเชื้อได้เร็วที่สุดประมาณ 10-12 วันหลังรับเชื้อ",
            state: false
        },
        {
            problem: "37. เด็กชายอายุ 15 ปี มาด้วยอาการของภาวะ Sepsis จากเชื้อ streptokinase มีไข้ 39 C, BP ต่ำ, RR 24, PR 120 และมีภาวะปัสสาวะออกน้อย (Oliguria) อาการทางคลินิกใดที่บ่งชี้ว่ามีภาวะ inadequate tissue perfusion?",
            img: "",
            choices: "Bleeding///Tachycardia///Increase blood temperature///Oliguria///Dyspnea",
            answer: "Oliguria",
            select: "",
            explain: "Oliguria หรือภาวะปัสสาวะออกน้อย เป็นสัญญาณสำคัญที่บ่งบอกว่าเลือดไปเลี้ยงอวัยวะต่างๆ ไม่เพียงพอ (inadequate tissue perfusion) โดยเฉพาะที่ไต เมื่อเลือดไปเลี้ยงไตลดลง ไตจะทำงานลดลงและผลิตปัสสาวะน้อยลงเพื่อสงวนน้ำในร่างกาย ซึ่งเป็นอาการแสดงของภาวะ shock และการทำงานของอวัยวะเริ่มล้มเหลว",
            state: false
        },
        {
            problem: "39. ผู้ชายมีเพศสัมพันธ์กับแฟนสาวเมื่อ 2 วันก่อน และกังวลเพราะแฟนสาวเคยมีเพศสัมพันธ์กับแฟนเก่า ควรให้คำแนะนำที่เหมาะสมอย่างไร?",
            img: "",
            choices: "NAT test///ARV drug in at once///follow up 1 month///Reassure///Recommend PEP",
            answer: "Reassure",
            select: "",
            explain: "ณ เวลา 2 วันหลังมีความเสี่ยง ยังเร็วเกินไปที่จะตรวจหาเชื้อได้อย่างน่าเชื่อถือ การให้ยาต้านฉุกเฉิน (PEP) จะพิจารณาในกรณีที่มีความเสี่ยงสูงจริงๆ และต้องเริ่มใน 72 ชั่วโมง ดังนั้นคำแนะนำเบื้องต้นที่เหมาะสมที่สุดคือการให้ความมั่นใจ (Reassure) ให้คำปรึกษาเกี่ยวกับความเสี่ยงที่แท้จริง อธิบายเรื่อง window period และนัดมาตรวจเลือดในอีก vài สัปดาห์ข้างหน้า พร้อมทั้งให้ความรู้เรื่องการป้องกัน",
            state: false
        },
        {
            problem: "45. เด็กชายที่เป็นโรค Hemophilia A มีอาการเข่าขวาบวมหลังล้ม ผลเลือด aPTT 80 sec และมี Factor VIII level 4% ในขณะนั้นไม่มี Factor VIII concentration ให้ใช้ ควรให้การรักษาที่เหมาะสมอย่างไร?",
            img: "",
            choices: "Cryoprecipitate///Cryoprecipitate with fresh frozen plasma///FFP///Factor IX concentration///Platelet concentrate",
            answer: "Cryoprecipitate",
            select: "",
            explain: "Hemophilia A คือภาวะพร่อง Factor VIII การรักษาที่ดีที่สุดคือการให้ Factor VIII เข้มข้น แต่เมื่อไม่มีผลิตภัณฑ์ดังกล่าว Cryoprecipitate คือทางเลือกที่ดีที่สุด เพราะเป็นส่วนประกอบของพลาสมาที่ผ่านการทำให้เข้มข้น อุดมไปด้วย Factor VIII, von Willebrand factor, fibrinogen และ Factor XIII จึงสามารถใช้เพื่อควบคุมภาวะเลือดออกในผู้ป่วย Hemophilia A ได้",
            state: false
        },
        {
            problem: "49. ในการให้เลือดผู้ป่วย จำเป็นต้องพิจารณาหมู่เลือด ABO, Rh และภาวะอื่นๆอีกประมาณ 5 conditions ให้เลือกเลือดที่ปลอดภัยที่สุดที่จะให้ (คำถามสมมติ: ผู้ป่วยหมู่เลือด A Rh+ ตรวจพบ anti-K antibody ควรเลือกเลือดชนิดใด)",
            img: "",
            choices: "O Rh- RBC, K antigen positive///A Rh+ RBC, K antigen positive///A Rh+ RBC, K antigen negative///AB Rh+ RBC, K antigen negative///A Rh- RBC, K antigen positive",
            answer: "A Rh+ RBC, K antigen negative",
            select: "",
            explain: "การให้เลือดที่ปลอดภัยที่สุดจะต้องเข้ากันได้กับหมู่เลือด ABO/Rh ของผู้ป่วย และต้องไม่มีแอนติเจนที่ผู้ป่วยมีแอนติบอดีต่อต้านอยู่ สำหรับผู้ป่วย A Rh+ ที่มี anti-K antibody จะต้องได้รับเลือดที่เป็น A Rh+ หรือ O Rh+ และที่สำคัญคือต้องเป็นเลือดที่ตรวจแล้วว่าไม่มี K antigen (K negative) เพื่อป้องกันการเกิดปฏิกิริยาจากการรับเลือด (transfusion reaction)",
            state: false
        },
        {
            problem: "59. ผู้ป่วยอายุ 72 ปี มีภาวะ anemia, leukopenia ผลตรวจไขกระดูกพบเป็น Myelodysplastic syndrome (MDS) และพบเซลล์ลักษณะ Pelger-Huët ถามว่าภาวะ Anemia, Leukemia (Cytopenia) ในคนไข้เกิดจากอะไร?",
            img: "",
            choices: "Bone marrow fibrosis///Apoptosis of neoplasm cell///Decreased stem cell proliferation///Ineffective erythropoietin response///Autoimmune destruction",
            answer: "Apoptosis of neoplasm cell",
            select: "",
            explain: "Myelodysplastic Syndrome (MDS) เป็นโรคของเซลล์ต้นกำเนิดเม็ดเลือดที่มีการสร้างเซลล์ผิดปกติ (dysplasia) และไม่มีประสิทธิภาพ (ineffective hematopoiesis) กลไกสำคัญคือเซลล์ตัวอ่อนที่ผิดปกติในไขกระดูกมีการตายก่อนเวลาอันควร (Apoptosis) ในอัตราที่สูง ทำให้แม้ไขกระดูกจะทำงานสร้างเซลล์ แต่เซลล์ส่วนใหญ่ก็ตายไปก่อนที่จะเจริญเป็นเซลล์เม็ดเลือดตัวแก่ที่สมบูรณ์และออกสู่กระแสเลือดได้ ส่งผลให้เกิดภาวะเม็ดเลือดต่ำ (cytopenia) ในเลือด",
            state: false
        },
        {
            problem: "61. Patient with vomiting + intraabdominal pain. CT scan reveals ileal region & mesenteric lymphoma cell. What is the diagnosis?",
            img: "",
            choices: "Diffuse large-b cell lymphoma///Burkitt lymphoma///Follicular lymphoma///Mantle cell lymphoma///mature t-cell lymphoma",
            answer: "Burkitt lymphoma",
            select: "",
            explain: "แม้ว่ามะเร็งต่อมน้ำเหลืองหลายชนิดสามารถเกิดในช่องท้องได้ แต่ Burkitt lymphoma มีลักษณะคลาสสิกคือเป็นก้อนที่โตเร็วมากในบริเวณลำไส้เล็กส่วนปลาย (ileocecal region) โดยเฉพาะในเด็กและวัยหนุ่มสาว การโตที่รวดเร็วนี้ทำให้เกิดอาการปวดท้องและอาเจียนได้",
            state: false
        },
        {
            problem: "62. Molecular lab: t(14;18)(q32;q21) What pathophysiology cause this lesion?",
            img: "",
            choices: "Overexpression of c-Myc///Inhibition of apoptosis by BCL-2 overexpression///Dysregulation of cyclin D1///Fusion of PML-RARA genes///Activation of JAK-STAT pathway",
            answer: "Inhibition of apoptosis by BCL-2 overexpression",
            select: "",
            explain: "การสลับที่ของโครโมโซม t(14;18) เป็นลักษณะทางพันธุกรรมที่จำเพาะของมะเร็งต่อมน้ำเหลืองชนิด Follicular Lymphoma โดยเป็นการย้ายยีน BCL2 บนโครโมโซมคู่ที่ 18 ไปอยู่ภายใต้การควบคุมของยีน Immunoglobulin heavy chain บนโครโมโซมคู่ที่ 14 ทำให้มีการสร้างโปรตีน BCL-2 ซึ่งเป็นโปรตีนที่ยับยั้งการตายของเซลล์ (anti-apoptotic) มากเกินปกติ ส่งผลให้เซลล์มะเร็งไม่ตายและสะสมมากขึ้น",
            state: false
        },
        {
            problem: "63. ชายอายุ 56 ปี มีอาการ epigastric pain, weight loss ทำ Gastroscopy พบ Marginal zone lymphoma โจทย์ถามว่าเกิดจากเชื้อตัวไหน?",
            img: "",
            choices: "Genetics///HBV///EBV///H. pylori///HIV",
            answer: "H. pylori",
            select: "",
            explain: "มะเร็งต่อมน้ำเหลืองของกระเพาะอาหารชนิด MALT (Mucosa-Associated Lymphoid Tissue) lymphoma ซึ่งเป็น subtype หนึ่งของ Marginal zone lymphoma มีความสัมพันธ์อย่างยิ่งกับการติดเชื้อแบคทีเรีย Helicobacter pylori เรื้อรัง การอักเสบและการกระตุ้นระบบภูมิคุ้มกันอย่างต่อเนื่องจากเชื้อ H. pylori ทำให้เซลล์ B-cell เพิ่มจำนวนและเปลี่ยนแปลงไปเป็นเซลล์มะเร็งในที่สุด",
            state: false
        },
        {
            problem: "71. การป้องกันทุติยภูมิ (secondary prevention) ของ Ischemic Stroke คือข้อใด?",
            img: "",
            choices: "Clopidogrel///Warfarin///Heparin///Aspirin plus Warfarin///Rivaroxaban",
            answer: "Clopidogrel",
            select: "",
            explain: "สำหรับการป้องกันการเกิดโรคหลอดเลือดสมองตีบซ้ำในผู้ป่วยที่ไม่ได้มีสาเหตุมาจากหัวใจ (non-cardioembolic stroke) ยาหลักที่ใช้คือยาต้านเกล็ดเลือด (antiplatelet) ซึ่ง Clopidogrel เป็นยามาตรฐานตัวหนึ่ง ส่วนยา Warfarin หรือยาต้านการแข็งตัวของเลือดอื่นๆ จะใช้ในกรณีที่ stroke มีสาเหตุมาจากหัวใจ เช่น atrial fibrillation",
            state: false
        },
        {
            problem: "73. ผู้ป่วยมีภาวะเลือดออกตามเนื้อเยื่ออ่อน (Soft tissue bleeding) แต่ผล PT, aPTT, TT, platelet count ปกติทั้งหมด ควรส่งตรวจทางห้องปฏิบัติการอะไรเพิ่มเติม?",
            img: "",
            choices: "Plasminogen level///Factor XIII assay///von Willebrand factor antigen///Platelet function assay///D-dimer",
            answer: "Factor XIII assay",
            select: "",
            explain: "เมื่อผลการตรวจคัดกรองการแข็งตัวของเลือดเบื้องต้น (PT, aPTT, TT) และจำนวนเกล็ดเลือดปกติ แต่ผู้ป่วยยังมีอาการเลือดออกผิดปกติ ควรนึกถึงภาวะที่การตรวจเหล่านี้ไม่สามารถบอกได้ เช่น ความผิดปกติของความแข็งแรงของลิ่มเลือด ซึ่งควบคุมโดย Factor XIII (Fibrin-stabilizing factor) การตรวจวัดระดับ Factor XIII หรือการตรวจการละลายของลิ่มเลือด (clot solubility test) จึงเป็นสิ่งที่ควรทำต่อไป",
            state: false
        },
        {
            problem: "74. Which of pharmaceutical properties of alteplase (tPA) is correct?",
            img: "",
            choices: "tPA is low affinity to tissue fibrin-bind plasmin///tPA is pro-activator of plasminogen///tPA is directly digest fibrin in thrombus///tPA is contraindication in patient who has history of hemorrhagic stroke///tPA can be administered intramuscularly",
            answer: "tPA is contraindication in patient who has history of hemorrhagic stroke",
            select: "",
            explain: "Alteplase (tPA) เป็นยาละลายลิ่มเลือดที่มีประสิทธิภาพสูง ซึ่งเพิ่มความเสี่ยงต่อการตกเลือดอย่างมาก ดังนั้นจึงเป็นข้อห้ามใช้อย่างเด็ดขาดในผู้ป่วยที่มีประวัติเคยมีเลือดออกในสมอง (hemorrhagic stroke) มาก่อน รวมถึงภาวะอื่นๆ ที่เสี่ยงต่อการตกเลือดสูง",
            state: false
        },
        {
            problem: "76. Which patient blood group can receive fresh frozen plasma from group A?",
            img: "",
            choices: "A only///A & O///A & AB///A & O & AB///A & B & AB",
            answer: "A & O",
            select: "",
            explain: "กฎการให้พลาสมาจะตรงกันข้ามกับการให้เม็ดเลือดแดง พลาสมาของผู้บริจาคหมู่ A จะมี anti-B antibody ซึ่งสามารถให้แก่ผู้รับที่ไม่มี B antigen บนผิวเม็ดเลือดแดงได้ นั่นคือผู้รับที่มีหมู่เลือด A และหมู่เลือด O",
            state: false
        },
        {
            problem: "78. IAT (Indirect Antiglobulin Test) ใช้เพื่อคัดกรองอะไร?",
            img: "",
            choices: "Atypical antibodies in patient serum///ABO antibodies in patient serum///Antigens on patient's red cells///Direct antibody coating on red cells///Compatibility of plasma",
            answer: "Atypical antibodies in patient serum",
            select: "",
            explain: "Indirect Antiglobulin Test (IAT) หรือ Indirect Coombs' test เป็นการตรวจคัดกรองหาแอนติบอดีชนิด atypical (หรือ unexpected antibodies) ในซีรัมของผู้ป่วย ซึ่งเป็นแอนติบอดีต่อแอนติเจนของเม็ดเลือดแดงนอกเหนือจากระบบ ABO แอนติบอดีเหล่านี้อาจทำปฏิกิริยากับเม็ดเลือดแดงของผู้บริจาคและทำให้เกิด transfusion reaction ได้",
            state: false
        },
        {
            problem: "89. ผู้ป่วยมีเลือดออก แต่ผล TT, aPTT, PT ปกติทั้งหมด ควรส่งตรวจอะไรต่อ?",
            img: "",
            choices: "F13///Fibrinogen///D-dimer///Factor V Leiden///Protein C",
            answer: "F13",
            select: "",
            explain: "สถานการณ์นี้เหมือนกับคำถามข้อ 73 เมื่อผลการตรวจคัดกรองเบื้องต้นปกติแต่มีเลือดออก ควรนึกถึงความผิดปกติของการทำให้ลิ่มเลือดแข็งแรง (clot stabilization) ซึ่งเป็นหน้าที่ของ Factor XIII (F13) ดังนั้นการตรวจระดับ F13 หรือ clot solubility test จึงเป็นขั้นตอนต่อไปที่เหมาะสม",
            state: false
        },
        {
            problem: "98. เราจะแยกภาวะ vitamin K deficiency ออกจากภาวะ severe liver disease ได้อย่างไร เมื่อทั้งสองภาวะทำให้การแข็งตัวของเลือดผิดปกติ?",
            img: "",
            choices: "PT///aPTT///TT///Factor V level///PT and aPTT",
            answer: "Factor V level",
            select: "",
            explain: "ทั้งสองภาวะทำให้ค่า PT และ aPTT ยาวออกได้เนื่องจากขาด Vitamin K-dependent factors (II, VII, IX, X) แต่จุดแตกต่างที่สำคัญคือ Factor V ซึ่งสร้างที่ตับแต่ไม่ได้อาศัยวิตามินเค ในภาวะ severe liver disease ตับจะสร้างโปรตีนทุกชนิดได้ลดลงรวมถึง Factor V ทำให้ระดับ Factor V ต่ำ แต่ในภาวะขาดวิตามินเค ตับยังทำงานปกติ ระดับ Factor V จึงจะปกติ",
            state: false
        },
        {
            problem: "??. (77) An unconscious patient from Ubon Ratchathani is diagnosed with PF (P. falciparum) infection. What is the appropriate treatment?",
            img: "",
            choices: "Artesunate IV///Quinine IV///DHA-PIP + Primaquine PO///Artesunate + Pyronaridine PO///Atovaquone + Proguanil PO",
            answer: "Artesunate IV",
            select: "",
            explain: "ผู้ป่วยติดเชื้อ P. falciparum ที่ไม่รู้สึกตัว ถือว่าเป็น Severe Malaria ซึ่งเป็นภาวะฉุกเฉินทางการแพทย์ การรักษามาตรฐานตามแนวทางของ WHO คือการให้ยา Artesunate เข้าทางหลอดเลือดดำ (IV) โดยเร็วที่สุด เมื่อผู้ป่วยอาการดีขึ้นจนสามารถรับประทานได้ จึงตามด้วยยาสูตรผสม (ACT) ชนิดรับประทานจนครบ course",
            state: false
        },
        {
            problem: "??. (99) ค่าทุกอย่างปกติทั้ง bleeding time, aPTT, PT, TT แต่คนไข้มีเลือดออกใน soft tissue ควรส่งตรวจอะไรเพิ่ม?",
            img: "",
            choices: "Plasma clot solubility assay///Mixing test///Thrombin time///Bleeding time///Platelet aggregation test",
            answer: "Plasma clot solubility assay",
            select: "",
            explain: "เป็นสถานการณ์คลาสสิกของภาวะพร่อง Factor XIII อีกครั้ง เมื่อการตรวจคัดกรองทั้งหมดปกติ แต่มีเลือดออก ควรนึกถึงความผิดปกติในขั้นตอนสุดท้ายของการแข็งตัวของเลือด คือการทำให้ลิ่มเลือดเสถียร (fibrin stabilization) ซึ่งต้องใช้ Factor XIII การตรวจคัดกรองที่จำเพาะสำหรับภาวะนี้คือ Plasma clot solubility assay",
            state: false
        },
        {
            problem: "??. HIV pt with Toxoplasmosis what is the significant clinical presentation?",
            img: "",
            choices: "Anemia///jaundice///Fatigue///Lymphadenopathy///Headache and focal neurologic deficits",
            answer: "Headache and focal neurologic deficits",
            select: "",
            explain: "ในผู้ป่วย HIV การติดเชื้อ Toxoplasma มักเป็นการกำเริบในระบบประสาทส่วนกลาง (Toxoplasmic encephalitis) ซึ่งเป็นภาวะที่อันตรายและพบบ่อย อาการทางคลินิกที่สำคัญและจำเพาะจึงเป็นอาการทางระบบประสาท เช่น ปวดศีรษะ สับสน ชัก หรือมีอาการอ่อนแรงครึ่งซีก (focal neurologic deficits)",
            state: false
        },
        {
            problem: "??. 24 y/o Female patient came with fever and arthralgia for 3 days Hct: 38%, WBC 5100, Plt 160,000 what is the LAB investigation for definitive diagnosis?",
            img: "",
            choices: "Convalescent for IgG///Convalescent for Ag///Synovial fluid for IgE///Acute Serum for viral IgG///Acute serum for viral RNA",
            answer: "Acute serum for viral RNA",
            select: "",
            explain: "ในช่วง 3 วันแรกของอาการไข้และปวดข้อ ซึ่งอาจเกิดจาก arbovirus เช่น Dengue, Chikungunya หรือ Zika เชื้อไวรัสกำลังแบ่งตัวและอยู่ในกระแสเลือด (viremia) การตรวจที่ให้ผลแน่นอนที่สุดในระยะเฉียบพลันนี้คือการตรวจหาสารพันธุกรรมของไวรัส (viral RNA) ด้วยวิธี RT-PCR จากเลือดของผู้ป่วย",
            state: false
        },
        {
            problem: "??. จากภาพ follicular hyperplasia ถามว่าเกิด mutation ที่ใด?",
            img: "",
            choices: "BCL-1 overexpress///BCL-2 decrease function///BCL-6 overexpress///BCL-2 overexpress///BCL-1 decrease function",
            answer: "BCL-2 overexpress",
            select: "",
            explain: "ภาพของ follicular hyperplasia เป็นลักษณะที่ชี้นำไปสู่ Follicular Lymphoma ซึ่งมีกลไกการเกิดโรคที่สำคัญจากการเกิด chromosomal translocation t(14;18) ซึ่งส่งผลให้เกิดการแสดงออกของยีน BCL-2 มากเกินปกติ (BCL-2 overexpress) โปรตีน BCL-2 นี้ทำหน้าที่ยับยั้งการตายของเซลล์ (anti-apoptosis) ทำให้เซลล์มะเร็งรอดชีวิตและเพิ่มจำนวนขึ้น",
            state: false
        },
        {
            problem: "??. คนไข้เป็น Thrombotic Thrombocytopenic Purpura (TTP) Hct 18%, plt 80,000 นอกนั้นค่าปกติ ถามว่า most appropriate treatment คืออะไร?",
            img: "",
            choices: "Cryoprecipitate///Single platelet donor///FFP (as part of plasma exchange)///LDRC///LPRC",
            answer: "FFP (as part of plasma exchange)",
            select: "",
            explain: "TTP เป็นภาวะฉุกเฉินที่ต้องได้รับการรักษาทันที การรักษาที่เป็นมาตรฐานและได้ผลดีที่สุดคือการทำ Therapeutic Plasma Exchange (TPE) หรือการถ่ายเปลี่ยนพลาสมา โดยใช้ Fresh Frozen Plasma (FFP) เป็นสารน้ำทดแทน กระบวนการนี้จะช่วยกำจัด autoantibody ที่เป็นสาเหตุของโรค และช่วยเติมเอนไซม์ ADAMTS13 ที่ขาดหายไป",
            state: false
        },
        {
            problem: "??. ให้รูป starry sky pattern, t(8;14). What is the diagnosis?",
            img: "",
            choices: "Burkitt lymphoma///Mantle cell lymphoma///Follicular lymphoma///Acute promyelocytic leukemia///Diffuse large B-cell lymphoma",
            answer: "Burkitt lymphoma",
            select: "",
            explain: "ลักษณะทางพยาธิวิทยาแบบ 'starry sky pattern' เป็นลักษณะเฉพาะของ Burkitt lymphoma ซึ่งเกิดจากการที่เซลล์มะเร็งแบ่งตัวอย่างรวดเร็วและมี macrophage มาจับกินเซลล์ที่ตายแล้ว ทำให้เห็นเป็นจุดสว่าง (star) บนพื้นหลังของเซลล์มะเร็ง (sky) นอกจากนี้ การเกิด translocation t(8;14) ที่นำยีน c-MYC ไปอยู่ภายใต้การควบคุมของยีน Immunoglobulin heavy chain เป็นลักษณะทางพันธุกรรมที่จำเพาะของ Burkitt lymphoma",
            state: false
        }
    ],
    "HL48MCQ1": [
        {
            problem: "1. Which of these components are the main constituents found in reticulocytes in Wright's stain?",
            img: "",
            choices: "Hemoglobin///Ribosomal RNA///Golgi apparatus///Nuclear fragments///Nucleolus",
            answer: "Ribosomal RNA",
            select: "",
            explain: "Reticulocyte คือเม็ดเลือดแดงตัวอ่อนที่ยังไม่มีนิวเคลียส แต่ยังคงมีเศษซากของออร์แกเนลล์อยู่ โดยเฉพาะ Ribosomal RNA (rRNA) ซึ่งยังคงทำหน้าที่สังเคราะห์ฮีโมโกลบินอยู่ เมื่อย้อมด้วย Wright's stain ซึ่งเป็น supravital stain ชนิดหนึ่ง จะทำให้ rRNA ตกตะกอนและติดสีน้ำเงินม่วง (basophilic) เห็นเป็นลักษณะร่างแห (reticulum) ซึ่งเป็นที่มาของชื่อ reticulocyte",
            state: false
        },
        {
            problem: "3. Which cell has a kidney shaped nucleus and is important for phagocytosis?",
            img: "",
            choices: "Neutrophil///Macrophage///Eosinophil///Basophil///Lymphocyte",
            answer: "Macrophage",
            select: "",
            explain: "เซลล์ที่มีนิวเคลียสรูปร่างคล้ายไต (kidney-shaped or reniform nucleus) คือ Monocyte ซึ่งเป็นเม็ดเลือดขาวที่อยู่ในกระแสเลือด เมื่อ Monocyte เดินทางเข้าสู่เนื้อเยื่อ จะเจริญเปลี่ยนแปลงไปเป็น Macrophage ซึ่งทำหน้าที่เป็น professional phagocyte คือการเก็บกินเชื้อโรคหรือสิ่งแปลกปลอมเป็นหลัก ดังนั้น Macrophage จึงเป็นคำตอบที่ถูกต้องที่สุดในบทบาทของ phagocytosis ที่สำคัญ",
            state: false
        },
        {
            problem: "4. Examination of peripheral blood smear shows WBCs more than twice the size of RBCs, with a kidney shaped nucleus and can differentiate into the most vital cell in phagocytosis. Which cell best fits the description above?",
            img: "",
            choices: "Neutrophils///Monocytes///Basophils///Eosinophils///Lymphocytes",
            answer: "Monocytes",
            select: "",
            explain: "คำบรรยายนี้ชี้ชัดไปที่ Monocyte ซึ่งเป็นเม็ดเลือดขาว (WBC) ที่มีขนาดใหญ่ที่สุดใน peripheral blood (ใหญ่กว่า RBC 2-3 เท่า) มีนิวเคลียสลักษณะเว้าเป็นรูปไตหรือรูปเกือกม้า และมีบทบาทสำคัญคือการเจริญไปเป็น Macrophage ในเนื้อเยื่อซึ่งเป็นเซลล์หลักในกระบวนการ phagocytosis",
            state: false
        },
        {
            problem: "5. A 43 years old woman was pricked by thorn. The next day she was presented with pus. What is the cell that causes pus in the injury site?",
            img: "",
            choices: "Biconcave cell///Very small cell///Polymorphic and multilobed nucleus///Large cell with horse-shoe shaped nucleus///Bilobed nucleus and acidophilic specific granules",
            answer: "Polymorphic and multilobed nucleus",
            select: "",
            explain: "หนอง (Pus) คือซากของเซลล์เม็ดเลือดขาวชนิด Neutrophil ที่ตายแล้วหลังจากไปต่อสู้กับเชื้อโรคที่บริเวณแผลติดเชื้อ ลักษณะเด่นของ Neutrophil คือเป็นเซลล์ที่มีนิวเคลียสหลายพู (multilobed nucleus) ซึ่งรูปร่างไม่แน่นอน จึงเรียกว่า Polymorphonuclear cell (PMN) ดังนั้นเซลล์ที่เป็นองค์ประกอบหลักของหนองจึงมีลักษณะเป็น Polymorphic and multilobed nucleus",
            state: false
        },
        {
            problem: "8. Abnormal RBC in patients with anemia are destroyed at?",
            img: "",
            choices: "Splenic cord///Thymic cortex///Thymic medulla///Medullary sinus of lymph node///Periarterial lymphoid sheath in white pulp",
            answer: "Splenic cord",
            select: "",
            explain: "การทำลายเม็ดเลือดแดงที่ผิดปกติหรือแก่แล้ว (Extravascular hemolysis) เกิดขึ้นที่ระบบ reticuloendothelial system โดยเฉพาะที่ม้าม (spleen) บริเวณที่เรียกว่า red pulp ซึ่งมีโครงสร้างที่เรียกว่า Splenic cords (Cords of Billroth) เป็นที่ที่เม็ดเลือดแดงต้องเคลื่อนที่ผ่านอย่างช้าๆ และเบียดเสียดกัน ทำให้ Macrophage ที่อยู่ในบริเวณนี้มีเวลาในการตรวจสอบและจับกินเม็ดเลือดแดงที่ผิดปกติได้",
            state: false
        },
        {
            problem: "10. What organ normally develops less functionality and has increased epithelial reticular cells?",
            img: "",
            choices: "Thymus///Lymph node///Red spleen///White spleen///Tonsil",
            answer: "Thymus",
            select: "",
            explain: "ต่อมไทมัส (Thymus) เป็นอวัยวะที่จะเจริญเต็มที่ในวัยเด็กและจะค่อยๆ ฝ่อลง (involution) เมื่อเข้าสู่วัยผู้ใหญ่ ทำให้การทำงานลดลง เนื้อเยื่อของต่อมจะถูกแทนที่ด้วยไขมัน (adipose tissue) แต่โครงสร้างของเซลล์ที่เป็นโครงร่างของต่อมคือ epithelial reticular cells ยังคงอยู่",
            state: false
        },
        {
            problem: "11. Which of the following is true about the developmental stages and organs involved in RBC development?",
            img: "",
            choices: "Embryo/yolk sac///Fetus/Liver///Adult/Liver///Adult/Spleen (adequate oxygen level)///Adult/Bone marrow (low oxygen/anemia)",
            answer: "Embryo/yolk sac",
            select: "",
            explain: "การสร้างเม็ดเลือด (Hematopoiesis) เกิดในอวัยวะที่ต่างกันตามช่วงอายุ ได้แก่ 1. ระยะ Embryo (Mesoblastic stage): เกิดที่ถุงไข่แดง (Yolk sac) เป็นที่แรก 2. ระยะ Fetus (Hepatic stage): ตับ (Liver) เป็นอวัยวะหลักในการสร้างเม็ดเลือด และมีม้าม (Spleen) ช่วยด้วย 3. ระยะหลังคลอดจนถึงผู้ใหญ่ (Myeloid stage): ไขกระดูก (Bone marrow) เป็นแหล่งสร้างหลัก ดังนั้น ข้อ A และ B เป็นข้อเท็จจริงที่ถูกต้อง แต่ข้อ A คือจุดเริ่มต้นแรกสุดของการสร้างเม็ดเลือด",
            state: false
        },
        {
            problem: "12. Which of the following is used to treat Methemoglobinemia?",
            img: "",
            choices: "Folic acid///Vitamin B12///Methylene blue///Naphthalene///Dapsone",
            answer: "Methylene blue",
            select: "",
            explain: "Methemoglobinemia คือภาวะที่ธาตุเหล็กใน Heme group ของฮีโมโกลบินถูกออกซิไดซ์จาก Ferrous (Fe2+) ไปเป็น Ferric (Fe3+) ทำให้ไม่สามารถจับกับออกซิเจนได้ ยาที่ใช้รักษาคือ Methylene blue ซึ่งทำหน้าที่เป็น artificial electron carrier ช่วยให้เอนไซม์ NADPH-methemoglobin reductase สามารถรีดิวซ์ Fe3+ กลับมาเป็น Fe2+ ได้อย่างรวดเร็ว ทำให้ฮีโมโกลบินกลับมาขนส่งออกซิเจนได้ตามปกติ ส่วน Dapsone และ Naphthalene เป็นสารที่สามารถกระตุ้นให้เกิด Methemoglobinemia ได้",
            state: false
        },
        {
            problem: "13. If there is respiratory acidosis, how would the graph like? Given N is normal.",
            img: "https://drive.google.com/open?id=1eyjkUUnpp4VALGWGBb88RhrqO_A-kyls&usp=drive_copy",
            choices: "A///B///C///D///E",
            answer: "D",
            select: "",
            explain: "Respiratory acidosis คือภาวะที่เลือดเป็นกรดจากการคั่งของคาร์บอนไดออกไซด์ (CO2) ทำให้ pH ในเลือดลดลง ปัจจัยทั้งสอง (pCO2 สูง, pH ต่ำ) จะทำให้ Oxygen-hemoglobin dissociation curve เลื่อนไปทางขวา (right shift) หรือที่เรียกว่า Bohr effect ซึ่งหมายความว่าฮีโมโกลบินจะลดความสามารถในการจับออกซิเจน (decreased affinity) และปล่อยออกซิเจนให้เนื้อเยื่อได้ง่ายขึ้น ในกราฟที่ให้มา เส้น D คือเส้นที่เลื่อนไปทางขวาจากเส้นปกติ N",
            state: false
        },
        {
            problem: "14. Which disease caused an increase in 2,3 BPG?",
            img: "",
            choices: "Insulin resistant///Mutase deficiency///NADH cytochrome b5 hyperactive///Phosphatase deficiency///G-6-PD deficiency",
            answer: "Phosphatase deficiency",
            select: "",
            explain: "2,3-Bisphosphoglycerate (2,3-BPG) เป็นสารที่สร้างขึ้นในเม็ดเลือดแดงเพื่อช่วยลด oxygen affinity ของฮีโมโกลบิน มันถูกสร้างจาก 1,3-BPG โดยเอนไซม์ BPG mutase และถูกสลายโดยเอนไซม์ BPG phosphatase ดังนั้น หากเกิดภาวะพร่องเอนไซม์ BPG phosphatase (Phosphatase deficiency) จะทำให้ 2,3-BPG ไม่ถูกสลายและเกิดการสะสมในระดับที่สูงขึ้น",
            state: false
        },
        {
            problem: "15. A fetus cannot breathe in the womb; therefore, it obtains oxygen from the mother. What is the property of hemoglobin that allows the fetus to gain oxygen?",
            img: "",
            choices: "Fetus Hb has higher affinity to oxygen than mother///Fetus Hb has lower affinity to oxygen than mother///Fetus partial pressure is more than mother///Fetus partial pressure is the same as in mother///It has no special property",
            answer: "Fetus Hb has higher affinity to oxygen than mother",
            select: "",
            explain: "ฮีโมโกลบินของทารกในครรภ์ (Fetal hemoglobin, HbF) มีคุณสมบัติในการจับกับออกซิเจนได้ดีกว่าฮีโมโกลบินของผู้ใหญ่ (Adult hemoglobin, HbA) หรือมี oxygen affinity สูงกว่า เหตุผลหลักคือ HbF (alpha2gamma2) จับกับสาร 2,3-BPG ได้ไม่ดีเท่า HbA (alpha2beta2) ทำให้ HbF สามารถดึงออกซิเจนจากเลือดของมารดาผ่านรกมายังทารกได้อย่างมีประสิทธิภาพ",
            state: false
        },
        {
            problem: "16. Which of the following is mostly to decrease oxygen's affinity to hemoglobin in the bloodstream?",
            img: "",
            choices: "Low pH///Low level of carbon dioxide///High pH///Low temperature///Anemia",
            answer: "Low pH",
            select: "",
            explain: "การลดลงของ oxygen affinity ของฮีโมโกลบิน (ทำให้ปล่อย O2 ให้เนื้อเยื่อง่ายขึ้น) หรือการเกิด right shift ของ O2-Hb dissociation curve มีปัจจัยกระตุ้นได้แก่ 1. pH ลดลง (ความเป็นกรดสูงขึ้น) 2. ระดับ CO2 สูงขึ้น 3. อุณหภูมิสูงขึ้น 4. ระดับ 2,3-BPG สูงขึ้น ดังนั้น Low pH จึงเป็นคำตอบที่ถูกต้อง",
            state: false
        },
        {
            problem: "17. Which of the following patients should receive intravenous erythropoietin treatment?",
            img: "",
            choices: "A boy with transfusion-dependent thalassemia///A heart failure patient with anemia of chronic disease///A cirrhotic patient with serum hemoglobin 11 g/dL and vitamin D deficiency///A chronic kidney disease grade 5 patient with anemia and serum ferritin 120 ng/mL///A man with chronic lower gastrointestinal bleeding",
            answer: "A chronic kidney disease grade 5 patient with anemia and serum ferritin 120 ng/mL",
            select: "",
            explain: "Erythropoietin (EPO) เป็นฮอร์โมนที่สร้างจากไตเป็นหลักเพื่อกระตุ้นไขกระดูกให้สร้างเม็ดเลือดแดง ในผู้ป่วยโรคไตวายเรื้อรังระยะสุดท้าย (CKD grade 5) ไตจะสูญเสียความสามารถในการสร้าง EPO ทำให้เกิดภาวะโลหิตจาง ซึ่งเป็นข้อบ่งชี้โดยตรงในการให้ยา EPO สังเคราะห์ (Erythropoiesis-stimulating agents, ESAs) เพื่อรักษาภาวะซีด การที่ผู้ป่วยมี serum ferritin 120 ng/mL แสดงว่ามีธาตุเหล็กสำรองเพียงพอต่อการสร้างเม็ดเลือดแดงเมื่อได้รับยา",
            state: false
        },
        {
            problem: "19. A patient with G6PD deficiency has acute hemolysis after treating Norfloxacin. What is the reason why hepatocytes don't undergo cell lysis?",
            img: "",
            choices: "Hepatocytes have mutation///Hepatocytes have mitochondria that produce natural antioxidants///Hepatocytes have more G6PD than erythrocytes///Hepatocytes are protected by bilirubin produced in liver///Hepatocytes are larger than erythrocytes",
            answer: "Hepatocytes have more G6PD than erythrocytes",
            select: "",
            explain: "เอนไซม์ G6PD มีความสำคัญในการสร้าง NADPH ผ่าน Pentose Phosphate Pathway (PPP) เพื่อใช้ต่อต้านสารอนุมูลอิสระ (oxidative stress) ในเม็ดเลือดแดงซึ่งไม่มีไมโทคอนเดรีย จะต้องพึ่งพา PPP เป็นแหล่ง NADPH เพียงแหล่งเดียว แต่ในเซลล์ตับ (Hepatocytes) มีแหล่งสร้าง NADPH จาก pathway อื่นๆ ได้ และยังมีระดับเอนไซม์ G6PD ที่สูงกว่าในเม็ดเลือดแดง ทำให้สามารถทนต่อ oxidative stress ได้ดีกว่าและไม่เกิด cell lysis",
            state: false
        },
        {
            problem: "20. Which of the following Hb typing results is NOT due to alpha-thalassemia?",
            img: "",
            choices: "Hb A2F///Hb Bart's///Hb A2H///Hb CS A2///Hb A2A (A2 < 3.5)",
            answer: "Hb A2F",
            select: "",
            explain: "Alpha-thalassemia เกิดจากการสร้างสาย alpha-globin ลดลง ทำให้พบ Hb ที่ผิดปกติเช่น Hb Bart's (gamma4) หรือ HbH (beta4) และมักจะมีระดับ HbA2 (alpha2delta2) ปกติหรือต่ำลง แต่ใน Beta-thalassemia ซึ่งสร้างสาย beta-globin ลดลง จะมีการสร้างสาย gamma และ delta มาทดแทน ทำให้พบระดับ HbF (alpha2gamma2) และ HbA2 (alpha2delta2) สูงขึ้น ดังนั้นผล Hb typing ที่มี HbA2 และ HbF สูง (ซึ่งน่าจะแทนด้วยสัญลักษณ์ A2F) จึงเป็นลักษณะของ Beta-thalassemia ไม่ใช่ Alpha-thalassemia",
            state: false
        },
        {
            problem: "21. The abnormal beta-globin gene on chromosome 11 causes excess alpha-globin, which leads to red blood cell abnormality and apoptosis in the bone marrow. What is this incidence called?",
            img: "",
            choices: "Hyper Erythropoiesis///Intravascular hemolysis///Extravascular hemolysis///Ineffective hemolysis///Bone marrow failure",
            answer: "Ineffective hemolysis",
            select: "",
            explain: "ในโรค Beta-thalassemia การสร้างสาย beta-globin ลดลงทำให้มีสาย alpha-globin ที่ไม่มีคู่เหลืออยู่มากเกินไป สาย alpha ที่เกินมานี้จะตกตะกอนภายในเซลล์เม็ดเลือดแดงตัวอ่อน (erythroblast) ในไขกระดูก ทำให้เซลล์เสียหายและถูกทำลาย (apoptosis) ก่อนที่จะเจริญเป็นเม็ดเลือดแดงตัวแก่และออกมาสู่กระแสเลือดได้ กระบวนการที่ไขกระดูกมีการสร้างเม็ดเลือดแดงอย่างมากมายแต่กลับถูกทำลายไปก่อนที่จะออกมาใช้งานได้นี้เรียกว่า Ineffective erythropoiesis ซึ่งคำว่า Ineffective hemolysis ในตัวเลือกมีความหมายใกล้เคียงที่สุด",
            state: false
        },
        {
            problem: "22. What is found in supravital stain blood film of Hb H?",
            img: "",
            choices: "Inclusion body///Basophilic stippling///Howell Jolly body///Cabot ring///Heinz body",
            answer: "Inclusion body",
            select: "",
            explain: "HbH disease เป็นภาวะที่มีการขาดหายไปของยีน alpha-globin อย่างน้อย 3 ตำแหน่ง ทำให้มีการสร้างสาย beta-globin เกินมาและเกิดการรวมตัวเป็น tetramer (beta4) ซึ่งเรียกว่า HbH HbH มีความไม่เสถียรและตกตะกอนภายในเม็ดเลือดแดง ทำให้เกิด inclusion bodies ที่มองเห็นได้ชัดเจนเมื่อย้อมด้วย supravital stain เช่น Brilliant cresyl blue หรือ New methylene blue",
            state: false
        },
        {
            problem: "23. Which of the following cause cirrhosis in a thalassemic blood transfusion patient?",
            img: "",
            choices: "Hemochromatosis///Nonalcoholic steatosis///Multiple gallstones///Chronic hepatitis infection///Splenomegaly",
            answer: "Hemochromatosis",
            select: "",
            explain: "ผู้ป่วย Thalassemia ที่ต้องได้รับเลือดเป็นประจำ (chronic blood transfusion) จะเกิดภาวะธาตุเหล็กเกิน (iron overload) เนื่องจากร่างกายไม่มีกลไกในการขับธาตุเหล็กส่วนเกินออกจากร่างกายได้อย่างมีประสิทธิภาพ ภาวะนี้เรียกว่า Secondary hemochromatosis ธาตุเหล็กที่เกินมาจะไปสะสมตามอวัยวะต่างๆ โดยเฉพาะตับ หัวใจ และต่อมไร้ท่อ การสะสมธาตุเหล็กที่ตับจะทำให้เกิดการอักเสบเรื้อรัง เกิดพังผืด (fibrosis) และกลายเป็นโรคตับแข็ง (cirrhosis) ในที่สุด",
            state: false
        },
        {
            problem: "24. Which genotype is the most severe thalassemia?",
            img: "",
            choices: "Homozygous thalassemia alpha thal-1///Compound heterozygous thalassemia alpha thal-1 & thal-2///Compound heterozygous thalassemia alpha thal-1 & constant spring///Homozygous beta 0 thalassemia///Compound heterozygous beta 0 & beta E thalassemia",
            answer: "Homozygous thalassemia alpha thal-1",
            select: "",
            explain: "Thalassemia ที่มีความรุนแรงที่สุดคือ Homozygous alpha-thalassemia 1 ซึ่งมี genotype เป็น (--/--) หมายถึงมีการขาดหายไปของ alpha-globin gene ทั้ง 4 ตำแหน่ง ทำให้ร่างกายไม่สามารถสร้างสาย alpha-globin ได้เลย ส่งผลให้ทารกสร้างได้แต่ gamma-globin tetramers (Hb Bart's) ซึ่งไม่สามารถขนส่งออกซิเจนได้ ทำให้ทารกมีภาวะบวมน้ำรุนแรงและเสียชีวิตในครรภ์หรือหลังคลอดไม่นาน เรียกว่า Hb Bart's hydrops fetalis syndrome",
            state: false
        },
        {
            problem: "25. Hb typing E=40% F=60% What is the possible type of thalassemia in this patient?",
            img: "",
            choices: "Beta thalassemia major///Beta thalassemia Hb E///Beta thalassemia trait///Heterozygous Hb E///Homozygous Hb E",
            answer: "Beta thalassemia Hb E",
            select: "",
            explain: "ผล Hb typing ที่พบ HbF ในระดับที่สูงมาก (60%) ร่วมกับ HbE (40%) โดยไม่พบ HbA เลย เป็นลักษณะเฉพาะของโรค Beta-thalassemia/HbE disease ชนิดรุนแรง ซึ่งมักมี genotype เป็น beta-0/beta-E หมายความว่าผู้ป่วยไม่สามารถสร้างสาย normal beta-globin ได้เลยจากยีน beta-thalassemia และสร้าง beta-chain ที่ผิดปกติจากยีน HbE ร่างกายจึงชดเชยโดยการสร้าง HbF (alpha2gamma2) ขึ้นมาเป็นฮีโมโกลบินหลัก",
            state: false
        },
        {
            problem: "26. Which complication should be found in sickle cell anemia?",
            img: "",
            choices: "Hyperkalemia///Thrombocytopenia///Acute renal failure///Splenic infarction///Decrease oxygen affinity of hemoglobin",
            answer: "Splenic infarction",
            select: "",
            explain: "ในโรค Sickle cell anemia เมื่ออยู่ในภาวะออกซิเจนต่ำ ฮีโมโกลบิน S จะเกิดการเรียงตัวเป็นแท่งยาว (polymerization) ทำให้เม็ดเลือดแดงเปลี่ยนรูปร่างเป็นรูปเคียว (sickle shape) และแข็งตัว ไปอุดตันหลอดเลือดเล็กๆ (vaso-occlusion) ได้ง่าย ม้าม (spleen) เป็นอวัยวะที่มีหลอดเลือดฝอยคดเคี้ยว จึงเกิดการอุดตันได้บ่อย ทำให้เนื้อเยื่อม้ามขาดเลือดไปเลี้ยงซ้ำๆ (splenic infarction) จนในที่สุดม้ามจะฝ่อและใช้งานไม่ได้ (autosplenectomy) ซึ่งเป็นภาวะแทรกซ้อนที่สำคัญของโรคนี้",
            state: false
        },
        {
            problem: "28. What is the consequence of JAK2 mutation?",
            img: "",
            choices: "Increase EPO production///Ubiquitination of HIF1///Venous thrombosis///Protease active///Impaired erythropoiesis",
            answer: "Venous thrombosis",
            select: "",
            explain: "การกลายพันธุ์ของยีน JAK2 (โดยเฉพาะ V617F) เป็นสาเหตุสำคัญของกลุ่มโรค Myeloproliferative Neoplasms (MPNs) เช่น Polycythemia Vera (PV), Essential Thrombocythemia (ET) การกลายพันธุ์นี้ทำให้ JAK-STAT signaling pathway ถูกกระตุ้นตลอดเวลา ทำให้มีการสร้างเซลล์เม็ดเลือดโดยเฉพาะเม็ดเลือดแดงและเกล็ดเลือดมากเกินปกติ ส่งผลให้เลือดมีความหนืดสูง (hyperviscosity) และการทำงานของเกล็ดเลือดผิดปกติ ซึ่งทั้งหมดนี้เพิ่มความเสี่ยงอย่างมากต่อการเกิดลิ่มเลือดอุดตันทั้งในหลอดเลือดดำ (Venous thrombosis) และหลอดเลือดแดง",
            state: false
        },
        {
            problem: "29. Which of the following is the result of mutations of HMBS gene?",
            img: "",
            choices: "Decrease porphobilinogen///Decrease porphobilinogen deaminase///Normal porphobilinogen///Increase porphobilinogen deaminase///Decrease aminolaevulinic acid dehydratase",
            answer: "Decrease porphobilinogen deaminase",
            select: "",
            explain: "ยีน HMBS (Hydroxymethylbilane synthase) เป็นยีนที่สร้างเอนไซม์ชื่อ Porphobilinogen deaminase (PBG deaminase) ซึ่งเป็นเอนไซม์ตัวที่ 3 ในกระบวนการสังเคราะห์ Heme การกลายพันธุ์ของยีน HMBS จะทำให้ร่างกายขาดหรือพร่องเอนไซม์ตัวนี้ (Decrease porphobilinogen deaminase) ซึ่งเป็นสาเหตุของโรค Acute Intermittent Porphyria (AIP) ทำให้สารตั้งต้นที่อยู่ก่อนหน้าคือ Porphobilinogen (PBG) และ ALA คั่งในร่างกาย",
            state: false
        },
        {
            problem: "32. Caplacizumab is a humanized antibody against Von Willebrand factor. What disease is suitable for the use of the drug?",
            img: "",
            choices: "PNH///AIHA///HS///DIC///TTP",
            answer: "TTP",
            select: "",
            explain: "Caplacizumab เป็นยาในกลุ่ม antibody ที่ออกฤทธิ์โดยการจับกับ A1 domain ของ von Willebrand factor (vWF) เพื่อยับยั้งไม่ให้เกล็ดเลือดมาเกาะกลุ่มกัน ยานี้ถูกพัฒนาขึ้นเพื่อใช้รักษาโรค Thrombotic Thrombocytopenic Purpura (TTP) โดยเฉพาะชนิด acquired TTP (aTTP) ซึ่งมีพยาธิสภาพเกิดจาก ultra-large vWF multimers ที่กระตุ้นให้เกิดการเกาะกลุ่มของเกล็ดเลือดอย่างผิดปกติจนเกิดลิ่มเลือดขนาดเล็กอุดตันตามหลอดเลือดทั่วร่างกาย",
            state: false
        },
        {
            problem: "33. A boy is found to have VHL mutation. What is correct?",
            img: "",
            choices: "Decreased erythropoietin level///Increased function of hypoxia inducible factor///Ubiquitination of hypoxia inducible factor///Increased protein degradation by protease///Decreased oxygen of Hb",
            answer: "Increased function of hypoxia inducible factor",
            select: "",
            explain: "โปรตีน VHL (von Hippel-Lindau) ทำหน้าที่เป็น tumor suppressor โดยจะจับกับโปรตีนชื่อ Hypoxia-Inducible Factor (HIF-alpha) ในภาวะที่มีออกซิเจนปกติ เพื่อนำไปสู่กระบวนการ ubiquitination และถูกทำลาย. ในผู้ป่วยที่มี VHL mutation โปรตีน VHL จะทำงานผิดปกติ ทำให้ไม่สามารถทำลาย HIF ได้ ส่งผลให้ HIF สะสมและทำงานตลอดเวลา (Increased function) เสมือนว่าร่างกายอยู่ในภาวะขาดออกซิเจนตลอดเวลา HIF จะไปกระตุ้นการแสดงออกของยีนต่างๆ รวมถึงยีนที่สร้าง Erythropoietin (EPO) ทำให้มี EPO สูงและเกิดภาวะเม็ดเลือดแดงมาก (secondary polycythemia) ได้",
            state: false
        },
        {
            problem: "34. A 45 years old man came with pallor and jaundice. Blood smear found polychromasia. Urine analysis found hemoglobinuria. Flow cytometry found decreased activity of glycoprotein CD55 and CD59. What is the condition that the patient has?",
            img: "",
            choices: "PIG-A gene mutation///Mutation of alpha-globin gene///Mutation of beta-globin gene///Abnormal catabolic enzymes///Abnormal autoantibody of red cell",
            answer: "PIG-A gene mutation",
            select: "",
            explain: "อาการและผลตรวจทางห้องปฏิบัติการที่ให้มา ได้แก่ ภาวะซีด (pallor), ดีซ่าน (jaundice), ปัสสาวะมีฮีโมโกลบิน (hemoglobinuria) ซึ่งบ่งชี้ถึงภาวะเม็ดเลือดแดงแตกในหลอดเลือด (intravascular hemolysis) และที่สำคัญที่สุดคือผล flow cytometry พบการขาดโปรตีน CD55 และ CD59 บนผิวเซลล์เม็ดเลือด ซึ่งเป็นลักษณะเฉพาะของโรค Paroxysmal Nocturnal Hemoglobinuria (PNH) โดยโรคนี้มีสาเหตุมาจากการกลายพันธุ์ของยีน PIG-A ในเซลล์ต้นกำเนิดเม็ดเลือด ทำให้ไม่สามารถสร้าง GPI anchor ซึ่งเป็นตัวยึดโปรตีน CD55 และ CD59 ไว้บนผิวเซลล์ได้",
            state: false
        },
        {
            problem: "36. Which of the following is the hallmark of myelofibrosis?",
            img: "",
            choices: "NRC///Teardrop cells///Polychromasia///Spherocyte///Macro-ovalocyte",
            answer: "Teardrop cells",
            select: "",
            explain: "โรค Myelofibrosis คือภาวะที่มีพังผืดเกิดขึ้นในไขกระดูก ทำให้เซลล์เม็ดเลือดแดงที่ถูกสร้างขึ้นมาต้องพยายามเบียดตัวเพื่อออกจากไขกระดูกที่เต็มไปด้วยพังผืด ส่งผลให้เม็ดเลือดแดงถูกยืดจนมีรูปร่างผิดปกติคล้ายหยดน้ำตา เรียกว่า Teardrop cells หรือ Dacrocytes ซึ่งถือเป็นลักษณะที่จำเพาะ (hallmark) ของโรคนี้ที่สามารถพบได้ใน peripheral blood smear นอกจากนี้ยังอาจพบภาวะ Leukoerythroblastosis คือพบเม็ดเลือดขาวตัวอ่อนและเม็ดเลือดแดงมีนิวเคลียส (NRC) ปนออกมาด้วย",
            state: false
        },
        {
            problem: "37. Which of the following conditions with low MCV?",
            img: "",
            choices: "AIHA///MAHA///Hereditary spherocytosis///Homozygous HbH///Anemia of renal failure",
            answer: "Homozygous HbH",
            select: "",
            explain: "MCV (Mean Corpuscular Volume) ต่ำ หมายถึงภาวะโลหิตจางชนิดเม็ดเลือดแดงมีขนาดเล็ก (microcytic anemia) สาเหตุหลักเกิดจากความผิดปกติในการสังเคราะห์ฮีโมโกลบิน ซึ่งได้แก่ การขาดธาตุเหล็ก (iron deficiency) และ Thalassemia. โรค HbH disease เป็น alpha-thalassemia ชนิดหนึ่งซึ่งเกิดจากความผิดปกติในการสังเคราะห์สาย alpha-globin จึงจัดเป็น microcytic anemia. ส่วนภาวะซีดจากสาเหตุอื่นในตัวเลือกส่วนใหญ่มักเป็น normocytic anemia",
            state: false
        },
        {
            problem: "38. Which of the following is the result of membrane defect?",
            img: "",
            choices: "Poikilocyte///Acanthocyte///Dacrocyte///Stomatocyte///Schistocyte",
            answer: "Acanthocyte",
            select: "",
            explain: "Poikilocyte เป็นคำเรียกรวมๆ ของเม็ดเลือดแดงที่มีรูปร่างผิดปกติ สำหรับเซลล์ที่เกิดจากความผิดปกติของเยื่อหุ้มเซลล์ (membrane defect) โดยตรงคือ Acanthocyte (spur cell) ซึ่งมีหนามแหลมไม่สม่ำเสมอ เกิดจากความผิดปกติของสมดุลไขมันบนเยื่อหุ้มเซลล์ พบในโรคตับแข็งรุนแรงหรือ Abetalipoproteinemia และ Stomatocyte ซึ่งมีรอยผ่าตรงกลางคล้ายปาก เกิดจากความผิดปกติของการขนส่งไอออนผ่านเยื่อหุ้มเซลล์ในโรค Hereditary Stomatocytosis. ในตัวเลือกนี้ Acanthocyte เป็นตัวอย่างที่ชัดเจนของ membrane defect",
            state: false
        },
        {
            "problem": "39. CBC results show: WBC 150×10^9 /L, Neutrophil 45%, Lymphocyte 45%, Monocyte 6%, Eosinophil 4%. The peripheral blood smear shows 240 NRBCs per 100 WBCs. What is the absolute neutrophil count?",
            "img": "",
            "choices": "2,550 cells/µL///2,650 cells/µL///2,700 cells/µL///2,850 cells/µL///2,950 cells/µL",
            "answer": "2,700 cells/µL",
            "select": "",
            "explain": "เมื่อมี Nucleated Red Blood Cells (NRBC) จำนวนมากในเลือด เครื่องนับเม็ดเลือดอัตโนมัติ (automated hematology analyzer) จะนับ NRBC ปนไปกับ White Blood Cells (WBC) ทำให้ค่า WBC ที่ได้สูงกว่าความเป็นจริง (falsely elevated) จึงต้องทำการปรับแก้ค่า WBC ก่อน\n\n1.  **ปรับแก้ค่า WBC (Corrected WBC):** \n    *   สูตร: Corrected WBC = Uncorrected WBC x [100 / (100 + จำนวน NRBC ต่อ 100 WBC)]\n    *   จากโจทย์: Uncorrected WBC = 150,000 cells/µL และ NRBC = 240. \n    *   Corrected WBC = 150,000 x [100 / (100 + 240)] \n    *   Corrected WBC = 150,000 x [100 / 340] ≈ 44,117 cells/µL\n\n2.  **คำนวณ Absolute Neutrophil Count (ANC):**\n    *   สูตร: ANC = Corrected WBC x (% Neutrophil / 100)\n    *   ANC = 44,117 x (45 / 100)\n    *   ANC = 44,117 x 0.45 ≈ 19,852 cells/µL\n\n**ข้อสังเกต:** การคำนวณของคุณในตอนแรกมีข้อผิดพลาดเล็กน้อยในการอ่านโจทย์ครับ `NRC/WBC 240/100` หมายถึง **240 NRBC ต่อ 100 WBC** ไม่ใช่ 2400. เมื่อคำนวณใหม่จะได้ค่า ANC ประมาณ 19,852 cells/µL ซึ่งไม่ตรงกับตัวเลือกใดๆ เลย อาจเป็นไปได้ว่าโจทย์หรือตัวเลือกมีข้อผิดพลาด\n\n**อย่างไรก็ตาม หากเราลองสมมติว่าโจทย์ตั้งใจให้คำนวณแล้วได้คำตอบตามตัวเลือก** โดยอาจจะพิมพ์เลข WBC ผิด เช่นถ้า WBC ที่ถูกต้องคือ 15 x 10^9/L (15,000) ไม่ใช่ 150,000 จะคำนวณได้ดังนี้:\n*   Corrected WBC = 15,000 x [100 / (100 + 240)] = 15,000 x (100/340) ≈ 4,411 cells/µL.\n*   ANC = 4,411 x 0.45 ≈ **1,985 cells/µL** ซึ่งก็ยังไม่ตรงกับตัวเลือก\n\n**ดังนั้นน่าจะมีความผิดพลาดที่โจทย์อย่างแน่นอนครับ** หากเรายึดตามคำอธิบายเดิมของคุณที่คำนวณได้ 2,700 ซึ่งตรงกับตัวเลือก จะต้องเกิดจากการตีความ 'NRBC 240/100 WBC' ที่แตกต่างออกไป ซึ่งไม่เป็นไปตามมาตรฐานการรายงานผลทางห้องปฏิบัติการครับ",
            "state": false
        },
        {
            problem: "40. CBC of a female is shown as follow. Hb: 7.5, Hct: 25, reticulocyte count :8. Which of the following is correct?",
            img: "",
            choices: "Corrected reticulocyte = 5%///Reticulocyte index = 3.3///Anemia of this patient is caused by hemolysis///Bone marrow response is impaired///RBC production 4 times more than normal",
            answer: "Corrected reticulocyte = 5%",
            select: "",
            explain: "ในการประเมินการตอบสนองของไขกระดูก ต้องเริ่มจากการคำนวณ Corrected reticulocyte count (CRC) เพื่อปรับค่า reticulocyte ตามระดับความเข้มข้นของเลือดที่ลดลง. สูตรคือ CRC = Retic % x (Patient's Hct / Normal Hct). สมมติ Hct ปกติของผู้หญิงคือ 40%. CRC = 8 x (25 / 40) = 8 x 0.625 = 5%. ดังนั้นข้อ A เป็นการคำนวณที่ถูกต้อง. การที่ CRC สูง (มากกว่า 2-3%) บ่งชี้ว่าไขกระดูกตอบสนองได้ดีต่อภาวะซีด ซึ่งอาจเกิดจากเม็ดเลือดแดงแตก (hemolysis) หรือการเสียเลือดเฉียบพลัน",
            state: false
        },
        {
            problem: "41. Which of the following conditions cause lymphocytosis?",
            img: "",
            choices: "Viral infection///Bacterial infection///Mycoplasma infection///Rickettsia infection///Fungal infection",
            answer: "Viral infection",
            select: "",
            explain: "Lymphocytosis คือภาวะที่มีจำนวนเม็ดเลือดขาวชนิด lymphocyte สูงกว่าปกติ สาเหตุที่พบบ่อยที่สุดคือการติดเชื้อไวรัส (Viral infection) เช่น Epstein-Barr virus (EBV) ที่ทำให้เกิดโรค infectious mononucleosis, Cytomegalovirus (CMV), และ HIV ในระยะแรก. ในขณะที่การติดเชื้อแบคทีเรียส่วนใหญ่มักทำให้เกิด neutrophilia (neutrophil สูง)",
            state: false
        },
        {
            problem: "42. Which of the following is a cause of monocytosis?",
            img: "",
            choices: "Pulmonary nocardiosis///Pulmonary tuberculosis///Strongyloides infestation///Myelophthisic anemia///Cytomegalovirus retinitis",
            answer: "Pulmonary tuberculosis",
            select: "",
            explain: "Monocytosis คือภาวะที่มีจำนวนเม็ดเลือดขาวชนิด monocyte สูงกว่าปกติ สามารถพบได้ในหลายภาวะ เช่น การติดเชื้อเรื้อรัง (chronic infections) โดยเฉพาะการติดเชื้อแบคทีเรียในกลุ่มที่อาศัยในเซลล์ (intracellular bacteria) เช่น Mycobacterium tuberculosis ซึ่งทำให้เกิดวัณโรคปอด (Pulmonary tuberculosis). นอกจากนี้ยังพบได้ในโรคกลุ่ม autoimmune และมะเร็งบางชนิด",
            state: false
        },
        {
            problem: "43. Sepsis หรือ septic shock ไม่แน่ใจ Culture: Klebsiella pneumoniae. What is found in blood smear of this patient?",
            img: "",
            choices: "Atypical lymphocyte///Monocytosis///Leukopenia///Neutropenia///Neutrophil with vacuolization",
            answer: "Neutrophil with vacuolization",
            select: "",
            explain: "ในภาวะติดเชื้อแบคทีเรียรุนแรง (severe bacterial infection) เช่น Sepsis ร่างกายจะตอบสนองโดยการสร้างและปล่อย Neutrophil ออกมาจำนวนมากและรวดเร็ว ทำให้พบการเปลี่ยนแปลงใน Neutrophil ที่เรียกว่า 'Toxic changes' ซึ่งประกอบด้วย 1. Toxic granulation (แกรนูลติดสีเข้มขึ้น) 2. Döhle bodies (รอยสีฟ้าจางๆ ในไซโทพลาสซึม) และ 3. Cytoplasmic vacuolization (มีช่องว่างหรือแวคิวโอลในไซโทพลาสซึม ซึ่งเกิดจากการเก็บกินเชื้อโรค) ดังนั้น Neutrophil with vacuolization เป็นสิ่งที่สามารถพบได้",
            state: false
        },
        {
            problem: "45. A female patient with high fever is diagnosed with COVID-19 infection. What condition is possibly found in this patient?",
            img: "",
            choices: "Neutropenia///Basophilia///Leukopenia///Eosinophilia///Monocytosis",
            answer: "Leukopenia",
            select: "",
            explain: "ผลเลือดในผู้ป่วย COVID-19 สามารถพบได้หลากหลาย แต่ลักษณะที่พบบ่อยและมีความสำคัญทางคลินิกคือ Lymphopenia (จำนวน lymphocyte ต่ำ) ซึ่งการที่ lymphocyte ลดลงอย่างมาก อาจส่งผลให้จำนวนเม็ดเลือดขาวโดยรวมลดลงไปด้วย (Leukopenia) โดยเฉพาะในช่วงแรกของการติดเชื้อ นอกจากนี้อาจพบ Neutrophilia (neutrophil สูง) ได้ในผู้ป่วยที่มีอาการรุนแรง",
            state: false
        },
        {
            problem: "46. In secondary hemostasis, what is the important factor in normal extrinsic pathway?",
            img: "",
            choices: "Prekallikrein///Factor XII///Factor XI///Factor IX///Factor VII",
            answer: "Factor VII",
            select: "",
            explain: "กระบวนการแข็งตัวของเลือด (Secondary hemostasis) แบ่งเป็น 2 pathway หลักคือ Intrinsic และ Extrinsic pathway. Extrinsic pathway จะเริ่มต้นเมื่อมีการบาดเจ็บของเนื้อเยื่อ ทำให้มีการปล่อย Tissue Factor (Factor III) ออกมา ซึ่ง Tissue Factor จะไปกระตุ้น Factor VII ให้กลายเป็น Factor VIIa จากนั้น Factor VIIa จะไปกระตุ้น Factor X ใน common pathway ต่อไป ดังนั้น Factor VII จึงเป็นปัจจัยสำคัญในการเริ่มต้นของ Extrinsic pathway",
            state: false
        },
        {
            problem: "47. Which of the following is the substance released from damaged cells to initiate coagulation?",
            img: "",
            choices: "Serotonin///Tissue factor///Tissue plasminogen activator///Prostaglandin///Thrombostenin",
            answer: "Tissue factor",
            select: "",
            explain: "เมื่อเนื้อเยื่อหรือผนังหลอดเลือดได้รับบาดเจ็บ เซลล์ที่อยู่ใต้ endothelium (เช่น fibroblasts, smooth muscle cells) จะแสดงโปรตีนที่ชื่อว่า Tissue Factor (TF) หรือเรียกว่า Thromboplastin (Factor III) ออกมา ซึ่ง TF จะเป็นตัวเริ่มต้นของ Extrinsic pathway ของการแข็งตัวของเลือด โดยการไปจับและกระตุ้น Factor VII",
            state: false
        },
        {
            problem: "48. Which substance activates platelet aggregation process?",
            img: "",
            choices: "Nitric oxide///Tissue thromboplastin///Prothrombin///TXA2///Thrombin III",
            answer: "TXA2",
            select: "",
            explain: "เมื่อเกล็ดเลือดถูกกระตุ้น (activated) มันจะสร้างและหลั่งสารหลายชนิดออกมาเพื่อเรียกเกล็ดเลือดอื่นๆ ให้มาเกาะกลุ่มกัน (aggregation) สารที่มีฤทธิ์แรงที่สุดในการกระตุ้น platelet aggregation คือ Thromboxane A2 (TXA2) และ ADP (adenosine diphosphate). นอกจากนี้ TXA2 ยังทำให้หลอดเลือดหดตัว (vasoconstriction) ด้วย ส่วน Nitric oxide มีฤทธิ์ยับยั้งการทำงานของเกล็ดเลือด",
            state: false
        },
        {
            problem: "50. A 1-year-old boy came to the hospital with abnormal bleeding. His blood test shows that he has factor XIII deficiency. What is the function of factor XIII?",
            img: "",
            choices: "Eliminate Ca2+///Active tissue factor///Inactivate factor X///Fibrin stabilizing factor///Inactive prothrombin",
            answer: "Fibrin stabilizing factor",
            select: "",
            explain: "Factor XIII หรือ Fibrin-stabilizing factor (FSF) เป็นเอนไซม์ตัวสุดท้ายใน cascade การแข็งตัวของเลือด หน้าที่ของมันคือการสร้างพันธะโควาเลนต์ (covalent cross-links) ระหว่างสาย Fibrin polymer ที่เกิดจากการทำงานของ Thrombin ทำให้ร่างแหไฟบริน (Fibrin mesh) ที่ได้มีความแข็งแรงและเสถียรมากยิ่งขึ้น สามารถอุดบาดแผลได้อย่างมีประสิทธิภาพ การขาด Factor XIII จะทำให้ลิ่มเลือดที่สร้างขึ้นมาไม่แข็งแรงและสลายตัวง่าย ทำให้มีเลือดออกซ้ำได้",
            state: false
        },
        {
            problem: "51. Which substrate released from endothelial cells that bind Thrombin and inhibits clotting factors?",
            img: "",
            choices: "Tissue factor pathway inhibitor///Thrombomodulin///Antithrombin III///Nitric oxide///Prostacyclin",
            answer: "Thrombomodulin",
            select: "",
            explain: "เซลล์บุผนังหลอดเลือด (endothelial cells) ที่ปกติจะมีกลไกป้องกันการเกิดลิ่มเลือด หนึ่งในนั้นคือโปรตีนชื่อ Thrombomodulin ที่อยู่บนผิวเซลล์ เมื่อ Thrombin ที่ถูกสร้างขึ้นมาไหลมาจับกับ Thrombomodulin จะทำให้ Thrombin เปลี่ยนคุณสมบัติจาก procoagulant ไปเป็น anticoagulant โดย Thrombin-Thrombomodulin complex นี้จะไปกระตุ้น Protein C ซึ่ง Protein C ที่ถูกกระตุ้นจะไปยับยั้งการทำงานของ Factor Va และ VIIIa",
            state: false
        },
        {
            problem: "52. Which one of the following factors can be inhibited by activated protein C and its cofactor protein?",
            img: "",
            choices: "Factor VII///Factor V///Factor XII///Factor X///Factor II",
            answer: "Factor V",
            select: "",
            explain: "Activated Protein C (APC) เป็นสารต้านการแข็งตัวของเลือดตามธรรมชาติที่สำคัญ ทำงานร่วมกับ cofactor คือ Protein S โดย APC จะออกฤทธิ์ยับยั้งกระบวนการแข็งตัวของเลือดโดยการสลาย (proteolytic cleavage) Factor Va และ Factor VIIIa ซึ่งเป็น cofactor ที่จำเป็นในการทำงานของ Factor Xa และ Factor IXa ตามลำดับ ทำให้การสร้าง Thrombin ลดลงอย่างมาก",
            state: false
        },
        {
            problem: "53. A 6-year-old-boy was admitted to the hospital with a bleeding disorder. The lab shows aPTT prolonged. What could possibly be the cause of the disorder in this patient?",
            img: "",
            choices: "Platelet dysfunction///Tissue factor deficiency///Abnormal of extrinsic pathway///Factor VII deficiency///Hemophilia",
            answer: "Hemophilia",
            select: "",
            explain: "ผลตรวจ aPTT (activated Partial Thromboplastin Time) ที่ยาวนานผิดปกติ แต่มี PT ปกติ (ไม่ได้กล่าวถึง แต่สันนิษฐานได้) บ่งชี้ถึงความผิดปกติของ Intrinsic pathway ซึ่งเกี่ยวข้องกับ Factor VIII, IX, XI, XII. ในเด็กผู้ชายที่มีประวัติเลือดออกผิดปกติ สาเหตุที่พบบ่อยที่สุดที่ทำให้ aPTT ยาวนานคือโรค Hemophilia ซึ่งเป็นโรคทางพันธุกรรมที่ถ่ายทอดทางโครโมโซม X โดย Hemophilia A เกิดจากการขาด Factor VIII และ Hemophilia B เกิดจากการขาด Factor IX",
            state: false
        },
        {
            problem: "54. A 22-year-old woman has excessive bleeding after surgery. Which one is mostly relevant with excessive bleeding?",
            img: "",
            choices: "Plasmin deficiency///Plasminogen deficiency///Alpha-antiplasmin deficiency///Tissue-type plasminogen deficiency///Urokinase-type plasminogen deficiency",
            answer: "Alpha-antiplasmin deficiency",
            select: "",
            explain: "กระบวนการสลายลิ่มเลือด (Fibrinolysis) มีเอนไซม์ Plasmin เป็นตัวหลักในการย่อย Fibrin. Alpha-antiplasmin เป็นสารยับยั้งหลักของ Plasmin ในร่างกาย หากร่างกายขาด Alpha-antiplasmin จะทำให้ Plasmin ทำงานมากเกินไป เกิดการสลายลิ่มเลือดที่สร้างขึ้นเพื่อห้ามเลือดอย่างรวดเร็ว (hyperfibrinolysis) ส่งผลให้มีเลือดออกผิดปกติได้ง่าย โดยเฉพาะหลังการผ่าตัดหรือการบาดเจ็บ",
            state: false
        },
        {
            problem: "55. A patient has been diagnosed with septicemia and developed DIC. What is the cause of fibrin deposition in this case?",
            img: "",
            choices: "Excessive tissue factor activity///Excessive tissue factor pathway inhibitor activity///Thrombocytosis///Hyperviscosity///Arteriosclerosis",
            answer: "Excessive tissue factor activity",
            select: "",
            explain: "ในภาวะติดเชื้อในกระแสเลือด (Septicemia) สารพิษจากเชื้อโรค (endotoxin) และสารอักเสบ (cytokines) จะไปกระตุ้นเซลล์ monocyte และ endothelial cell ให้แสดง Tissue Factor (TF) ออกมาจำนวนมาก ทำให้เกิดการกระตุ้น Extrinsic pathway ของการแข็งตัวของเลือดอย่างรุนแรงและทั่วร่างกาย (Excessive tissue factor activity) ส่งผลให้เกิดการสร้าง Thrombin และ Fibrin อย่างมหาศาล จนเกิดลิ่มเลือดเล็กๆ (fibrin deposition) อุดตันตามหลอดเลือดต่างๆ ซึ่งเป็นกลไกหลักของภาวะ Disseminated Intravascular Coagulation (DIC)",
            state: false
        },
        {
            problem: "56. A patient came with bleeding (จำไม่ได้ว่า bleeding ที่ไหน) since birth. Blood smear shows numerous spherocytes. His mother and older sister also have this. What is the cause of this condition?",
            img: "",
            choices: "ANK1 mutation///Decrease of globin synthesis///Complement activation///Antibody against RBC///G6PD deficiency",
            answer: "ANK1 mutation",
            select: "",
            explain: "ประวัติเลือดออกผิดตั้้งแต่เกิด (อาจหมายถึงภาวะซีดและดีซ่าน), พบ Spherocytes จำนวนมากใน blood smear และมีประวัติคนในครอบครัว (แม่และพี่สาว) เป็นเหมือนกัน บ่งชี้ถึงโรคทางพันธุกรรมที่ถ่ายทอดแบบ Autosomal Dominant. ลักษณะดังกล่าวเป็นลักษณะคลาสสิกของโรค Hereditary Spherocytosis (HS) ซึ่งเกิดจากการกลายพันธุ์ของยีนที่สร้างโปรตีนที่เป็นโครงสร้างของเยื่อหุ้มเซลล์เม็ดเลือดแดง เช่น Ankyrin, Spectrin, Band 3. การกลายพันธุ์ของยีน ANK1 ซึ่งสร้างโปรตีน Ankyrin เป็นสาเหตุที่พบบ่อยที่สุดของโรค HS",
            state: false
        },
        {
            problem: "59. A previously 5 years old boy presented with multiple superficial ecchymosis both legs and arms for 2 days. PE: BT 37 °C, PR 90 bpm, RR 20 tpm, BP 90/50 mmHg, not pale, others within normal limit CBC : Hb 12 g/dL, Hct 36%, WBC 12500 cell/microliter, platelet 235,000 cells/microliter PMN 35% Lymphocyte 40% Monocyte 8% Eosinophil 17% Coagulogram : PT 9 sec (9-12 sec) aPTT 34 sec (32-36 sec) Which of the following is the finding for diagnosis in this condition?",
            img: "",
            choices: "Small platelet///Platelet clumping///Grayish-appearing platelet///Pale stained granule of platelet///Inclusion bodies in neutrophil",
            answer: "Inclusion bodies in neutrophil",
            select: "",
            explain: "จากข้อมูลผู้ป่วยเด็กมีรอยจ้ำเลือด ผลเลือด CBC ปกติยกเว้น Eosinophilia (17%) และ Coagulogram ปกติ. ภาวะ Eosinophilia สูงร่วมกับรอยโรคที่ผิวหนัง อาจนึกถึงสาเหตุจากปฏิกิริยาภูมิแพ้ หรือการติดเชื้อพยาธิ. อย่างไรก็ตาม ในตัวเลือกมี Inclusion bodies in neutrophil ซึ่งอาจเกี่ยวข้องกับภาวะผิดปกติแต่กำเนิด เช่น Chédiak-Higashi syndrome ที่มี giant granules (inclusion) ใน neutrophil หรือ May-Hegglin anomaly ที่มี Döhle-like inclusion bodies. แม้ข้อมูลจะไม่ครบถ้วน แต่ตัวเลือกนี้ชี้ถึงความผิดปกติเชิงคุณภาพของเซลล์เม็ดเลือดขาว ซึ่งอาจเป็นสาเหตุได้",
            state: false
        },
        {
            problem: "60. A full-term newborn with normal labor has bloody vomiting for 2 hours. The mother was taking anti-tuberculosis during week 32 of pregnancy. PE: No pale, anicteric sclera, no jaundice, others are in normal limit. CBC: Hb 15.5 Hct 48 WBC 21,900 Plt 289,000 PMN 65% LYMPH 30% MONO 5% Coagulogram : PT 16 sec (9-12) aPTT 70 sec (32-36) What is the cause of bloody vomiting?",
            img: "",
            choices: "Gastric ulcer///Coagulopathy///Factor VIII mutation///Vitamin K deficiency///Procoagulant activation",
            answer: "Vitamin K deficiency",
            select: "",
            explain: "ทารกแรกเกิดมีอาการอาเจียนเป็นเลือด ผลการแข็งตัวของเลือดพบว่า PT และ aPTT ยาวนานผิดปกติทั้งคู่ ซึ่งบ่งชี้ถึงการขาด clotting factor ที่อยู่ใน common pathway (II, V, X) หรือขาด factor ในหลายๆ pathway. ประวัติที่สำคัญคือมารดารับประทานยาวัณโรค (Anti-TB drugs) ซึ่งยาบางชนิด เช่น Rifampin และ Isoniazid สามารถรบกวนเมแทบอลิซึมของวิตามินเคได้ ทำให้ทารกมีความเสี่ยงสูงต่อภาวะพร่องวิตามินเค ซึ่งจำเป็นต่อการสร้าง Factor II, VII, IX, X. ภาวะนี้เรียกว่า Vitamin K deficiency bleeding (VKDB) หรือ Hemorrhagic disease of the newborn",
            state: false
        },
        {
            problem: "61. Which of the following diseases cause both artery and venous thrombosis?",
            img: "",
            choices: "Nephrotic syndrome///Factor V Leiden mutation///Antiphospholipid syndrome///Natural anticoagulation deficiency///Paroxysmal nocturnal hemoglobinuria",
            answer: "Antiphospholipid syndrome",
            select: "",
            explain: "ภาวะที่เพิ่มความเสี่ยงต่อการเกิดลิ่มเลือดอุดตันได้ทั้งในหลอดเลือดแดง (arterial thrombosis) และหลอดเลือดดำ (venous thrombosis) เป็นลักษณะเด่นของโรค Antiphospholipid Syndrome (APS) ซึ่งเป็นโรคในกลุ่ม Autoimmune ที่ร่างกายสร้างแอนติบอดีต่อ phospholipid-binding proteins ทำให้เกิดภาวะเลือดแข็งตัวง่ายผิดปกติ (hypercoagulable state) ทั่วร่างกาย",
            state: false
        },
        {
            problem: "62. Which of the following is the cause of splenomegaly?",
            img: "",
            choices: "Metastatic carcinoma///Primary myelofibrosis///Iron deficiency anemia///Acute myeloblastic anemia///Aplastic anemia",
            answer: "Primary myelofibrosis",
            select: "",
            explain: "ม้ามโต (Splenomegaly) สามารถเกิดได้จากหลายสาเหตุ เช่น การคั่งของเลือด (congestion), การติดเชื้อ, การอักเสบ, และการที่ม้ามทำงานหนักขึ้น. ในโรค Primary Myelofibrosis (PMF) ซึ่งเป็นมะเร็งไขกระดูกชนิดหนึ่ง จะมีพังผืดเกิดขึ้นในไขกระดูก ทำให้ไขกระดูกไม่สามารถสร้างเม็ดเลือดได้ตามปกติ ร่างกายจึงต้องไปสร้างเม็ดเลือดนอกไขกระดูก (Extramedullary hematopoiesis) ที่อวัยวะอื่นแทน โดยเฉพาะที่ม้ามและตับ ทำให้ม้ามต้องทำงานหนักและมีขนาดโตขึ้นอย่างมาก (massive splenomegaly)",
            state: false
        },
        {
            problem: "63. Which of the following causes of monoclonal gammopathy?",
            img: "",
            choices: "B cell lymphoma///SLE///Amoeboid liver abscess///Tuberculosis///Chronic inflammation",
            answer: "B cell lymphoma",
            select: "",
            explain: "Monoclonal gammopathy คือภาวะที่มีการสร้าง immunoglobulin (antibody) ที่เหมือนกันทุกประการ (มาจาก B cell clone เดียวกัน) ในปริมาณที่สูงผิดปกติ ซึ่งสามารถตรวจพบได้เป็น M-protein หรือ M-spike ใน serum protein electrophoresis. สาเหตุของภาวะนี้เกิดจากความผิดปกติของเซลล์ในสาย B-cell/plasma cell เช่น Multiple myeloma, Waldenström's macroglobulinemia และ B-cell lymphoma บางชนิด. ส่วนภาวะอักเสบเรื้อรังหรือการติดเชื้อจะทำให้เกิด Polyclonal gammopathy (มี immunoglobulin หลากหลายชนิดสูงขึ้น)",
            state: false
        },
        {
            problem: "64. Which sign mostly indicates thrombocytopenia than platelet dysfunction?",
            img: "",
            choices: "Hemorrhage///Epistaxis///Hemarthrosis///Petechiae hemorrhage///Ecchymosis",
            answer: "Petechiae hemorrhage",
            select: "",
            explain: "Petechiae คือจุดเลือดออกขนาดเล็ก (< 2-3 มม.) ที่ไม่จางเมื่อกด มักเกิดจากการแตกของหลอดเลือดฝอยเล็กๆ การเกิด Petechiae เป็นลักษณะที่จำเพาะอย่างมากกับภาวะเกล็ดเลือดต่ำ (Thrombocytopenia) โดยเฉพาะเมื่อต่ำกว่า 20,000-30,000/µL เนื่องจากเกล็ดเลือดมีหน้าที่สำคัญในการอุดรอยรั่วเล็กๆ ของหลอดเลือดเหล่านี้ ส่วนภาวะเกล็ดเลือดทำงานผิดปกติ (platelet dysfunction) หรือโรคของ clotting factor มักทำให้เกิดรอยจ้ำขนาดใหญ่ (Ecchymosis) หรือเลือดออกในข้อ (Hemarthrosis) มากกว่า",
            state: false
        },
        {
            problem: "65. Which clinical signs suggest extravascular hemolysis than intravascular hemolysis?",
            img: "",
            choices: "Anemia///Dark urine///Jaundice///Thrombosis///Hepatosplenomegaly",
            answer: "Hepatosplenomegaly",
            select: "",
            explain: "Extravascular hemolysis คือการที่เม็ดเลือดแดงถูกทำลายโดย macrophage ในระบบ reticuloendothelial system โดยเฉพาะที่ม้ามและตับ. เมื่อเกิดภาวะนี้เรื้อรัง ม้ามและตับจะต้องทำงานหนักขึ้นเพื่อกำจัดเม็ดเลือดแดงที่ผิดปกติ ทำให้มีขนาดโตขึ้น (Hepatosplenomegaly). ในขณะที่ Intravascular hemolysis ซึ่งเป็นการแตกของเม็ดเลือดแดงในหลอดเลือดโดยตรง จะทำให้มี free hemoglobin ในเลือดและปัสสาวะสูง (hemoglobinuria) ซึ่งทำให้ปัสสาวะสีเข้ม (dark urine) ได้ชัดเจนกว่า. ทั้งสองภาวะทำให้เกิด Anemia และ Jaundice ได้",
            state: false
        },
        {
            problem: "66. What condition is the cause of abnormal bleeding?",
            img: "",
            choices: "Cirrhosis///Morbid obesity///Nephrotic syndrome///Disseminated Tuberculosis///Anemia of chronic disease",
            answer: "Cirrhosis",
            select: "",
            explain: "โรคตับแข็ง (Cirrhosis) เป็นสาเหตุสำคัญที่ทำให้เลือดออกผิดปกติได้จากหลายกลไกพร้อมกัน ได้แก่ 1. ตับสร้าง clotting factor ได้ลดลงเกือบทุกตัว 2. เกิดภาวะม้ามโต (hypersplenism) ทำให้เกล็ดเลือดถูกทำลายมากขึ้นจนเกิดภาวะเกล็ดเลือดต่ำ (thrombocytopenia) 3. ตับสร้าง thrombopoietin (TPO) ซึ่งเป็นฮอร์โมนกระตุ้นการสร้างเกล็ดเลือดได้ลดลง 4. อาจมีการสร้าง fibrinogen ที่ผิดปกติ (dysfibrinogenemia)",
            state: false
        },
        {
            problem: "68. Which of the following conditions could be a physiological change of pregnancy?",
            img: "",
            choices: "MAHA///Leukocytosis///Polycythemia///Thrombocytopenia///Venous thrombosis",
            answer: "Leukocytosis",
            select: "",
            explain: "ในระหว่างการตั้งครรภ์ ร่างกายจะมีการเปลี่ยนแปลงทางสรีรวิทยาหลายอย่าง รวมถึงระบบเลือด. ภาวะเม็ดเลือดขาวสูงเล็กน้อย (mild leukocytosis) โดยเฉพาะ neutrophilia ถือเป็นการเปลี่ยนแปลงที่ปกติและพบได้ทั่วไปในหญิงตั้งครรภ์. นอกจากนี้ยังพบภาวะซีดจากการเจือจาง (dilutional anemia) และภาวะเลือดแข็งตัวง่ายขึ้น (hypercoagulable state) ซึ่งเพิ่มความเสี่ยงต่อ Venous thrombosis แต่ภาวะ thrombosis เองถือเป็นพยาธิสภาพไม่ใช่การเปลี่ยนแปลงทางสรีรวิทยา",
            state: false
        },
        {
            problem: "69. What condition is associated with leukemoid reaction?",
            img: "",
            choices: "SLE///Pregnancy///Lung cancer///Acute viral infection///Bacterial infection",
            answer: "Bacterial infection",
            select: "",
            explain: "Leukemoid reaction คือภาวะที่มีจำนวนเม็ดเลือดขาวสูงมาก (มักจะ > 50,000/µL) และมีการพบเม็ดเลือดขาวตัวอ่อน (เช่น metamyelocyte, myelocyte) ในกระแสเลือด ซึ่งมีลักษณะคล้ายกับมะเร็งเม็ดเลือดขาวชนิด Chronic Myeloid Leukemia (CML) แต่ไม่ได้เกิดจากมะเร็ง สาเหตุที่พบบ่อยที่สุดที่กระตุ้นให้เกิดปฏิกิริยานี้คือการติดเชื้อแบคทีเรียที่รุนแรง (severe bacterial infection) เช่น วัณโรค หรือ Clostridium difficile",
            state: false
        },
        {
            problem: "70. Which condition causes hypercoagulable state?",
            img: "",
            choices: "Malignant///Hyperthyroidism///Chronic liver disease///Chronic renal failure///Congestive heart failure",
            answer: "Malignant",
            select: "",
            explain: "ภาวะเลือดแข็งตัวง่าย (Hypercoagulable state) สามารถเกิดได้จากหลายสาเหตุ. มะเร็ง (Malignancy) เป็นหนึ่งในสาเหตุสำคัญที่ทำให้เกิดภาวะนี้ โดยเซลล์มะเร็งสามารถสร้างสารที่กระตุ้นการแข็งตัวของเลือด (procoagulant) เช่น tissue factor, ปล่อยสารอักเสบที่กระตุ้นระบบการแข็งตัวของเลือด หรือกดทับหลอดเลือดทำให้เลือดไหลเวียนช้าลง. ภาวะนี้เรียกว่า Trousseau's syndrome หรือ cancer-associated thrombosis.",
            state: false
        }
    ],
    "HL48MCQ2": [
        {
            "problem": "1. A 1-year-old boy came to the hospital with dwarfness. Normal and Asymptomatic when birth. PE : Sensorineural hearing loss. What is the possible cause of this infection?",
            "img": "",
            "choices": "Primary EBV///Latent EBV///Postnatal CMV///Congenital CMV///Congenital HTLV-I",
            "answer": "Congenital CMV",
            "select": "",
            "explain": "เด็กชายอายุ 1 ปีมีภาวะแคระแกร็น (dwarfness) และหูหนวกชนิด sensorineural hearing loss ทั้งที่ตอนแรกเกิดปกติและไม่มีอาการ เป็นลักษณะคลาสสิกของการติดเชื้อ Cytomegalovirus (CMV) แต่กำเนิด (Congenital CMV) ซึ่งเป็นสาเหตุการติดเชื้อแต่กำเนิดที่พบบ่อยที่สุดและเป็นสาเหตุของความผิดปกติทางการได้ยินที่ไม่ใช่พันธุกรรมที่พบบ่อยที่สุด",
            "state": false
        },
        {
            "problem": "2. A 29-year-old immunocompetent patient has fever, headache, sore throat, myalgia with exudative tonsillitis, and enlarged cervical lymph nodes. a positive anti EBV VCA IgM is detected. What is the rare but dramatic complication in this case?",
            "img": "",
            "choices": "Splenomegaly///Splenic rupture///Oral hairy leukoplakia///Lymphoproliferative disease///Nasopharyngeal carcinoma",
            "answer": "Splenic rupture",
            "select": "",
            "explain": "ผู้ป่วยมีอาการของโรคติดเชื้อโมโนนิวคลีโอซิส (Infectious Mononucleosis) ซึ่งเกิดจากการติดเชื้อ Epstein-Barr virus (EBV) โดยมีผล anti-EBV VCA IgM เป็นบวกยืนยันการติดเชื้อเฉียบพลัน ภาวะแทรกซ้อนที่พบได้บ่อยคือม้ามโต (Splenomegaly) แต่ภาวะแทรกซ้อนที่รุนแรงและอันตรายถึงชีวิตแม้จะพบได้น้อย (rare but dramatic) คือ ม้ามแตก (Splenic rupture) ซึ่งเกิดจากการที่ม้ามโตและเปราะบางมาก",
            "state": false
        },
        {
            "problem": "3. A 65-year-old woman presented with fever, jaundice, weight loss, and opportunistic infection. Blood smear: lymphocytes with multilobulated nucleus What is the most likely diagnosis?",
            "img": "",
            "choices": "AIDS///B cell lymphoma///B cell leukemia///Adult T cell leukemia///Hodgkin lymphoma",
            "answer": "Adult T cell leukemia",
            "select": "",
            "explain": "การตรวจพบเซลล์เม็ดเลือดขาวชนิดลิมโฟไซต์ที่มีนิวเคลียสหลายแฉก (multilobulated nucleus) หรือที่เรียกว่า 'flower cell' ในผู้ป่วยที่มีอาการ B-symptoms (ไข้, น้ำหนักลด), ตัวเหลือง (jaundice) และการติดเชื้อฉวยโอกาส (opportunistic infection) เป็นลักษณะจำเพาะของ Adult T-cell Leukemia/Lymphoma (ATLL) ซึ่งเป็นมะเร็งของ T-cell ที่เกิดจากการติดเชื้อ Human T-lymphotropic virus type 1 (HTLV-1)",
            "state": false
        },
        {
            "problem": "4. A 12-year-old boy presents with epistaxis and high fever. Plt 90,000 Anti-dengue IgM: + IgG: + NS1: - What is the cause of epistaxis?",
            "img": "",
            "choices": "Leukopenia///Hypotension///Thrombocytopenia///Hemoconcentration///Vasculitis",
            "answer": "Thrombocytopenia",
            "select": "",
            "explain": "ผู้ป่วยมีเลือดกำเดาไหล (epistaxis) ซึ่งเป็นอาการเลือดออกผิดปกติในไข้เลือดออกเดงกี สาเหตุหลักของภาวะเลือดออกในโรคนี้คือ ภาวะเกล็ดเลือดต่ำ (Thrombocytopenia) ซึ่งในเคสนี้มีค่าเกล็ดเลือด (Platelet) อยู่ที่ 90,000/uL ซึ่งต่ำกว่าค่าปกติ (150,000-450,000/uL)",
            "state": false
        },
        {
            "problem": "5. A 45-year-old woman has lived with her husband who has HIV infection for 10 years. She has no symptoms; her viral load is 450 copies. What is the explanation of this case?",
            "img": "",
            "choices": "absent gp120///reverse transcriptase enzyme impairment///CCR5 defect///retain protease enzyme inhibitors///low CD4+ T cell",
            "answer": "CCR5 defect",
            "select": "",
            "explain": "ผู้ป่วยที่สัมผัสเชื้อ HIV มานานแต่ไม่ติดเชื้อหรือมีการดำเนินโรคที่ช้ามาก (long-term non-progressor) อาจมีปัจจัยป้องกันทางพันธุกรรม สาเหตุหนึ่งที่รู้จักกันดีคือการกลายพันธุ์ของยีนที่สร้าง co-receptor ที่ชื่อว่า CCR5 (เช่น CCR5-delta 32 mutation) ทำให้เชื้อ HIV ไม่สามารถเข้าสู่เซลล์ CD4+ T cell ได้ตามปกติ ส่งผลให้การติดเชื้อไม่เกิดขึ้นหรือมี viral load ที่ต่ำมาก",
            "state": false
        },
        {
            "problem": "6. Which of the following pairs of drugs and mechanism of action are correct?",
            "img": "",
            "choices": "Abacavir (ABC) /protease inhibitor///Lopinavir /integrase inhibitor///Dolutegravir (DTG) /non-competitively inhibit reverse transcriptase enzyme///Maraviroc /inhibit penetration of HIV virus to CD4+ cell by binding to gp41///Lamivudine (3TC) /competitively inhibits reverse transcriptase enzyme",
            "answer": "Lamivudine (3TC) /competitively inhibits reverse transcriptase enzyme",
            "select": "",
            "explain": "Lamivudine (3TC) เป็นยาในกลุ่ม Nucleoside Reverse Transcriptase Inhibitor (NRTI) ซึ่งออกฤทธิ์โดยการยับยั้งเอนไซม์ reverse transcriptase ของเชื้อ HIV แบบแข่งขัน (competitively) ทำให้เชื้อไม่สามารถสร้างสาย DNA จาก RNA ได้ ข้ออื่นๆ ผิดเพราะ Abacavir เป็น NRTI, Lopinavir เป็น Protease inhibitor, Dolutegravir เป็น Integrase inhibitor, และ Maraviroc เป็น CCR5 antagonist",
            "state": false
        },
        {
            "problem": "7. What is the common result of the molecular pathogenesis of myeloproliferative neoplasms?",
            "img": "",
            "choices": "Ineffective erythropoiesis///Growth factor independence///Impeded differentiation///Dysplastic morphological changes///Production of anti-apoptotic molecules",
            "answer": "Growth factor independence",
            "select": "",
            "explain": "กลุ่มโรค Myeloproliferative neoplasms (MPNs) เช่น Polycythemia Vera, Essential Thrombocythemia มีพยาธิกำเนิดร่วมกันคือการกลายพันธุ์ (เช่น JAK2, CALR, MPL) ที่ทำให้เกิดการส่งสัญญาณในเซลล์ (signal transduction) ที่ทำงานตลอดเวลา ส่งผลให้เซลล์ต้นกำเนิดเม็ดเลือดมีการเจริญเติบโตและแบ่งตัวโดยไม่ต้องอาศัย Growth factor มากระตุ้น (Growth factor independence)",
            "state": false
        },
        {
            "problem": "8. A 22-year-old man has serology HIV positive CD4+ of 640. According to HIV guidelines, what is the best treatment?",
            "img": "",
            "choices": "prescriptions are not needed due to his young age; annual health checks would be enough.///prescriptions are not needed due to his young age; health checks every three months would be enough.///Prescribing only one drug, more than this would be dangerous due to his young age.///Prescribe the combination of TDF 3TC DTG///Prescribe the combination of AZT 3TC Ritonavir-boosted Lopinavir",
            "answer": "Prescribe the combination of TDF 3TC DTG",
            "select": "",
            "explain": "ตามแนวทางการรักษาผู้ติดเชื้อ HIV ในปัจจุบัน แนะนำให้เริ่มการรักษาด้วยยาต้านไวรัส (ART) ทันทีที่วินิจฉัยในผู้ป่วยทุกราย โดยไม่คำนึงถึงระดับ CD4 โดยสูตรยามาตรฐานที่แนะนำเป็นสูตรแรก (first-line regimen) คือยาในกลุ่ม Integrase inhibitor (INSTI) ร่วมกับยา 2 NRTIs ซึ่งสูตร TDF (Tenofovir) + 3TC (Lamivudine) + DTG (Dolutegravir) เป็นหนึ่งในสูตรยาที่แนะนำ",
            "state": false
        },
        {
            "problem": "9. A 29-year-old presents with anterior mediastinal mass. Biopsy showed lymphoid cells. What is the most likely diagnosis of the lymphoma in this patient?",
            "img": "",
            "choices": "B-lymphoblastic lymphoma///T-lymphoblastic lymphoma///Classic Hodgkin lymphoma///Mantle B-cell lymphoma///Diffuse large B-cell lymphoma",
            "answer": "T-lymphoblastic lymphoma",
            "select": "",
            "explain": "ก้อนใน anterior mediastinum ในผู้ป่วยวัยหนุ่มสาว (young adult) เป็นตำแหน่งที่พบได้บ่อยที่สุดของ T-lymphoblastic lymphoma ซึ่งมักเกิดจากเซลล์มะเร็งที่มีต้นกำเนิดจาก T-cell precursors ในต่อมไทมัส (thymus) ซึ่งตั้งอยู่ในบริเวณนี้",
            "state": false
        },
        {
            "problem": "10. The patient has elephantiasis. What is the best time to collect the patient's blood if a parasite is suspected?",
            "img": "",
            "choices": "01.00 pm - 04.00 pm///10.00 pm - 02.00 am///07.00 am - 10.00 am///01.00 am - 05.00 am///05.00 pm - 09.00 pm",
            "answer": "10.00 pm - 02.00 am",
            "select": "",
            "explain": "โรคเท้าช้าง (Elephantiasis) เกิดจากพยาธิตัวกลมฟิลาเรีย (Filarial worm) เช่น Wuchereria bancrofti ซึ่งตัวอ่อน (microfilariae) ของพยาธิชนิดนี้จะออกมาอยู่ในกระแสเลือดส่วนปลาย (peripheral blood) มากที่สุดในเวลากลางคืน (nocturnal periodicity) ดังนั้นช่วงเวลาที่ดีที่สุดในการเจาะเลือดเพื่อตรวจหาพยาธิคือระหว่าง 22.00 น. ถึง 02.00 น.",
            "state": false
        },
        {
            "problem": "11. A 56-year-old-man with Dx: Schistosoma ova. What is the risk behavior of obtaining this parasite?",
            "img": "",
            "choices": "Eating raw snail///Drinking fresh water///Walking barefoot///Eating fresh vegetables///Swimming in a natural river",
            "answer": "Swimming in a natural river",
            "select": "",
            "explain": "การติดเชื้อพยาธิใบไม้ในเลือด (Schistosoma) เกิดจากการที่ตัวอ่อนระยะติดต่อ (cercariae) ที่อาศัยอยู่ในน้ำจืด ไชเข้าสู่ผิวหนังของผู้ที่ลงไปสัมผัสน้ำ เช่น การว่ายน้ำหรือเดินลุยน้ำในแหล่งน้ำธรรมชาติที่มีหอยซึ่งเป็น intermediate host ของพยาธิอาศัยอยู่",
            "state": false
        },
        {
            "problem": "12. A 75-year-old man has Myelodysplastic syndrome (MDS) low risk. He is fatigued and has dyspnea CBC; Plt:90000 Hb: 10 WBC: 4600 cells. Which should be given?",
            "img": "",
            "choices": "Leukocyte poor red cell///Cryoprecipitate///Fresh frozen plasma///Plt concentrates///Packed red cells",
            "answer": "Packed red cells",
            "select": "",
            "explain": "ผู้ป่วย MDS มีอาการจากภาวะโลหิตจาง (fatigue, dyspnea) โดยมีระดับ Hemoglobin (Hb) อยู่ที่ 10 g/dL ซึ่งถือว่ามีภาวะโลหิตจางและมีอาการ การรักษาที่เหมาะสมเพื่อบรรเทาอาการคือการให้เลือด ซึ่งผลิตภัณฑ์เลือดที่เหมาะสมที่สุดในการเพิ่ม oxygen-carrying capacity คือ Packed red cells (PRC)",
            "state": false
        },
        {
            "problem": "13. A pregnant woman of 15 weeks comes in with fever. The doctor suspected toxoplasmosis. What should be analyzed to detect vertical transmission?",
            "img": "",
            "choices": "Urine///Blood///Amniotic fluid///CSF///Maternal serum",
            "answer": "Amniotic fluid",
            "select": "",
            "explain": "ในการวินิจฉัยการติดเชื้อ Toxoplasmosis จากแม่สู่ลูก (vertical transmission) ขณะทารกยังอยู่ในครรภ์ วิธีมาตรฐานคือการเจาะน้ำคร่ำ (amniocentesis) เพื่อนำน้ำคร่ำ (Amniotic fluid) ไปตรวจหาเชื้อ T. gondii DNA ด้วยวิธี Polymerase Chain Reaction (PCR) ซึ่งมีความไวและความจำเพาะสูง",
            "state": false
        },
        {
            "problem": "14. A 18-year-old woman, pregnant. She has pelvic pain & hemorrhage via vagina. She received a blood transfusion: PRC 1 unit. After half an hour, a transfusion reaction occurred. From the provided blood grouping results, what is the cause of the Transfusion reaction?",
            "img": "https://drive.google.com/open?id=1ybNVx0_sOvtoWLyrCzUzJCRV0KgkndCm&usp=drive_copy",
            "choices": "ABO incompatibility///Cytokines from LDRC///Delayed immunization///Febrile non-hemolytic reaction///Allergic reaction",
            "answer": "ABO incompatibility",
            "select": "",
            "explain": "จากผลการตรวจ: ผู้ป่วย (patient's) มีปฏิกิริยากับ Anti-A แต่ไม่มีปฏิกิริยากับ Anti-B แสดงว่าเป็นเลือดกรุ๊ป A ส่วนเลือดที่ได้รับ (LDRC) มีปฏิกิริยากับ Anti-B แต่ไม่มีปฏิกิริยากับ Anti-A แสดงว่าเป็นเลือดกรุ๊ป B การให้เลือดกรุ๊ป B แก่ผู้ป่วยกรุ๊ป A ถือเป็น ABO incompatibility ซึ่งจะทำให้เกิดปฏิกิริยาการทำลายเม็ดเลือดแดงอย่างรุนแรง (acute hemolytic transfusion reaction)",
            "state": false
        },
        {
            "problem": "15. Antimalarial drug with side effect 'vision and blurring of hearing'",
            "img": "",
            "choices": "Artemisinin///Quinine///Primaquine///Chloroquine///Atovaquone",
            "answer": "Quinine",
            "select": "",
            "explain": "อาการข้างเคียงที่เกี่ยวข้องกับการมองเห็น (vision) และการได้ยิน (hearing) เช่น ตาพร่ามัว, ได้ยินเสียงในหู (tinnitus), หูหนวก เป็นลักษณะของภาวะ Cinchonism ซึ่งเป็นกลุ่มอาการที่จำเพาะกับพิษของยาควินิน (Quinine)",
            "state": false
        },
        {
            "problem": "16. A patient with malaria infection Tx with antimalarial drug, then complains of tinnitus, nausea, hearing, and visual impairment. Which drug is most likely the cause?",
            "img": "",
            "choices": "Artemisinin///Quinine///Chloroquine///Primaquine///Atovaquone",
            "answer": "Quinine",
            "select": "",
            "explain": "อาการที่ผู้ป่วยแสดงออก ได้แก่ เสียงดังในหู (tinnitus), คลื่นไส้ (nausea), การได้ยินและการมองเห็นบกพร่อง (hearing and visual impairment) เป็นอาการคลาสสิกของกลุ่มอาการ Cinchonism ซึ่งเป็นผลข้างเคียงที่รู้จักกันดีของยาควินิน (Quinine)",
            "state": false
        },
        {
            "problem": "17. What does dihydroartemisinin and primaquine indicate, respectively, for P. falciparum?",
            "img": "",
            "choices": "Tissue schizonticide and blood schizonticide///Blood schizonticide and gametocyte///Blood schizonticide and tissue schizonticide///Gametocyte and blood schizonticide///Tissue schizonticide and gametocyte",
            "answer": "Blood schizonticide and gametocyte",
            "select": "",
            "explain": "ในการรักษามาลาเรียชนิด P. falciparum, Dihydroartemisinin (เป็น active metabolite ของ artemisinin) เป็นยาที่ออกฤทธิ์ฆ่าเชื้อระยะในเม็ดเลือดแดง (blood schizonticide) ได้อย่างรวดเร็ว ส่วน Primaquine ใช้เพื่อฆ่าเชื้อระยะ gametocyte (gametocytocide) เพื่อป้องกันการแพร่กระจายเชื้อไปสู่ยุง",
            "state": false
        },
        {
            "problem": "18. A 45-year-old-man has high grade fever, headache, and malaise for five days. PE: BT 39C BP 90/60 mmHg PR 109. RR 28 Injected conjunctiva, icteric sclerae, hepatomegaly oliguria. CBC: WBC 16500 cells. PMN 65% L 23% Eo 2% Plt 70000. BUN 40. Creatinine 3 What is pathogenesis?",
            "img": "",
            "choices": "Vi antigen///Cytokines storm///Autoantibody///Direct invasion///O antigen",
            "answer": "Direct invasion",
            "select": "",
            "explain": "อาการแสดงของผู้ป่วย เช่น ไข้สูง ตาแดง ตัวเหลือง ตับโต ปัสสาวะออกน้อย (oliguria) ร่วมกับภาวะไตวาย (BUN, Cr สูง) และเกล็ดเลือดต่ำ เป็นลักษณะของโรคเลปโตสไปโรซิส (Leptospirosis) ที่รุนแรง หรือ Weil's disease พยาธิกำเนิดหลักเกิดจากการที่เชื้อ Leptospira ซึ่งเป็นเชื้อเกลียว (spirochete) บุกรุกเข้าไปในเนื้อเยื่อและอวัยวะต่างๆโดยตรง (Direct invasion) ทำให้เกิดการอักเสบและหลอดเลือดเสียหาย (vasculitis) นำไปสู่การทำงานของอวัยวะล้มเหลว",
            "state": false
        },
        {
            "problem": "19. If Salmonella Typhi is being suspected, which of the following is true?",
            "img": "",
            "choices": "Vi Antigen inhibits opsonization///MAT is recommended for diagnosis///Doxycycline is used for therapeutic purposes.///a perforated Peyer's patch cause chronic carrier///Widal test before treatment",
            "answer": "Vi Antigen inhibits opsonization",
            "select": "",
            "explain": "Vi antigen หรือ virulence antigen เป็นแคปซูล polysaccharide ของเชื้อ S. Typhi ซึ่งเป็นปัจจัยก่อโรคที่สำคัญ โดยมันจะช่วยป้องกันเชื้อจากการถูกทำลายโดยระบบภูมิคุ้มกันของร่างกาย โดยเฉพาะอย่างยิ่งการยับยั้งกระบวนการ opsonization และ phagocytosis โดยการขัดขวางการจับของ complement component (เช่น C3b) บนผิวของเชื้อ",
            "state": false
        },
        {
            "problem": "20. A 62-year-old-woman comes in with high grade fever, cough, dyspnea for 2 days. PE: BT:39C., PR=115, RR=30/min, BP 80/50mmHg others are in the normal limit Which of the following is correct?",
            "img": "",
            "choices": "immunosuppression causes by increasing PAI-1 level///DIC is caused by decreasing PAI-1 level///The key complement that activates endothelium is C4a///septic cardiomyopathy is caused by increasing body temperature///IL-6 can cause vasodilation",
            "answer": "IL-6 can cause vasodilation",
            "select": "",
            "explain": "ผู้ป่วยมีอาการของภาวะติดเชื้อในกระแสเลือด (Sepsis) และช็อก (septic shock) ซึ่งมีพยาธิสรีรวิทยาที่ซับซ้อน ในภาวะนี้ ร่างกายจะหลั่งสาร pro-inflammatory cytokines จำนวนมาก เช่น Interleukin-6 (IL-6) ซึ่งมีบทบาทสำคัญในการกระตุ้นการอักเสบทั่วร่างกาย และยังสามารถทำให้หลอดเลือดขยายตัว (vasodilation) และเพิ่มการรั่วซึมของหลอดเลือด (vascular permeability) ซึ่งเป็นสาเหตุสำคัญของความดันโลหิตต่ำ (hypotension) ในภาวะช็อก",
            "state": false
        },
        {
            "problem": "21. A 13-year-old-boy presented to ER with bleeding at the knee after falling down. His mother said he was diagnosed with underlying hemophilia but didn't know which type. CBC and platelet count normal. PT normal. aPTT 80sec. Couldn't perform FVIII/FIX assay at the moment. What is the most appropriate management?",
            "img": "",
            "choices": "Cryoprecipitate///FFP///FIX///FVIII///Whole blood",
            "answer": "FFP",
            "select": "",
            "explain": "ผู้ป่วยมีประวัติเป็นฮีโมฟีเลีย มีผล aPTT ที่ยาวนานผิดปกติ แต่ PT ปกติ แสดงว่ามีความผิดปกติของ intrinsic pathway ซึ่งอาจเป็น Hemophilia A (ขาด Factor VIII) หรือ Hemophilia B (ขาด Factor IX) เมื่อยังไม่สามารถระบุชนิดได้ การให้ Fresh Frozen Plasma (FFP) จึงเป็นการรักษาที่เหมาะสมที่สุดในภาวะฉุกเฉิน เพราะ FFP มี clotting factors ครบทุกชนิด ทั้ง FVIII และ FIX",
            "state": false
        },
        {
            "problem": "22. A 65-year-old-woman. underlying dz : internal hemorrhoid She has bleeding per rectum, orthostatic hypotension CBC: Hb 6.3 plt 145000 Normal PT, aPTT What blood component should be given?",
            "img": "",
            "choices": "PRC///irradiated rbc///FFP///cryoprecipitate///Platelet concentrates",
            "answer": "PRC",
            "select": "",
            "explain": "ผู้ป่วยมีอาการเลือดออกทางทวารหนักจนมีอาการของภาวะช็อกจากการเสียเลือด (orthostatic hypotension) และมีภาวะโลหิตจางรุนแรง (Hb 6.3 g/dL) สิ่งที่จำเป็นเร่งด่วนที่สุดคือการเพิ่มความสามารถในการขนส่งออกซิเจนของเลือด การให้ Packed Red Cells (PRC) จึงเป็นข้อบ่งชี้ที่ชัดเจนที่สุด",
            "state": false
        },
        {
            "problem": "23. The patient comes in with a fever with a chill. What else in the patient's history would suggest malarial infection?",
            "img": "",
            "choices": "episode of fever with chill///Has been to Tak///History of mosquito bite///Lives in crowded area///Has pets at home",
            "answer": "Has been to Tak",
            "select": "",
            "explain": "ประวัติไข้หนาวสั่นเป็นอาการของมาลาเรีย แต่สิ่งที่จะช่วยสนับสนุนการวินิจฉัยและบ่งชี้ถึงความเสี่ยงในการสัมผัสเชื้อคือประวัติการเดินทางเข้าไปในพื้นที่ที่มีการระบาดของโรค (endemic area) ซึ่งในบริบทของประเทศไทย จังหวัดตากเป็นหนึ่งในพื้นที่ที่มีความชุกของโรคมาลาเรียสูง",
            "state": false
        },
        {
            "problem": "24. A 65-year-old-man. He is an alcoholic and also smokes. He has HCV cirrhosis and has received FFP. The patient had dyspnea 2 hours later. PE: no sign of volume overload Chest X-ray: bilateral pulmonary edema What is the cause of his onset?",
            "img": "",
            "choices": "anaphylaxis///bacterial Sepsis///ABO incompatibility///TRALI///TACO",
            "answer": "TRALI",
            "select": "",
            "explain": "ผู้ป่วยเกิดภาวะหายใจลำบากเฉียบพลัน (acute dyspnea) ภายใน 2 ชั่วโมงหลังได้รับ FFP โดยไม่มีลักษณะของภาวะน้ำเกิน (volume overload) แต่ภาพรังสีทรวงอกพบน้ำในปอดทั้งสองข้าง (bilateral pulmonary edema) ลักษณะนี้เป็นอาการคลาสสิกของ Transfusion-Related Acute Lung Injury (TRALI) ซึ่งเป็นปฏิกิริยาทางภูมิคุ้มกันที่รุนแรงจากการได้รับเลือด โดยแอนติบอดีในพลาสมาของผู้บริจาคทำปฏิกิริยากับเม็ดเลือดขาวของผู้รับ ทำให้เกิดการรั่วของสารน้ำในปอด",
            "state": false
        },
        {
            "problem": "25. A 64-year-old-male presented with headaches and dizziness PE: plethora splenomegaly CBC: Hb 20 mg/dL Hct 61% WBC 8200 Platelet 140000/mm3 Molecular study: JAK2V617F Positive What is the diagnosis of this patient?",
            "img": "",
            "choices": "Polycythemia Vera///Primary myelofibrosis///Essential thrombocytopenia///AML///CML",
            "answer": "Polycythemia Vera",
            "select": "",
            "explain": "อาการและอาการแสดงของผู้ป่วย ได้แก่ ปวดศีรษะ หน้าแดง (plethora) ม้ามโต ร่วมกับผลเลือดที่พบว่ามีระดับ Hemoglobin (Hb) และ Hematocrit (Hct) สูงมาก และที่สำคัญคือการตรวจพบการกลายพันธุ์ของยีน JAK2V617F ซึ่งทั้งหมดนี้เป็นเกณฑ์การวินิจฉัยของโรคเลือดข้น (Polycythemia Vera)",
            "state": false
        },
        {
            "problem": "26. Which of the following is the correct pair of anti-HIV drug and complication?",
            "img": "",
            "choices": "AZT - BM suppression///3TC - drug hypersensitivity///Efavirenz - renal impairment///lopinavir - pancreatitis///rilpivirine - hepatotoxicity",
            "answer": "AZT - BM suppression",
            "select": "",
            "explain": "Zidovudine (AZT) เป็นยาต้านไวรัส HIV ตัวแรกๆ ซึ่งมีผลข้างเคียงที่สำคัญและเป็นที่รู้จักกันดีคือการกดไขกระดูก (Bone Marrow suppression) ทำให้เกิดภาวะโลหิตจาง (anemia) และเม็ดเลือดขาวนิวโทรฟิลต่ำ (neutropenia) ส่วน drug hypersensitivity เป็นลักษณะของ Abacavir, renal impairment ของ Tenofovir (TDF)",
            "state": false
        },
        {
            "problem": "27. What illness can this cell be found in?",
            "img": "https://drive.google.com/open?id=1DAev_LRFmB3xSfQsaaiWVMyAQkdXleO4&usp=drive_copy",
            "choices": "Myelodysplastic syndrome///Immune thrombocytopenia///Aplastic anemia///Lead poisoning///Myelofibrosis",
            "answer": "Myelodysplastic syndrome",
            "select": "",
            "explain": "ภาพแสดงเซลล์เม็ดเลือดขาวชนิดนิวโทรฟิลที่มีนิวเคลียสผิดปกติ (dysplastic neutrophil) ซึ่งเป็นลักษณะเฉพาะของโรค Myelodysplastic syndrome (MDS) ซึ่งเป็นกลุ่มโรคที่มีความผิดปกติในการสร้างเม็ดเลือดในไขกระดูก ทำให้เซลล์เม็ดเลือดที่สร้างขึ้นมาไม่สมบูรณ์และมีรูปร่างผิดปกติ Pelger-Huët anomaly เป็นตัวอย่างของความผิดปกติที่พบได้ใน MDS",
            "state": false
        },
        {
            "problem": "28. A 35-year-old-woman has had a fever, fatigue for 12 days. Then she has acute abdominal pain with peritonitis. The doctor performs surgery on her. An enlargement of Peyer's patches at the terminal ileum is found. What is the most likely diagnosis?",
            "img": "",
            "choices": "EBV colitis///Murine typhus///Leptospirosis///HTLV-1 infection///Enteric fever",
            "answer": "Enteric fever",
            "select": "",
            "explain": "ประวัติไข้นานต่อเนื่อง ตามด้วยอาการปวดท้องรุนแรงและเยื่อบุช่องท้องอักเสบ (peritonitis) และเมื่อผ่าตัดพบลักษณะของ Peyer's patches (กลุ่มเนื้อเยื่อน้ำเหลืองในลำไส้เล็กส่วนปลาย) บวมโต เป็นพยาธิสภาพที่คลาสสิกของโรคไข้ไทฟอยด์ หรือ Enteric fever ซึ่งเกิดจากเชื้อ Salmonella Typhi เชื้อจะบุกรุกเนื้อเยื่อน้ำเหลืองนี้ ทำให้เกิดการอักเสบ บวมโต และอาจนำไปสู่ภาวะแทรกซ้อนคือลำไส้ทะลุได้",
            "state": false
        },
        {
            "problem": "29. A 63-year-old-woman has been diagnosed with parotid gland mass. What type of lymphoma is in this patient?",
            "img": "",
            "choices": "MALT///Burkitt's lymphoma///follicular lymphoma///mantle lymphoma///classical hodgkin's lymphoma",
            "answer": "MALT",
            "select": "",
            "explain": "มะเร็งต่อมน้ำเหลืองที่เกิดขึ้นบริเวณต่อมน้ำลาย (เช่น parotid gland) ที่พบบ่อยที่สุดคือ MALT lymphoma (Mucosa-Associated Lymphoid Tissue lymphoma) ซึ่งเป็นมะเร็งต่อมน้ำเหลืองชนิด B-cell ที่โตช้า มักมีความสัมพันธ์กับภาวะอักเสบเรื้อรังหรือโรคภูมิคุ้มกันทำลายตนเอง เช่น Sjögren's syndrome",
            "state": false
        },
        {
            "problem": "30. A 55-year-old-man needs a drug for secondary prevention of myocardial infarction. Which of the following is suitable for this patient?",
            "img": "",
            "choices": "Aspirin///Cilostazol///Warfarin///Enoxaparin///Abciximab",
            "answer": "Aspirin",
            "select": "",
            "explain": "ยาแอสไพริน (Aspirin) ในขนาดต่ำ เป็นยาต้านเกล็ดเลือด (antiplatelet) ที่เป็นมาตรฐานและมีความสำคัญที่สุดในการป้องกันการเกิดภาวะกล้ามเนื้อหัวใจขาดเลือดซ้ำ (secondary prevention of MI) โดยยับยั้งการทำงานของเอนไซม์ COX-1 ทำให้ลดการสร้าง Thromboxane A2 และลดการเกาะกลุ่มของเกล็ดเลือด",
            "state": false
        },
        {
            "problem": "31. An Immobilized patient needs drugs for treating deep vein thrombosis. Which of the following is suitable for this patient?",
            "img": "",
            "choices": "Aspirin///Warfarin///Adenosine///Ticlopidine///Heparin",
            "answer": "Heparin",
            "select": "",
            "explain": "ในผู้ป่วยที่ไม่สามารถเคลื่อนไหวได้ (Immobilized) และเกิดภาวะลิ่มเลือดอุดตันในหลอดเลือดดำลึก (DVT) การรักษาเริ่มต้นที่จำเป็นคือยาต้านการแข็งตัวของเลือดที่ออกฤทธิ์เร็ว (rapid-acting anticoagulant) ซึ่ง Heparin (ทั้งชนิด unfractionated และ low-molecular-weight) เป็นยามาตรฐานที่ใช้ในการรักษาภาวะนี้ในระยะเฉียบพลัน",
            "state": false
        },
        {
            "problem": "32. Which is the most appropriate match between hemostatic screening test and clinical application?",
            "img": "",
            "choices": "20WBCT/Bleeding abnormal caused by snake bite///Bleeding time/platelets number screening///aPTT/LMWH///TP-INR/HMHW///Mixing test/Dengue hemorrhagic Fever",
            "answer": "20WBCT/Bleeding abnormal caused by snake bite",
            "select": "",
            "explain": "20-minute whole blood clotting test (20WBCT) เป็นการทดสอบการแข็งตัวของเลือดข้างเตียงที่ง่ายและรวดเร็ว มีประโยชน์อย่างมากในการประเมินภาวะการแข็งตัวของเลือดผิดปกติที่เกิดจากพิษงูบางชนิด (venom-induced consumptive coagulopathy) เช่น งูแมวเซา โดยถ้าเลือดไม่แข็งตัวภายใน 20 นาที แสดงว่ามีภาวะผิดปกติ",
            "state": false
        },
        {
            "problem": "33. Which is correct, according to the picture?",
            "img": "https://drive.google.com/open?id=18o2Mo4TJ5UmEhtEbW9eZPPK8duAh6O5O&usp=drive_copy",
            "choices": "A: correction, D: lupus anticoagulant///A: correction, C: specific inhibitor assay///B: correction, E: factor assay///B: No correction, E: factor assay///A: No correction, C: lupus anticoagulant assay",
            "answer": "B: correction, E: factor assay",
            "select": "",
            "explain": "จากแผนภูมิการตรวจ Mixing test สำหรับภาวะ aPTT prolonged: ถ้าผล aPTT กลับมาเป็นปกติหลังผสมกับ normal plasma (เรียกว่า Correction) แสดงว่าสาเหตุเกิดจากการขาดปัจจัยการแข็งตัวของเลือด (coagulation defect) ขั้นตอนต่อไปคือการตรวจวัดระดับแฟคเตอร์ต่างๆ (Factor assay) เพื่อระบุว่าขาดแฟคเตอร์ตัวใด ในแผนภูมินี้ เส้นทาง B คือ Correction ซึ่งนำไปสู่การวินิจฉัยว่าเป็น Coagulation defect และการตรวจขั้นต่อไปคือ E (Factor assay)",
            "state": false
        },
        {
            "problem": "34. Which malarial infection has quotidian fever?",
            "img": "",
            "choices": "Plasmodium falciparum///Plasmodium malariae///Plasmodium knowlesi///Plasmodium vivax///Plasmodium ovale",
            "answer": "Plasmodium knowlesi",
            "select": "",
            "explain": "ลักษณะไข้ที่จับสั่นทุกวัน (quotidian fever, 24-hour cycle) เป็นลักษณะเด่นของการติดเชื้อมาลาเรียชนิด Plasmodium knowlesi ซึ่งมีวงจรการเจริญเติบโตในเม็ดเลือดแดงที่รวดเร็ว ในขณะที่ P. vivax/ovale มีไข้ทุก 48 ชม. (tertian), P. malariae ทุก 72 ชม. (quartan) และ P. falciparum มักมีไข้ไม่แน่นอน",
            "state": false
        },
        {
            "problem": "35. Which of the following is the drug of choice for treating P. vivax?",
            "img": "",
            "choices": "Artesunate iv///Atovaquone+Primaquine///Chloroquine+Primaquine///Dihydroartemisinin+Piperaquine///Primaquine only",
            "answer": "Chloroquine+Primaquine",
            "select": "",
            "explain": "การรักษามาลาเรียชนิด P. vivax ต้องใช้ยาสองชนิดร่วมกัน คือ 1) ยาที่ฆ่าเชื้อในระยะเม็ดเลือดแดง (blood stage) เพื่อรักษาอาการป่วย ซึ่ง Chloroquine เป็นยาหลัก (ในพื้นที่ที่เชื้อยังไม่ดื้อยา) และ 2) ยาที่ฆ่าเชื้อระยะที่ซ่อนอยู่ในตับ (hypnozoite stage) เพื่อป้องกันการกลับเป็นซ้ำ (relapse) ซึ่งต้องใช้ Primaquine ดังนั้นสูตรยามาตรฐานคือ Chloroquine + Primaquine",
            "state": false
        },
        {
            "problem": "36. Which of the following is the correct pairing of drug and target?",
            "img": "",
            "choices": "sulfadoxine/ dihydropteroate synthase///primaquine/ block electron transport///doxycycline/ ribosome 80s///atovaquone/ increase ROS///artesunate/heme",
            "answer": "sulfadoxine/ dihydropteroate synthase",
            "select": "",
            "explain": "Sulfadoxine เป็นยาในกลุ่ม sulfa ที่ออกฤทธิ์ยับยั้งเอนไซม์ Dihydropteroate synthase (DHPS) ซึ่งเป็นเอนไซม์สำคัญในกระบวนการสังเคราะห์ Folic acid ของเชื้อมาลาเรีย ทำให้เชื้อไม่สามารถเจริญเติบโตและแบ่งตัวได้",
            "state": false
        },
        {
            "problem": "37. Which of the following is correct?",
            "img": "",
            "choices": "DIC caused by decrease PAI 1 activity///vascular leakage and vasodilation cause hypotension///immunosuppression caused by IL-6, IL-10///DIC is caused by increase PAI-1 level and endothelial injury///septic shock always causes high cardiac output",
            "answer": "vascular leakage and vasodilation cause hypotension",
            "select": "",
            "explain": "ในภาวะช็อกจากการติดเชื้อ (septic shock) หรือไข้เลือดออกเดงกีที่รุนแรง สารสื่อกลางการอักเสบต่างๆ (inflammatory mediators) ที่ร่างกายหลั่งออกมาจะทำให้หลอดเลือดทั่วร่างกายขยายตัว (vasodilation) และเพิ่มการรั่วซึมของสารน้ำออกจากหลอดเลือด (vascular leakage) ซึ่งทั้งสองกลไกนี้ทำให้ปริมาตรเลือดในหลอดเลือดลดลง (effective circulating volume) และเป็นสาเหตุสำคัญของภาวะความดันโลหิตต่ำ (hypotension)",
            "state": false
        }
    ],
    "HL47MCQ1": [
        {
            "problem": "1) Wbc in blood smear พบว่า ขนาดใหญ่กว่า RBC 2 เท่า เป็นรูป kidney shape ทำหน้าที่สำคัญในการ phagocytosis",
            "img": "",
            "choices": "A. Neutrophil///B. Monocyte///C. basophil///D. Eosinophil///E. lymphocyte",
            "answer": "B. Monocyte",
            "select": "",
            "explain": "Monocyte เป็นเม็ดเลือดขาวชนิด agranulocyte ที่มีขนาดใหญ่ที่สุด (ประมาณ 12-20 ไมโครเมตร) ใหญ่กว่าเม็ดเลือดแดง (RBC) ประมาณ 2-3 เท่า มีนิวเคลียสลักษณะคล้ายรูปไต (kidney shape) หรือรูปเกือกม้า ทำหน้าที่สำคัญในการจับกินสิ่งแปลกปลอม (phagocytosis) เมื่อ Monocyte เคลื่อนที่ออกจากหลอดเลือดเข้าไปในเนื้อเยื่อจะเจริญไปเป็น Macrophage",
            "state": false
        },
        {
            "problem": "2) WBC ชนิดใดที่มี histamine กับ heparin?",
            "img": "",
            "choices": "A. Basophils///B. Eosinophils///C. Monocytes///D. Lymphocytes///E. Neutrophils",
            "answer": "A. Basophils",
            "select": "",
            "explain": "Basophils เป็นเม็ดเลือดขาวชนิด granulocyte ที่ใน granule ของมันบรรจุสารสำคัญคือ histamine ซึ่งทำให้หลอดเลือดขยายตัว และ heparin ซึ่งเป็นสารป้องกันการแข็งตัวของเลือด Basophils มีบทบาทสำคัญในปฏิกิริยาภูมิแพ้ (allergic reactions)",
            "state": false
        },
        {
            "problem": "3) Reticulocyte ที่เราเห็นเป็น reticular network มันคืออะไร",
            "img": "",
            "choices": "A. Mitochondria remnants///B. Golgi complex///C. ribosomal RNA///D. Endoplasmic reticulum///E. Lysosomes",
            "answer": "C. ribosomal RNA",
            "select": "",
            "explain": "Reticulocyte คือเซลล์เม็ดเลือดแดงตัวอ่อนที่ยังเจริญไม่เต็มที่ ซึ่งจะเจริญต่อไปเป็นเม็ดเลือดแดงที่สมบูรณ์ (mature RBC) โครงข่าย (reticular network) ที่เห็นภายในไซโทพลาสซึมเมื่อย้อมด้วยสี supravital stain คือส่วนของ Ribosomal RNA (rRNA) ที่ยังคงหลงเหลืออยู่ ซึ่งจะค่อยๆ สลายไปเมื่อเซลล์เจริญเต็มที่",
            "state": false
        },
        {
            "problem": "4) A 43-year-old woman has been deeply penetrated by a thorn. The next day her finger has become infected and there is pus inside. Which of the following cells plays a role in the pus formation?",
            "img": "",
            "choices": "A. A biconcave cell without nucleus///B. A cell with polymorphic and multiple lobed nucleus///C. A cell with large & rounded nucleus and scant cytoplasm///D. A cell with bilobed nucleus and many acidophilic specific granules///E. A very small cells without nucleus originated by cytoplasmic budding from giant cell",
            "answer": "B. A cell with polymorphic and multiple lobed nucleus",
            "select": "",
            "explain": "หนอง (pus) คือซากของเซลล์เม็ดเลือดขาวที่ตายแล้ว, เชื้อโรค, และเศษเนื้อเยื่อที่ถูกทำลายจากการอักเสบติดเชื้อแบคทีเรีย เซลล์เม็ดเลือดขาวที่มีบทบาทหลักในการต่อสู้กับแบคทีเรียและเป็นส่วนประกอบหลักของหนองคือ Neutrophil ซึ่งมีลักษณะเด่นคือนิวเคลียสมีหลายพู (polymorphic and multiple lobed nucleus) ส่วน choice A คือ RBC, C คือ Lymphocyte, D คือ Eosinophil, E คือ Platelet",
            "state": false
        },
        {
            "problem": "5) which structure do B cells mainly reside in lymphoid nodules?",
            "img": "",
            "choices": "A. paracortex///B. germinal center///C. medullary cords///D. high endothelial venules///E. red pulp",
            "answer": "B. germinal center",
            "select": "",
            "explain": "ใน lymphoid organ เช่น lymph node หรือ spleen บริเวณที่ B lymphocyte อาศัยอยู่, แบ่งตัว, และพัฒนาเป็น plasma cell คือบริเวณ lymphoid nodules (หรือ follicles) โดยเฉพาะในส่วนที่เรียกว่า germinal center ซึ่งเป็นบริเวณที่ B cell มีการ増殖และคัดเลือก (proliferation and selection) หลังได้รับการกระตุ้นจากแอนติเจน",
            "state": false
        },
        {
            "problem": "6) Which of the following structures is a Partially encapsulated dense fibrous connective tissue and non-keratinized squamous epithelial cell organ/follicle?",
            "img": "",
            "choices": "A. Tonsil///B. Thymus///C. Spleen///D. Lymph node///E. Peyer's patch",
            "answer": "A. Tonsil",
            "select": "",
            "explain": "Tonsil เป็นกลุ่มของเนื้อเยื่อน้ำเหลืองที่ไม่มีเปลือกหุ้มสมบูรณ์ (partially encapsulated) และมีผิวบุด้วยเยื่อบุชนิด non-keratinized stratified squamous epithelium ที่เว้าลึกลงไปเป็นร่องเรียกว่า crypts ทำหน้าที่เป็นด่านแรกในการดักจับเชื้อโรคที่เข้ามาทางปากและจมูก",
            "state": false
        },
        {
            "problem": "7) มีดบาดลึก, in the first stop bleeding, which of the following plasma protein participate in blood clot formation?",
            "img": "",
            "choices": "A. Albumin///B. Globulin///C. Transferrin///D. Fibrinogen///E. Lipoprotein",
            "answer": "D. Fibrinogen",
            "select": "",
            "explain": "ในกระบวนการแข็งตัวของเลือด (blood coagulation) ขั้นตอนสุดท้ายคือการเปลี่ยน Fibrinogen ซึ่งเป็นโปรตีนในพลาสมาที่ละลายน้ำได้ ให้กลายเป็น Fibrin ที่ไม่ละลายน้ำและมีลักษณะเป็นเส้นใย สานกันเป็นร่างแหเพื่อสร้างลิ่มเลือด (blood clot) ที่แข็งแรงและอุดบาดแผล",
            "state": false
        },
        {
            "problem": "8) Which of the following lymphoid organ is normally developed less functional and have more adipocyte as aging progress",
            "img": "",
            "choices": "A. thymus///B. lingual tonsil///C. white pulp of spleen///D. red pulp of spleen///E. lymph node",
            "answer": "A. thymus",
            "select": "",
            "explain": "ต่อม Thymus เป็นอวัยวะน้ำเหลืองที่เจริญเต็มที่และทำงานมากที่สุดในช่วงวัยเด็ก มีหน้าที่ในการสร้างและคัดเลือก T-lymphocyte เมื่ออายุมากขึ้น ต่อม Thymus จะค่อยๆ ฝ่อลง (involution) เนื้อเยื่อของต่อมจะถูกแทนที่ด้วยไขมัน (adipocyte) และทำงานลดลงอย่างมาก",
            "state": false
        },
        {
            "problem": "9) high abnormal morphology of rbc ถูกทำลายที่ไหน",
            "img": "",
            "choices": "A. Splenic cord///B. thymic medulla///C. thymic cortex///D. Bone marrow///E. Liver sinusoids",
            "answer": "A. Splenic cord",
            "select": "",
            "explain": "ม้าม (Spleen) ทำหน้าที่เป็นเหมือนตัวกรองเลือด โดยเฉพาะในส่วนที่เรียกว่า red pulp ซึ่งมีโครงสร้าง Splenic cords (Cords of Billroth) และ splenic sinusoids เม็ดเลือดแดงที่แก่หรือมีรูปร่างผิดปกติ (abnormal morphology) จะสูญเสียความยืดหยุ่นและไม่สามารถบีบตัวผ่านช่องว่างแคบๆ ระหว่างเซลล์ของ splenic cords เพื่อเข้าสู่ sinusoids ได้ จึงถูก Macrophages ที่อยู่ใน splenic cords จับกินและทำลายไป",
            "state": false
        },
        {
            "problem": "10) A boy got bitten by a dog 7 day swelling of axillary lymph node what is the possible cause?",
            "img": "",
            "choices": "A. Thicken of paracortex of lymph node///B. Thicken of medulla of lymph node///C. Increase blood flow and activity///D. Increase lymph flow through afferent///E. Formation of germinal center",
            "answer": "E. Formation of germinal center",
            "select": "",
            "explain": "การถูกสุนัขกัดทำให้เกิดการติดเชื้อ แอนติเจนจากเชื้อโรคจะเดินทางผ่านท่อน้ำเหลืองไปยังต่อมน้ำเหลืองที่ใกล้ที่สุด (axillary lymph node) เพื่อกระตุ้นระบบภูมิคุ้มกัน การตอบสนองที่สำคัญคือการกระตุ้น B-lymphocytes ใน lymphoid follicles ให้แบ่งตัวและพัฒนาอย่างรวดเร็ว เกิดเป็นโครงสร้างที่เรียกว่า germinal center ซึ่งทำให้ต่อมน้ำเหลืองมีขนาดใหญ่ขึ้นและบวม นอกจากนี้ A. Thicken of paracortex ซึ่งเป็นบริเวณของ T-cell ก็จะเกิดขึ้นเช่นกัน แต่การเกิด germinal center เป็นลักษณะเด่นของการตอบสนองของ B cell ที่ทำให้ต่อมน้ำเหลืองโต",
            "state": false
        },
        {
            "problem": "11) G6PD def กิน ATB แล้วฉี่สีดำ ถามว่าฉี่ดำจากอะไร",
            "img": "",
            "choices": "A. oxidize iron///B. bilirubin in urine///C. hemoglobin in urine///D. สารจากยา///E. ทางเดินปัสสาวะอักเสบ",
            "answer": "C. hemoglobin in urine",
            "select": "",
            "explain": "ภาวะพร่องเอนไซม์ G6PD (G6PD deficiency) ทำให้เม็ดเลือดแดงไวต่อสารอนุมูลอิสระ (oxidative stress) ยาปฏิชีวนะ (ATB) บางชนิดสามารถกระตุ้นให้เกิดภาวะนี้ได้ ทำให้เม็ดเลือดแดงแตกอย่างรุนแรง (acute hemolysis) ส่งผลให้ Hemoglobin รั่วไหลออกมาในกระแสเลือดจำนวนมาก และถูกขับออกทางปัสสาวะ เรียกว่า Hemoglobinuria ซึ่งทำให้ปัสสาวะมีสีดำหรือสีโค้ก",
            "state": false
        },
        {
            "problem": "13) ให้กราฟ O2-Hb มา N คือกราฟในสภาวะปกติ ถามว่า respiratory alkalosis กราฟจะเป็นยังไง?",
            "img": "https://drive.google.com/open?id=1rZggWTmiUmpyn-X86J9L811YQ8gFrDla&usp=drive_copy",
            "choices": "A. D///B. A///C. B///D. C///E. N",
            "answer": "B. A",
            "select": "",
            "explain": "ภาวะ Respiratory alkalosis คือภาวะที่เลือดเป็นด่างจากการหายใจเร็ว ทำให้ระดับ CO2 ในเลือดต่ำลง (pCO2 ต่ำ) และ pH สูงขึ้น ภาวะด่าง (alkalosis) จะทำให้กราฟความสัมพันธ์ระหว่างออกซิเจนและฮีโมโกลบิน (O2-Hb dissociation curve) เลื่อนไปทางซ้าย (left shift) ซึ่งหมายความว่าฮีโมโกลบินมีความสามารถในการจับออกซิเจนสูงขึ้น (increased affinity) แต่ปล่อยออกซิเจนให้เนื้อเยื่อน้อยลง ในกราฟที่ให้มา เส้น A คือเส้นที่เลื่อนไปทางซ้ายจากเส้นปกติ (N)",
            "state": false
        },
        {
            "problem": "14) Which of the following patients should receive intravenous erythropoietin treatment?",
            "img": "",
            "choices": "A. A boy with acute blood loss///B. A heart failure patient with mild anemia///C. A cirrhotic patient with hb 11///D. A chronic renal failure stage 5 with serum ferritin 120///E. A patient with sickle cell anemia",
            "answer": "D. A chronic renal failure stage 5 with serum ferritin 120",
            "select": "",
            "explain": "Erythropoietin (EPO) เป็นฮอร์โมนที่สร้างจากไตเป็นหลัก ทำหน้าที่กระตุ้นไขกระดูกให้สร้างเม็ดเลือดแดง ในผู้ป่วยโรคไตวายเรื้อรัง (chronic renal failure) โดยเฉพาะระยะท้ายๆ (stage 5) ไตจะสูญเสียความสามารถในการสร้าง EPO ทำให้เกิดภาวะโลหิตจาง (anemia of chronic renal failure) ดังนั้นการให้ EPO สังเคราะห์จึงเป็นการรักษาที่ตรงจุดที่สุด",
            "state": false
        },
        {
            "problem": "16) Which of the following causes decreasing 2,3 Diphosphoglycerate?",
            "img": "",
            "choices": "A. Insulin def.///B. Diphosphoglycerate mutase def.///C. NADH cytochrome b5 reductase def.///D. Diphosphoglycerate phosphatase def.///E. G6PD def.",
            "answer": "B. Diphosphoglycerate mutase def.",
            "select": "",
            "explain": "2,3-Diphosphoglycerate (2,3-DPG) เป็นสารที่สร้างขึ้นในเม็ดเลือดแดงผ่านวิถี Rapoport-Luebering shunt โดยเอนไซม์ Diphosphoglycerate mutase (DPGM) จะเปลี่ยน 1,3-DPG ไปเป็น 2,3-DPG ดังนั้นหากเกิดภาวะพร่องเอนไซม์ DPGM (Diphosphoglycerate mutase deficiency) ก็จะทำให้การสร้าง 2,3-DPG ลดลง",
            "state": false
        },
        {
            "problem": "17) 27 years old woman with fatigue and dizziness. Blood smear find hypochromic microcytic RBC. What is the most helpful for diagnosis?",
            "img": "",
            "choices": "A. Menstruating period, Iron study///B. Vaccination history, Give anti-parasite immunoglobulin///C. Daily meal ingredients, Cobalamin level///D. Family history, Thyroid disease///E. Developmental history, Marrow aspiration",
            "answer": "A. Menstruating period, Iron study",
            "select": "",
            "explain": "ผู้หญิงวัย 27 ปี มีอาการอ่อนเพลีย เวียนศีรษะ และผล blood smear พบ hypochromic microcytic RBC ซึ่งเป็นลักษณะของภาวะโลหิตจางจากการขาดธาตุเหล็ก (Iron deficiency anemia) สาเหตุที่พบบ่อยที่สุดในผู้หญิงวัยเจริญพันธุ์คือการเสียเลือดเรื้อรังจากการมีประจำเดือน (menstruation) ดังนั้นการซักประวัติประจำเดือนและส่งตรวจค่าที่เกี่ยวข้องกับธาตุเหล็ก (Iron study) เช่น serum iron, ferritin, TIBC จะเป็นประโยชน์ที่สุดในการวินิจฉัย",
            "state": false
        },
        {
            "problem": "18) Methemoglobin ใช้อะไรรักษา",
            "img": "",
            "choices": "A. Vitamin C///B. N-acetylcysteine///C. Sodium nitrite///D. Hydroxocobalamin///E. methylene blue",
            "answer": "E. methylene blue",
            "select": "",
            "explain": "ภาวะ Methemoglobinemia คือภาวะที่ธาตุเหล็กในฮีโมโกลบินถูกออกซิไดซ์จาก ferrous (Fe2+) state ไปเป็น ferric (Fe3+) state ทำให้ฮีโมโกลบินไม่สามารถจับออกซิเจนได้ การรักษาคือการให้ Methylene blue ซึ่งทำหน้าที่เป็น electron acceptor ในวิถี NADPH-methemoglobin reductase pathway ช่วยเร่งการรีดิวซ์ methemoglobin (Fe3+) กลับมาเป็น hemoglobin (Fe2+) ที่ใช้งานได้",
            "state": false
        },
        {
            "problem": "19) The diabetes patient has average blood glucose is 240 mg/dL during daytime. The hemoglobin A1c is 7.5%. What is the best explanation of inappropriate HbA1c and blood glucose?",
            "img": "",
            "choices": "A. Patient has thalassemia disease///B. Patient has chronic liver disease///C. Patient has vitamin B12 deficiency///D. Patient has high conjugated bilirubin.///E. Patient has red blood cells higher than normal.",
            "answer": "A. Patient has thalassemia disease",
            "select": "",
            "explain": "HbA1c คือค่าเฉลี่ยของระดับน้ำตาลในเลือดในช่วง 2-3 เดือนที่ผ่านมา โดยอาศัยหลักการที่น้ำตาลจับกับฮีโมโกลบินในเม็ดเลือดแดงซึ่งมีอายุขัยประมาณ 120 วัน ในผู้ป่วยธาลัสซีเมีย (Thalassemia) จะมีภาวะเม็ดเลือดแดงแตกง่ายกว่าปกติ (hemolysis) ทำให้อายุขัยของเม็ดเลือดแดงสั้นลง ส่งผลให้ค่า HbA1c ที่วัดได้ต่ำกว่าความเป็นจริงเมื่อเทียบกับระดับน้ำตาลในเลือด (falsely low HbA1c) จากโจทย์ผู้ป่วยมีน้ำตาลเฉลี่ยสูง (240 mg/dL) ซึ่งควรจะมี HbA1c สูงกว่า 7.5% มาก การที่ค่า HbA1c ดูไม่สูงเท่าที่ควรจึงอาจมีภาวะธาลัสซีเมียร่วมด้วย",
            "state": false
        },
        {
            "problem": "20) Condition ไหนที่เพิ่ม reticulocyte count",
            "img": "",
            "choices": "A. Iron def anemia///B. Aplastic anemia///C. Primary myelofibrosis///D. B12 def anemia///E. B thalassemia",
            "answer": "E. B thalassemia",
            "select": "",
            "explain": "Reticulocyte count ที่สูงขึ้น (reticulocytosis) บ่งบอกว่าไขกระดูกมีการตอบสนองโดยการสร้างเม็ดเลือดแดงเพิ่มขึ้น มักพบในภาวะที่มีการสูญเสียหรือทำลายเม็ดเลือดแดงอย่างเฉียบพลันหรือเรื้อรัง เช่น ภาวะเม็ดเลือดแดงแตก (hemolytic anemia) ซึ่ง B thalassemia เป็นหนึ่งในนั้น ส่วนภาวะอื่นๆ ที่ให้มา เช่น Iron/B12 deficiency หรือ Aplastic anemia เป็นภาวะที่ไขกระดูกสร้างเม็ดเลือดแดงได้น้อยลง (ineffective or decreased erythropoiesis) จึงมี reticulocyte count ต่ำ",
            "state": false
        },
        {
            "problem": "21) Which of the following is the genetic abnormality that causes alpha thalassemia?",
            "img": "",
            "choices": "A. Missense Mutation///B. Nonsense Mutation///C. Frameshift Mutation///D. Gene Deletion///E. Unbalanced Translocation",
            "answer": "D. Gene Deletion",
            "select": "",
            "explain": "สาเหตุหลักทางพันธุกรรมของ Alpha-thalassemia คือการขาดหายไปของยีน alpha-globin (Gene Deletion) ซึ่งปกติคนเราจะมี alpha-globin gene 4 อัลลีล (alleles) อยู่บนโครโมโซมคู่ที่ 16 ความรุนแรงของโรคจะขึ้นอยู่กับจำนวนยีนที่ขาดหายไป ในขณะที่ Beta-thalassemia ส่วนใหญ่มักเกิดจาก point mutations (เช่น missense, nonsense) มากกว่า",
            "state": false
        },
        {
            "problem": "22) Which following is a description of “ineffective erythropoiesis”?",
            "img": "",
            "choices": "A. Expansion of bone marrow///B. Persist erythropoiesis in liver and spleen///C. Premature apoptosis of Red blood cell due to intrinsic defect///D. Asplenia of hematopoietic stem cell in bone marrow///E. Disruption of normal blood cell due to abnormal clones in bone marrow",
            "answer": "C. Premature apoptosis of Red blood cell due to intrinsic defect",
            "select": "",
            "explain": "Ineffective erythropoiesis คือภาวะที่ไขกระดูกมีการสร้างเซลล์ต้นกำเนิดเม็ดเลือดแดง (erythroid precursors) ในปริมาณที่ปกติหรือมากกว่าปกติ แต่เซลล์เหล่านี้กลับตายไปก่อนที่จะเจริญเป็นเม็ดเลือดแดงที่สมบูรณ์และออกมาสู่กระแสเลือดได้ (premature apoptosis) ซึ่งมักเกิดจากความผิดปกติภายในตัวเซลล์เอง (intrinsic defect) เช่น ในโรคธาลัสซีเมีย หรือ Megaloblastic anemia ทำให้ร่างกายมีภาวะโลหิตจางแม้ไขกระดูกจะทำงานหนัก",
            "state": false
        },
        {
            "problem": "24) What is the genotype of a patient with hemoglobin typing FA2 (F=90%)",
            "img": "",
            "choices": "A. β0/β0///B. β+/β+///C. β0/β///D. α-/α-///E. Hb Constant Spring",
            "answer": "A. β0/β0",
            "select": "",
            "explain": "ผล Hemoglobin typing ที่พบ Hb F ในระดับที่สูงมาก (90%) และมี Hb A น้อยมากหรือไม่มีเลย (เหลือแค่ Hb A2) บ่งชี้ว่าร่างกายไม่สามารถสร้างสาย beta-globin ได้เลยหรือได้น้อยมาก ซึ่งเป็นลักษณะของ Beta-thalassemia major จีโนไทป์ที่เป็นไปได้คือ β0/β0 (สร้าง beta-globin ไม่ได้เลย) หรือ β0/β+ (สร้างไม่ได้เลย 1 ข้าง และสร้างได้น้อยอีก 1 ข้าง) ทำให้ร่างกายต้องชดเชยโดยการสร้างสาย gamma-globin ต่อไปเรื่อยๆ เกิดเป็น Hb F (α2γ2) ในปริมาณสูง",
            "state": false
        },
        {
            "problem": "25) A 5-year-old boy with beta-thalassemia major came for follow up at an outpatient clinic. He has been receiving regular packed red cells since he was 11 months old. His pre-transfusion Hb 9.5 mg/dL and serum ferritin 2500 ng/mL. What is the most appropriate management?",
            "img": "",
            "choices": "A. Splenectomy///B. Bone marrow transplant///C. Increase red blood cell per transfusion///D. Examine for gallbladder stone///E. Start iron chelation therapy",
            "answer": "E. Start iron chelation therapy",
            "select": "",
            "explain": "ผู้ป่วย Beta-thalassemia major ที่ต้องได้รับเลือดเป็นประจำ (regular transfusion) จะมีความเสี่ยงสูงต่อการเกิดภาวะธาตุเหล็กเกิน (iron overload) เนื่องจากในเลือดที่ได้รับมามีธาตุเหล็กเป็นส่วนประกอบ และร่างกายไม่มีกลไกขับธาตุเหล็กส่วนเกินออกได้ ค่า serum ferritin ที่สูงถึง 2500 ng/mL (ปกติ < 300) เป็นตัวบ่งชี้ที่ชัดเจนของภาวะนี้ ดังนั้นการจัดการที่สำคัญและเร่งด่วนที่สุดคือการให้ยาขับธาตุเหล็ก (iron chelation therapy) เพื่อป้องกันการสะสมของเหล็กในอวัยวะต่างๆ ซึ่งจะทำให้เกิดความเสียหายรุนแรงได้",
            "state": false
        },
        {
            "problem": "28) ให้อาการมาๆ JAK2 mutation what is condition that related in these symptoms?",
            "img": "",
            "choices": "A. Aplastic anemia///B. Von Hippel-Lindau disease///C. Polycythemia vera///D. Hereditary Spherocytosis///E. Autoimmune hemolytic anemia",
            "answer": "C. Polycythemia vera",
            "select": "",
            "explain": "การกลายพันธุ์ของยีน JAK2 (Janus kinase 2) โดยเฉพาะ JAK2 V617F mutation เป็นลักษณะทางพยาธิวิทยาที่สำคัญและพบได้บ่อยที่สุด ( >95%) ในโรค Polycythemia vera (PV) ซึ่งเป็นโรคในกลุ่มมะเร็งเม็ดเลือดชนิดเรื้อรัง (myeloproliferative neoplasm) ที่มีการสร้างเม็ดเลือดแดงมากผิดปกติ ทำให้เลือดข้นหนืดและเสี่ยงต่อการเกิดลิ่มเลือดอุดตัน",
            "state": false
        },
        {
            "problem": "29) Girl comes with fatigue jaundice. Show blood agglutination, Hyperbilirubinemia. ถามtreatment",
            "img": "",
            "choices": "A. rbc transfusion///B. modification mutated gene///C. B cell suppression///D. Corticosteroids///E. Splenectomy",
            "answer": "D. Corticosteroids",
            "select": "",
            "explain": "อาการอ่อนเพลีย (fatigue), ตัวเหลืองตาเหลือง (jaundice), และการพบเม็ดเลือดแดงเกาะกลุ่มกัน (blood agglutination) บ่งชี้ถึงภาวะ Warm autoimmune hemolytic anemia (AIHA) ซึ่งเกิดจาก autoantibody (มักเป็น IgG) มาจับกับผิวเม็ดเลือดแดง ทำให้เม็ดเลือดแดงถูกทำลาย การรักษาอันดับแรก (first-line treatment) คือการให้ยากดภูมิคุ้มกัน ซึ่งยากลุ่ม Corticosteroids เป็นยาหลักที่ใช้เพื่อยับยั้งการสร้าง autoantibody และลดการทำลายเม็ดเลือดแดงโดย Macrophage",
            "state": false
        },
        {
            "problem": "31) ให้กลไกยา eculizumab มา (เกี่ยวกับยับยั้งระบบcomplement ที่ c5) แล้วถามว่าโรคใด ได้ประโยชน์จากยานี้ (ช้อยส์เป็นพวกRBC disorder)",
            "img": "",
            "choices": "A. Hereditary Spherocytosis///B. Hereditary Elliptocytosis///C. Paroxysmal Nocturnal Hemoglobinuria///D. Acute Intermittent Porphyria///E. Autoimmune hemolytic anemia",
            "answer": "C. Paroxysmal Nocturnal Hemoglobinuria",
            "select": "",
            "explain": "Eculizumab เป็น monoclonal antibody ที่ออกฤทธิ์โดยการจับกับโปรตีน C5 ของระบบคอมพลีเมนต์ (complement system) ทำให้ยับยั้งการแยกตัวของ C5 ไปเป็น C5a และ C5b ซึ่งจะไปยับยั้งการสร้าง Membrane Attack Complex (MAC) ต่อไป โรค Paroxysmal Nocturnal Hemoglobinuria (PNH) มีพยาธิกำเนิดหลักมาจากการที่เม็ดเลือดแดงขาดโปรตีนป้องกันตัวเองจากระบบคอมพลีเมนต์ ทำให้ถูกทำลายโดย MAC ได้ง่าย การให้ eculizumab จึงเป็นการรักษาที่ตรงจุดเพื่อยับยั้งการทำลายเม็ดเลือดแดงในผู้ป่วย PNH",
            "state": false
        },
        {
            "problem": "32) Rheumatoid arthritis patient presented with anemia (Hb = 9 g/dL) blood smear show normocytic normochromic red blood cells. What is the main cause of Anemia in this patient?",
            "img": "",
            "choices": "A. Decrease Hepcidin///B. Ferroprotein Degradation///C. Increase EPO///D. Increased hepcidin///E. Iron deficiency",
            "answer": "D. Increased hepcidin",
            "select": "",
            "explain": "ผู้ป่วย Rheumatoid arthritis เป็นโรคที่มีการอักเสบเรื้อรัง (chronic inflammation) ซึ่งจะกระตุ้นให้ตับสร้างโปรตีนที่ชื่อว่า Hepcidin เพิ่มขึ้น Hepcidin จะไปยับยั้งการทำงานของโปรตีน Ferroportin ที่ทำหน้าที่ขนส่งธาตุเหล็กออกจากเซลล์ ทำให้ธาตุเหล็กถูกกักเก็บไว้ใน Macrophage และเซลล์ลำไส้ ไม่สามารถนำออกมาใช้สร้างเม็ดเลือดแดงที่ไขกระดูกได้ เกิดเป็นภาวะโลหิตจางที่เรียกว่า Anemia of chronic disease ซึ่งมีลักษณะเป็น normocytic normochromic anemia ในระยะแรก",
            "state": false
        },
        {
            "problem": "34) What is the pathology in this blood picture?",
            "img": "https://drive.google.com/open?id=13aNJFG0Sk3GmdcN3mbEEoAWRT3YsE1Bb&usp=drive_copy",
            "choices": "A. CML///B. Infectious mononucleosis///C. Disseminated Tuberculosis///D. ALL///E. AML",
            "answer": "B. Infectious mononucleosis",
            "select": "",
            "explain": "ภาพ blood smear แสดงให้เห็นเซลล์เม็ดเลือดขาวชนิดลิมโฟไซต์ที่มีขนาดใหญ่ผิดปกติ นิวเคลียสมีรูปร่างได้หลากหลาย และไซโทพลาสซึมติดสีฟ้าเข้ม (basophilic cytoplasm) ซึ่งอาจมีลักษณะเป็นขอบคล้ายกระโปรงเมื่อสัมผัสกับเม็ดเลือดแดงรอบๆ เซลล์ลักษณะนี้เรียกว่า Atypical lymphocyte หรือ Downey cell ซึ่งเป็นลักษณะที่พบได้บ่อยในผู้ป่วยโรค Infectious mononucleosis ที่เกิดจากการติดเชื้อ Epstein-Barr virus (EBV)",
            "state": false
        },
        {
            "problem": "35) What is the pathophysiology of anemia in this blood picture?",
            "img": "https://drive.google.com/open?id=17oRGwbLP5TSg8yqZa35dDfiaI-rPPAse&usp=drive_copy",
            "choices": "A. Defect of RBC nucleosynthesis///B. Defect of Hb synthesis of globin chain///C. Defect of RBC membrane synthesis///D. Defect of Glutathione metabolism///E. Defect of complement inhibition system",
            "answer": "A. Defect of RBC nucleosynthesis",
            "select": "",
            "explain": "การพบ Macrocytic anemia ร่วมกับ Hypersegmented neutrophil เป็นลักษณะจำเพาะของ Megaloblastic anemia ซึ่งเกิดจากความบกพร่องในการสังเคราะห์ DNA (Defect of RBC nucleosynthesis) สาเหตุที่พบบ่อยที่สุดคือการขาดวิตามิน B12 หรือกรดโฟลิก (Folate)",
            "state": false
        },
        {
            "problem": "36) Which of the following conditions can be found in this blood smear?",
            "img": "https://drive.google.com/open?id=1zBB09250FRWAtE4FfAbeVpVXb47hk0jP&usp=drive_copy",
            "choices": "A. Polycythemia///B. Reticulocytosis///C. Thrombocytosis///D. Direct hyperbilirubinemia///E. Positive direct coombs test",
            "answer": "B. Reticulocytosis",
            "select": "",
            "explain": "ภาพฟิล์มเลือดนี้แสดงลักษณะของ Polychromasia ซึ่งคือการพบเซลล์เม็ดเลือดแดงตัวอ่อนที่ติดสีผสมระหว่างสีฟ้า (จาก RNA ที่เหลืออยู่) กับสีชมพู (จากฮีโมโกลบิน) ทำให้เห็นเป็นเซลล์สีอมม่วงหรือฟ้า ขนาดใหญ่กว่าเม็ดเลือดแดงปกติ และไม่มีรอยบุ๋มตรงกลาง (central pallor) เซลล์เหล่านี้ก็คือ Reticulocytes (เรติคูโลไซต์) นั่นเอง การพบ Reticulocytes จำนวนมากในเลือด(Reticulocytosis) บ่งชี้ว่าไขกระดูกกำลังตอบสนองต่อภาวะโลหิตจางโดยการเร่งสร้างเม็ดเลือดแดงออกมามากกว่าปกติ ซึ่งมักพบในภาวะเสียเลือด(blood loss) หรือภาวะเม็ดเลือดแดงแตก(hemolysis) ",
            "state": false
        },
        {
            "problem": "38) ให้ blood smear ของ thalassemia มา ถามว่าถ่ายทอดแบบใด?",
            "img": "",
            "choices": "A. X-linked dominant///B. X-link recessive///C. Autosomal dominant///D. Autosomal recessive///E. mitochondrial",
            "answer": "D. Autosomal recessive",
            "select": "",
            "explain": "โรคธาลัสซีเมีย (ทั้ง alpha และ beta thalassemia) เป็นโรคเลือดจางทางพันธุกรรมที่ถ่ายทอดทางพันธุกรรมแบบยีนด้อยบนโครโมโซมร่างกาย (Autosomal recessive) หมายความว่าผู้ที่จะแสดงอาการของโรคจะต้องได้รับยีนผิดปกติมาจากทั้งพ่อและแม่ หากได้รับยีนผิดปกติมาเพียงข้างเดียว จะเป็นพาหะ (trait หรือ carrier) ซึ่งอาจไม่มีอาการหรือมีอาการโลหิตจางเพียงเล็กน้อย",
            "state": false
        },
        {
            "problem": "39) ผล CBC ของผู้ป่วยรายหนึ่งพบ: WBC 54,000 /uL, PMN 55%, Lymphocyte 35%, Monocyte 6%, Eosinophil 4%. ตรวจสเมียร์เลือดพบ NRBC 170 / 100 WBC. กรุณาคำนวณค่า Absolute Neutrophil Count (ANC) ของผู้ป่วยรายนี้",
            "img": "",
            "choices": "11,000/mm^3///18,900/mm^3///20,000/mm^3///29,700/mm^3///32,400/mm^3",
            "answer": "11,000/mm^3",
            "select": "",
            "explain": "เนื่องจากพบ NRBC จำนวนมาก (170 NRBC per 100 WBC) ค่า WBC ที่ได้จากเครื่องจะสูงกว่าความเป็นจริง (falsely elevated) เพราะเครื่องนับ NRBC รวมเป็น WBC ด้วย จึงต้องคำนวณหา Corrected WBC ก่อน\n\n**Step 1: คำนวณ Corrected WBC**\nสูตร: Corrected WBC = Uncorrected WBC x [100 / (100 + จำนวน NRBC)]\nCorrected WBC = 54,000 x [100 / (100 + 170)]\nCorrected WBC = 54,000 x (100 / 270)\nCorrected WBC = 20,000 /uL\n\n**Step 2: คำนวณ ANC จาก Corrected WBC**\nสูตร: ANC = Corrected WBC x (% Neutrophils / 100)\nANC = 20,000 x (55 / 100)\nANC = 11,000 /uL (หรือ /mm^3)\n\nดังนั้นค่า ANC ที่แท้จริงของผู้ป่วยคือ 11,000 /mm^3",
            "state": false
        },
        {
            "problem": "40) male patient Hb 7.5 Hct 15% reticulocyte 10% .Which one is correct?",
            "img": "",
            "choices": "A. Corrected reticulocyte 6.5%///B. Reticulocyte Index = 2.5///C. Anemia in this patient caused by hemolysis///D. Bone marrow response is normal///E. Production more than normal 3 เท่า",
            "answer": "C. Anemia in this patient caused by hemolysis",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะโลหิตจางรุนแรง (Hb 7.5, Hct 15%) และมีค่า reticulocyte count สูงถึง 10% การมี reticulocyte count ที่สูงมาก (reticulocytosis) ในภาวะโลหิตจางเป็นสัญญาณบ่งบอกว่าไขกระดูกกำลังตอบสนองอย่างเต็มที่เพื่อชดเชยการสูญเสียเม็ดเลือดแดง ซึ่งสาเหตุหลักของการสูญเสียเม็ดเลือดแดงที่กระตุ้นการตอบสนองเช่นนี้คือภาวะเม็ดเลือดแดงแตก (hemolysis) หรือการเสียเลือดอย่างเฉียบพลัน (acute blood loss) ดังนั้นข้อสรุปที่เป็นไปได้มากที่สุดจากข้อมูลนี้คือผู้ป่วยมีภาวะโลหิตจางจาก hemolysis",
            "state": false
        },
        {
            "problem": "42) A 65-year-old woman with type 2 diabetes mellitus admitted at ICU with pneumonia. Sputum culture : Streptococcus pneumoniae CBC : Hb 9 g/dL, Hct 27%, WBC 24,300/dL, Platelet 85,000 dL Which of the following is the most likely finding of WBC in this patient?",
            "img": "",
            "choices": "A. Neutrophilia///B. Lymphocytosis///C. Atypical lymphocyte///D. Hypersegmented neutrophils///E. Pseudo-Pelger-Huet anomaly",
            "answer": "A. Neutrophilia",
            "select": "",
            "explain": "ผู้ป่วยมีการติดเชื้อแบคทีเรียที่ปอด (pneumonia) ซึ่งเกิดจากเชื้อ Streptococcus pneumoniae การติดเชื้อแบคทีเรียเฉียบพลันจะกระตุ้นให้ไขกระดูกปล่อยเม็ดเลือดขาวชนิด Neutrophil ออกมาในกระแสเลือดจำนวนมากเพื่อต่อสู้กับเชื้อโรค ทำให้ค่าเม็ดเลือดขาวรวม (WBC) สูงขึ้น โดยมีสัดส่วนของ Neutrophil เพิ่มขึ้นเป็นหลัก ภาวะนี้เรียกว่า Neutrophilia หรือ neutrophilic leukocytosis ซึ่งตรงกับผล CBC ที่ WBC สูงถึง 24,300/dL",
            "state": false
        },
        {
            "problem": "43) 49 year old came with fever, no hepatosplenomegaly, no lymphadenopathy, เป็น Large B-cell lymphoma stage II, history of chemotherapy 12 days CBC : Hb 7g/dL WBC : 1900 cell/uL Platelet : 69000 cell/uL",
            "img": "",
            "choices": "A. Eosinophilia///B. Basophilia///C. Neutropenia///D. Lymphocytosis///E. Atypical lymphocyte",
            "answer": "C. Neutropenia",
            "select": "",
            "explain": "ผู้ป่วยได้รับเคมีบำบัด (chemotherapy) ซึ่งยาเคมีบำบัดมีผลข้างเคียงที่สำคัญคือการกดไขกระดูก (myelosuppression) ทำให้การสร้างเซลล์เม็ดเลือดทุกชนิดลดลง โดยเฉพาะ Neutrophil ซึ่งมีอายุขัยสั้นจะได้รับผลกระทบเร็วที่สุด ภาวะที่จำนวน Neutrophil ในเลือดต่ำกว่าปกติเรียกว่า Neutropenia ซึ่งจะทำให้ค่าเม็ดเลือดขาวรวม (WBC) ต่ำลงไปด้วย (leukopenia) ดังที่พบในผล CBC ของผู้ป่วย (WBC 1,900) ภาวะนี้ทำให้ผู้ป่วยมีความเสี่ยงสูงต่อการติดเชื้อและอาจเป็นสาเหตุของไข้ได้",
            "state": false
        },
        {
            "problem": "44) Which of the following is defined as relative lymphocytosis?",
            "img": "",
            "choices": "A. wbc > 4,000; lymphocytes predominate///B. wbc > 4,000; neutrophils predominate///C. wbc < 4,000; lymphocytes predominate///D. wbc < 4,000; neutrophils predominate///E. wbc is normal, lymphocyte count > 4,000",
            "answer": "C. wbc < 4,000; lymphocytes predominate",
            "select": "",
            "explain": "Relative lymphocytosis คือภาวะที่สัดส่วน (percentage) ของ lymphocyte สูงกว่าปกติ แต่จำนวน lymphocyte ทั้งหมด (absolute lymphocyte count) อาจจะปกติหรือต่ำกว่าปกติก็ได้ ภาวะนี้มักเกิดขึ้นเมื่อจำนวนเม็ดเลือดขาวชนิดอื่น โดยเฉพาะ Neutrophil ลดลง (neutropenia) ทำให้เปอร์เซ็นต์ของ lymphocyte ดูสูงขึ้นเมื่อเทียบกับเม็ดเลือดขาวทั้งหมด ซึ่งมักจะพบในภาวะที่เม็ดเลือดขาวรวมต่ำ (WBC < 4,000) จากภาวะ neutropenia",
            "state": false
        },
        {
            "problem": "46) What is the mechanism of endothelin-1 in hemostasis?",
            "img": "",
            "choices": "A. Vasoconstriction///B. Platelet adhesion///C. Platelet aggregation///D. Fibrinolysis///E. Anticoagulation",
            "answer": "A. Vasoconstriction",
            "select": "",
            "explain": "Endothelin-1 เป็นสารที่หลั่งออกมาจากเซลล์เยื่อบุหลอดเลือด (endothelial cells) เมื่อเกิดการบาดเจ็บ มันเป็นสารที่ทำให้หลอดเลือดหดตัว (vasoconstrictor) ที่รุนแรงที่สุดตัวหนึ่งในร่างกาย การหดตัวของหลอดเลือดเป็นกลไกแรกสุดในกระบวนการห้ามเลือด (hemostasis) เพื่อลดปริมาณเลือดที่ไหลออกจากบาดแผล",
            "state": false
        },
        {
            "problem": "47) Mechanism of platelet adhesion?",
            "img": "",
            "choices": "A. vWF binds to subendothelial layer///B. Gp2b/3a binds to fibrinogen///C. Change to be pseudopods///D. Gp1b binds to Ca2+///E. Thromboxane A2 release",
            "answer": "A. vWF binds to subendothelial layer",
            "select": "",
            "explain": "Platelet adhesion เป็นขั้นตอนแรกของการสร้าง platelet plug เมื่อหลอดเลือดบาดเจ็บ เนื้อเยื่อใต้ endothelium ที่มีคอลลาเจนจะถูกเปิดออก von Willebrand factor (vWF) ซึ่งเป็นโปรตีนในพลาสมาจะเข้ามาจับกับคอลลาเจนนี้ จากนั้น vWF จะทำหน้าที่เป็นสะพานเชื่อมให้เกล็ดเลือด (platelet) ผ่านทางตัวรับ Glycoprotein Ib (GpIb) บนผิวของมัน เข้ามาเกาะติดกับผนังหลอดเลือดบริเวณที่บาดเจ็บ",
            "state": false
        },
        {
            "problem": "49) Which factor initiates extrinsic pathway cascade?",
            "img": "",
            "choices": "A. Factor III///B. Factor V and Ca2+///C. Factor Xa///D. Contact of Factor XII///E. HMWK",
            "answer": "A. Factor III",
            "select": "",
            "explain": "Extrinsic pathway ของกระบวนการแข็งตัวของเลือดเริ่มต้นเมื่อเกิดการบาดเจ็บของหลอดเลือด ทำให้เนื้อเยื่อที่อยู่ภายนอกหลอดเลือดปล่อยสารที่เรียกว่า Tissue Factor (TF) หรือ Factor III ออกมา Tissue Factor นี้จะเข้าไปจับกับ Factor VIIa ที่มีอยู่ในเลือด กลายเป็น complex (TF-VIIa) ที่สามารถกระตุ้น Factor X ให้เป็น Factor Xa ได้โดยตรง ซึ่งเป็นจุดเริ่มต้นของ common pathway ต่อไป",
            "state": false
        },
        {
            "problem": "51) Anticoagulant ใดที่ส่งผลต่อ extrinsic pathway?",
            "img": "",
            "choices": "A. TFPI///B. AT III///C. Heparin///D. Thrombin///E. Thrombomodulin",
            "answer": "A. TFPI",
            "select": "",
            "explain": "Tissue Factor Pathway Inhibitor (TFPI) เป็นสารยับยั้งการแข็งตัวของเลือดตามธรรมชาติ (natural anticoagulant) ที่ออกฤทธิ์โดยตรงต่อ extrinsic pathway โดย TFPI จะเข้าไปจับและยับยั้งการทำงานของ complex ระหว่าง Tissue Factor (Factor III) กับ Factor VIIa (TF-VIIa complex) ทำให้ไม่สามารถไปกระตุ้น Factor X ได้ เป็นการยับยั้งขั้นตอนเริ่มต้นของ extrinsic pathway",
            "state": false
        },
        {
            "problem": "52) ชายอายุ 60 ปี มาด้วยอาการเจ็บแน่นหน้าอก ได้รับการวินิจฉัยว่ามีภาวะหลอดเลือดหัวใจอุดตัน (coronary obstruction) สารในข้อใดต่อไปนี้มีบทบาทสำคัญในการกระตุ้นกระบวนการสลายลิ่มเลือด (Fibrinolysis)?",
            "img": "",
            "choices": "Alpha-2 antiplasmin///Thrombomodulin-thrombin complex///Factor Xa///Tissue plasminogen activator (tPA)///Fibrin",
            "answer": "Tissue plasminogen activator (tPA)",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะหลอดเลือดหัวใจอุดตัน ซึ่งมักเกิดจากลิ่มเลือด (thrombus) ที่มี Fibrin เป็นองค์ประกอบหลัก การสลายลิ่มเลือด (Fibrinolysis) เป็นกระบวนการสำคัญที่เกิดขึ้นในร่างกายเพื่อสลายลิ่มเลือดนี้ สารที่ทำหน้าที่เป็น 'ตัวกระตุ้นหลัก' (key activator) ของกระบวนการนี้คือ **Tissue plasminogen activator (tPA)** โดย tPA จะเปลี่ยน Plasminogen ที่อยู่ในกระแสเลือดให้กลายเป็น **Plasmin** ซึ่งเป็นเอนไซม์ที่แอคทีฟและมีฤทธิ์ย่อยสลาย Fibrin โดยตรง ทำให้ลิ่มเลือดสลายไปและเปิดหลอดเลือดอีกครั้ง ยาละลายลิ่มเลือดกลุ่ม Fibrinolytic drug (เช่น Alteplase, Tenecteplase) ก็เป็นการสังเคราะห์ tPA ขึ้นมาเพื่อใช้ในการรักษาภาวะนี้",
            "state": false
        },
        {
            "problem": "54) Which of the following anticoagulants accelerate antithrombin III?",
            "img": "",
            "choices": "A. Heparin///B. Oxalate///C. Ethylenediaminetetraacetic acid///D. Warfarin///E. Citrate",
            "answer": "A. Heparin",
            "select": "",
            "explain": "Heparin เป็นยาป้องกันการแข็งตัวของเลือดที่ออกฤทธิ์โดยการไปจับกับ Antithrombin III (AT III) ซึ่งเป็น natural anticoagulant การจับกันนี้จะไปเร่งประสิทธิภาพของ AT III ให้ทำงานได้ดีขึ้นหลายพันเท่า ทำให้สามารถยับยั้งการทำงานของ coagulation factors หลายตัวได้อย่างรวดเร็ว โดยเฉพาะ Thrombin (Factor IIa) และ Factor Xa",
            "state": false
        },
        {
            "problem": "55) ผู้ป่วยนอนติดเตียง1เดือน จะเกิด condition อะไร?",
            "img": "",
            "choices": "A. Pulmonary embolism///B. coronary occlusion///C. Deep vein thrombosis///D. Cerebral infarction///E. Atrial fibrillation",
            "answer": "C. Deep vein thrombosis",
            "select": "",
            "explain": "การนอนติดเตียงเป็นเวลานาน (prolonged immobility) เป็นปัจจัยเสี่ยงที่สำคัญของการเกิดภาวะลิ่มเลือดอุดตันในหลอดเลือดดำส่วนลึก (Deep Vein Thrombosis - DVT) โดยเฉพาะที่ขา เนื่องจากเลือดมีการไหลเวียนช้าลง (stasis) ทำให้เกิดลิ่มเลือดได้ง่าย DVT เป็นภาวะเบื้องต้นที่หากลิ่มเลือดหลุดลอยไปตามกระแสเลือด อาจไปอุดตันที่ปอดและกลายเป็น Pulmonary embolism (PE) ซึ่งเป็นภาวะแทรกซ้อนที่อันตรายได้",
            "state": false
        },
        {
            "problem": "57) เด็กมีประวัติทำฟันเลือดออก PTปกติ aPTT prolonged อยากรู้ว่าเกิดจากอะไร?",
            "img": "",
            "choices": "A.Vit K deficiency///B. DIC///C. Hemophilia A///D. Factor VII deficiency///E. Von Willebrand disease",
            "answer": "C. Hemophilia A",
            "select": "",
            "explain": "ผลการตรวจการแข็งตัวของเลือดพบว่า Prothrombin Time (PT) ปกติ แต่ Activated Partial Thromboplastin Time (aPTT) ยาวนานผิดปกติ (prolonged) แสดงว่ามีความผิดปกติในระบบ intrinsic pathway (Factors VIII, IX, XI, XII) แต่ extrinsic pathway (Factor VII) ยังทำงานปกติ ภาวะที่พบบ่อยในเด็กผู้ชายและมีลักษณะผลเลือดเช่นนี้คือโรคฮีโมฟีเลีย (Hemophilia) เช่น Hemophilia A (ขาด Factor VIII) หรือ Hemophilia B (ขาด Factor IX)",
            "state": false
        },
        {
            "problem": "59) What are the following investigations that should be given in thrombophilia?",
            "img": "",
            "choices": "A. Varicose vein///B. Recurrent abortion///C. Catheters related thrombosis///D. Deep vein thrombosis due to bone fractures///E. Acute myocardial infarction",
            "answer": "B. Recurrent abortion",
            "select": "",
            "explain": "Thrombophilia คือภาวะที่ร่างกายมีแนวโน้มที่จะเกิดลิ่มเลือดได้ง่ายกว่าปกติ การตรวจหาสาเหตุของ Thrombophilia มักจะทำในผู้ป่วยที่มีภาวะลิ่มเลือดอุดตันโดยไม่มีปัจจัยเสี่ยงที่ชัดเจน, เกิดในอายุน้อย, หรือเกิดในตำแหน่งที่ผิดปกติ รวมถึงในกรณีที่มีประวัติการแท้งบุตรซ้ำๆ (Recurrent abortion) โดยไม่ทราบสาเหตุ เนื่องจากภาวะ Thrombophilia บางชนิด เช่น Antiphospholipid syndrome (APS) มีความสัมพันธ์กับการเกิดลิ่มเลือดที่รกและทำให้เกิดการแท้งได้",
            "state": false
        },
        {
            "problem": "60) Which of the following is the main pathology of immune thrombocytopenia?",
            "img": "",
            "choices": "A. Myelophthisis///B. Increased platelet apoptosis///C. Increased platelet consumption///D. Increased platelet sequestration///E. Increased platelet destruction",
            "answer": "E. Increased platelet destruction",
            "select": "",
            "explain": "Immune Thrombocytopenia (ITP) หรือชื่อเดิมคือ Idiopathic Thrombocytopenic Purpura เป็นโรคที่เกิดจากระบบภูมิคุ้มกันของร่างกายสร้างภูมิต้านทาน (autoantibodies) ต่อเกล็ดเลือดของตัวเอง แอนติบอดีเหล่านี้จะไปเคลือบบนผิวของเกล็ดเลือด ทำให้เกล็ดเลือดที่ถูกเคลือบนี้ถูกจับกินและทำลายโดย Macrophage ในม้ามและตับอย่างรวดเร็ว (Increased platelet destruction) ส่งผลให้จำนวนเกล็ดเลือดในกระแสเลือดลดต่ำลง",
            "state": false
        },
        {
            "problem": "62) 65 yo female 2 months back pain, anemia, rouleaux formation, monoclonal gammopathy. Dx?",
            "img": "",
            "choices": "A. MM///B. NHL///C. SLE///D. Waldenström's macroglobulinemia///E. MGUS",
            "answer": "A. MM",
            "select": "",
            "explain": "อาการและอาการแสดงของผู้ป่วยนี้เป็นลักษณะคลาสสิกของโรค Multiple Myeloma (MM) ซึ่งเป็นมะเร็งของเซลล์พลาสมา (plasma cells) ในไขกระดูก ได้แก่: อาการปวดหลัง (เกิดจากรอยโรคในกระดูก), ภาวะโลหิตจาง (anemia), การพบ Rouleaux formation ใน blood smear (เม็ดเลือดแดงเรียงซ้อนกันเป็นตั้งๆ เหมือนเหรียญ) และการตรวจพบ Monoclonal gammopathy (การมีโปรตีนที่ผิดปกติชนิดเดียวกันในปริมาณสูง) ซึ่งสร้างมาจากเซลล์มะเร็ง",
            "state": false
        },
        {
            "problem": "63) 25 years old woman : Ataxia, pallor. PE : anemia, premature graying hair, sensation loss, LDH:1400",
            "img": "",
            "choices": "A. Hypersegmented neutrophil///B. Polychromasia///C. Atypical lymphocyte///D. Spherocyte///E. Target cell",
            "answer": "A. Hypersegmented neutrophil",
            "select": "",
            "explain": "กลุ่มอาการของผู้ป่วยนี้ได้แก่ อาการทางระบบประสาท (Ataxia, sensation loss), ภาวะซีด (pallor, anemia), ผมหงอกก่อนวัย (premature graying hair) และค่า LDH สูง เป็นลักษณะที่บ่งชี้ถึงภาวะขาดวิตามิน B12 (Vitamin B12 deficiency) การขาดวิตามิน B12 จะส่งผลต่อการสังเคราะห์ DNA ทำให้เซลล์ที่มีการแบ่งตัวเร็วผิดปกติ เกิดเป็นภาวะ Megaloblastic anemia ซึ่งลักษณะที่พบได้จำเพาะใน blood smear คือเม็ดเลือดแดงตัวโต (macrocytic anemia) และการพบ Hypersegmented neutrophil (นิวโทรฟิลที่มีนิวเคลียสมากกว่า 5 พู)",
            "state": false
        },
        {
            "problem": "64) A 22-year woman presented with fatigue and dizziness for 4 months. She has had hypermenorrhea since her first menses. ...Anemia without jaundice. Which following is the most informative for the diagnosis cause of anemia in this patient?",
            "img": "",
            "choices": "A. Glossitis///B. Koilonychia///C. Thrombocytosis///D. Angular stomatitis///E. Petechiae",
            "answer": "B. Koilonychia",
            "select": "",
            "explain": "ผู้ป่วยมีประวัติเสียเลือดเรื้อรังจากการมีประจำเดือนมามาก (hypermenorrhea) ตั้งแต่เริ่มมีประจำเดือนครั้งแรก ซึ่งเป็นสาเหตุที่พบบ่อยที่สุดของภาวะโลหิตจางจากการขาดธาตุเหล็ก (Iron deficiency anemia - IDA) ในหญิงวัยเจริญพันธุ์ อาการแสดงทางกายที่จำเพาะเจาะจง (specific sign) สำหรับภาวะขาดธาตุเหล็กเรื้อรังและรุนแรงคือ Koilonychia หรือเล็บรูปช้อน (spoon nails) ซึ่งเป็นลักษณะที่เล็บแบนหรือเว้าลงไปตรงกลาง",
            "state": false
        },
        {
            "problem": "65) What feature is found commonly in secondary hemostatic defects?",
            "img": "",
            "choices": "A. Delayed bleeding///B. Massive bleeding///C. Prolonged bleeding///D. Multiple site bleeding///E. Spontaneous bleeding",
            "answer": "A. Delayed bleeding",
            "select": "",
            "explain": "Secondary hemostasis คือกระบวนการแข็งตัวของเลือดที่เกี่ยวข้องกับ coagulation factors เพื่อสร้างลิ่มเลือด Fibrin ที่แข็งแรง ความผิดปกติในขั้นตอนนี้ (เช่น โรคฮีโมฟีเลีย) จะมีลักษณะเด่นคือ primary hemostasis (การสร้าง platelet plug) ยังสามารถหยุดเลือดในตอนแรกได้ แต่เนื่องจากไม่สามารถสร้างลิ่มเลือดที่มั่นคงได้ ทำให้เลือดมักจะไหลออกมาอีกครั้งในภายหลัง (Delayed bleeding) และมักมีเลือดออกในบริเวณลึกๆ เช่น ข้อ หรือกล้ามเนื้อ",
            "state": false
        },
        {
            "problem": "67) Which one induces thrombocytosis?",
            "img": "",
            "choices": "A. severe burn///B. crush injury///C. bacterial infection///D. massive blood loss///E. iron deficiency",
            "answer": "D. massive blood loss",
            "select": "",
            "explain": "Thrombocytosis คือภาวะที่มีเกล็ดเลือดสูงกว่าปกติ ซึ่งอาจเป็นแบบ primary (ความผิดปกติของไขกระดูก) หรือ secondary/reactive ก็ได้ หนึ่งในสาเหตุสำคัญที่กระตุ้นให้เกิด reactive thrombocytosis คือการเสียเลือดในปริมาณมาก (massive blood loss) หรือภาวะเม็ดเลือดแดงแตก (hemolysis) ร่างกายจะตอบสนองโดยการกระตุ้นไขกระดูกให้สร้างเซลล์เม็ดเลือดทุกชนิดเพิ่มขึ้น รวมถึงเกล็ดเลือดด้วย เพื่อชดเชยส่วนที่เสียไปและเตรียมพร้อมสำหรับการห้ามเลือด",
            "state": false
        },
        {
            "problem": "68) Which of the following is commonly found in secondary erythrocytosis?",
            "img": "",
            "choices": "A. Thrombosis///B. Bleeding///C. Splenomegaly///D. High erythropoietin level///E. JAK2 V617F mutation",
            "answer": "D. High erythropoietin level",
            "select": "",
            "explain": "Secondary erythrocytosis (หรือ secondary polycythemia) คือภาวะที่มีการสร้างเม็ดเลือดแดงมากผิดปกติ โดยมีสาเหตุมาจากภาวะอื่นนอกไขกระดูก ซึ่งส่วนใหญ่มักเกิดจากภาวะที่ร่างกายขาดออกซิเจนเรื้อรัง (chronic hypoxia) เช่น การอยู่บนที่สูง หรือโรคปอดเรื้อรัง ภาวะขาดออกซิเจนนี้จะไปกระตุ้นให้ไตสร้างฮอร์โมน Erythropoietin (EPO) เพิ่มขึ้น เพื่อไปสั่งให้ไขกระดูกสร้างเม็ดเลือดแดงมากขึ้น ดังนั้นการตรวจพบระดับ EPO ที่สูงจึงเป็นลักษณะสำคัญของภาวะนี้",
            "state": false
        },
        {
            "problem": "69) Which condition causes left shift?",
            "img": "",
            "choices": "A. pregnant///B. liver cirrhosis///C. hyperthyroidism///D. severe bacteria infect///E. viral infection",
            "answer": "D. severe bacteria infect",
            "select": "",
            "explain": "คำว่า \"Left shift\" ในทางโลหิตวิทยา หมายถึงการพบเซลล์เม็ดเลือดขาวชนิดนิวโทรฟิลตัวอ่อน (immature neutrophils) เช่น band forms, metamyelocytes ในกระแสเลือด ซึ่งปกติจะไม่พบหรือพบน้อยมาก ภาวะนี้เป็นสัญญาณบ่งบอกว่าไขกระดูกกำลังตอบสนองต่อความต้องการนิวโทรฟิลอย่างรุนแรง โดยการปล่อยเซลล์ตัวอ่อนออกมาเร็วกว่าปกติ ซึ่งมักเกิดในภาวะติดเชื้อแบคทีเรียที่รุนแรง (severe bacterial infection)",
            "state": false
        },
        {
            "problem": "70) Which of the following conditions is associated with venous thrombo-embolism?",
            "img": "",
            "choices": "A. Hypothyroidism///B. Chronic Renal Failure///C. Megaloblastic anemia///D. Essential Thrombocythemia///E. Vitamin K deficiency",
            "answer": "D. Essential Thrombocythemia",
            "select": "",
            "explain": "Essential Thrombocythemia (ET) เป็นโรคในกลุ่มมะเร็งเม็ดเลือดชนิดเรื้อรัง (Myeloproliferative Neoplasm) ที่มีความผิดปกติที่ไขกระดูกทำให้มีการสร้างเกล็ดเลือดออกมามากเกินไป (thrombocytosis) เกล็ดเลือดที่มากผิดปกติและอาจทำงานผิดปกตินี้จะเพิ่มความเสี่ยงอย่างมากต่อการเกิดลิ่มเลือดอุดตันทั้งในหลอดเลือดแดงและหลอดเลือดดำ (Venous Thromboembolism - VTE)",
            "state": false
        }
    ],
    "HL47MCQ2": [
        {
            "problem": "1) A patient presents with fever, pharyngeal injection, exudate on enlarged tonsils, and increased lymphocytes. Which of the following findings would confirm the diagnosis of Infectious Mononucleosis?",
            "img": "",
            "choices": "A. Atypical lymph - 15%///B. Anti IgA capsid - positive///C. Heterophile Ab - positive///D. Anti CMV IgM - positive///E. Anti EBV IgG- positive",
            "answer": "C. Heterophile Ab - positive",
            "select": "",
            "explain": "ผู้ป่วยมีอาการไข้ เจ็บคอ ทอนซิลโตมีหนอง และมี lymphocyte เพิ่มขึ้น เป็นอาการคลาสสิกของโรค Infectious Mononucleosis (IM) ที่เกิดจากเชื้อ Epstein-Barr virus (EBV) การตรวจที่จำเพาะและใช้ยืนยันการวินิจฉัยในกรณีนี้คือ Heterophile antibody test (หรือ Monospot test) ซึ่งจะให้ผลบวก Atypical lymphocyte เป็นลักษณะที่พบได้บ่อยใน IM แต่ไม่จำเพาะ ส่วน Anti-EBV IgG บอกถึงการติดเชื้อในอดีต และ Anti-CMV IgM ใช้ตรวจการติดเชื้อ Cytomegalovirus ซึ่งเป็นคนละโรคกัน",
            "state": false
        },
        {
            "problem": "2) A 70-year-old woman presents with fever, myalgia, hepatosplenomegaly, and lymphadenopathy. If Epstein-Barr Virus (EBV) is the causative agent, what is the primary target cell for this virus?",
            "img": "",
            "choices": "A. B lymphocytes///B. T lymphocytes///C. Neutrophils///D. Macrophages///E. Natural killer cells",
            "answer": "A. B lymphocytes",
            "select": "",
            "explain": "อาการไข้ ปวดเมื่อย ตับม้ามโต ต่อมน้ำเหลืองโต อาจเกิดได้จากหลายสาเหตุ แต่หนึ่งในนั้นคือการติดเชื้อ EBV (Epstein-Barr virus) ซึ่งไวรัสชนิดนี้มีเป้าหมายหลักในการเข้าจับและติดเชื้อที่ B lymphocytes โดยจับกับ CD21 receptor บนผิวเซลล์",
            "state": false
        },
        {
            "problem": "3) A patient shows symptoms of an EBV infection and has a positive Heterophile antibody test. What is the primary target cell of this virus?",
            "img": "",
            "choices": "A. B lymphocytes///B. T lymphocytes///C. Erythrocytes///D. Monocytes///E. Basophils",
            "answer": "A. B lymphocytes",
            "select": "",
            "explain": "เชื้อ Epstein-Barr virus (EBV) เข้าสู่ร่างกายและจับกับเซลล์เป้าหมายหลักคือ B lymphocytes ผ่านทาง CD21 receptor ที่อยู่บนผิวของ B cell ทำให้ B cell เกิดการเพิ่มจำนวน (proliferation) และสร้าง heterophile antibodies ซึ่งเป็นที่มาของการตรวจ Monospot test ได้ผลบวก",
            "state": false
        },
        {
            "problem": "4) A newborn presented with intrauterine growth retardation, microcephaly, hepatosplenomegaly and jaundice. A urine sample shows giant cells with 'owl's eye' appearance. What is the key characteristic of this virus?",
            "img": "",
            "choices": "A. It is an Arbovirus///B. It is an Oncogenic virus///C. It can cause latent infection///D. It replicates in mosquitoes///E. It has a very long incubation period",
            "answer": "C. It can cause latent infection",
            "select": "",
            "explain": "ทารกแรกเกิดมีอาการ IUGR, microcephaly, hepatosplenomegaly และ jaundice ร่วมกับตรวจพบ giant cell with owl's eye appearance ในปัสสาวะ เป็นลักษณะจำเพาะของการติดเชื้อ Cytomegalovirus (CMV) แต่กำเนิด CMV เป็นไวรัสในกลุ่ม Herpesviridae ซึ่งมีคุณสมบัติเด่นคือสามารถก่อให้เกิดการติดเชื้อแบบแฝง (Latent infection) ในร่างกายได้ โดยจะซ่อนตัวอยู่ในเซลล์ต่างๆ และสามารถกลับมา active ได้อีกเมื่อภูมิคุ้มกันของร่างกายอ่อนแอลง",
            "state": false
        },
        {
            "problem": "5) Which of the following viruses is strongly associated with the development of nasopharyngeal carcinoma?",
            "img": "",
            "choices": "A. CMV///B. EBV///C. HIV///D. HTLV-1///E. HPV",
            "answer": "B. EBV",
            "select": "",
            "explain": "เชื้อ Epstein-Barr virus (EBV) มีความสัมพันธ์อย่างยิ่งกับการเกิดมะเร็งหลังโพรงจมูก (nasopharyngeal carcinoma) โดยเฉพาะในประชากรแถบเอเชียตะวันออกเฉียงใต้และจีนตอนใต้ นอกจากนี้ EBV ยังเกี่ยวข้องกับมะเร็งต่อมน้ำเหลืองชนิด Burkitt's lymphoma และ Hodgkin lymphoma ด้วย",
            "state": false
        },
        {
            "problem": "6) A woman presents with fatigue and fever for 3 days. A tourniquet test is positive. Lab results are Hct 38%, WBC 5,100/mm3, and platelet 160,000/mm3. Which is the most appropriate diagnostic test at this stage?",
            "img": "",
            "choices": "A. Convalescent serum for viral antigen detection///B. Convalescent serum for viral IgG detection///C. Acute serum for viral RNA detection///D. Acute serum for viral IgG detection///E. Blood culture for bacteria",
            "answer": "C. Acute serum for viral RNA detection",
            "select": "",
            "explain": "ผู้ป่วยมีไข้มา 3 วัน และ Tourniquet test positive ซึ่งบ่งชี้ถึงภาวะไข้เลือดออกเดงกี (Dengue fever) ในระยะแรกของการติดเชื้อ (acute phase) การวินิจฉัยที่ดีที่สุดคือการตรวจหาส่วนประกอบของไวรัสโดยตรง เช่น การตรวจหา Dengue NS1 antigen หรือการตรวจหาสารพันธุกรรมของไวรัส (viral RNA) ด้วยวิธี RT-PCR จากเลือดในระยะเฉียบพลัน (Acute serum)",
            "state": false
        },
        {
            "problem": "7) A 12-year-old boy presents with epistaxis and high-grade fever for 7 days. Labs show Hct 45%, WBC 3,200, Platelet 80,000, Anti-dengue IgM positive, Anti-dengue IgG positive, and NS1 negative. Which of the following is associated with the pathogenesis of his disease?",
            "img": "",
            "choices": "A. Primary infection///B. Homotypic Ab///C. Enhancing Ab///D. Decrease in C3a and C5a///E. Multiple infections at the same time",
            "answer": "C. Enhancing Ab",
            "select": "",
            "explain": "ผู้ป่วยมีอาการเข้าได้กับ Dengue hemorrhagic fever (DHF) ผลเลือด Anti dengue IgM positive และ IgG positive บ่งชี้ว่าเป็นการติดเชื้อเดงกีครั้งที่สอง (secondary infection) ในการติดเชื้อครั้งที่สอง แอนติบอดี IgG ที่มีอยู่เดิมจากการติดเชื้อครั้งแรกจะจับกับเชื้อไวรัสเดงกีตัวใหม่แต่ไม่สามารถทำลายเชื้อได้ กลับจะไปช่วยให้ไวรัสเข้าสู่เซลล์ได้ง่ายขึ้น ปรากฏการณ์นี้เรียกว่า Antibody-Dependent Enhancement (ADE) ซึ่งแอนติบอดีที่ทำหน้าที่นี้เรียกว่า Enhancing antibody และเป็นกลไกสำคัญที่ทำให้โรคมีความรุนแรงมากขึ้น",
            "state": false
        },
        {
            "problem": "8) A 9-year-old girl presents with epistaxis and abdominal pain. Her vital signs are stable. Lab results show Dengue IgM negative, Dengue IgG positive, and NS1 positive. What is the most likely diagnosis?",
            "img": "",
            "choices": "A. Dengue fever///B. Dengue hemorrhagic fever///C. Dengue shock syndrome///D. Dengue fever without warning signs///E. Undifferentiated febrile illness",
            "answer": "B. Dengue hemorrhagic fever",
            "select": "",
            "explain": "เด็กมีอาการเลือดออก (epistaxis) ซึ่งเป็นหนึ่งในเกณฑ์การวินิจฉัย Dengue hemorrhagic fever (DHF) ตามเกณฑ์ของ WHO ร่วมกับมีอาการปวดท้องซึ่งเป็น warning sign ผลเลือด NS1 positive ยืนยันว่ามีการติดเชื้อเดงกีในระยะแรก และ IgG positive แต่ IgM negative บ่งชี้ว่าเป็นการติดเชื้อครั้งที่สองในระยะแรกๆ (early secondary infection) ความดันโลหิตยังอยู่ในเกณฑ์ปกติ จึงยังไม่ถึงขั้น Dengue shock syndrome",
            "state": false
        },
        {
            "problem": "10) A pregnant woman who recently returned from a vacation in Brazil presented with fever, headache, and myalgia. Which arbovirus is most known for causing neurological disease in her fetus?",
            "img": "",
            "choices": "A. EBV///B. CMV///C. Dengue virus///D. Chikungunya virus///E. Zika virus",
            "answer": "E. Zika virus",
            "select": "",
            "explain": "หญิงตั้งครรภ์กลับจากประเทศบราซิลซึ่งเป็นพื้นที่ระบาดของเชื้อไวรัสซิกา (Zika virus) การติดเชื้อ Zika ในระหว่างตั้งครรภ์มีความสัมพันธ์อย่างชัดเจนกับการเกิดความผิดปกติทางระบบประสาทของทารกในครรภ์ โดยเฉพาะภาวะศีรษะเล็กแต่กำเนิด (microcephaly) และความผิดปกติอื่นๆ ที่เรียกรวมกันว่า Congenital Zika Syndrome",
            "state": false
        },
        {
            "problem": "11) A patient had a fever and fatigue for 12 days, then developed abdominal pain and peritonitis. During surgery, enlargement of Peyer's Patches at the terminal ileum was found. What is the most likely diagnosis?",
            "img": "",
            "choices": "A. EBV colitis///B. Scrub typhus///C. Leptospirosis///D. HTLV-1 infection///E. Enteric fever",
            "answer": "E. Enteric fever",
            "select": "",
            "explain": "อาการไข้สูงลอยติดต่อกันนาน (prolonged fever) ร่วมกับอาการปวดท้อง และเมื่อผ่าตัดพบการบวมโตของ Peyer's patches บริเวณลำไส้เล็กส่วนปลาย (terminal ileum) เป็นลักษณะพยาธิสภาพที่จำเพาะอย่างยิ่งของโรคไข้ไทฟอยด์ หรือไข้รากสาดน้อย (Enteric fever) ซึ่งเกิดจากการติดเชื้อแบคทีเรีย Salmonella Typhi",
            "state": false
        },
        {
            "problem": "12) A 23-year-old man with HIV, who started ARV 2 weeks ago, presents with a 3-day history of non-productive cough, dyspnea, and hemoptysis. Examination reveals crepitation at the right upper lung. Sputum is AFB 3+. What is the most likely diagnosis?",
            "img": "",
            "choices": "A. TB reinfection///B. Recurrent infection of TB///C. Drug-resistant TB///D. Paradoxical IRIS///E. Unmasking IRIS",
            "answer": "E. Unmasking IRIS",
            "select": "",
            "explain": "ผู้ป่วย HIV ที่เพิ่งเริ่มยาต้านไวรัส (ARV) ได้เพียง 2 สัปดาห์ แล้วมีอาการของวัณโรค (TB) ปรากฏขึ้นอย่างรวดเร็วและรุนแรง เป็นลักษณะคลาสสิกของ Immune Reconstitution Inflammatory Syndrome (IRIS) ในกรณีนี้ผู้ป่วยไม่เคยถูกวินิจฉัยว่าเป็น TB มาก่อน จึงเรียกว่า Unmasking IRIS คือการที่ภูมิคุ้มกันที่ฟื้นคืนมาไปเปิดโปงการติดเชื้อที่ซ่อนเร้นอยู่",
            "state": false
        },
        {
            "problem": "13) A male farmer presents with a 5-day history of acute fever and myalgia. PE reveals injected conjunctiva, mild jaundice, and a maculopapular rash. Urinalysis shows RBCs, WBCs, and Albumin 2+. What is the primary pathogenesis of this disease?",
            "img": "",
            "choices": "A. Disseminated intravascular coagulation (DIC)///B. Plasma leakage due to cytokine storm///C. Antibody-dependent enhancement///D. Endothelial cell injury///E. T-cell mediated cytotoxicity",
            "answer": "D. Endothelial cell injury",
            "select": "",
            "explain": "อาชีพเกษตรกร อาการไข้เฉียบพลัน ปวดกล้ามเนื้อ ตาแดง (conjunctival suffusion) และตัวเหลือง (jaundice) เป็นลักษณะทางคลินิกที่สำคัญของโรคเลปโตสไปโรซิส (Leptospirosis) หรือโรคฉี่หนู กลไกการเกิดโรคที่สำคัญคือเชื้อ Leptospira จะเข้าไปทำลายเซลล์บุผนังหลอดเลือด (Endothelial cell injury) ทั่วร่างกาย ทำให้เกิดภาวะหลอดเลือดอักเสบ (vasculitis) และมีการรั่วของสารน้ำออกจากหลอดเลือด",
            "state": false
        },
        {
            "problem": "14) For blood transfusion safety, an HIV antigen and antibody combo test is required. If this screening test is negative, which of the following is the most suitable further investigation to screen donated blood?",
            "img": "",
            "choices": "A. The collected blood should be re-tested with the same combo test///B. Nucleic Acid Testing (NAT)///C. Proviral DNA test///D. Viral load (HIV RNA) test for clinical use///E. P24 antigen test alone",
            "answer": "B. Nucleic Acid Testing (NAT)",
            "select": "",
            "explain": "ในการคัดกรองเลือดบริจาค แม้ผลตรวจ HIV combo test จะเป็นลบ ก็ยังมีความเสี่ยงจากช่วง window period เพื่อเพิ่มความปลอดภัยสูงสุด จึงต้องมีการตรวจเพิ่มเติมด้วยเทคโนโลยีที่มีความไวสูงสุดคือ Nucleic Acid Testing (NAT) ที่สามารถตรวจหาสารพันธุกรรมของเชื้อไวรัส (HIV RNA) ได้โดยตรง ทำให้ตรวจพบการติดเชื้อได้เร็วกว่าวิธีอื่นและลดความเสี่ยงจาก window period ได้มากที่สุด",
            "state": false
        },
        {
            "problem": "16) Which of the following pairs of antiretroviral drugs and their common side effects is correct?",
            "img": "",
            "choices": "A. Zidovudine (AZT) - pancreatitis///B. Efavirenz – severe hypersensitivity///C. Tenofovir disoproxil fumarate (TDF) - renal failure///D. Dolutegravir – bone marrow suppression///E. Rilpivirine (RVP) – hepatotoxicity",
            "answer": "C. Tenofovir disoproxil fumarate (TDF) - renal failure",
            "select": "",
            "explain": "Tenofovir disoproxil fumarate (TDF) เป็นยาในกลุ่ม NtRTI ที่ใช้ในการรักษา HIV ผลข้างเคียงที่สำคัญและเป็นที่รู้จักกันดีของ TDF คือความเป็นพิษต่อไต (nephrotoxicity) ซึ่งอาจทำให้เกิดภาวะไตวาย (renal failure) ได้ จึงต้องมีการติดตามการทำงานของไตในผู้ป่วยที่ได้รับยานี้เป็นประจำ ส่วนผลข้างเคียงหลักของตัวอื่นคือ AZT - bone marrow suppression, Efavirenz - CNS side effects",
            "state": false
        },
        {
            "problem": "19) Which of the following drugs is used for the treatment of both HIV and Hepatitis B virus infection?",
            "img": "",
            "choices": "A. Tenofovir///B. Zidovudine///C. Efavirenz///D. Dolutegravir///E. Nevirapine",
            "answer": "A. Tenofovir",
            "select": "",
            "explain": "ยา Tenofovir (ทั้งในรูป TDF และ TAF) เป็นยาต้านไวรัสที่มีฤทธิ์ครอบคลุมทั้งเชื้อ HIV และเชื้อไวรัสตับอักเสบบี (Hepatitis B virus, HBV) จึงเป็นยาที่นิยมเลือกใช้ในผู้ป่วยที่มีการติดเชื้อร่วม (HIV/HBV co-infection) เช่นเดียวกับยา Lamivudine (3TC) และ Emtricitabine (FTC)",
            "state": false
        },
        {
            "problem": "20) A man diagnosed with HIV has a CD4+ count of 650 cells/mm3. What is the recommended approach for Antiretroviral Therapy (ART)?",
            "img": "",
            "choices": "A. No treatment is needed as the CD4 count is high///B. Monotherapy with a single drug///C. Triple therapy with a combination of drugs///D. Delay treatment until CD4 count drops below 200///E. Dual therapy with two drugs from the same class",
            "answer": "C. Triple therapy with a combination of drugs",
            "select": "",
            "explain": "ตามแนวทางการรักษาการติดเชื้อ HIV ในปัจจุบัน แนะนำให้เริ่มยาต้านไวรัส (ART) ในผู้ติดเชื้อทุกรายโดยไม่คำนึงถึงระดับ CD4 เพื่อลดอัตราการป่วยและเสียชีวิต และลดการแพร่กระจายเชื้อ การรักษามาตรฐานคือการใช้ยาหลายตัวร่วมกัน (combination therapy) โดยทั่วไปมักจะเป็นยา 3 ชนิด (triple therapy) จากกลุ่มยาที่แตกต่างกัน การใช้ยาเพียงตัวเดียว (monotherapy) จะทำให้เกิดเชื้อดื้อยาได้ง่าย",
            "state": false
        },
        {
            "problem": "21) Which of the following statements about filariasis is correct?",
            "img": "",
            "choices": "A. The endemic species in the South of Thailand is mainly Wuchereria bancrofti///B. Tropical pulmonary eosinophilia (TPE) is a hypersensitivity reaction to microfilaria antigen///C. Nocturnal periodicity means a high density of organisms in peripheral blood during the daytime///D. Adult worms live in the portal vein///E. Elephantiasis is an acute symptom of filaria infection",
            "answer": "B. Tropical pulmonary eosinophilia (TPE) is a hypersensitivity reaction to microfilaria antigen",
            "select": "",
            "explain": "Tropical pulmonary eosinophilia (TPE) เป็นกลุ่มอาการหนึ่งของโรคฟิลาเรียที่เกิดจากปฏิกิริยาภูมิไวเกิน (hypersensitivity) ของร่างกายต่อแอนติเจนของตัวอ่อนพยาธิ (microfilaria) ที่ไปติดอยู่ในปอด ทำให้ผู้ป่วยมีอาการคล้ายหอบหืดและมีอีโอซิโนฟิลสูงมาก ส่วนข้ออื่นๆ: W. bancrofti พบมากแถบชายแดนตะวันตก, Nocturnal periodicity คือมีตัวอ่อนในเลือดมากตอนกลางคืน, พยาธิตัวเต็มวัยอาศัยในระบบน้ำเหลือง, และ Elephantiasis เป็นอาการของโรคในระยะเรื้อรัง",
            "state": false
        },
        {
            "problem": "22) A patient presents with enlarged cervical and inguinal lymph nodes. The physician suspects a Toxoplasma infection. What is the most common lab investigation method for diagnosing toxoplasmosis?",
            "img": "",
            "choices": "A. Tissue culture///B. Molecular diagnosis (PCR)///C. Tissue biopsy///D. Antigen detection///E. IgM and IgG antibody detection",
            "answer": "E. IgM and IgG antibody detection",
            "select": "",
            "explain": "การวินิจฉัยโรคทอกโซพลาสโมซิส (Toxoplasmosis) โดยเฉพาะในผู้ป่วยที่มีภูมิคุ้มกันปกติและมีอาการต่อมน้ำเหลืองโต วิธีมาตรฐานที่นิยมใช้มากที่สุดคือการตรวจทางภูมิคุ้มกันวิทยา (serology) เพื่อหาแอนติบอดีต่อเชื้อ Toxoplasma gondii ในเลือด ได้แก่ IgM และ IgG antibodies การตรวจพบ IgM หรือการมีระดับ IgG ที่สูงขึ้นอย่างมีนัยสำคัญ จะช่วยยืนยันการวินิจฉัยการติดเชื้อในระยะเฉียบพลันได้",
            "state": false
        },
        {
            "problem": "24) What is the characteristic initial sign of a cercarial infestation from schistosomiasis?",
            "img": "",
            "choices": "A. Itchy rash///B. Generalized swelling///C. Worm migration tracks///D. Eschar formation///E. Jaundice",
            "answer": "A. Itchy rash",
            "select": "",
            "explain": "พยาธิใบไม้ในเลือด (Schistosoma) ติดต่อสู่คนโดยตัวอ่อนระยะ cercaria ไชเข้าทางผิวหนัง ขณะที่ไชจะทำให้เกิดปฏิกิริยาแพ้ที่ผิวหนัง เกิดเป็นผื่นแดงคัน เรียกว่า cercarial dermatitis หรือ swimmer's itch ซึ่งเป็นอาการแสดงแรกเริ่มของการติดเชื้อ",
            "state": false
        },
        {
            "problem": "25) A 53-year-old female developed left upper eyelid edema after being bitten by a bug. What is the name of this sign and the causative agent?",
            "img": "https://drive.google.com/open?id=1cw7907EdPhMYDph-rzKtdNMfM2XmR214&usp=drive_copy",
            "choices": "A. Oriented sore, Leishmania tropica///B. Chagoma, Trypanosoma brucei///C. Espundia, Leishmania mexicana///D. Romaña's sign, Trypanosoma cruzi///E. Kala-azar, Leishmania donovani",
            "answer": "D. Romaña's sign, Trypanosoma cruzi",
            "select": "",
            "explain": "ภาพแสดงอาการบวมที่เปลือกตาข้างเดียว (unilateral periorbital edema) ซึ่งเป็นอาการจำเพาะของการติดเชื้อ Chagas disease ในระยะเฉียบพลัน เรียกว่า Romaña's sign เกิดขึ้นเมื่อเชื้อ Trypanosoma cruzi เข้าสู่ร่างกายผ่านทางเยื่อบุตา (conjunctiva) หลังถูกแมลงดูดเลือดในกลุ่ม Triatomine bug กัด",
            "state": false
        },
        {
            "problem": "27) In Plasmodium falciparum malaria, which protein is primarily responsible for the adhesion of infected erythrocytes to endothelial cells?",
            "img": "",
            "choices": "A. PvEPM-1///B. ICAM-1///C. PfEMP-1///D. Merozoite surface protein-1///E. Circumsporozoite protein",
            "answer": "C. PfEMP-1",
            "select": "",
            "explain": "โปรตีน PfEMP-1 (Plasmodium falciparum erythrocyte membrane protein 1) เป็นโปรตีนสำคัญที่เชื้อมาลาเรียชนิด P. falciparum สร้างขึ้นและแสดงออกบนผิวของเม็ดเลือดแดงที่ติดเชื้อ โปรตีนนี้ทำหน้าที่เป็นเหมือนกาว ทำให้เม็ดเลือดแดงที่ติดเชื้อไปเกาะติดกับผนังหลอดเลือดฝอย (cytoadherence) ซึ่งเป็นกลไกสำคัญที่ทำให้เกิดพยาธิสภาพที่รุนแรงของมาลาเรียชนิดฟัลซิปารัม",
            "state": false
        },
        {
            "problem": "28) A patient was treated for malaria. Six months later, he relapses with similar symptoms. The initial infection was caused by a species that forms hypnozoites. Which species is responsible for this relapse?",
            "img": "",
            "choices": "A. Plasmodium falciparum///B. Plasmodium malariae///C. Plasmodium knowlesi///D. Plasmodium vivax///E. Plasmodium berghei",
            "answer": "D. Plasmodium vivax",
            "select": "",
            "explain": "การกลับมาเป็นซ้ำ (relapse) ของโรคมาลาเรียหลังจากรักษาหายไปแล้วหลายเดือน เป็นลักษณะเฉพาะของเชื้อมาลาเรียชนิด Plasmodium vivax และ Plasmodium ovale เท่านั้น เนื่องจากเชื้อสองชนิดนี้สามารถสร้างระยะพักตัวที่เรียกว่า hypnozoite ในเซลล์ตับได้ ซึ่งสามารถกลับมาเจริญเป็นเชื้อใหม่ได้ในภายหลัง ทำให้ผู้ป่วยกลับมามีอาการได้อีกแม้จะไม่มีการติดเชื้อใหม่จากยุง",
            "state": false
        },
        {
            "problem": "29) Which statement is correct regarding human malaria in Thailand?",
            "img": "",
            "choices": "A. The prevalence is highest in border areas.///B. Plasmodium malariae is the main cause of malignant malaria.///C. The primary vector is the Aedes mosquito.///D. Relapses are common with Plasmodium falciparum.///E. Most cases are now found in urban centers.",
            "answer": "A. The prevalence is highest in border areas.",
            "select": "",
            "explain": "สถานการณ์โรคมาลาเรียในประเทศไทย ปัจจุบันพบผู้ป่วยได้น้อยลงมาก แต่ยังคงมีพื้นที่เสี่ยงสูงอยู่บริเวณแนวชายแดนที่ติดกับประเทศเพื่อนบ้าน โดยเฉพาะชายแดนไทย-เมียนมาร์ และไทย-กัมพูชา ส่วนเชื้อที่ทำให้เกิดมาลาเรียรุนแรง (malignant malaria) คือ P. falciparum",
            "state": false
        },
        {
            "problem": "31) What is a common side effect of Artemisinin derivatives used in malaria treatment?",
            "img": "",
            "choices": "A. Nausea///B. Renal failure///C. Bone marrow suppression///D. Severe skin rash///E. Hearing loss",
            "answer": "A. Nausea",
            "select": "",
            "explain": "ยากลุ่ม Artemisinin เป็นยาหลักในการรักษามาลาเรียในปัจจุบัน โดยทั่วไปเป็นยาที่ปลอดภัยและทนต่อผลข้างเคียงได้ดี ผลข้างเคียงที่พบได้บ่อยที่สุดคืออาการทางระบบทางเดินอาหาร เช่น คลื่นไส้ อาเจียน และปวดท้อง ซึ่งมักไม่รุนแรง",
            "state": false
        },
        {
            "problem": "32) What is the mechanism of action of Primaquine?",
            "img": "",
            "choices": "A. It inhibits heme polymerase///B. It produces free radicals that disrupt parasite metabolism///C. It inhibits the parasite's electron transport chain directly///D. It inhibits heme translation///E. It inhibits protein synthesis",
            "answer": "B. It produces free radicals that disrupt parasite metabolism",
            "select": "",
            "explain": "Primaquine ออกฤทธิ์โดยการเปลี่ยนรูปเป็นสารเมแทบอไลต์ที่สามารถสร้างอนุมูลอิสระ (free radicals) หรือ reactive oxygen species (ROS) ในปริมาณสูง ซึ่งสารเหล่านี้จะเข้าไปทำลายส่วนประกอบต่างๆ ภายในเซลล์ของเชื้อปรสิต ทำให้เชื้อตาย เป็นยาเดียวที่สามารถกำจัดระยะ hypnozoite ของ P. vivax และ P. ovale ในตับได้",
            "state": false
        },
        {
            "problem": "33) What test must be performed before prescribing Primaquine to a patient?",
            "img": "",
            "choices": "A. Pregnancy test///B. Liver function test///C. Kidney function test///D. Drug allergy test///E. G6PD deficiency test",
            "answer": "E. G6PD deficiency test",
            "select": "",
            "explain": "ยา Primaquine สามารถกระตุ้นให้เกิดภาวะเม็ดเลือดแดงแตกอย่างรุนแรง (acute hemolysis) ในผู้ป่วยที่มีภาวะพร่องเอนไซม์ G6PD (Glucose-6-Phosphate Dehydrogenase deficiency) ดังนั้นจึงเป็นข้อบังคับที่จะต้องตรวจคัดกรองภาวะพร่องเอนไซม์ G6PD ก่อนเริ่มให้ยา Primaquine ทุกครั้ง",
            "state": false
        },
        {
            "problem": "35) A 30-year-old female has a mixed infection with Plasmodium falciparum & Plasmodium vivax. Which drug must be used to eradicate the exoerythrocytic form (hypnozoites) to prevent relapse?",
            "img": "",
            "choices": "A. Primaquine///B. Tetracycline///C. Quinine///D. Pyrimethamine + Sulfadoxine///E. Atovaquone + Proguanil",
            "answer": "A. Primaquine",
            "select": "",
            "explain": "ในการติดเชื้อผสมระหว่าง P. falciparum และ P. vivax หลังจากรักษาเชื้อในกระแสเลือดด้วยยาหลัก (เช่น artemisinin-based combination therapy) แล้ว จำเป็นต้องให้การรักษาเพื่อกำจัดเชื้อ P. vivax ระยะ hypnozoite ที่ซ่อนอยู่ในตับเพื่อป้องกันการกลับเป็นซ้ำ (relapse) ซึ่งยาเพียงชนิดเดียวที่ออกฤทธิ์ในระยะนี้ได้คือ Primaquine",
            "state": false
        },
        {
            "problem": "36) A 33-year-old woman, 32 weeks pregnant, presents with abdominal pain and vaginal hemorrhage. Labs: Hct 32%, PT 18 sec, aPTT 35 sec, fibrinogen 20 mg/dL, platelet 15,000/mm3. What should be administered?",
            "img": "",
            "choices": "A. Cryoprecipitate + platelet concentrates///B. Whole blood + platelet concentrates///C. Packed red cells (PRC) + cryoprecipitate///D. Platelet concentrates + PRC///E. PRC + fresh frozen plasma",
            "answer": "A. Cryoprecipitate + platelet concentrates",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะเลือดออกผิดปกติรุนแรงร่วมกับผลแล็บที่บ่งชี้ถึงภาวะ DIC (Disseminated Intravascular Coagulation) คือมีเกล็ดเลือดต่ำมาก (thrombocytopenia), fibrinogen ต่ำมาก และ PT ยาวนาน การรักษาที่เร่งด่วนคือการให้ส่วนประกอบของเลือดเพื่อแก้ไขปัจจัยที่ขาดไป คือ ให้ Cryoprecipitate ซึ่งเป็นแหล่งของ fibrinogen เข้มข้น และให้เกล็ดเลือดเข้มข้น (platelet concentrates) เพื่อแก้ไขภาวะเกล็ดเลือดต่ำ",
            "state": false
        },
        {
            "problem": "39) A 65-year-old man with a history of peptic ulcer disease is admitted for hematemesis and orthostatic hypotension. His Hb is 6.8 g/dL, platelet 145,000, and PT/aPTT are normal. Which of the following blood products is most appropriate and effective?",
            "img": "",
            "choices": "A. Irradiated RBC///B. Washed RBC///C. Whole blood///D. Packed red cells (PRC)///E. Leukocyte-depleted red cells (LDRC)",
            "answer": "D. Packed red cells (PRC)",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะเสียเลือดเฉียบพลันจากทางเดินอาหาร ทำให้มีอาการของภาวะ hypovolemia และมีภาวะซีดรุนแรง (Hb 6.8) การให้เลือดที่เหมาะสมที่สุดในกรณีนี้คือการให้ Packed red cells (PRC) เพื่อเพิ่มความสามารถในการขนส่งออกซิเจนของเลือดและแก้ไขภาวะซีดโดยไม่เพิ่มปริมาตรของเหลวในร่างกายมากเกินความจำเป็น",
            "state": false
        },
        {
            "problem": "40) Which of the following blood products has the shortest shelf life?",
            "img": "",
            "choices": "A. Whole blood///B. Packed red cell///C. Platelet concentrates///D. Fresh frozen plasma///E. Cryoprecipitate",
            "answer": "C. Platelet concentrates",
            "select": "",
            "explain": "เกล็ดเลือดเข้มข้น (Platelet concentrates) มีอายุการเก็บรักษาสั้นที่สุดในบรรดาส่วนประกอบของเลือด โดยสามารถเก็บได้เพียง 5-7 วัน ที่อุณหภูมิห้อง (20-24 °C) พร้อมการเขย่าเบาๆ ตลอดเวลา เนื่องจากมีความเสี่ยงสูงต่อการปนเปื้อนของแบคทีเรียและการเสื่อมสภาพของเกล็ดเลือด",
            "state": false
        },
        {
            "problem": "42) A 9-year-old girl with acute lymphoblastic leukemia is undergoing an allogeneic immune transplantation. What method is most effective in reducing the risk of transfusion-associated graft versus host disease (TA-GVHD)?",
            "img": "",
            "choices": "A. Using washed blood components///B. Screening the blood donor for a history of GVHD///C. Using leukocyte-depleted blood products///D. Using irradiated blood products///E. Premedication with antihistamine and steroid",
            "answer": "D. Using irradiated blood products",
            "select": "",
            "explain": "ภาวะ Transfusion-associated graft versus host disease (TA-GVHD) เกิดจาก T-lymphocyte ของผู้ให้เลือดไปโจมตีเนื้อเยื่อของผู้รับเลือด วิธีการป้องกันที่มีประสิทธิภาพที่สุดคือการฉายรังสี (Irradiation) ส่วนประกอบของเลือดที่มีเซลล์ (เช่น PRC, platelets) ก่อนให้ผู้ป่วย รังสีจะทำลาย DNA ของ T-lymphocyte ทำให้เซลล์ไม่สามารถแบ่งตัวและก่อโรคได้",
            "state": false
        },
        {
            "problem": "43) Administering washed red blood cells (RBCs) is primarily done to prevent which of the following transfusion reactions?",
            "img": "",
            "choices": "A. Anaphylaxis///B. Mild urticaria///C. Major ABO incompatibility///D. Delayed hemolytic transfusion reaction///E. Transfusion-associated circulatory overload (TACO)",
            "answer": "A. Anaphylaxis",
            "select": "",
            "explain": "การล้างเม็ดเลือดแดง (Washed RBCs) คือกระบวนการกำจัดพลาสมาและโปรตีนต่างๆ ออกจากส่วนของเม็ดเลือดแดง มีข้อบ่งชี้หลักเพื่อป้องกันปฏิกิริยาแพ้รุนแรง (Anaphylaxis) ในผู้ป่วยที่แพ้โปรตีนในพลาสมา โดยเฉพาะผู้ป่วยที่มีภาวะพร่อง IgA และมี anti-IgA antibody อยู่ในร่างกาย",
            "state": false
        },
        {
            "problem": "44) A 20-year-old man with factor X deficiency developed acute dyspnea within 2 hours of a blood transfusion. He is not volume overloaded. A chest x-ray shows bilateral alveolar infiltrates without cardiomegaly. What is the most likely diagnosis?",
            "img": "",
            "choices": "A. Transfusion-Related Acute Lung Injury (TRALI)///B. Transfusion-Associated Circulatory Overload (TACO)///C. Anaphylactic reaction///D. Delayed hemolytic transfusion reaction///E. Sepsis from contaminated blood",
            "answer": "A. Transfusion-Related Acute Lung Injury (TRALI)",
            "select": "",
            "explain": "ผู้ป่วยเกิดภาวะหายใจล้มเหลวเฉียบพลัน (acute dyspnea) ภายในไม่กี่ชั่วโมงหลังได้รับเลือด ร่วมกับภาพถ่ายรังสีทรวงอกที่พบฝ้าขาวในปอดทั้งสองข้าง (bilateral infiltrates) โดยไม่มีภาวะน้ำเกิน (no volume overload, no cardiomegaly) เป็นลักษณะคลาสสิกของ Transfusion-Related Acute Lung Injury (TRALI) ซึ่งเป็นภาวะปอดบาดเจ็บเฉียบพลันที่เกิดจากปฏิกิริยาทางภูมิคุ้มกันหลังได้รับเลือด",
            "state": false
        },
        {
            "problem": "46) Which pair of parameters is the best choice for monitoring tissue perfusion and response to resuscitation in a patient with septic shock?",
            "img": "",
            "choices": "A. Lactate and urine output///B. Lactate and hemoculture///C. Lactate and EKG///D. CBC and echocardiography///E. CBC and EKG",
            "answer": "A. Lactate and urine output",
            "select": "",
            "explain": "ในการติดตามสภาวะของผู้ป่วย septic shock เป้าหมายสำคัญคือการประเมินการไหลเวียนเลือดไปเลี้ยงเนื้อเยื่อ (tissue perfusion) ซึ่งสามารถทำได้โดยการวัดระดับ lactate ในเลือด ซึ่งจะสูงขึ้นเมื่อเซลล์ขาดออกซิเจน (anaerobic metabolism) และการวัดปริมาณปัสสาวะ (urine output) ซึ่งสะท้อนการไหลเวียนเลือดไปที่ไต การที่ lactate ลดลงและปัสสาวะออกดีขึ้น บ่งชี้ว่าการรักษาได้ผลดี",
            "state": false
        },
        {
            "problem": "49) What is the fundamental pathogenesis of septic shock?",
            "img": "",
            "choices": "A. Increased lactate leading to metabolic acidosis///B. Anemia from hemolysis and bone marrow suppression///C. Systemic vasodilation and low tissue perfusion///D. Direct bacterial invasion of major organs///E. Formation of microthrombi in all vessels",
            "answer": "C. Systemic vasodilation and low tissue perfusion",
            "select": "",
            "explain": "พยาธิกำเนิดหลักของภาวะ septic shock คือการตอบสนองของร่างกายต่อการติดเชื้อที่รุนแรงเกินไป ทำให้เกิดการหลั่งสารสื่ออักเสบ (inflammatory cytokines) จำนวนมากทั่วร่างกาย ส่งผลให้หลอดเลือดขยายตัวอย่างกว้างขวาง (systemic vasodilation) และมีการรั่วของสารน้ำออกจากหลอดเลือด นำไปสู่ความดันโลหิตตกและการไหลเวียนเลือดไปเลี้ยงเนื้อเยื่อต่างๆ ลดลง (low tissue perfusion) จนเกิดภาวะอวัยวะล้มเหลว",
            "state": false
        },
        {
            "problem": "52) A patient with fever has a physical examination finding of an Eschar. This finding is pathognomonic for which disease?",
            "img": "",
            "choices": "A. Leptospirosis///B. Orientia tsutsugamushi infection///C. Dengue fever///D. Typhoid fever///E. Malaria",
            "answer": "B. Orientia tsutsugamushi infection",
            "select": "",
            "explain": "แผลบุหรี่จี้ หรือ Eschar คือแผลเนื้อตายสีดำคล้ายสะเก็ดแผลที่พบในบริเวณที่ถูกตัวไรอ่อน (chigger) กัด เป็นลักษณะจำเพาะ (pathognomonic sign) ของโรคสครับไทฟัส (Scrub typhus) ซึ่งเกิดจากการติดเชื้อ Orientia tsutsugamushi",
            "state": false
        },
        {
            "problem": "54) A man undergoing antiretroviral therapy has a regular check-up. His viral load is less than 50 copies/mm3. How can this result be interpreted?",
            "img": "",
            "choices": "A. There is no more viral replication///B. The patient has developed a strong cytotoxic T-cell response///C. The virus is completely cleared from the body///D. There are no HIV co-receptors left///E. Viral replication is suppressed to undetectable levels",
            "answer": "E. Viral replication is suppressed to undetectable levels",
            "select": "",
            "explain": "ผล viral load น้อยกว่า 50 copies/mm3 หมายความว่าปริมาณเชื้อไวรัสในเลือดต่ำมากจนไม่สามารถตรวจวัดได้ด้วยวิธีมาตรฐาน (Undetectable) ซึ่งบ่งชี้ว่าการรักษาด้วยยาต้านไวรัสได้ผลดี สามารถควบคุมการแบ่งตัวของไวรัสได้สำเร็จ (successful viral suppression) แต่ไม่ได้หมายความว่าเชื้อหมดไปจากร่างกาย ยังคงมีเชื้อแฝงตัวอยู่ในเซลล์ต่างๆ และจะกลับมาแบ่งตัวอีกครั้งหากหยุดยา",
            "state": false
        },
        {
            "problem": "55) A patient has a positive hemoculture for Salmonella Typhi. Which of the following is a key characteristic of this bacterium's virulence?",
            "img": "",
            "choices": "A. It can survive and replicate inside phagosomes of macrophages///B. It produces a potent exotoxin that causes diarrhea///C. It has a thick capsule that prevents phagocytosis///D. It adheres strongly to intestinal epithelial cells///E. It induces apoptosis in T-lymphocytes",
            "answer": "A. It can survive and replicate inside phagosomes of macrophages",
            "select": "",
            "explain": "คุณสมบัติสำคัญที่ทำให้เชื้อ Salmonella Typhi ก่อโรคไทฟอยด์ได้คือความสามารถในการอาศัยและแบ่งตัวอยู่ภายในเซลล์เม็ดเลือดขาวชนิดแมคโครฟาจ (macrophage) ได้ โดยไม่ถูกทำลาย ซึ่งทำให้เชื้อสามารถแพร่กระจายไปตามระบบน้ำเหลืองและกระแสเลือดไปสู่อวัยวะต่างๆ ทั่วร่างกายได้",
            "state": false
        },
        {
            "problem": "56) A patient presents with pancytopenia (anemia, leukopenia, and thrombocytopenia) and possible hepatosplenomegaly. A peripheral blood smear reveals blast cells with abundant granules, some containing Auer rods (including 'faggot cells'), and bilobed ('buttock-like') nuclei. What is the most likely diagnosis?",
            "img": "https://drive.google.com/open?id=1Z5wzcmxQX_qvDfcxSOp16s5uCpDGAin5&usp=drive_copy",
            "choices": "A. Acute Lymphoblastic Leukemia (ALL)///B. Acute Promyelocytic Leukemia (APL)///C. Chronic Myeloid Leukemia (CML)///D. Chronic Lymphocytic Leukemia (CLL)///E. Hairy Cell Leukemia (HCL)",
            "answer": "B. Acute Promyelocytic Leukemia (APL)",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะเม็ดเลือดทุกชนิดต่ำ (Pancytopenia) จากการที่เซลล์มะเร็งเข้าไปแทนที่ในไขกระดูก ลักษณะสำคัญในฟิล์มเลือดคือการพบเซลล์ตัวอ่อน (Blast cells) ที่มี Granule จำนวนมาก และการพบ Auer rods ซึ่งเป็นผลึกของ MPO enzyme รวมตัวกันเป็นแท่งในไซโทพลาสซึม บางครั้งอาจรวมกันเป็นมัดเรียกว่า 'Faggot cells' นอกจากนี้นิวเคลียสอาจมีลักษณะเป็น 2 แฉกคล้ายรูปไตหรือก้น (Bilobed or 'buttock-like' nuclei) ทั้งหมดนี้เป็นลักษณะคลาสสิกของ Acute Promyelocytic Leukemia (APL) หรือ AML-M3 ซึ่งสัมพันธ์กับการ translocation t(15;17)",
            "state": false
        },
        {
            "problem": "58) A 60-year-old man presents with right deep vein thrombosis. His CBC shows Hct: 61%, WBC: 8,200, plt: 220,000. A JAK2 V617F mutation is detected. What is the diagnosis?",
            "img": "",
            "choices": "A. Polycythemia Vera (PV)///B. Essential Thrombocythemia (ET)///C. Chronic Myeloid Leukemia (CML)///D. Acute Lymphoblastic Leukemia (ALL)///E. Chronic Lymphocytic Leukemia (CLL)",
            "answer": "A. Polycythemia Vera (PV)",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะเม็ดเลือดแดงสูง (Hct 61%) ร่วมกับมีภาวะลิ่มเลือดอุดตันในหลอดเลือดดำ (DVT) และตรวจพบการกลายพันธุ์ของยีน JAK2 V617F ซึ่งเป็นลักษณะที่เข้าได้กับเกณฑ์การวินิจฉัยโรคเลือดข้น (Polycythemia Vera, PV) ซึ่งเป็นหนึ่งในกลุ่มโรค Myeloproliferative Neoplasm",
            "state": false
        },
        {
            "problem": "60) A patient's peripheral blood smear shows a cell with the morphology seen in the image. What is the diagnosis?",
            "img": "https://drive.google.com/open?id=1EW__ULcMhA5iwcaw8xD_KXp-z99Xi-kj&usp=drive_copy",
            "choices": "A. Polycythemia vera///B. Myelodysplastic syndrome///C. Acute Myeloid Leukemia (AML)///D. Primary myelofibrosis///E. Chronic Myeloid Leukemia (CML)",
            "answer": "B. Myelodysplastic syndrome",
            "select": "",
            "explain": "ภาพแสดงเซลล์เม็ดเลือดขาวชนิดนิวโทรฟิลที่มีลักษณะนิวเคลียสผิดปกติ (dysplastic neutrophil) คือมี Pelger-Huët anomaly ซึ่งนิวเคลียสมีลักษณะเป็น 2 แฉกคล้ายรูปแว่นตา (hyposegmented neutrophil) และมีไซโทพลาสซึมที่มีลักษณะเป็นเม็ดหยาบ (hypogranular neutrophil) ลักษณะเหล่านี้เป็นลักษณะเฉพาะของโรค Myelodysplastic Syndrome (MDS) ซึ่งเป็นกลุ่มโรคที่เกิดจากความผิดปกติในการสร้างเม็ดเลือดในไขกระดูก",
            "state": false
        },
        {
            "problem": "61) A 23-year-old man presented with shortness of breath, and swelling of the face and arms. No edema was seen in the lower extremities. What is the most likely diagnosis?",
            "img": "",
            "choices": "A. Multiple myeloma///B. MALT lymphoma///C. Burkitt lymphoma///D. B-cell Acute Lymphoblastic Leukemia (B-ALL)///E. T-cell Lymphoblastic Lymphoma (T-LBL)",
            "answer": "E. T-cell Lymphoblastic Lymphoma (T-LBL)",
            "select": "",
            "explain": "อาการบวมบริเวณใบหน้า คอ และแขน โดยไม่บวมที่ขา เป็นอาการของ Superior Vena Cava (SVC) syndrome ซึ่งเกิดจากการมีก้อนไปกดทับหลอดเลือดดำใหญ่ SVC ในช่องอก ในผู้ชายอายุน้อย ก้อนที่เจริญเติบโตอย่างรวดเร็วในบริเวณ anterior mediastinum ซึ่งเป็นสาเหตุที่พบบ่อยที่สุดของ SVC syndrome คือ T-cell Lymphoblastic Lymphoma (T-LBL)",
            "state": false
        },
        {
            "problem": "63) Which neoplasm is strongly associated with chronic H. pylori infection?",
            "img": "",
            "choices": "A. Burkitt lymphoma///B. Follicular lymphoma///C. Marginal zone lymphoma///D. Diffuse large B cell lymphoma///E. Mantle zone lymphoma",
            "answer": "C. Marginal zone lymphoma",
            "select": "",
            "explain": "การติดเชื้อแบคทีเรีย Helicobacter pylori ในกระเพาะอาหารแบบเรื้อรัง เป็นปัจจัยเสี่ยงที่สำคัญที่สุดของการเกิดมะเร็งต่อมน้ำเหลืองของกระเพาะอาหารชนิด MALT (Mucosa-Associated Lymphoid Tissue) lymphoma ซึ่งจัดเป็นมะเร็งต่อมน้ำเหลืองชนิด Marginal zone lymphoma",
            "state": false
        },
        {
            "problem": "64) Which of the following is the most common type of lymphoma in adults?",
            "img": "",
            "choices": "A. Burkitt lymphoma///B. Follicular lymphoma///C. Mantle cell lymphoma///D. Classic Hodgkin lymphoma///E. Diffuse large B-cell lymphoma",
            "answer": "E. Diffuse large B-cell lymphoma",
            "select": "",
            "explain": "มะเร็งต่อมน้ำเหลืองชนิด Diffuse Large B-cell Lymphoma (DLBCL) เป็นชนิดที่พบได้บ่อยที่สุดของมะเร็งต่อมน้ำเหลืองชนิด Non-Hodgkin lymphoma (NHL) ในผู้ใหญ่ทั่วโลก คิดเป็นสัดส่วนประมาณ 30-40% ของ NHL ทั้งหมด",
            "state": false
        },
        {
            "problem": "65) A 71-year-old female presents with fatigue and back pain. Labs show anemia. An X-ray of her lumbar spine shows 'punched-out' osteolytic lesions. What screening test finding would be expected in this patient?",
            "img": "",
            "choices": "A. Hypocalcemia///B. Hypophosphatemia///C. Hypochromic Microcytic anemia///D. Urine excess light chain immunoglobulin///E. Urine excess heavy chain immunoglobulin",
            "answer": "D. Urine excess light chain immunoglobulin",
            "select": "",
            "explain": "อาการปวดหลัง, ซีด, และภาพรังสีพบรอยโรคแบบ 'punched-out' lesion เป็นลักษณะคลาสสิกของโรค Multiple Myeloma ซึ่งเป็นมะเร็งของ plasma cell โรคนี้มีการสร้างโปรตีนที่ผิดปกติ (monoclonal protein) ซึ่งมักจะเป็น light chain immunoglobulin ในปริมาณมาก โปรตีนเหล่านี้จะถูกขับออกทางปัสสาวะ เรียกว่า Bence Jones protein ซึ่งสามารถตรวจพบได้",
            "state": false
        },
        {
            "problem": "71) A patient develops neutropenia after receiving cancer chemotherapy. Which of the following hematopoietic growth factors (HGF) can resolve this condition?",
            "img": "",
            "choices": "A. Romiplostim///B. Eltrombopag///C. Filgrastim///D. Erythropoietin///E. Interleukin-11",
            "answer": "C. Filgrastim",
            "select": "",
            "explain": "ภาวะ neutropenia คือภาวะที่เม็ดเลือดขาวชนิด neutrophil ต่ำ ซึ่งเป็นผลข้างเคียงที่พบบ่อยของยาเคมีบำบัด การรักษาคือการให้ยาในกลุ่ม Granulocyte-Colony Stimulating Factor (G-CSF) ซึ่งเป็น HGF ที่กระตุ้นไขกระดูกให้สร้างและปล่อย neutrophil ออกมาโดยเฉพาะ ยา Filgrastim คือ recombinant G-CSF ส่วน Romiplostim และ Eltrombopag ใช้กระตุ้นการสร้างเกล็ดเลือด",
            "state": false
        },
        {
            "problem": "72) Which of the following drugs is commonly used as a secondary prevention for myocardial infarction?",
            "img": "",
            "choices": "A. Aspirin///B. Warfarin///C. Heparin///D. Clopidogrel///E. Ibuprofen",
            "answer": "A. Aspirin",
            "select": "",
            "explain": "ยา Aspirin เป็นยาต้านเกล็ดเลือด (antiplatelet) ที่มีบทบาทสำคัญในการป้องกันการเกิดลิ่มเลือดอุดตันซ้ำในผู้ป่วยที่เคยมีภาวะกล้ามเนื้อหัวใจตาย (myocardial infarction) มาก่อน จึงเป็นยาหลักที่ใช้ในการป้องกันทุติยภูมิ (secondary prevention) ของโรคนี้",
            "state": false
        },
        {
            "problem": "74) Which of the following statements about Low Molecular Weight Heparin (LMWH) is correct?",
            "img": "",
            "choices": "A. It directly binds to and inhibits Factor IIa///B. It is mainly cleared by the kidneys///C. It has high protein binding///D. It should be injected intramuscularly///E. It can distribute through the placenta to the fetus",
            "answer": "B. It is mainly cleared by the kidneys",
            "select": "",
            "explain": "Low Molecular Weight Heparin (LMWH) เช่น enoxaparin เป็นยาต้านการแข็งตัวของเลือดที่ถูกกำจัดออกจากร่างกายผ่านทางไตเป็นหลัก ดังนั้นจึงต้องมีการปรับขนาดยาในผู้ป่วยที่มีการทำงานของไตบกพร่อง LMWH ออกฤทธิ์โดยการจับกับ antithrombin เพื่อยับยั้ง Factor Xa เป็นหลัก และบริหารยาโดยการฉีดเข้าใต้ผิวหนัง (subcutaneously)",
            "state": false
        },
        {
            "problem": "76) Based on the blood grouping results (cell grouping: anti-A neg, anti-B neg, anti-D 4+; serum grouping: A cell 4+, B cell 4+, O cell 4+), what is the interpretation?",
            "img": "https://drive.google.com/open?id=1eKo2LD-0Ekk7SnV6TfSuTGsQ3yH6wm35&usp=drive_copy",
            "choices": "A. Group O Rh+ with an unexpected antibody///B. Group O Rh+ without an unexpected antibody///C. Group O Rh- with an unexpected antibody///D. Group AB Rh+ with an unexpected antibody///E. Group O Rh- with anti-A and anti-B",
            "answer": "A. Group O Rh+ with an unexpected antibody",
            "select": "",
            "explain": "จาก Cell grouping (forward type) ไม่ทำปฏิกิริยากับ anti-A และ anti-B แสดงว่าเป็นเลือดกรุ๊ป O และทำปฏิกิริยากับ Anti-D แสดงว่าเป็น Rh+ ส่วน Serum grouping (reverse type) ทำปฏิกิริยากับทั้ง A cell, B cell และ O cell แสดงว่าในซีรั่มมี antibody บางอย่างที่ทำปฏิกิริยากับเม็ดเลือดแดงทุกชนิด (รวมถึง O cell ซึ่งเป็น auto-control) จึงสรุปได้ว่าเป็นเลือดกรุ๊ป O Rh+ และมี unexpected antibody (ซึ่งอาจเป็น cold agglutinin หรือ autoantibody)",
            "state": false
        },
        {
            "problem": "78) What is the primary goal of antibody screening in pre-transfusion testing?",
            "img": "",
            "choices": "A. To ensure ABO compatibility///B. To detect clinically significant unexpected antibodies///C. To detect all unexpected antibodies///D. To detect autoantibodies///E. To ensure both ABO and Rh compatibility",
            "answer": "B. To detect clinically significant unexpected antibodies",
            "select": "",
            "explain": "วัตถุประสงค์หลักของการตรวจคัดกรองแอนติบอดี (antibody screening) ก่อนการให้เลือด คือการตรวจหาแอนติบอดีต่อแอนติเจนของหมู่เลือดอื่นๆ ที่ไม่ใช่ A และ B (เรียกว่า unexpected antibodies) ที่มีความสำคัญทางคลินิก คือสามารถทำให้เกิดการแตกของเม็ดเลือดแดงของผู้ให้เลือดและเกิดปฏิกิริยาจากการรับเลือดที่รุนแรงได้",
            "state": false
        },
        {
            "problem": "79) Which investigation is crucial for diagnosing a delayed hemolytic transfusion reaction (DHTR)?",
            "img": "",
            "choices": "A. Direct Antiglobulin Test (DAT)///B. Antibody screening by Indirect Antiglobulin Test (IAT)///C. ABO grouping re-check///D. Crossmatching///E. Serum bilirubin measurement",
            "answer": "A. Direct Antiglobulin Test (DAT)",
            "select": "",
            "explain": "Delayed hemolytic transfusion reaction (DHTR) เกิดจากร่างกายผู้รับเลือดสร้างแอนติบอดีต่อเม็ดเลือดแดงของผู้ให้เลือดที่ได้รับมา แอนติบอดีเหล่านี้จะไปเคลือบบนผิวเม็ดเลือดแดงที่ได้รับมาและทำให้เม็ดเลือดแดงแตก การวินิจฉัยที่สำคัญคือการทำ Direct Antiglobulin Test (DAT) ซึ่งจะให้ผลบวก เนื่องจากเป็นการตรวจหาแอนติบอดีที่เคลือบอยู่บนผิวเม็ดเลือดแดงในร่างกายผู้ป่วยโดยตรง",
            "state": false
        },
        {
            "problem": "80) In a situation where blood components of group B are not available, which combination of components can be used for a group B patient instead?",
            "img": "",
            "choices": "A. Packed red cell group A, Plasma group A///B. Packed red cell group A, Plasma group AB///C. Packed red cell group O, Plasma group A///D. Packed red cell group O, Plasma group AB///E. Packed red cell group O, Plasma group O",
            "answer": "D. Packed red cell group O, Plasma group AB",
            "select": "",
            "explain": "ในกรณีที่ขาดเลือดกรุ๊ป B สามารถใช้เลือดทดแทนได้โดยยึดหลักความเข้ากันได้ สำหรับเม็ดเลือดแดง (Packed red cell) กรุ๊ป O ถือเป็น universal donor สามารถให้ได้ทุกกรุ๊ป สำหรับพลาสมา กรุ๊ป AB ถือเป็น universal donor เพราะไม่มีทั้ง anti-A และ anti-B ดังนั้นผู้ป่วยกรุ๊ป B สามารถรับ PRC กรุ๊ป O และ Plasma กรุ๊ป AB ได้",
            "state": false
        },
        {
            "problem": "84) A lymph node biopsy shows a 'starry-night sky' pattern. This histopathological finding is characteristic of which lymphoma?",
            "img": "",
            "choices": "A. Burkitt's lymphoma///B. Follicular lymphoma///C. Plasma cell myeloma///D. Hodgkin lymphoma///E. Diffuse large B cell lymphoma",
            "answer": "A. Burkitt's lymphoma",
            "select": "",
            "explain": "ภาพ 'starry-night sky' เป็นลักษณะทางจุลพยาธิวิทยาที่คลาสสิกของ Burkitt's lymphoma โดย 'ท้องฟ้า' (sky) คือเซลล์มะเร็งต่อมน้ำเหลือง (lymphoma cells) ที่มีสีน้ำเงินเข้มและแบ่งตัวอย่างรวดเร็ว ส่วน 'ดวงดาว' (stars) คือเซลล์ Macrophage ที่มีไซโทพลาสซึมใสซึ่งเข้ามาเก็บกินซากเซลล์มะเร็งที่ตายไป (apoptotic bodies) ทำให้เห็นเป็นจุดขาวๆ กระจายอยู่",
            "state": false
        },
        {
            "problem": "89) Which pattern of results is expected in coagulation tests for a plasma sample with a very low fibrinogen level?",
            "img": "",
            "choices": "A. Prolonged whole blood clotting time and aPTT but normal PT///B. Prolonged PT and TT but normal aPTT///C. Prolonged aPTT but normal PT and TT///D. Prolonged TT, PT and aPTT///E. Prolonged TT but normal PT and aPTT",
            "answer": "D. Prolonged TT, PT and aPTT",
            "select": "",
            "explain": "Fibrinogen เป็นสารตั้งต้นสุดท้ายในกระบวนการแข็งตัวของเลือด ทั้ง extrinsic pathway (ที่ทดสอบด้วย PT), intrinsic pathway (ที่ทดสอบด้วย aPTT), และ common pathway ล้วนจบลงที่การเปลี่ยน fibrinogen เป็น fibrin ดังนั้นเมื่อ fibrinogen ต่ำมาก จะทำให้การทดสอบที่ต้องอาศัยการเกิดลิ่มเลือด fibrin ทั้ง PT, aPTT และ TT (Thrombin Time ซึ่งวัดขั้นตอนสุดท้ายโดยตรง) มีค่า prolonged (ยาวนานกว่าปกติ) ทั้งหมด",
            "state": false
        },
        {
            "problem": "90) What is the primary purpose of a mixing test in coagulation studies?",
            "img": "",
            "choices": "A. To differentiate between a primary and secondary hemostasis defect///B. To differentiate between a factor deficiency and the presence of an inhibitor///C. To differentiate between coagulopathy and hypercoagulopathy///D. To identify the specific deficient coagulation factor///E. To monitor heparin therapy",
            "answer": "B. To differentiate between a factor deficiency and the presence of an inhibitor",
            "select": "",
            "explain": "Mixing test ใช้เมื่อผลการตรวจการแข็งตัวของเลือด (เช่น aPTT หรือ PT) ยาวนานผิดปกติ โดยจะนำพลาสมาของผู้ป่วยมาผสมกับพลาสมาของคนปกติในอัตราส่วน 1:1 แล้วทำการตรวจซ้ำ หากผลตรวจกลับมาปกติ แสดงว่าสาเหตุเกิดจาก 'การขาดแฟคเตอร์' (factor deficiency) แต่หากผลตรวจยังคงยาวนานผิดปกติอยู่ แสดงว่าในพลาสมาของผู้ป่วยมี 'สารยับยั้ง' (inhibitor) อยู่",
            "state": false
        }
    ],
    "HL46MCQ1": [
        {
            problem: "1. Lymph node organ ที่สำคัญในตอนเด็ก เมื่อโตขึ้นจะเล็กลง",
            img: "",
            choices: "Tonsil///Spleen///Adenoid///Lymph node///Thymus",
            answer: "Thymus",
            select: "",
            explain: "ต่อมไทมัส (Thymus) เป็นอวัยวะในระบบน้ำเหลืองที่สำคัญมากในวัยเด็ก มีหน้าที่ในการสร้างและฝึก T-lymphocytes ให้เจริญเติบโตเต็มที่เพื่อสร้างภูมิคุ้มกันให้ร่างกาย แต่เมื่อเข้าสู่วัยรุ่น ต่อมไทมัสจะเริ่มฝ่อและมีขนาดเล็กลงเรื่อยๆ โดยมีเนื้อเยื่อไขมันเข้ามาแทนที่ (involution) แต่ยังคงทำงานได้อยู่บ้าง",
            state: false
        },
        {
            problem: "2. ภาวะใด promote erythropoiesis?",
            img: "",
            choices: "Low oxygen concentration///High oxygen concentration///Normal oxygen concentration///Iron overload///Vitamin B12 deficiency",
            answer: "Low oxygen concentration",
            select: "",
            explain: "ภาวะพร่องออกซิเจน (Hypoxia or Low oxygen concentration) เป็นตัวกระตุ้นหลักที่ทำให้ไต (kidney) หลั่งฮอร์โมน Erythropoietin (EPO) ออกมามากขึ้น ซึ่ง EPO จะไปกระตุ้นไขกระดูก (bone marrow) ให้สร้างเม็ดเลือดแดง (erythropoiesis) เพิ่มขึ้น เพื่อเพิ่มความสามารถในการขนส่งออกซิเจนไปยังเนื้อเยื่อต่างๆ ของร่างกาย",
            state: false
        },
        {
            problem: "3. Which of the following WBCs are capable of phagocytosis?",
            img: "",
            choices: "Basophil and Monocyte///Monocyte and Lymphocyte///Monocyte and Neutrophil///Neutrophil and Lymphocyte///Basophil and Eosinophil",
            answer: "Monocyte and Neutrophil",
            select: "",
            explain: "เซลล์เม็ดเลือดขาวที่มีความสามารถในการจับกินสิ่งแปลกปลอม (phagocytosis) ได้อย่างมีประสิทธิภาพ (professional phagocytes) คือ Neutrophil และ Monocyte โดย Neutrophil จะเป็นด่านแรกที่ตอบสนองต่อการติดเชื้อแบคทีเรีย ส่วน Monocyte เมื่อเคลื่อนที่ออกจากหลอดเลือดเข้าไปในเนื้อเยื่อจะเปลี่ยนเป็น Macrophage ซึ่งมีความสามารถในการ phagocytosis สูงมาก",
            state: false
        },
        {
            problem: "4. Which of the following WBCs secrete heparin, histamine, heparan sulfate, and leukotriene?",
            img: "",
            choices: "Neutrophil///Basophil///Eosinophil///Monocyte///Lymphocyte",
            answer: "Basophil",
            select: "",
            explain: "Basophil มีแกรนูล (granules) ภายในเซลล์ที่บรรจุสารเคมีหลายชนิด เช่น Histamine ซึ่งทำให้หลอดเลือดขยายตัว, Heparin ซึ่งเป็นสารต้านการแข็งตัวของเลือด และ Leukotrienes ซึ่งเกี่ยวข้องกับปฏิกิริยาการอักเสบและภูมิแพ้ (allergic reaction) สารเหล่านี้จะถูกหลั่งออกมาเมื่อร่างกายเผชิญกับสารก่อภูมิแพ้",
            state: false
        },
        {
            problem: "5. Which blood cells develop from the myeloblast lineage?",
            img: "",
            choices: "Basophil, eosinophil, monocyte///Lymphocyte, plasma cell///T-cell, B-cell, NK cell///Erythrocyte, platelet///All of the above",
            answer: "Basophil, eosinophil, monocyte",
            select: "",
            explain: "Myeloblast เป็นเซลล์ต้นกำเนิดในสาย Myeloid lineage ซึ่งจะเจริญต่อไปเป็นเซลล์ในกลุ่ม Granulocytes (ได้แก่ Neutrophil, Eosinophil, Basophil) และ Monocyte ส่วน Lymphocyte (T-cell, B-cell) จะมาจาก Common lymphoid progenitor",
            state: false
        },
        {
            problem: "6. Which of the following conditions will result in increased erythropoietin production from the kidney?",
            img: "",
            choices: "Chronic kidney disease///Polycythemia Vera///Thalassemia with acute hemolysis///G-6-PD deficiency without acute hemolysis///Patient treated with recombinant erythropoietin",
            answer: "Thalassemia with acute hemolysis",
            select: "",
            explain: "การเกิดภาวะเม็ดเลือดแดงแตกเฉียบพลัน (acute hemolysis) ในผู้ป่วย Thalassemia จะทำให้ร่างกายเกิดภาวะโลหิตจางและขาดออกซิเจน (hypoxia) อย่างรวดเร็ว ภาวะนี้จะกระตุ้นให้ไตสร้าง Erythropoietin (EPO) เพิ่มขึ้นเพื่อชดเชยเม็ดเลือดแดงที่ถูกทำลายไป ส่วนข้ออื่น: A-CKD ทำให้สร้าง EPO ลดลง, B-Polycythemia vera มีการสร้าง RBC มากผิดปกติทำให้ EPO ต่ำ, D-ถ้าไม่มี hemolysis ก็ไม่กระตุ้น EPO, E-การได้รับ EPO จากภายนอกจะกดการสร้าง EPO ของร่างกาย",
            state: false
        },
        {
            problem: "7. Which metabolite is rarely found in a mature red blood cell of a patient with glucose-6-phosphate dehydrogenase deficiency?",
            img: "",
            choices: "Glucose-6-phosphate///Lactate///2,3-bisphosphoglycerate///NADPH///Glucose",
            answer: "NADPH",
            select: "",
            explain: "เอนไซม์ G6PD (Glucose-6-phosphate dehydrogenase) มีหน้าที่สำคัญใน Hexose Monophosphate (HMP) shunt pathway เพื่อสร้าง NADPH ซึ่ง NADPH มีความสำคัญอย่างยิ่งในการปกป้องเม็ดเลือดแดงจาก oxidative stress โดยการรักษาระดับของ reduced glutathione (GSH) ให้สูง ดังนั้นในผู้ป่วยที่ขาด G6PD จะมีการสร้าง NADPH ลดลงอย่างมาก ทำให้เม็ดเลือดแดงทนต่อสารอนุมูลอิสระได้น้อยและแตกง่าย",
            state: false
        },
        {
            problem: "8. Which organ is responsible for nucleus ejection in RBC formation?",
            img: "",
            choices: "Kidney///RE system///Red bone marrow///Liver///Thymus",
            answer: "Red bone marrow",
            select: "",
            explain: "กระบวนการสร้างเม็ดเลือดแดง (erythropoiesis) เกิดขึ้นในไขกระดูก (Red bone marrow) ในขั้นตอนสุดท้ายของการเจริญเติบโตจาก Normoblast (หรือ Erythroblast) ไปเป็น Reticulocyte นิวเคลียสจะถูกขับออกจากเซลล์ (nucleus ejection) ซึ่งกระบวนการนี้เกิดขึ้นภายในไขกระดูกก่อนที่ Reticulocyte จะถูกปล่อยเข้าสู่กระแสเลือด",
            state: false
        },
        {
            problem: "9. Which is the predominant Hb typing in the fetus?",
            img: "",
            choices: "HbA (alpha2beta2)///HbH (beta4)///HbA2 (alpha2delta2)///HbF (alpha2gamma2)///HbBart's (gamma4)",
            answer: "HbF (alpha2gamma2)",
            select: "",
            explain: "ฮีโมโกลบินชนิดเด่นที่สุดในทารกในครรภ์ (fetus) คือ Hemoglobin F (HbF) ซึ่งประกอบด้วย globin chain ชนิด alpha 2 สาย และ gamma 2 สาย (α2γ2) HbF มีคุณสมบัติในการจับออกซิเจนได้ดีกว่า HbA (ฮีโมโกลบินในผู้ใหญ่) ทำให้สามารถดึงออกซิเจนจากเลือดของมารดาผ่านรกมาใช้ได้อย่างมีประสิทธิภาพ",
            state: false
        },
        {
            problem: "10. What is the main enzyme responsible for changing methemoglobin to normal hemoglobin?",
            img: "",
            choices: "G6PD///Cytochrome B5 reductase///2,3-DPG Phosphatase///Hexokinase///Mutase",
            answer: "Cytochrome B5 reductase",
            select: "",
            explain: "Methemoglobin คือฮีโมโกลบินที่ธาตุเหล็ก (Fe) อยู่ในรูป ferric (Fe3+) ทำให้จับออกซิเจนไม่ได้ เอนไซม์หลักที่ทำหน้าที่รีดิวซ์ Fe3+ กลับมาเป็น ferrous (Fe2+) เพื่อให้ฮีโมโกลบินกลับมาทำงานได้ตามปกติคือ Cytochrome B5 reductase ซึ่งใช้ NADH เป็น co-enzyme ภาวะพร่องเอนไซม์นี้จะทำให้เกิดภาวะ Methemoglobinemia ได้",
            state: false
        },
        {
            problem: "11. Which of the following is true about hemoglobin?",
            img: "",
            choices: "Increase H+, temp. will increase O2 affinity///Increase H+, 2,3-DPG will decrease O2 affinity///Decrease CO2 will decrease O2 affinity///Decrease temp. will decrease O2 affinity///Increase pH will decrease O2 affinity",
            answer: "Increase H+, 2,3-DPG will decrease O2 affinity",
            select: "",
            explain: "การเพิ่มขึ้นของโปรตอน (H+ หรือภาวะกรด), อุณหภูมิ (temperature), และ 2,3-Bisphosphoglycerate (2,3-DPG) จะทำให้ฮีโมโกลบินมี O2 affinity (ความสามารถในการจับออกซิเจน) ลดลง ซึ่งเรียกว่า Right shift ของ oxygen-hemoglobin dissociation curve ผลคือฮีโมโกลบินจะปล่อยออกซิเจนให้แก่เนื้อเยื่อได้ง่ายขึ้น ซึ่งเป็นประโยชน์ในภาวะที่เนื้อเยื่อต้องการออกซิเจนสูง เช่น ขณะออกกำลังกาย",
            state: false
        },
        {
            problem: "12. The doctor should order CBC for which of the following conditions?",
            img: "",
            choices: "A patient with viral infection who is getting better///A patient with an unknown infection///A patient with G6PD deficiency without acute hemolysis///A patient with obstructive jaundice without fever///A diabetic patient with routine follow-ups",
            answer: "A patient with an unknown infection",
            select: "",
            explain: "การตรวจความสมบูรณ์ของเม็ดเลือด (Complete Blood Count, CBC) เป็นการตรวจพื้นฐานที่สำคัญมากเมื่อสงสัยภาวะการติดเชื้อที่ไม่ทราบสาเหตุ (unknown infection) ผล CBC จะให้ข้อมูลเกี่ยวกับจำนวนและชนิดของเม็ดเลือดขาว (เช่น neutrophilia ในแบคทีเรีย, lymphocytosis ในไวรัส), ระดับฮีโมโกลบินและเกล็ดเลือด ซึ่งช่วยในการวินิจฉัยแยกโรคและประเมินความรุนแรงของการติดเชื้อได้",
            state: false
        },
        {
            problem: "13. Which lab technique is commonly used for Hb typing?",
            img: "",
            choices: "PCR///ELISA///Western blot///HPLC///Hemoglobin electrophoresis",
            answer: "HPLC",
            select: "",
            explain: "เทคนิคที่นิยมใช้ในการตรวจวิเคราะห์ชนิดและปริมาณของฮีโมโกลบิน (Hb typing) ในปัจจุบันคือ High-Performance Liquid Chromatography (HPLC) และ Hemoglobin electrophoresis หลักการของ HPLC คือการแยกสารโปรตีนฮีโมโกลบินชนิดต่างๆ ออกจากกันโดยอาศัยความแตกต่างในการจับกับ stationary phase ทำให้สามารถระบุชนิดและวัดปริมาณ HbF, HbA2, และฮีโมโกลบินผิดปกติอื่นๆ ได้อย่างแม่นยำ ซึ่งมีประโยชน์มากในการวินิจฉัยโรคธาลัสซีเมียและ hemoglobinopathies",
            state: false
        },
        {
            problem: "14. What is the period of blood sugar that is represented by HbA1c blood test?",
            img: "",
            choices: "The last few day///The last few year///The last few month///The last few hour///The last few week",
            answer: "The last few month",
            select: "",
            explain: "HbA1c หรือ Glycated hemoglobin เกิดจากการที่น้ำตาลกลูโคสในเลือดจับกับฮีโมโกลบินในเม็ดเลือดแดงแบบถาวร เนื่องจากเม็ดเลือดแดงมีอายุขัยเฉลี่ยประมาณ 120 วัน (3-4 เดือน) ดังนั้นค่า HbA1c จึงสะท้อนระดับน้ำตาลในเลือดเฉลี่ยในช่วง 2-3 เดือนที่ผ่านมา (last few months) และใช้เป็นเครื่องมือสำคัญในการติดตามการควบคุมระดับน้ำตาลในผู้ป่วยเบาหวาน",
            state: false
        },
        {
            problem: "15. Which of the following conditions is prone to risk of iron deficiency anemia?",
            img: "",
            choices: "Thalassemia///School age children///Menstruating woman///Colon cancer patient///Hepatitis B infected patient",
            answer: "Menstruating woman",
            select: "",
            explain: "ผู้หญิงวัยเจริญพันธุ์ที่มีประจำเดือน (Menstruating woman) เป็นกลุ่มเสี่ยงสูงต่อการเกิดภาวะโลหิตจางจากการขาดธาตุเหล็ก (iron deficiency anemia) เนื่องจากการสูญเสียเลือดเป็นประจำทุกเดือนทำให้ร่างกายสูญเสียธาตุเหล็กออกไป หากได้รับธาตุเหล็กจากอาหารไม่เพียงพอต่อการชดเชยส่วนที่เสียไป ก็จะทำให้เกิดภาวะขาดธาตุเหล็กได้ ส่วนผู้ป่วยมะเร็งลำไส้ใหญ่ (Colon cancer patient) ก็เสี่ยงสูงจากการเสียเลือดเรื้อรัง (chronic blood loss) ในทางเดินอาหารเช่นกัน",
            state: false
        },
        {
            problem: "16. Which of the following is the difference in findings between intravascular hemolysis differ from extravascular hemolysis?",
            img: "",
            choices: "Splenomegaly///Absence haptoglobin///Unconjugated bilirubin///Increased reticulocyte count///Spherocyte cells seen in blood smear",
            answer: "Absence haptoglobin",
            select: "",
            explain: "ทั้ง Intravascular (IVH) และ Extravascular (EVH) hemolysis คือภาวะที่เม็ดเลือดแดงแตก แต่มีกลไกและผลลัพธ์ทางห้องปฏิบัติการที่แตกต่างกัน\n\n*   **Absent haptoglobin (คำตอบ):** ใน IVH, เม็ดเลือดแดงแตกและปล่อยฮีโมโกลบิน (Hb) ออกมาในพลาสมาโดยตรง โปรตีน Haptoglobin จะเข้ามาจับกับ Hb อิสระนี้เพื่อนำไปกำจัด การเกิด IVH ที่รุนแรงจะทำให้ Haptoglobin ถูกใช้ไปอย่างรวดเร็วจนระดับในเลือดต่ำมากหรือวัดไม่ได้ (undetectable/absent) ซึ่งเป็นลักษณะจำเพาะของ IVH ในทางกลับกัน EVH ซึ่งเม็ดเลือดแดงถูกทำลายในม้าม จะมี Hb รั่วไหลออกมาในพลาสมาน้อยกว่า ทำให้ระดับ Haptoglobin ลดลงเพียงเล็กน้อยหรือไม่ลดลงเลย\n\n*   **Splenomegaly:** เป็นลักษณะเด่นของ EVH เนื่องจากม้ามทำงานหนักในการดักจับและทำลายเม็ดเลือดแดงที่ผิดปกติ ไม่ใช่ลักษณะของ IVH\n\n*   **Increased unconjugated bilirubin:** การสลายตัวของ Hb ทำให้เกิด Unconjugated bilirubin เพิ่มขึ้น ซึ่งพบได้ใน **ทั้งสองภาวะ** จึงไม่ใช่จุดที่ใช้แยกกันอย่างชัดเจน\n\n*   **Increased reticulocyte count:** เป็นการตอบสนองของไขกระดูกที่พยายามสร้างเม็ดเลือดแดงใหม่ชดเชย ซึ่งพบได้ใน **ทั้งสองภาวะ** เช่นกัน\n\n*   **Presence of spherocytes:** Spherocytes คือเม็ดเลือดแดงที่สูญเสียความยืดหยุ่นและมักจะถูกทำลายโดยกลไก **EVH** ที่ม้าม จึงเป็นตัวบ่งชี้ของ EVH มากกว่า",
            state: false
        },
        {
            problem: "17. อะไรต่อไปนี้ทำให้มีแนวโน้มเป็น folate deficiency?",
            img: "",
            choices: "Aplastic Anemia///Acute leukemia///Fresh goat milk///Preterm Infant///Hookworm infection",
            answer: "Fresh goat milk",
            select: "",
            explain: "การดื่มนมแพะสด (Fresh goat milk) เป็นประจำโดยไม่ได้รับอาหารเสริมอื่น เป็นสาเหตุที่รู้จักกันดีของการขาดโฟเลตในทารก เนื่องจากนมแพะมีปริมาณโฟเลตต่ำมาก เมื่อเทียบกับนมแม่หรือนมผงสำหรับทารก โฟเลตมีความสำคัญต่อการสร้างเม็ดเลือด การขาดโฟเลตจะนำไปสู่ภาวะโลหิตจางชนิด megaloblastic anemia",
            state: false
        },
        {
            problem: "18. Which of the following is the pathophysiology of thalassemia?",
            img: "",
            choices: "Hypersplenism///Ineffective erythropoietin///Abnormal red cell enzyme///Impaired red cell production///Increase red cell deformities",
            answer: "Impaired red cell production",
            select: "",
            explain: "พยาธิสรีรวิทยาหลักของโรคธาลัสซีเมียคือการสร้างสายโกลบิน (globin chain) ชนิดใดชนิดหนึ่งลดลงหรือไม่สร้างเลย (Impaired globin chain synthesis) ทำให้การสร้างฮีโมโกลบินที่สมบูรณ์ลดลงไปด้วย ส่งผลให้การสร้างเม็ดเลือดแดงในไขกระดูกไม่มีประสิทธิภาพ (ineffective erythropoiesis) และเม็ดเลือดแดงที่ถูกสร้างออกมาก็มีลักษณะผิดปกติ เปราะบาง และอายุสั้น ทำให้เกิดภาวะโลหิตจางเรื้อรัง",
            state: false
        },
        {
            problem: "19. What is the secondary cause of AIHA?",
            img: "",
            choices: "Iron def///G6PD def///Parasite infection///SLE///DIC",
            answer: "SLE",
            select: "",
            explain: "Autoimmune Hemolytic Anemia (AIHA) คือภาวะที่ระบบภูมิคุ้มกันของร่างกายสร้างแอนติบอดีมาทำลายเม็ดเลือดแดงของตนเอง สามารถแบ่งเป็น primary (idiopathic) และ secondary ซึ่งเกิดจากโรคอื่นเป็นสาเหตุ Systemic Lupus Erythematosus (SLE) เป็นโรคแพ้ภูมิตัวเองที่พบว่าเป็นสาเหตุของ secondary AIHA ได้บ่อยที่สุด นอกจากนี้ยังอาจเกิดจากโรคมะเร็งต่อมน้ำเหลือง, การติดเชื้อบางชนิด หรือยาบางชนิด",
            state: false
        },
        {
            problem: "20. What is not seen in hemolytic anemia?",
            img: "",
            choices: "NRC///Schistocyte///Polychromasia///Macroovalocyte///Spherocyte",
            answer: "Macroovalocyte",
            select: "",
            explain: "ในภาวะโลหิตจางจากการแตกของเม็ดเลือดแดง (hemolytic anemia) ไขกระดูกจะตอบสนองโดยการสร้างเม็ดเลือดแดงเพิ่มขึ้น ทำให้พบ Polychromasia (Reticulocyte) และ Nucleated Red Cell (NRC) ในเลือดได้ อาจพบเม็ดเลือดแดงรูปร่างผิดปกติ เช่น Schistocyte (ใน MAHA) หรือ Spherocyte (ใน AIHA, hereditary spherocytosis) แต่ Macroovalocyte ซึ่งเป็นเม็ดเลือดแดงขนาดใหญ่และรูปไข่ เป็นลักษณะเด่นที่พบใน Megaloblastic anemia (เช่น การขาด Vitamin B12 หรือ Folate) ไม่ใช่ลักษณะของ hemolytic anemia ทั่วไป",
            state: false
        },
        {
            problem: "21. Which of the following conditions is presented with low MCV?",
            img: "",
            choices: "AHA///MAHA///Hereditary spherocytosis///Homozygous HbE///Homozygous Constant Spring",
            answer: "Homozygous HbE",
            select: "",
            explain: "Low MCV (Mean Corpuscular Volume) หมายถึงเม็ดเลือดแดงมีขนาดเล็ก (microcytic) Homozygous HbE เป็นภาวะที่เกิดจากความผิดปกติของฮีโมโกลบิน ทำให้การสร้างเม็ดเลือดแดงมีลักษณะเป็น microcytic และ hypochromic คล้ายกับ thalassemia trait ผู้ป่วยมักมีภาวะโลหิตจางเล็กน้อย ส่วนข้ออื่นมักจะมี MCV ปกติหรือสูง (เช่น Hereditary spherocytosis มักมี MCHC สูง, AIHA อาจมี MCV ปกติหรือสูง)",
            state: false
        },
        {
            problem: "22. CBC result shows WBC 45x10⁹ /L, PMN 55%, Lymphocyte 35%, Monocyte 6%, Eosinophil 4%, NRC/WBC = 240/100 จำนวน Neutrophil มีเท่าไร",
            img: "",
            choices: "7279 /mm³///13235 /mm³///24750 /mm³///45000 /mm³///10800 /mm³",
            answer: "7279 /mm³",
            select: "",
            explain: "การคำนวณจำนวน Neutrophil ที่แท้จริงต้องเริ่มจากการปรับแก้ค่า WBC ที่เครื่องนับอัตโนมัติรายงานมาก่อน เนื่องจากเครื่องจะนับ Nucleated Red Cells (NRC) ปนเป็น WBC ทำให้ค่าสูงเกินจริง สูตรคือ Corrected WBC = Uncorrected WBC x [100 / (100 + จำนวน NRC ที่พบต่อ WBC 100 ตัว)] ในกรณีนี้ Corrected WBC = 45,000 x [100 / (100+240)] ≈ 13,235 cells/mm³. จากนั้นนำค่า WBC ที่ปรับแก้แล้วมาคูณกับเปอร์เซ็นต์ของ Neutrophil (PMN) คือ 13,235 x 55% ≈ 7,279 cells/mm³.",
            state: false
        },
        {
            problem: "23. Hb 5.5 Hct 15% Reticulocyte count 15% ข้อใดถูก",
            img: "",
            choices: "Corrected reticulocyte count = 5%///RI = 2.5///เกิดจาก hemolysis///Bone marrow response is normal///Production more than normal 5 เท่า",
            answer: "Corrected reticulocyte count = 5%",
            select: "",
            explain: "การคำนวณ Corrected reticulocyte count ใช้สูตร: Reticulocyte count (%) x (Patient's Hct / Normal Hct) โดยใช้ Normal Hct ประมาณ 45% ดังนั้น Corrected count = 15% x (15/45) = 15% x (1/3) = 5% ข้อ A จึงเป็นข้อที่ถูกต้องจากการคำนวณโดยตรง ส่วนการคำนวณ Reticulocyte Production Index (RI) จะได้ RI = Corrected count / maturation factor = 5 / 2.5 = 2 ซึ่งบ่งชี้ว่าไขกระดูกตอบสนองได้ไม่เต็มที่นัก (inadequate response) สำหรับภาวะโลหิตจางที่รุนแรงระดับนี้",
            state: false
        },
        {
            problem: "24. Infectious mononucleosis with multiple cervical lymphadenopathy 1.5-2cm and splenomegaly. What could be seen in the blood smear?",
            img: "",
            choices: "Basophilia///Neutropenia///Atypical lymphocyte///Pseudo Pelger-Huey///Neutrophil with toxic granule",
            answer: "Atypical lymphocyte",
            select: "",
            explain: "Infectious mononucleosis ซึ่งส่วนใหญ่เกิดจากการติดเชื้อ Epstein-Barr virus (EBV) มีลักษณะทางห้องปฏิบัติการที่สำคัญคือการพบ Atypical lymphocyte ในสเมียร์เลือดจำนวนมาก (มักจะ >10-20% ของ lymphocyte ทั้งหมด) Atypical lymphocyte คือ T-lymphocyte ที่ถูกกระตุ้นให้มีขนาดใหญ่ขึ้น นิวเคลียสรูปร่างหลากหลาย และไซโทพลาสซึมติดสีฟ้าและมีปริมาณมาก ซึ่งเป็นการตอบสนองของร่างกายต่อ B-lymphocyte ที่ติดเชื้อไวรัส",
            state: false
        },
        {
            problem: "25. In a patient with infectious mononucleosis, what is the typical finding regarding lymphocyte count?",
            img: "",
            choices: "Relative lymphocytosis with absolute lymphopenia///Relative lymphocytosis with absolute lymphocytosis///Relative neutropenia with absolute lymphopenia///Normal lymphocyte count///Low atypical lymphocyte count",
            answer: "Relative lymphocytosis with absolute lymphocytosis",
            select: "",
            explain: "ในผู้ป่วย Infectious mononucleosis ผล CBC มักจะแสดงภาวะเม็ดเลือดขาวสูง (leukocytosis) โดยมีสัดส่วนของ Lymphocyte เพิ่มขึ้นอย่างเด่นชัด เรียกว่า Relative lymphocytosis (เช่น >50%) และเมื่อคำนวณเป็นจำนวนสัมบูรณ์ (absolute count) ก็มักจะสูงกว่าปกติด้วย (Absolute lymphocytosis, >4,000/mm³) ซึ่งส่วนใหญ่เป็นผลมาจากการเพิ่มขึ้นของ Atypical lymphocytes ที่ตอบสนองต่อการติดเชื้อ",
            state: false
        },
        {
            problem: "26. What causes leukemoid reaction?",
            img: "",
            choices: "Severe burn///Parasitic infection///Infectious mononucleosis///Non-Hodgkin's lymphoma///Myeloproliferative disorder",
            answer: "Severe burn",
            select: "",
            explain: "Leukemoid reaction คือภาวะที่มีจำนวนเม็ดเลือดขาวในเลือดสูงมาก (มักจะ > 50,000/mm³) และมีการเลื่อนซ้าย (left shift) อย่างชัดเจน ซึ่งดูคล้ายกับมะเร็งเม็ดเลือดขาว (leukemia) แต่เป็นเพียงปฏิกิริยาของร่างกายต่อภาวะรุนแรงต่างๆ สาเหตุที่พบได้บ่อยคือการติดเชื้อแบคทีเรียที่รุนแรง (severe bacterial infection) ภาวะอักเสบรุนแรง เช่น แผลไหม้ขนาดใหญ่ (Severe burn) หรือมะเร็งบางชนิดที่สร้างสารกระตุ้นไขกระดูก",
            state: false
        },
        {
            problem: "27. Which of the following participates in the intrinsic pathway?",
            img: "",
            choices: "IXa, VIIIa, Ca2+///IXa, VIIa, Ca2+///Tissue factor, VIIa, Ca2+///Va, Xa, Ca2+///IIa, Va, Xa",
            answer: "IXa, VIIIa, Ca2+",
            select: "",
            explain: "Intrinsic pathway ของกระบวนการแข็งตัวของเลือดเกี่ยวข้องกับการสร้าง intrinsic tenase complex ซึ่งเป็นเอนไซม์เชิงซ้อนที่ทำหน้าที่เปลี่ยน Factor X ไปเป็น Factor Xa เอนไซม์นี้ประกอบด้วย 3 ส่วนสำคัญคือ 1. เอนไซม์หลักคือ Factor IXa 2. โปรตีนตัวเร่ง (cofactor) คือ Factor VIIIa และ 3. แคลเซียมไอออน (Ca2+) ซึ่งทำหน้าที่เป็นสะพานเชื่อมบนผิวฟอสโฟลิพิดของเกล็ดเลือด",
            state: false
        },
        {
            problem: "28. Which of the following factors inhibits the intrinsic pathway?",
            img: "",
            choices: "Thrombin///Plasmin///Activated protein C & S///TFPI///Thrombomodulin",
            answer: "Activated protein C & S",
            select: "",
            explain: "Activated protein C (APC) ร่วมกับ cofactor คือ Protein S ทำหน้าที่เป็นสารต้านการแข็งตัวของเลือดที่สำคัญโดยการสลาย (inactivate) Factor Va และ Factor VIIIa ซึ่ง Factor VIIIa เป็น cofactor ที่จำเป็นอย่างยิ่งสำหรับ intrinsic tenase complex (IXa-VIIIa) ใน intrinsic pathway ดังนั้นการยับยั้ง Factor VIIIa โดย APC & S จึงเป็นการยับยั้ง intrinsic pathway โดยตรงและมีประสิทธิภาพสูง",
            state: false
        },
        {
            problem: "29. Which of the following enhances antithrombin III activity?",
            img: "",
            choices: "Heparin///Antiplasmin///Fibrin///Factor X///PAI",
            answer: "Heparin",
            select: "",
            explain: "Heparin เป็นสารต้านการแข็งตัวของเลือด (anticoagulant) ที่ออกฤทธิ์โดยการจับกับ Antithrombin III (AT) การจับกันนี้จะทำให้โครงสร้างของ AT เปลี่ยนแปลงไปและเพิ่มความสามารถในการยับยั้ง clotting factors ต่างๆ โดยเฉพาะ Thrombin (Factor IIa) และ Factor Xa ได้เร็วขึ้นหลายพันเท่า ดังนั้น Heparin จึงทำหน้าที่เป็นตัวเร่งปฏิกิริยา (catalyst) ของ Antithrombin III",
            state: false
        },
        {
            problem: "30. If PAI-1 and PAI-2 are overexpressed, what will happen?",
            img: "",
            choices: "Clot lysis is slowed///Thrombosis is activated///Fibrinolysis is inhibited///Plasminogen activator is reduced///Plasmin formation is increased",
            answer: "Fibrinolysis is inhibited",
            select: "",
            explain: "PAI-1 และ PAI-2 (Plasminogen Activator Inhibitor-1 and -2) เป็นตัวยับยั้งหลักของ tissue plasminogen activator (tPA) และ urokinase-type plasminogen activator (uPA) ซึ่งเอนไซม์ทั้งสองทำหน้าที่เปลี่ยน plasminogen ให้เป็น plasmin เพื่อสลายลิ่มเลือด (fibrinolysis) ดังนั้นหาก PAI-1 และ PAI-2 มีการทำงานเพิ่มขึ้น (overexpressed) จะทำให้กระบวนการสลายลิ่มเลือดถูกยับยั้ง (Fibrinolysis is inhibited) ส่งผลให้ลิ่มเลือดสลายได้ช้าลงและเพิ่มความเสี่ยงต่อการเกิดภาวะลิ่มเลือดอุดตัน (thrombosis)",
            state: false
        },
        {
            problem: "31. A 77 years old patient with liver disease came with a bleeding disorder. What is the cause of the bleeding disorder?",
            img: "",
            choices: "Vitamin K deficiency///Prothrombin deficiency///Platelet deficiency///Deficiency of multiple coagulation factors///High plasmin",
            answer: "Deficiency of multiple coagulation factors",
            select: "",
            explain: "โรคตับรุนแรง (severe liver disease) ทำให้เกิดภาวะเลือดออกผิดปกติได้จากหลายสาเหตุร่วมกัน เนื่องจากตับเป็นแหล่งสร้าง clotting factors เกือบทุกชนิด (เช่น Prothrombin (II), V, VII, IX, X, XI, fibrinogen) เมื่อตับวายจึงไม่สามารถสร้างโปรตีนเหล่านี้ได้ นอกจากนี้ตับยังสร้าง thrombopoietin (TPO) ที่กระตุ้นการสร้างเกล็ดเลือดลดลง ทำให้เกล็ดเลือดต่ำ (thrombocytopenia) และอาจมีการดูดซึมวิตามินเคบกพร่องด้วย ดังนั้นสาเหตุที่ครอบคลุมที่สุดคือการขาดปัจจัยการแข็งตัวของเลือดหลายชนิด",
            state: false
        },
        {
            problem: "32. What is the pathophysiology of DIC?",
            img: "",
            choices: "Inhibit fibrinolysis///Plt. dysfunction///Procoag. Inactivation///BM failure///Natural anticoag. consumption",
            answer: "Natural anticoag. consumption",
            select: "",
            explain: "Disseminated Intravascular Coagulation (DIC) เป็นภาวะพยาธิสภาพที่ซับซ้อนซึ่งมีการกระตุ้นกระบวนการแข็งตัวของเลือดอย่างรุนแรงและทั่วร่างกาย (widespread activation of coagulation) ทำให้มีการใช้ clotting factors และเกล็ดเลือดไปอย่างมหาศาลเพื่อสร้างลิ่มเลือดขนาดเล็ก ในขณะเดียวกัน สารต้านการแข็งตัวของเลือดตามธรรมชาติ (Natural anticoagulants) เช่น Antithrombin, Protein C, Protein S ก็จะถูกใช้ไปจนหมดสิ้น (consumption) เมื่อร่างกายไม่สามารถควบคุมการแข็งตัวของเลือดได้แล้ว ก็จะเข้าสู่ภาวะที่สองคือการสลายลิ่มเลือด (fibrinolysis) อย่างรุนแรง ทำให้เกิดภาวะเลือดออกผิดปกติรุนแรงตามมา ดังนั้น การที่ natural anticoagulants ถูกใช้ไปจนหมดเป็นกลไกสำคัญที่ทำให้โรคดำเนินต่อไป",
            state: false
        },
        {
            problem: "33. ผู้ป่วย 42 ปีมาด้วย ileocecal mass ตรวจเจอ high grade lymphoma with starry sky pattern ข้อใดถูกต้อง",
            img: "",
            choices: "BCR-ABL gene fusion///BCL2 overexpression///Cyclin d overexpression///Translocation ใน c-Myc gene///p53 mutation",
            answer: "Translocation ใน c-Myc gene",
            select: "",
            explain: "ลักษณะทางพยาธิวิทยาที่เรียกว่า 'starry sky pattern' เป็นลักษณะคลาสสิกของ Burkitt lymphoma ซึ่งเป็นมะเร็งต่อมน้ำเหลืองชนิด high-grade B-cell lymphoma พยาธิกำเนิดของ Burkitt lymphoma เกี่ยวข้องกับการย้ายที่ของยีน (translocation) ที่ควบคุมการเจริญเติบโตของเซลล์ คือ c-Myc gene ซึ่งส่วนใหญ่มักเป็นการย้ายที่ระหว่างโครโมโซมคู่ที่ 8 และ 14 หรือ t(8;14) ทำให้ c-Myc gene ถูกควบคุมโดย immunoglobulin heavy chain gene enhancer ส่งผลให้มีการแสดงออกของโปรตีน c-Myc มากเกินไปและเซลล์แบ่งตัวอย่างไม่หยุดยั้ง",
            state: false
        },
        {
            problem: "34. Factor IX = 2% diag อะไร",
            img: "",
            choices: "Severe hemophilia A///Moderate hemophilia B///Mild hemophilia B///Severe hemophilia B///Moderate hemophilia A",
            answer: "Moderate hemophilia B",
            select: "",
            explain: "Hemophilia คือโรคเลือดออกง่ายถ่ายทอดทางพันธุกรรมที่เกิดจากการขาด clotting factor โดย Hemophilia A เกิดจากการขาด Factor VIII และ Hemophilia B เกิดจากการขาด Factor IX การแบ่งความรุนแรงของโรคจะใช้ระดับ activity ของ factor ที่เหลืออยู่: Severe (<1%), Moderate (1-5%), และ Mild (>5-40%) ในกรณีนี้ผู้ป่วยมี Factor IX เหลือ 2% ซึ่งจัดอยู่ในกลุ่ม Moderate และเป็น Hemophilia B",
            state: false
        },
        {
            problem: "35. A 16 years old man has non-stop bleeding after tooth extraction. What is the most helpful history to help with the diagnosis?",
            img: "",
            choices: "His mother brother has a history of bleeding///His sister has a bleeding disorder///History of taking paracetamol///History of dark urine///History of bleeding per gum during tooth brushing",
            answer: "His mother brother has a history of bleeding",
            select: "",
            explain: "อาการเลือดออกไม่หยุดหลังทำฟันในผู้ชายอายุน้อย ทำให้สงสัยโรคในกลุ่ม Hemophilia (A หรือ B) ซึ่งเป็นโรคที่ถ่ายทอดทางพันธุกรรมแบบ X-linked recessive หมายความว่ายีนผิดปกติอยู่บนโครโมโซม X และมักแสดงอาการในเพศชาย โดยได้รับการถ่ายทอดมาจากแม่ที่เป็นพาหะ ดังนั้นประวัติที่สำคัญที่สุดคือประวัติการมีเลือดออกผิดปกติในญาติสายแม่ที่เป็นผู้ชาย เช่น ลุง (พี่ชาย/น้องชายของแม่ - mother's brother) หรือตา",
            state: false
        },
        {
            problem: "36. 40-year-old woman, easily fatigued and jaundice for 1 week. PE: moderate pale, mild icteric sclera, no hepatosplenomegaly",
            img: "",
            choices: "Thalassemia///Hemophilia///Aplastic Anemia///G6PD deficiency///AIHA",
            answer: "AIHA",
            select: "",
            explain: "ผู้ป่วยหญิงมีอาการอ่อนเพลีย (จากภาวะโลหิตจาง) และตัวเหลืองตาเหลือง (jaundice) ซึ่งเกิดจากการมี unconjugated bilirubin สูงจากการแตกของเม็ดเลือดแดง (hemolysis) การที่อาการเกิดขึ้นค่อนข้างเร็ว (1 week) และตรวจไม่พบตับม้ามโต (no hepatosplenomegaly) ทำให้นึกถึงภาวะ Autoimmune Hemolytic Anemia (AIHA) มากที่สุด เพราะเป็นการทำลายเม็ดเลือดแดงที่เกิดขึ้นอย่างเฉียบพลันได้ ส่วน Thalassemia เป็นโรคเรื้อรังและมักมีม้ามโต, Hemophilia มีอาการเลือดออกผิดปกติ, G6PD มักมีประวัติสัมผัสสิ่งกระตุ้น",
            state: false
        },
        {
            problem: "37. Which of the following indicates a coagulation disorder?",
            img: "",
            choices: "epistaxis///hemarthrosis///ecchymosis///petechial hemorrhage///gum bleeding",
            answer: "hemarthrosis",
            select: "",
            explain: "ลักษณะการเลือดออกสามารถช่วยแยกระหว่างความผิดปกติของเกล็ดเลือด/หลอดเลือด (primary hemostasis) กับความผิดปกติของ clotting factors (secondary hemostasis หรือ coagulation disorder) ได้ โดย petechiae, ecchymosis, epistaxis, gum bleeding มักพบในความผิดปกติของเกล็ดเลือด แต่การมีเลือดออกในข้อ (hemarthrosis) หรือในกล้ามเนื้อ (muscle hematoma) เป็นลักษณะจำเพาะของ Coagulation disorder เช่น โรค Hemophilia",
            state: false
        },
        {
            problem: "38. A 30-year-old female presents with easily fatigue for 4 months. PE: markedly pale, anicteric sclera, glossitis, no hepatosplenomegaly. What is the most likely diagnosis?",
            img: "",
            choices: "Aplastic anemia///Thalassemia///Iron deficiency anemia///AIHA///Chronic renal failure",
            answer: "Iron deficiency anemia",
            select: "",
            explain: "ผู้ป่วยหญิงวัยเจริญพันธุ์มีอาการอ่อนเพลียมา 4 เดือน (บ่งถึงภาวะโลหิตจางเรื้อรัง) ตรวจร่างกายพบว่าซีดมาก (markedly pale), ตาไม่เหลือง (anicteric sclera, บ่งว่าไม่ใช่ hemolysis รุนแรง), และที่สำคัญคือมีลิ้นเลี่ยนอักเสบ (glossitis) ซึ่งเป็นอาการแสดงที่จำเพาะของการขาดธาตุเหล็ก (iron deficiency) ลักษณะทั้งหมดนี้ทำให้นึกถึง Iron Deficiency Anemia (IDA) มากที่สุด",
            state: false
        },
        {
            problem: "39. Which of the following conditions can cause bleeding disorder?",
            img: "",
            choices: "Hepatocellular carcinoma///End stage renal disease///Nephrotic syndrome///Pregnancy///Protein-energy malnutrition",
            answer: "Hepatocellular carcinoma",
            select: "",
            explain: "ภาวะเลือดออกผิดปกติ (bleeding disorder) สามารถเกิดได้จากหลายโรคที่ส่งผลต่อระบบเลือด มะเร็งตับ (Hepatocellular carcinoma) และโรคไตวายเรื้อรังระยะสุดท้าย (End stage renal disease) เป็นสาเหตุสำคัญ HCC มักเกิดในผู้ป่วยตับแข็ง ซึ่งตับไม่สามารถสร้าง clotting factor และ thrombopoietin ได้ ส่วน ESRD ทำให้เกิดภาวะ uremia ที่ส่งผลให้เกล็ดเลือดทำงานผิดปกติ (platelet dysfunction) ทั้งสองภาวะทำให้เลือดออกง่าย แต่ภาวะตับวายจาก HCC ส่งผลกระทบต่อระบบห้ามเลือดโดยรวมรุนแรงกว่า",
            state: false
        },
        {
            problem: "40. Which of the following conditions induce thrombocytopenia?",
            img: "",
            choices: "Severe burn///Pregnancy///Massive blood loss///Crush injury///Bacterial infection",
            answer: "Bacterial infection",
            select: "",
            explain: "ภาวะเกล็ดเลือดต่ำ (Thrombocytopenia) เกิดได้จากหลายสาเหตุ การติดเชื้อแบคทีเรียที่รุนแรง (Severe bacterial infection) โดยเฉพาะภาวะ Sepsis เป็นสาเหตุที่พบบ่อยมาก กลไกเกิดได้จาก 1. การเกิด DIC ทำให้มีการใช้เกล็ดเลือดไปจำนวนมาก 2. ภูมิคุ้มกันของร่างกายสร้างมาทำลายเกล็ดเลือด 3. ไขกระดูกถูกกดการทำงานจากสารพิษของแบคทีเรียหรือ cytokines ทำให้สร้างเกล็ดเลือดลดลง ส่วนสาเหตุอื่นเช่น การเสียเลือดปริมาณมาก (Massive blood loss) ก็ทำให้เกล็ดเลือดต่ำจากการสูญเสียและสารน้ำที่ให้ทดแทน (dilution)",
            state: false
        },
        {
            problem: "41. Which of the following is not associated with polycythemia?",
            img: "",
            choices: "Liver cirrhosis///Obstructive sleep apnea///Renal disease///Cerebellar hemangioma///Chronic lung disease",
            answer: "Liver cirrhosis",
            select: "",
            explain: "Polycythemia คือภาวะที่มีมวลเม็ดเลือดแดง (red cell mass) เพิ่มขึ้นผิดปกติ แบ่งเป็น primary (เช่น Polycythemia vera) และ secondary ซึ่งเกิดจากการกระตุ้นการสร้าง erythropoietin (EPO) อย่างเรื้อรัง สาเหตุของ secondary polycythemia ได้แก่ ภาวะขาดออกซิเจนเรื้อรัง เช่น Obstructive sleep apnea (B) หรือโรคปอด, เนื้องอกที่สร้าง EPO ได้เอง เช่น Renal cell carcinoma (C), Hepatocellular carcinoma, หรือ Cerebellar hemangioma (D) ส่วนโรคตับแข็ง (Liver cirrhosis) มักจะสัมพันธ์กับภาวะโลหิตจาง (anemia) จากหลายสาเหตุ ไม่ได้ทำให้เกิด polycythemia",
            state: false
        },
        {
            problem: "42. Leukocytosis with left shift is presented in all of these conditions except?",
            img: "",
            choices: "Severe hypoxia///Acute hemolysis///Massive blood loss///Acute viral infection///Severe bacterial infection",
            answer: "Acute viral infection",
            select: "",
            explain: "Leukocytosis with left shift คือการมีเม็ดเลือดขาวโดยเฉพาะนิวโทรฟิล (neutrophil) สูง และพบตัวอ่อนของนิวโทรฟิล (เช่น band forms, metamyelocytes) ในกระแสเลือด เป็นการตอบสนองของไขกระดูกต่อภาวะเครียดรุนแรงต่างๆ (acute stress) เช่น การติดเชื้อแบคทีเรียรุนแรง (E), ภาวะขาดออกซิเจนรุนแรง (A), การเสียเลือดปริมาณมาก (C), หรือการแตกของเม็ดเลือดแดงเฉียบพลัน (B) แต่ในการติดเชื้อไวรัสส่วนใหญ่ (Acute viral infection) ร่างกายจะตอบสนองโดยการสร้าง lymphocyte เพิ่มขึ้น (lymphocytosis) และอาจพบ atypical lymphocyte ไม่ใช่ neutrophilia with left shift",
            state: false
        },
        {
            problem: "43. Which condition is NOT associated with venous thrombo-embolism?",
            img: "",
            choices: "Hyperthyroidism///Nephrotic syndrome///Antiphospholipid syndrome///Chronic obstructive lung disease///Malignancy",
            answer: "Hyperthyroidism",
            select: "",
            explain: "Venous thromboembolism (VTE) คือภาวะลิ่มเลือดอุดตันในหลอดเลือดดำ มีปัจจัยเสี่ยงหลายอย่างตาม Virchow's triad (stasis, endothelial injury, hypercoagulability) ภาวะ Nephrotic syndrome (B) ทำให้ร่างกายสูญเสียโปรตีนต้านการแข็งตัวของเลือด (antithrombin III, protein C, S) ทางปัสสาวะ ทำให้เลือดแข็งตัวง่ายขึ้น (hypercoagulable state) Antiphospholipid syndrome (C) เป็นโรคภูมิคุ้มกันทำลายตนเองที่ทำให้เกิดภาวะเลือดแข็งตัวง่ายโดยตรง Chronic obstructive lung disease (COPD) (D) สัมพันธ์กับ VTE ผ่านการอักเสบเรื้อรัง, ภาวะเลือดข้น (polycythemia) จากการขาดออกซิเจน, และการเคลื่อนไหวที่ลดลง ส่วนภาวะ Hyperthyroidism ไม่ได้เป็นปัจจัยเสี่ยงโดยตรงที่ชัดเจนของ VTE",
            state: false
        }
    ],
    "HL46MCQ2": [
        {
            "problem": "1. A pregnant woman has headache, fever and myalgia. What is the major problem of zika virus infection in this case ?",
            "img": "",
            "choices": "Persistent infection///Congenital infection///Secondary infection///Autoantibody to fetus///Antibody-dependent enhancement",
            "answer": "Congenital infection",
            "select": "",
            "explain": "การติดเชื้อไวรัส Zika ในหญิงตั้งครรภ์มีความเสี่ยงที่สำคัญที่สุดคือการติดเชื้อแต่กำเนิด (Congenital infection) ซึ่งเชื้อไวรัสสามารถผ่านรกไปยังทารกในครรภ์ และส่งผลให้เกิดภาวะศีรษะเล็กแต่กำเนิด (microcephaly) และความผิดปกติทางระบบประสาทอื่นๆได้ ซึ่งเป็นภาวะแทรกซ้อนที่รุนแรงที่สุด",
            "state": false
        },
        {
            "problem": "2. The blood test of HIV infected with pulmonary tuberculosis showed low viral load, high CD4+, CD8+, what is the HIV state in this case?",
            "img": "",
            "choices": "Acute retroviral syndrome///Latent infection///Symptomatic NON-AIDS///AIDS///Asymptomatic infection",
            "answer": "Symptomatic NON-AIDS",
            "select": "",
            "explain": "ผู้ป่วยมี CD4 count สูง ซึ่งบ่งชี้ว่าระบบภูมิคุ้มกันยังไม่ถูกทำลายรุนแรงจนถึงขั้นเป็น AIDS (ซึ่งมักจะมี CD4 < 200 cells/mm3) แต่มีอาการของวัณโรคปอด (pulmonary tuberculosis) ซึ่งเป็นการติดเชื้อฉวยโอกาส ดังนั้นภาวะของผู้ป่วยจึงจัดอยู่ในกลุ่มผู้ติดเชื้อ HIV ที่มีอาการแต่ยังไม่เข้าเกณฑ์ AIDS (Symptomatic NON-AIDS)",
            "state": false
        },
        {
            "problem": "3. What is a key advantage of using a dried blood spot (DBS) test for HIV diagnosis in remote areas?",
            "img": "",
            "choices": "Higher accuracy than plasma tests///Sample stability without refrigeration///Ability to measure CD4 count directly///Lower risk of false positives///Requires a larger blood volume",
            "answer": "Sample stability without refrigeration",
            "select": "",
            "explain": "Dried Blood Spot (DBS) test มีข้อดีที่สำคัญคือ ตัวอย่างเลือดที่หยดบนกระดาษซับจะแห้งและคงตัวที่อุณหภูมิห้อง ทำให้ง่ายต่อการเก็บและขนส่งจากพื้นที่ห่างไกลไปยังห้องปฏิบัติการเพื่อทำการตรวจวินิจฉัย เช่น การทำ PCR เพื่อหาเชื้อ HIV โดยไม่จำเป็นต้องใช้ระบบโซ่ความเย็น (cold chain)",
            "state": false
        },
        {
            "problem": "4. A 20 year-old presented with acute fever hypotension and severe dyspnea. hemoculture showed S.aureus CXR: diffuse infiltration of both lungs. Which cause this hemodynamic change?",
            "img": "",
            "choices": "IL-8///TNF-gamma///Thrombin///IL-10///Nitric oxide",
            "answer": "Nitric oxide",
            "select": "",
            "explain": "ผู้ป่วยมีภาวะ Sepsis จากเชื้อ S.aureus ซึ่งนำไปสู่ภาวะช็อก (Septic shock) ที่มี hypotension และภาวะหายใจล้มเหลวเฉียบพลัน (ARDS) การเปลี่ยนแปลงทาง hemodynamic (hypotension) เกิดจากการขยายตัวของหลอดเลือดอย่างรุนแรง (vasodilation) ซึ่งมีสารสื่อกลางที่สำคัญคือ Nitric oxide (NO) ที่ถูกสร้างขึ้นในปริมาณมากเพื่อตอบสนองต่อการติดเชื้อ",
            "state": false
        },
        {
            "problem": "5. Male, fever myalgia 7 days, injected conjunctivae, anicteric conjunctivae, no hepatosplenomegaly BP 120/80 PR 90 RR 20 CBC WBC 9000 PMN Lymphocyte Monocyte Eo Baso ; all normal UA WBC 1-2 RBC 0-2, albumin trace. Treatment ?",
            "img": "",
            "choices": "ceftriaxone///doxycycline///90 percent NSS///ciprofloxacin///azithromycin",
            "answer": "doxycycline",
            "select": "",
            "explain": "จากอาการไข้ ปวดกล้ามเนื้อ และเยื่อบุตาแดง (injected conjunctivae) โดยไม่มีอาการตัวเหลืองตาเหลือง (anicteric) ทำให้นึกถึงโรค Leptospirosis (โรคฉี่หนู) ในระยะแรก (anicteric phase) ซึ่งการรักษาในผู้ป่วยที่อาการไม่รุนแรงคือการให้ยาปฏิชีวนะ Doxycycline",
            "state": false
        },
        {
            "problem": "6. A 55 year old man had high grade of fever, headache myalgia for 6 day. PE: injected conjunctivae, icteric sclera, hepatomegaly. BT 39 c BP 90/60 mmhg PR 110/min RR 28/min CBC HCT30 WBC 11500 PMN 75% L25% platelet count 90000 UA RBC 5-10cell/HP,protein 2+. What is an appropriate investigation?",
            "img": "",
            "choices": "Dengue IgM IgG///Weil felix test///MAT for leptospirosis///IFA for scrub typhus///Hemoculture",
            "answer": "MAT for leptospirosis",
            "select": "",
            "explain": "ผู้ป่วยมีอาการของ severe leptospirosis หรือ Weil's disease ซึ่งประกอบด้วยไข้สูง ดีซ่าน (icteric sclera) ไตวาย (proteinuria, RBC in urine) และเกล็ดเลือดต่ำ การตรวจวินิจฉัยที่เป็นมาตรฐาน (gold standard) สำหรับโรค Leptospirosis คือ Microscopic Agglutination Test (MAT) เพื่อตรวจหาแอนติบอดีต่อเชื้อ",
            "state": false
        },
        {
            "problem": "7. Pt 20 yo มี ppe เป็น cryptococcal meningitis tx.amphoB clinialดีขึ้น หลังจากนั้น ลง เจาะcsf open p สูง ถามว่าเกิดจากอะไร?",
            "img": "",
            "choices": "recurrent crypto///TB infection///resistant crypto///IRIS///Jarisch Herxheimer reaction",
            "answer": "IRIS",
            "select": "",
            "explain": "ผู้ป่วยน่าจะมีภาวะภูมิคุ้มกันบกพร่อง (สันนิษฐานจาก ppe) และเป็นเยื่อหุ้มสมองอักเสบจากเชื้อรา Cryptococcus อาการที่ดีขึ้นหลังได้ยา Amphotericin B แล้วกลับมาแย่ลงพร้อมกับความดันในน้ำไขสันหลังสูงขึ้น เป็นลักษณะคลาสสิกของ Immune Reconstitution Inflammatory Syndrome (IRIS) ซึ่งเกิดจากระบบภูมิคุ้มกันที่ฟื้นตัวกลับมาตอบสนองต่อเชื้อโรคอย่างรุนแรงเกินไป",
            "state": false
        },
        {
            "problem": "8. 40 year-old Thai male with AIDS presented with skin nodule. He has never leave Thailand and history of insect biting. Giemsa's stain found numerous round organism with size of 1-2 um in macrophage. What is the causative parasite?",
            "img": "https://drive.google.com/open?id=106qwl94ZubAv_M_u_kFUus8z7tbjFCYK&usp=drive_copy",
            "choices": "Toxoplasma gondii///Trypanosoma brucei///Trypanosoma cruzi///Leishmania martinigue///Plasmodium falciparum",
            "answer": "Leishmania martinigue",
            "select": "",
            "explain": "ผู้ป่วย AIDS ที่มีตุ่มที่ผิวหนัง และผลย้อม Giemsa พบเชื้อรูปกลมขนาดเล็ก 1-2 ไมครอนอยู่ภายใน macrophage เป็นลักษณะของเชื้อ Leishmania ในระยะ amastigote ซึ่ง Leishmania martinigue เป็นสายพันธุ์ที่พบได้ในประเทศไทยและสามารถทำให้เกิดโรคในผู้ป่วยภูมิคุ้มกันบกพร่องได้",
            "state": false
        },
        {
            "problem": "9. Laos patient presents with pale, fever, anorexia, weight loss and hepatomegaly. Fecal examination found parasite egg oval-shaped with lateral knob. What is the definite diagnosis",
            "img": "",
            "choices": "Fasciolopsiasis gigantica///Fasciolopsiasis buski///Schistosoma mekongi///Ascariasis lumbricoides///Opisthorchis viverrini",
            "answer": "Schistosoma mekongi",
            "select": "",
            "explain": "การตรวจพบไข่พยาธิรูปวงรีและมีปุ่มด้านข้าง (lateral knob) ในอุจจาระ เป็นลักษณะจำเพาะของพยาธิใบไม้ในเลือด Schistosoma spp. และเนื่องจากผู้ป่วยมาจากประเทศลาวซึ่งเป็นพื้นที่ระบาดของ Schistosoma mekongi จึงวินิจฉัยได้ว่าเป็นเชื้อสายพันธุ์นี้",
            "state": false
        },
        {
            "problem": "10. ให้รูป cutaneous leishmania มา. What is the causative parasite?",
            "img": "",
            "choices": "Leishmania tropica///Toxoplasma gondii///Plasmodium falciparum///Trypanosoma cruzi///Wuchereria bancrofti",
            "answer": "Leishmania tropica",
            "select": "",
            "explain": "ภาพแสดงรอยโรคที่ผิวหนังซึ่งเป็นลักษณะของ Cutaneous Leishmaniasis ซึ่งเกิดจากเชื้อโปรโตซัวในจีนัส Leishmania โดย Leishmania tropica เป็นหนึ่งในสายพันธุ์หลักที่ก่อให้เกิดโรคทางผิวหนัง",
            "state": false
        },
        {
            "problem": "11. What is the gold standard for parasitological of acute lymphatic filariasis?",
            "img": "",
            "choices": "Tissue biopsy///Giemsa stain of thick blood film///Xenodiagnosis///X-rays imaging///Immunochromatographic test",
            "answer": "Giemsa stain of thick blood film",
            "select": "",
            "explain": "การวินิจฉัยโรคพยาธิฟิลาเรียหรือโรคเท้าช้าง (Lymphatic filariasis) ที่เป็นมาตรฐานคือการตรวจหาตัวอ่อนพยาธิ (microfilariae) ในเลือด โดยการทำฟิล์มเลือดหนา (thick blood film) แล้วย้อมด้วยสี Giemsa ซึ่งมักจะต้องเจาะเลือดในเวลากลางคืนเนื่องจากเป็นช่วงที่ตัวอ่อนออกมาในกระแสเลือดมากที่สุด",
            "state": false
        },
        {
            "problem": "12. Which of the following information is true about human malaria in Thailand?",
            "img": "",
            "choices": "Vivax malaria is high prevalence than Falciparum malaria///Nowadays, human malaria is increase due to globalization///Malaria is waterborne disease, vector is mosquito///P. knowlesi is caused malignant malaria///Chloroquine is effective for all species",
            "answer": "Vivax malaria is high prevalence than Falciparum malaria",
            "select": "",
            "explain": "ในปัจจุบัน สถานการณ์โรคมาลาเรียในประเทศไทยมีการเปลี่ยนแปลง โดยพบว่าสัดส่วนของผู้ป่วยที่ติดเชื้อ Plasmodium vivax มีสูงกว่า Plasmodium falciparum ในหลายพื้นที่ ซึ่งแตกต่างจากในอดีตที่ P. falciparum เคยเป็นเชื้อเด่น",
            "state": false
        },
        {
            "problem": "13. Which parasite is the cause of thrombus in brain and kidney?",
            "img": "",
            "choices": "Plasmodium vivax///Plasmodium falciparum///Plasmodium ovale///Wuchereria bancrofti///Toxoplasma gondii",
            "answer": "Plasmodium falciparum",
            "select": "",
            "explain": "เชื้อมาลาเรียชนิด Plasmodium falciparum มีคุณสมบัติพิเศษในการสร้างโปรตีนบนผิวเม็ดเลือดแดงที่ติดเชื้อ ทำให้เม็ดเลือดแดงสามารถเกาะติดกับผนังหลอดเลือดฝอยในอวัยวะต่างๆ เช่น สมองและไต เกิดการอุดตัน (thrombus) และนำไปสู่ภาวะมาลาเรียรุนแรง เช่น มาลาเรียขึ้นสมอง (cerebral malaria) และไตวาย",
            "state": false
        },
        {
            "problem": "14. What is the mechanism of artemisinin",
            "img": "",
            "choices": "Interferes ETC///Inhibit heme polymerization///Produces heme-mediated radical///Inhibits DNA synthesis///Blocks protein synthesis",
            "answer": "Produces heme-mediated radical",
            "select": "",
            "explain": "ยา Artemisinin ออกฤทธิ์โดยการทำปฏิกิริยากับธาตุเหล็กในโมเลกุลฮีม (heme) ซึ่งมีอยู่มากในเชื้อมาลาเรียที่กำลังย่อยสลายฮีโมโกลบิน ปฏิกิริยานี้ทำให้เกิดอนุมูลอิสระ (free radicals) ที่มีความรุนแรงและเป็นพิษต่อโปรตีนและส่วนประกอบต่างๆ ของเซลล์เชื้อมาลาเรีย ทำให้เชื้อตาย",
            "state": false
        },
        {
            "problem": "15. What is the possible complication of using high dose Quinine for treating malaria?",
            "img": "",
            "choices": "Auditory abnormalities///Hypocalcemia///Hypertension///Hyperthermia///Hyperuricemia",
            "answer": "Auditory abnormalities",
            "select": "",
            "explain": "การใช้ยา Quinine ในขนาดสูงอาจทำให้เกิดกลุ่มอาการที่เรียกว่า Cinchonism ซึ่งมีอาการแสดงที่หลากหลาย ผลข้างเคียงที่พบบ่อยและเป็นลักษณะเฉพาะคือความผิดปกติเกี่ยวกับการได้ยิน เช่น หูอื้อ (tinnitus) การได้ยินลดลง ไปจนถึงหูหนวกชั่วคราวได้",
            "state": false
        },
        {
            "problem": "16. Man เที่ยวอินโดนีเซีย resistant chloroquine กินอะไร prophylaxis",
            "img": "",
            "choices": "Doxycycline///Mefloquine///Atovaquone///Quinidine///Primaquine",
            "answer": "Doxycycline",
            "select": "",
            "explain": "ประเทศอินโดนีเซียเป็นพื้นที่ที่มีการดื้อยา Chloroquine ของเชื้อมาลาเรีย การเลือกยาป้องกัน (prophylaxis) สำหรับผู้ที่จะเดินทางไปพื้นที่ดังกล่าวมีหลายทางเลือก ได้แก่ Doxycycline, Mefloquine หรือ Atovaquone-proguanil ซึ่ง Doxycycline เป็นยาที่นิยมใช้กันอย่างแพร่หลาย",
            "state": false
        },
        {
            "problem": "17. Which drugs for chloroquine-resistant of acute attack P. vivax but doesn't eradicate erythrocytic forms of the parasite?",
            "img": "",
            "choices": "Tetracycline///Primaquine///Quinidine///Pyrimethamine + Sulfadoxine///Quinine sulfate + Doxycycline",
            "answer": "Primaquine",
            "select": "",
            "explain": "ยา Primaquine เป็นยาที่ใช้ในการรักษาเชื้อมาลาเรียชนิด P. vivax และ P. ovale ที่ดื้อยา Chloroquine ได้ดี โดยเฉพาะในระยะเม็ดเลือดแดง (schizont) และยังสามารถกำจัดเชื้อในระยะที่แฝงอยู่ในเซลล์ตับ (hypnozoite) ซึ่งเป็นสาเหตุของการกลับเป็นซ้ำของโรคได้ อย่างไรก็ตาม Primaquine ไม่ได้มีฤทธิ์ในการกำจัดเชื้อในระยะเม็ดเลือดแดง (erythrocytic forms) อย่างเดียว",
            "state": false
        },
        {
            "problem": "18. จากข้อ 16 ใช้ยาอะไรฆ่า schizont และ latent hypnozoite ในตับ",
            "img": "",
            "choices": "Artesunate///Mefloquine///Doxycycline///Primaquine///Pyrimethamine-Sulfadoxine",
            "answer": "Primaquine",
            "select": "",
            "explain": "ยาที่สามารถกำจัดเชื้อมาลาเรียในระยะแฝงในเซลล์ตับ (latent hypnozoite) ซึ่งเป็นสาเหตุของการกลับเป็นซ้ำของเชื้อ P. vivax และ P. ovale ได้คือยา Primaquine เท่านั้น ส่วนยาอื่นๆ ในตัวเลือกใช้สำหรับกำจัดเชื้อในระยะเม็ดเลือดแดง (schizont)",
            "state": false
        },
        {
            "problem": "19. ผู้ป่วยเป็น major thalassemia Hct 21% ต้องการให้เลือดจนมี Hct 27% ต้องเลือกอะไร",
            "img": "",
            "choices": "1 unit pack red cell///2 unit pack red cell///1 unit LPRC///2 unit LPRC///3 unit LDRC",
            "answer": "2 unit LPRC",
            "select": "",
            "explain": "ผู้ป่วย Thalassemia major ที่ต้องรับเลือดเป็นประจำ ควรได้รับเลือดที่เป็น Leukocyte-Poor Red Cells (LPRC) เพื่อลดปฏิกิริยาไม่พึงประสงค์จากการให้เลือด โดยทั่วไปการให้ PRC 1 unit จะเพิ่ม Hematocrit (Hct) ได้ประมาณ 3% ดังนั้นการเพิ่ม Hct จาก 21% เป็น 27% (เพิ่มขึ้น 6%) จึงต้องใช้เลือดประมาณ 2 units LPRC",
            "state": false
        },
        {
            "problem": "20. Patient with Aplastic anemia. Recently got petechiae for 1 day. He plans for receiving bone marrow stem cell transplantation. ให้อะไร",
            "img": "",
            "choices": "LPRC///RDP///SDP///FFP///Cryoprecipitate",
            "answer": "SDP",
            "select": "",
            "explain": "ผู้ป่วย Aplastic anemia มีภาวะไขกระดูกฝ่อ ทำให้สร้างเม็ดเลือดได้น้อย อาการ petechiae บ่งชี้ว่ามีภาวะเกล็ดเลือดต่ำรุนแรงและมีความเสี่ยงที่จะมีเลือดออก จึงจำเป็นต้องให้เกล็ดเลือด สำหรับผู้ป่วยที่รอการปลูกถ่ายไขกระดูก ควรเลือกให้ Single Donor Platelets (SDP) เพื่อลดความเสี่ยงในการสร้างแอนติบอดีต่อ HLA (alloimmunization) ซึ่งอาจส่งผลต่อความสำเร็จของการปลูกถ่ายไขกระดูก",
            "state": false
        },
        {
            "problem": "21. เด็กชายเป็น beta thalassemia ได้รับ blood transfusion ทุกเดือนมา 3 ปี ถามว่า adverse effect ของการรับเลือดคือ",
            "img": "",
            "choices": "Iron overload///Erythrocytosis///Transfusion transmitted disease///TACO///Alloimmunization",
            "answer": "Iron overload",
            "select": "",
            "explain": "ผลข้างเคียงระยะยาวที่สำคัญที่สุดในผู้ป่วยธาลัสซีเมียที่ได้รับการให้เลือดเป็นประจำ (chronic transfusion) คือภาวะธาตุเหล็กเกิน (Iron overload) หรือ secondary hemochromatosis เนื่องจากร่างกายไม่มีกลไกในการขับธาตุเหล็กส่วนเกินออกจากร่างกายได้ ทำให้ธาตุเหล็กไปสะสมตามอวัยวะต่างๆ เช่น หัวใจ ตับ และตับอ่อน จนเกิดความเสียหายได้",
            "state": false
        },
        {
            "problem": "22. What is the molecular pathogenesis of MPN?",
            "img": "",
            "choices": "Growth factor independent///Overproduction of anti-apoptotic protein///Chromosomal translocation///Epigenetic silencing///Defective DNA repair",
            "answer": "Growth factor independent",
            "select": "",
            "explain": "พยาธิกำเนิดระดับโมเลกุลของกลุ่มโรค Myeloproliferative Neoplasms (MPN) มีความเกี่ยวข้องกับการกลายพันธุ์ของยีนที่ควบคุมการส่งสัญญาณภายในเซลล์ เช่น JAK2, CALR, MPL ซึ่งการกลายพันธุ์นี้ทำให้เซลล์ต้นกำเนิดเม็ดเลือดมีการเจริญเติบโตและแบ่งตัวอย่างต่อเนื่องโดยไม่ต้องอาศัยการกระตุ้นจาก Growth factor ตามปกติ (Growth factor independent)",
            "state": false
        },
        {
            "problem": "23. the 28-year-old male presented with shortness of breath, facial and arms swelling. Tissue biopsy from anterior mediastinal mass found non-Hodgkin lymphoma. What is the following that is most likely the origin of the tumor?",
            "img": "",
            "choices": "Plasma cell///B cell precursor///T cell precursor///Mature B cell///Peripheral T cell",
            "answer": "T cell precursor",
            "select": "",
            "explain": "การพบก้อนในช่องอกส่วนหน้า (anterior mediastinal mass) ในผู้ป่วยชายวัยหนุ่มสาว เป็นลักษณะการนำเสนอที่คลาสสิกของ T-cell lymphoblastic lymphoma ซึ่งเป็นมะเร็งต่อมน้ำเหลืองชนิด non-Hodgkin ที่มีต้นกำเนิดมาจากเซลล์ตั้งต้นของ T-lymphocyte (T cell precursor) ในต่อมไทมัส",
            "state": false
        },
        {
            "problem": "24. A 27 years old female came with lymphadenopathy. Biopsy found reed sternberg cells. What is the diagnosis?",
            "img": "",
            "choices": "Burkitt lymphoma///T cell lymphoma///B cell lymphoma///Classical hodgkin lymphoma///Large B cell lymphoma",
            "answer": "Classical hodgkin lymphoma",
            "select": "",
            "explain": "การตรวจพบเซลล์ Reed-Sternberg (RS cells) ซึ่งเป็นเซลล์ขนาดใหญ่ มีนิวเคลียสหลายแฉกหรือสองอันคล้ายตานกฮูก (owl's eyes) จากการตัดชิ้นเนื้อต่อมน้ำเหลืองไปตรวจ เป็นลักษณะทางพยาธิวิทยาที่จำเพาะเจาะจงและใช้ในการวินิจฉัยโรคมะเร็งต่อมน้ำเหลืองชนิดฮอดจ์กิน (Hodgkin lymphoma)",
            "state": false
        },
        {
            "problem": "25. What is the most common hematologic neoplasm in children?",
            "img": "",
            "choices": "T-lymphoblastic lymphoma///B-lymphoblastic lymphoma///T-lymphoblastic leukemia///B-lymphoblastic leukemia///Acute myeloblastic anemia",
            "answer": "B-lymphoblastic leukemia",
            "select": "",
            "explain": "มะเร็งทางโลหิตวิทยาที่พบบ่อยที่สุดในเด็กคือ มะเร็งเม็ดเลือดขาวชนิดเฉียบพลัน Acute Lymphoblastic Leukemia (ALL) และในกลุ่ม ALL นี้ ชนิดย่อยที่พบบ่อยที่สุดคือชนิดที่มีต้นกำเนิดจาก B-cell precursor หรือที่เรียกว่า B-lymphoblastic leukemia (B-ALL)",
            "state": false
        },
        {
            "problem": "26. ผู้ป่วย 42 ปีมาด้วย ileocecal mass ตรวจเจอhigh grade lymphoma with starry sky pattern ข้อใดถูกต้อง",
            "img": "",
            "choices": "Bcr abl gene fusion///Bcl 2 overexpression///Cyclin d overexpression///Translocation ใน c-Myc gene///JAK2 mutation",
            "answer": "Translocation ใน c-Myc gene",
            "select": "",
            "explain": "ลักษณะทางพยาธิวิทยาแบบ 'starry sky pattern' เป็นลักษณะคลาสสิกของ Burkitt lymphoma ซึ่งเป็น high-grade lymphoma พยาธิกำเนิดของโรคนี้เกี่ยวข้องกับการย้ายตำแหน่งของโครโมโซม (translocation) ที่นำ c-Myc gene (บนโครโมโซมคู่ที่ 8) ไปอยู่ภายใต้การควบคุมของยีนที่สร้าง immunoglobulin (เช่น คู่ที่ 14) ทำให้มีการแสดงออกของ c-Myc มากผิดปกติและกระตุ้นการแบ่งตัวของเซลล์อย่างรวดเร็ว",
            "state": false
        },
        {
            "problem": "27. cbc เจอ rouleaux formation lab อื่นจะเจออะไร",
            "img": "",
            "choices": "Hypernatremia///Hypocalcemia///Osteoblast stimulation///Purely osteolytic lesion///Leukoerythroblastic blood picture",
            "answer": "Purely osteolytic lesion",
            "select": "",
            "explain": "การพบ Rouleaux formation (เม็ดเลือดแดงเรียงซ้อนกันเหมือนเหรียญ) บ่งชี้ว่ามีโปรตีนในพลาสมาสูง โดยเฉพาะอย่างยิ่ง immunoglobulin ซึ่งพบบ่อยในโรค Multiple Myeloma (MM) ในโรค MM เซลล์มะเร็งพลาสมาจะหลั่งสารกระตุ้นให้เกิดการสลายกระดูก (osteoclast activation) ทำให้เกิดรอยโรคในกระดูกแบบ lytic lesion (purely osteolytic lesion) ซึ่งสามารถเห็นได้จากภาพถ่ายรังสี",
            "state": false
        },
        {
            "problem": "28. Young boy patient receives blood transfusion for his thalassemia. Which is the administration to prevent the development of hemochromatosis?",
            "img": "",
            "choices": "Activated charcoal///Ferroportin///Deferoxamine///Tocoferol///Folic acid",
            "answer": "Deferoxamine",
            "select": "",
            "explain": "Hemochromatosis คือภาวะธาตุเหล็กเกินในร่างกาย ซึ่งเป็นผลข้างเคียงที่สำคัญจากการรับเลือดเป็นประจำในผู้ป่วยธาลัสซีเมีย การป้องกันและรักษาภาวะนี้คือการให้ยาขับธาตุเหล็ก (iron chelator) เพื่อจับกับธาตุเหล็กส่วนเกินและขับออกจากร่างกาย ซึ่ง Deferoxamine เป็นหนึ่งในยาขับธาตุเหล็กที่ใช้กันมานาน",
            "state": false
        },
        {
            "problem": "29. Which of the following is the pharmacological effect of folic acid.",
            "img": "",
            "choices": "Folic acid is use to treat hypochromic microcytic rbc///Folic acid is cofactor of B12///An increase methyl malonyl CoA is indicator for folate deficiency///Folate cause Neural tube defect in fetus///Folate stimulate the differentiation of erythroid progenitor cells",
            "answer": "Folate stimulate the differentiation of erythroid progenitor cells",
            "select": "",
            "explain": "กรดโฟลิก (Folic acid) เป็นวิตามินที่จำเป็นในกระบวนการสังเคราะห์ DNA ซึ่งมีความสำคัญอย่างยิ่งต่อเซลล์ที่มีการแบ่งตัวรวดเร็ว เช่น เซลล์ต้นกำเนิดเม็ดเลือดแดงในไขกระดูก (erythroid progenitor cells) การมีโฟลิกอย่างเพียงพอจะช่วยกระตุ้นให้เซลล์เหล่านี้เจริญเติบโตและพัฒนาไปเป็นเม็ดเลือดแดงที่สมบูรณ์ได้",
            "state": false
        },
        {
            "problem": "30. Which of the following drugs and its mechanism of action is correct",
            "img": "",
            "choices": "Dipyridamole : Phosphodiesterase stimulation///Aspirin : Thromboxane synthase inhibitor///Ticlopidine : Binding with intracellular myofilament///Cilostazol : Cyclooxygenase inhibitor///Abciximab : Binding with fibrinogen-receptor on platelet",
            "answer": "Abciximab : Binding with fibrinogen-receptor on platelet",
            "select": "",
            "explain": "Abciximab เป็นยาต้านเกล็ดเลือดในกลุ่ม Glycoprotein IIb/IIIa inhibitor โดยจะไปจับกับตัวรับ Glycoprotein IIb/IIIa บนผิวของเกล็ดเลือด ซึ่งตัวรับนี้ก็คือตัวรับของ Fibrinogen (fibrinogen-receptor) ทำให้ fibrinogen ไม่สามารถมาจับเพื่อเชื่อมเกล็ดเลือดเข้าด้วยกันได้ เป็นการยับยั้งขั้นตอนสุดท้ายของการเกาะกลุ่มของเกล็ดเลือด",
            "state": false
        },
        {
            "problem": "31. A 60 years old patient with a history of peptic ulcer needs a drug treatment of secondary prevention of ischemic stroke. Which of the following drugs is suitable?",
            "img": "",
            "choices": "Aspirin///Clopidogrel///Warfarin///Fondaparinux///Eptifibatide",
            "answer": "Clopidogrel",
            "select": "",
            "explain": "ผู้ป่วยที่มีประวัติเป็นโรคแผลในกระเพาะอาหาร (peptic ulcer) มีความเสี่ยงที่จะเกิดเลือดออกในทางเดินอาหารได้ง่ายหากใช้ยา Aspirin ซึ่งเป็นยาต้านเกล็ดเลือดมาตรฐานในการป้องกันโรคหลอดเลือดสมองขาดเลือด (ischemic stroke) ดังนั้น Clopidogrel ซึ่งเป็นยาต้านเกล็ดเลือดอีกกลุ่มหนึ่ง (P2Y12 inhibitor) จึงเป็นทางเลือกที่เหมาะสมกว่าเนื่องจากมีผลข้างเคียงต่อกระเพาะอาหารน้อยกว่า",
            "state": false
        },
        {
            "problem": "32. Which of the following about pharmacological activity of LMWH is correct?",
            "img": "",
            "choices": "LMWH is excreted via kidney.///LMWH has high protein binding///LMWH requires frequent monitoring///LMWH has a long half-life than UFH///LMWH can be fully reversed by protamine",
            "answer": "LMWH is excreted via kidney.",
            "select": "",
            "explain": "Low-Molecular-Weight Heparin (LMWH) ถูกกำจัดออกจากร่างกายผ่านทางไตเป็นหลัก ดังนั้นจึงต้องมีการปรับขนาดยาในผู้ป่วยที่มีการทำงานของไตบกพร่อง ซึ่งแตกต่างจาก Unfractionated Heparin (UFH) ที่ถูกกำจัดโดยระบบ reticuloendothelial system",
            "state": false
        },
        {
            "problem": "33. which of the followings is pharmacological properties of alteplase(t-pa)?",
            "img": "",
            "choices": "Selective ต่อก้อนthrombus///สลาย fibrin///Inhibits plasminogen///Has a long plasma half-life///Is an oral medication",
            "answer": "Selective ต่อก้อนthrombus",
            "select": "",
            "explain": "Alteplase หรือ tissue plasminogen activator (t-PA) เป็นยาละลายลิ่มเลือด (thrombolytic agent) ที่มีคุณสมบัติเด่นคือมีความจำเพาะต่อไฟบริน (fibrin-specific) โดยจะออกฤทธิ์เปลี่ยน plasminogen ให้เป็น plasmin ได้ดีกว่าเมื่อ plasminogen นั้นจับอยู่กับ fibrin ในก้อนลิ่มเลือด (thrombus) ทำให้ยาออกฤทธิ์ได้ค่อนข้างจำเพาะเจาะจงที่ตำแหน่งของลิ่มเลือด",
            "state": false
        },
        {
            "problem": "34. platelet count:normal, bleeding time:prolonged, whole blood clotting time:normal",
            "img": "",
            "choices": "Platelet dysfunction///Normal vessel integrity///Normal FVII///A,B are correct///A,B,C are correct",
            "answer": "Platelet dysfunction",
            "select": "",
            "explain": "ผลการทดสอบนี้แสดงให้เห็นว่าผู้ป่วยมีจำนวนเกล็ดเลือดปกติ (normal platelet count) และกระบวนการแข็งตัวของเลือดผ่านปัจจัยการแข็งตัวของเลือดปกติ (normal clotting time) แต่การทำงานของเกล็ดเลือดในการอุดบาดแผลเบื้องต้นผิดปกติ (prolonged bleeding time) ซึ่งชี้ได้ว่าสาเหตุเกิดจากความผิดปกติในเชิงคุณภาพของเกล็ดเลือด (Platelet dysfunction)",
            "state": false
        },
        {
            "problem": "35. ข้อใดถูกต้องเกี่ยวกับ Bleeding time",
            "img": "",
            "choices": "It is indicated for patients with severe thrombocytopenia.///The pressure cuff must be maintained at 80 mmHg.///Severe anemia (Hct < 30%) can cause a prolonged BT.///Aspirin must be discontinued for at least one month prior to the test.///A vertical incision provides more accurate results than a horizontal one.",
            "answer": "Severe anemia (Hct < 30%) can cause a prolonged BT.",
            "select": "",
            "explain": "Bleeding Time (BT) เป็นการทดสอบเพื่อประเมินการทำงานของกระบวนการห้ามเลือดปฐมภูมิ (Primary Hemostasis) โดยรวม\n\n*   **ภาวะเลือดจางรุนแรง (Hct < 30%) ทำให้ BT ยาวนานขึ้น (คำตอบ):** ในภาวะปกติ เม็ดเลือดแดง (RBCs) มีส่วนช่วยผลักดันให้เกล็ดเลือดไปชิดกับผนังหลอดเลือด (rheological effect) เพื่อสร้าง platelet plug เมื่อมีภาวะเลือดจางรุนแรง (severe anemia) ประสิทธิภาพของกระบวนการนี้จะลดลง ทำให้ Bleeding Time ยาวนานขึ้น (prolonged)\n\n*   **Thrombocytopenia:** ภาวะเกล็ดเลือดต่ำรุนแรงเป็น **ข้อห้าม (contraindication)** ในการทำ BT เพราะผลจะยาวนานขึ้นอย่างแน่นอนและเพิ่มความเสี่ยงให้ผู้ป่วย\n\n*   **ความดันที่ใช้:** ต้องรักษาระดับความดันที่รัดแขนไว้ที่ **40 mmHg** ตลอดการทดสอบ เพื่อให้ความดันในหลอดเลือดฝอยคงที่\n\n*   **การงดยา:** ควรงดยาที่มีผลต่อการทำงานของเกล็ดเลือด เช่น Aspirin และ NSAIDs เป็นเวลา **7-10 วัน** ก่อนตรวจ เนื่องจากเป็นระยะเวลาที่ร่างกายใช้สร้างเกล็ดเลือดชุดใหม่\n\n*   **ทิศทางการกรีด:** ไม่มีหลักฐานว่าการกรีดแนวตั้ง (vertical) หรือแนวราบ (horizontal) ให้ผลแม่นยำกว่ากัน แต่โดยทั่วไปนิยมกรีดแนวราบเพื่อลดการเกิดแผลเป็น (scarring)",
            "state": false
        },
        {
            "problem": "36. Which of the following is the correct interpretation for this coagulogram: normal PT, prolonged aPPT.",
            "img": "",
            "choices": "Factor VIII inhibitor///Factor VIII deficiency///Prothrombin deficiency///Factor X deficiency///Factor VII deficiency",
            "answer": "Factor VIII deficiency",
            "select": "",
            "explain": "ผล PT ปกติ แต่ aPTT ยาวผิดปกติ บ่งชี้ว่ามีความผิดปกติในระบบการแข็งตัวของเลือดในส่วน Intrinsic pathway ซึ่งประกอบด้วย Factors XII, XI, IX, และ VIII แต่ไม่กระทบต่อ Extrinsic (Factor VII) และ Common pathway (Factors X, V, II, I) สาเหตุที่พบบ่อยที่สุดของลักษณะผลตรวจแบบนี้คือการขาด Factor VIII (Hemophilia A) หรือการมี Factor VIII inhibitor",
            "state": false
        },
        {
            "problem": "37. cell grouping anti a neg, anti b neg, anti a&b neg ถามว่าผล serum grouping เป็นไง",
            "img": "",
            "choices": "A cell: aggutination 4+, B cell: hemolysis///A cell : aggutination 4+, B cell : negative///C. A cell : hemolysis, B cell : negative///D. A cell : negative, B cell : aggutination 4+///E. A cell : negative, B cell : hemolysis",
            "answer": "A cell: aggutination 4+, B cell: hemolysis",
            "select": "",
            "explain": "ผล Cell grouping (Forward typing) แสดงว่าเม็ดเลือดแดงของผู้ป่วยไม่ทำปฏิกิริยากับ Anti-A และ Anti-B แสดงว่าเป็นเลือดกรุ๊ป O ดังนั้นในน้ำเหลือง (serum) ของผู้ป่วยจะต้องมีแอนติบอดีทั้ง Anti-A และ Anti-B เมื่อนำน้ำเหลืองไปทดสอบกับ A cell และ B cell (Serum grouping หรือ Reverse typing) จะเกิดปฏิกิริยาขึ้นกับเซลล์ทั้งสองชนิด ซึ่งอาจเป็นได้ทั้งการจับกลุ่ม (agglutination) หรือการแตกของเม็ดเลือดแดง (hemolysis) ตัวเลือก A จึงเป็นคำตอบที่ถูกต้องที่สุดเพราะแสดงปฏิกิริยาบวกกับทั้ง A cell และ B cell",
            "state": false
        }
    ]
};
