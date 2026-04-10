"use client";

import { useState } from "react";
import Button from "@/components/atoms/Button";
import Modal from "@/components/atoms/Modal";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import CarouselButton from "@/components/atoms/CarouselButton";
import UpButton from "@/components/atoms/UpButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AtomsShowcase({ dict }: { dict: Record<string, any> }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Buttons */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">{dict.uiKit.buttons}</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-base font-bold mb-3">Square Primary</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button text="Default" variant="squarePrimary" />
              <Button text="Disabled" variant="squarePrimary" disabled />
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold mb-3">Square Secondary</h3>
            <div className="flex flex-wrap gap-4 items-center p-6 bg-theme rounded-lg">
              <Button text="Default" variant="squareSecondary" />
              <Button text="Disabled" variant="squareSecondary" disabled />
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold mb-3">Underline Primary</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button text="ACCUEIL" variant="underlinePrimary" />
              <Button text="PARTENAIRES" variant="underlinePrimary" />
              <Button text="EVENEMENTS" variant="underlinePrimary" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold mb-3">Underline Secondary</h3>
            <div className="flex flex-wrap gap-4 items-center p-6 bg-theme rounded-lg">
              <Button text="Plan du site" variant="underlineSecondary" />
              <Button text="Licenses" variant="underlineSecondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">{dict.uiKit.modal}</h2>
        <Button text="Open Modal" variant="squarePrimary" onClick={() => setModalOpen(true)} />
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h3 className="text-lg font-bold text-theme mb-4">Modal Demo</h3>
          <p className="text-sm">This is a demo modal with focus trap, Escape to close, and overlay click to close.</p>
        </Modal>
      </section>

      {/* Theme Toggle */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">{dict.uiKit.themeToggle}</h2>
        <ThemeToggle />
      </section>

      {/* Carousel Buttons */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">CarouselButton</h2>
        <div className="flex gap-4">
          <CarouselButton direction="prev" onClick={() => {}} />
          <CarouselButton direction="next" onClick={() => {}} />
        </div>
      </section>

      {/* UpButton note */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">UpButton</h2>
        <p className="text-sm text-on-surface/60 mb-2">Scroll down to see the UpButton appear in the bottom-right corner.</p>
        <UpButton />
      </section>
    </>
  );
}
