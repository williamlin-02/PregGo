import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="preeclampsia">Preeclampsia</TabsTrigger>
              <TabsTrigger value="postpartum-hemorrhage">
                Postpartum Hemorrhage
              </TabsTrigger>
              <TabsTrigger value="maternal-sepsis">Maternal Sepsis</TabsTrigger>
              <TabsTrigger value="c-sections">C-Sections</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="flex justify-center">
                <Card className="w-3/4">
                  <CardContent>
                    <div className="text-xl font-semibold mb-4">
                      Overview: Understanding Pregnancy-Related Complications
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Pregnancy complications can pose significant risks to both
                      the mother and the baby. Early detection, proper
                      management, and informed decisions are key to preventing
                      and addressing these complications. Below are key
                      conditions that can arise during pregnancy:
                    </p>

                    <Separator className="my-2" />

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                      {/* Preeclampsia Card */}
                      <Card>
                        <CardContent>
                          <div className="text-lg font-semibold">
                            ⚠️ Preeclampsia
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            A serious condition involving **high blood
                            pressure** and potential organ damage, commonly
                            affecting the liver and kidneys.
                          </p>
                        </CardContent>
                      </Card>

                      {/* Post-partum Hemorrhage Card */}
                      <Card>
                        <CardContent>
                          <div className="text-lg font-semibold">
                            ⚠️ Post-partum Hemorrhage
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            A major cause of **bleeding after childbirth**,
                            which can lead to significant blood loss and may
                            require emergency intervention.
                          </p>
                        </CardContent>
                      </Card>

                      {/* Maternal Sepsis Card */}
                      <Card>
                        <CardContent>
                          <div className="text-lg font-semibold">
                            ⚠️ Maternal Sepsis
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            A life-threatening infection after childbirth that
                            requires immediate treatment to prevent severe
                            complications and death.
                          </p>
                        </CardContent>
                      </Card>

                      {/* Unnecessary C-Sections Card */}
                      <Card>
                        <CardContent>
                          <div className="text-lg font-semibold">
                            ⚠️ Unnecessary C-Sections
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            A **surgical procedure** that may be performed
                            without medical necessity, leading to unnecessary
                            risks for both the mother and the baby.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <Separator className="my-2" />

                    <p className="text-xs text-muted-foreground mt-4">
                      For **early detection** and **effective management**,
                      regular prenatal care and timely interventions are
                      essential in minimizing risks during pregnancy. Always
                      consult healthcare professionals for the best options for
                      both mother and baby.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="preeclampsia" className="space-y-4">
              <div className="flex justify-center">
                <Card className="w-3/4">
                  <CardContent>
                    <div className="text-xl font-semibold">
                      Preeclampsia: High Blood Pressure in Pregnancy
                    </div>

                    <p className="text-sm text-muted-foreground mt-2">
                      Preeclampsia is a serious pregnancy complication
                      characterized by **high blood pressure** and potential
                      organ damage, commonly affecting the liver and kidneys.
                    </p>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">⚠️ Symptoms</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Severe headaches</li>
                      <li>Swelling in hands, face, or legs</li>
                      <li>Blurred vision or light sensitivity</li>
                      <li>Shortness of breath</li>
                      <li>Protein in urine (sign of kidney damage)</li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">📌 Risk Factors</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>First-time pregnancy</li>
                      <li>History of high blood pressure</li>
                      <li>Carrying multiples (twins, triplets, etc.)</li>
                      <li>Diabetes or kidney disease</li>
                      <li>Obesity or poor diet</li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">
                      🩺 Treatment & Management
                    </p>
                    <p className="text-sm text-muted-foreground">
                      There is no cure for preeclampsia except **delivering the
                      baby**. Doctors may recommend:
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>
                        Monitoring blood pressure and urine protein levels
                      </li>
                      <li>Medications to lower blood pressure</li>
                      <li>Bed rest or hospitalization in severe cases</li>
                      <li>Early delivery if the condition worsens</li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-xs text-muted-foreground">
                      If you experience any symptoms, **seek immediate medical
                      attention** to prevent complications for both mother and
                      baby.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="postpartum-hemorrhage" className="space-y-4">
              <div className="flex justify-center">
                <Card className="w-3/4">
                  <CardContent>
                    <div className="text-xl font-semibold">
                      Postpartum Hemorrhage: Severe Bleeding After Birth
                    </div>

                    <p className="text-sm text-muted-foreground mt-2">
                      **Postpartum Hemorrhage (PPH)** is excessive bleeding
                      after childbirth, occurring in about **1-5% of
                      deliveries**. It can be life-threatening if not treated
                      promptly.
                    </p>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">⚠️ Symptoms</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>
                        Heavy or uncontrolled bleeding (more than **500ml after
                        vaginal birth**, **1000ml after C-section**)
                      </li>
                      <li>Rapid heart rate or palpitations</li>
                      <li>Dizziness or fainting</li>
                      <li>Pale, clammy skin</li>
                      <li>Low blood pressure (shock)</li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">
                      📌 Causes & Risk Factors
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>
                        **Uterine atony** (uterus fails to contract after birth)
                      </li>
                      <li>
                        **Retained placenta** (placenta or fragments remain in
                        the uterus)
                      </li>
                      <li>
                        **Tears in the birth canal** (cervix, vagina, or
                        perineum)
                      </li>
                      <li>**Blood clotting disorders**</li>
                      <li>Prolonged labor or **C-section delivery**</li>
                      <li>Multiple pregnancies (twins, triplets, etc.)</li>
                      <li>High blood pressure or **preeclampsia**</li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">
                      🩺 Treatment & Management
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Immediate medical intervention is necessary. Treatment
                      options include:
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>**Uterine massage** to stimulate contractions</li>
                      <li>
                        **Medications** (Oxytocin, Misoprostol) to help the
                        uterus contract
                      </li>
                      <li>**Removing retained placenta** if necessary</li>
                      <li>**Blood transfusion** in severe cases</li>
                      <li>
                        **Surgical procedures** (uterine artery embolization or
                        hysterectomy in extreme cases)
                      </li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-xs text-muted-foreground">
                      If excessive bleeding occurs after childbirth, **seek
                      emergency medical care** immediately. Early detection and
                      treatment can prevent severe complications.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="maternal-sepsis" className="space-y-4">
              <div className="flex justify-center">
                <Card className="w-3/4">
                  <CardContent>
                    <div className="text-xl font-semibold">
                      Maternal Sepsis: Severe Infection During Pregnancy or
                      After Birth
                    </div>

                    <p className="text-sm text-muted-foreground mt-2">
                      **Maternal sepsis** is a life-threatening infection during
                      pregnancy, childbirth, or postpartum. It is a major cause
                      of maternal mortality worldwide.
                    </p>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">⚠️ Symptoms</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Fever above **100.4°F (38°C)**</li>
                      <li>Rapid heart rate (**tachycardia**)</li>
                      <li>Shortness of breath or difficulty breathing</li>
                      <li>Severe chills or shivering</li>
                      <li>Confusion, dizziness, or fainting</li>
                      <li>Low blood pressure (**shock**)</li>
                      <li>Severe abdominal or pelvic pain</li>
                      <li>Foul-smelling vaginal discharge</li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">
                      📌 Causes & Risk Factors
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>
                        **Untreated infections** (UTIs, pneumonia, bacterial
                        vaginosis)
                      </li>
                      <li>**Prolonged or obstructed labor**</li>
                      <li>
                        **Cesarean section (C-section)** or invasive procedures
                      </li>
                      <li>**Retained placenta or fetal tissue**</li>
                      <li>**Poor hygiene** during childbirth</li>
                      <li>
                        Weakened immune system (diabetes, HIV, malnutrition)
                      </li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">
                      🩺 Treatment & Management
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Early treatment is critical to prevent septic shock.
                      Medical interventions include:
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>**Broad-spectrum antibiotics** to fight infection</li>
                      <li>**IV fluids** to maintain blood pressure</li>
                      <li>
                        **Surgical procedures** (removing infected tissue or
                        drainage)
                      </li>
                      <li>**Oxygen therapy** in severe cases</li>
                      <li>
                        **Blood pressure support** (vasopressors if needed)
                      </li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-xs text-muted-foreground">
                      Maternal sepsis can escalate rapidly. **Seek immediate
                      medical attention** if symptoms appear, especially after
                      childbirth.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="c-sections" className="space-y-4">
              <div className="flex justify-center">
                <Card className="w-3/4">
                  <CardContent>
                    <div className="text-xl font-semibold">
                      C-Sections: Rising Rates of Non-Medically Indicated
                      C-Sections
                    </div>

                    <p className="text-sm text-muted-foreground mt-2">
                      A **cesarean section (C-section)** is a surgical procedure
                      used to deliver a baby. While life-saving in certain
                      cases, an increasing number of C-sections are performed
                      without medical necessity, leading to potential **short-
                      and long-term risks**.
                    </p>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">
                      📊 Global Increase in C-Sections
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>
                        **WHO recommends** a C-section rate of **10-15%**, but
                        many countries exceed **30-50%**.
                      </li>
                      <li>
                        Unnecessary C-sections are often influenced by
                        **hospital policies, fear of labor pain, or scheduling
                        convenience**.
                      </li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">
                      ⚠️ Risks of Unnecessary C-Sections
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>
                        **Increased maternal mortality & morbidity** (bleeding,
                        infections, blood clots)
                      </li>
                      <li>
                        **Longer recovery time** compared to vaginal birth
                      </li>
                      <li>
                        **Breathing problems in newborns** (higher risk of
                        respiratory distress)
                      </li>
                      <li>
                        **Higher risk of complications in future pregnancies**
                        (placenta previa, uterine rupture)
                      </li>
                      <li>
                        **Increased neonatal intensive care unit (NICU)
                        admissions**
                      </li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">
                      🔍 Common Non-Medical Reasons for C-Sections
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>
                        **Fear of labor pain** (elective C-section for
                        convenience)
                      </li>
                      <li>
                        **Inductions leading to failed labor progression**
                      </li>
                      <li>
                        **Doctor or hospital preference** for scheduling
                        efficiency
                      </li>
                      <li>**Misinterpretation of fetal distress signs**</li>
                      <li>
                        **Previous C-section** (VBAC is often safe but
                        underused)
                      </li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">
                      ✅ When a C-Section is Medically Necessary
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>
                        **Placenta previa** (placenta blocking the cervix)
                      </li>
                      <li>**Fetal distress** (low oxygen levels)</li>
                      <li>
                        **Breech position** (sometimes can be turned manually)
                      </li>
                      <li>**Severe preeclampsia or maternal complications**</li>
                      <li>**Obstructed labor or uterine rupture risk**</li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-sm font-semibold">
                      🌿 Promoting Safe Birth Practices
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Encouraging **natural labor progression**</li>
                      <li>
                        Supporting **VBAC (Vaginal Birth After C-Section) when
                        safe**
                      </li>
                      <li>Improving **education on childbirth options**</li>
                      <li>Reducing **unnecessary labor inductions**</li>
                      <li>
                        Ensuring **C-sections are used only when truly needed**
                      </li>
                    </ul>

                    <Separator className="my-2" />

                    <p className="text-xs text-muted-foreground">
                      **C-sections save lives when necessary but carry risks
                      when overused.** Patients should be informed about their
                      **birthing options** to make the safest decision.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
